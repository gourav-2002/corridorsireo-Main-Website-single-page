import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ── SMTP Transport ────────────────────────────────────────────────────────────

const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.dobighazam.in',
  port: smtpPort,
  secure: smtpPort === 465, // true only for port 465 SSL; port 587 uses STARTTLS
  auth: {
    user: process.env.SMTP_USER || 'explore@dobighazam.in',
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatFormType(type: string): string {
  const map: Record<string, string> = {
    enquiry: 'General Enquiry',
    'floor-plan': 'Floor Plan Download',
    brochure: 'Brochure Request',
    'site-visit': 'Site Visit Booking',
    'master-plan': 'Master Plan Download',
  };
  return map[type] || type;
}

function nowIST(): string {
  return new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });
}

// ── HTML: Owner Notification Email ────────────────────────────────────────────

function ownerEmailHtml(
  name: string,
  phone: string,
  email: string,
  formType: string,
  config?: string,
  preferredDate?: string,
  preferredTime?: string,
  message?: string,
  pickup?: string
): string {
  const formLabel = formatFormType(formType);
  const timestamp = nowIST();

  const optionalRows = [
    config ? `
      <tr>
        <td class="label">Configuration</td>
        <td class="value">${config}</td>
      </tr>` : '',
    preferredDate ? `
      <tr>
        <td class="label">Preferred Date</td>
        <td class="value">${preferredDate}</td>
      </tr>` : '',
    preferredTime ? `
      <tr>
        <td class="label">Time Slot</td>
        <td class="value">${preferredTime}</td>
      </tr>` : '',
    pickup ? `
      <tr>
        <td class="label">Pickup</td>
        <td class="value">${pickup}</td>
      </tr>` : '',
    message ? `
      <tr>
        <td class="label">Message</td>
        <td class="value" style="font-weight:normal; font-size:13px; color:#4a4a4a;">${message}</td>
      </tr>` : '',
  ].join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New ${formLabel} — IREO THE CORRIDORS</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background-color: #F5F0EB; font-family: Georgia, 'Times New Roman', serif; color: #1C1C1C; }
    .wrapper { max-width: 620px; margin: 32px auto; background: #FFFFFF; border: 1px solid rgba(200,131,58,0.25); }
    .top-bar { height: 4px; background: linear-gradient(90deg, #C8833A 0%, #E8B87E 50%, #C8833A 100%); }
    .header { background: linear-gradient(135deg, #1C1C1C 0%, #2a1f0f 100%); padding: 36px 40px; border-bottom: 1px solid rgba(200,131,58,0.2); }
    .header-label { color: #C8833A; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; font-family: Arial, sans-serif; margin-bottom: 10px; }
    .header-title { color: #F5F0EB; font-size: 24px; font-weight: normal; letter-spacing: 0.5px; }
    .badge { display: inline-block; background: #C8833A; color: #fff; font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; padding: 5px 14px; margin-top: 14px; }
    .body { padding: 36px 40px; background: #FFFFFF; }
    .section-label { color: #C8833A; font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 6px; }
    .section-intro { color: #4a4a4a; font-family: Arial, sans-serif; font-size: 13px; line-height: 1.6; margin-bottom: 24px; }
    .details-table { width: 100%; border-collapse: collapse; }
    .details-table tr { border-bottom: 1px solid rgba(200,131,58,0.15); }
    .details-table tr:last-child { border-bottom: none; }
    .details-table td { padding: 13px 0; vertical-align: top; }
    td.label { color: #888; font-family: Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; width: 140px; padding-top: 15px; }
    td.value { color: #1C1C1C; font-family: Arial, sans-serif; font-size: 15px; font-weight: bold; }
    .footer { background: #FDF8F3; padding: 22px 40px; border-top: 1px solid rgba(200,131,58,0.15); }
    .footer p { color: #888; font-family: Arial, sans-serif; font-size: 11px; line-height: 1.8; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="top-bar"></div>
    <div class="header">
      <p class="header-label">IREO THE CORRIDORS · Do Bigha Zamin</p>
      <h1 class="header-title">New ${formLabel} Lead</h1>
      <span class="badge">Action Required</span>
    </div>
    <div class="body">
      <p class="section-label">Lead Details</p>
      <p class="section-intro">A new prospect has submitted a <strong>${formLabel}</strong> form on the website.</p>
      <table class="details-table">
        <tr>
          <td class="label">Name</td>
          <td class="value">${name}</td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value">${phone}</td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value">${email || 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Form Type</td>
          <td class="value">${formLabel}</td>
        </tr>
        ${optionalRows}
        <tr>
          <td class="label">Received At</td>
          <td class="value" style="font-size:13px; font-weight:normal; color:#A0A0A0;">${timestamp} IST</td>
        </tr>
        <tr>
          <td class="label">Source</td>
          <td class="value" style="font-size:13px; font-weight:normal; color:#A0A0A0;">corridorsireo.com — Quick Lead Modal</td>
        </tr>
      </table>
    </div>
    <div class="footer">
      <p>Do Bigha Zamin &nbsp;·&nbsp; explore@dobighazam.in &nbsp;·&nbsp; +91 98994 80775</p>
      <p>Authorised Channel Partner &nbsp;·&nbsp; IREO THE CORRIDORS &nbsp;·&nbsp; Sector 67A, Gurugram</p>
    </div>
  </div>
</body>
</html>`;
}

// ── HTML: User Thank-You Email ─────────────────────────────────────────────────

function userEmailHtml(name: string, formType: string): string {
  const subjectMap: Record<string, string> = {
    enquiry: 'Our advisor will call you within 30 minutes.',
    'floor-plan': 'Your floor plan is attached — our advisor will be in touch shortly.',
    brochure: 'Your brochure is ready to download — click the button below.',
    'site-visit': 'Your site visit request is confirmed. Our team will call you to finalise the schedule.',
    'master-plan': 'Your master plan is ready to download — click the button below.',
  };
  const subLine = subjectMap[formType] || 'Our advisor will contact you shortly.';

  const appUrl = process.env.APP_URL || 'http://localhost:3000';

  const pdfConfig: Record<string, { file: string; label: string; title: string }> = {
    brochure: {
      file: '/Ireo-corrodor-broucher.pdf',
      label: 'Download Brochure PDF',
      title: 'Ireo The Corridors Brochure',
    },
    'master-plan': {
      file: '/Ireo-corridors-Master-plan.pdf',
      label: 'Download Master Plan PDF',
      title: 'Ireo The Corridors Master Plan',
    },
  };

  const pdf = pdfConfig[formType];
  const brochureBlock = pdf ? `
      <div style="text-align:center; margin: 28px 0;">
        <p style="color:#4a4a4a; font-family:Arial,sans-serif; font-size:14px; margin-bottom:16px;">
          Your copy of the official <strong>${pdf.title}</strong> is ready. Click the button below to download it instantly:
        </p>
        <a href="${appUrl}${pdf.file}" target="_blank"
           style="display:inline-block; background:#C8833A; color:#ffffff; font-family:Arial,sans-serif; font-size:13px; font-weight:bold; letter-spacing:2px; text-transform:uppercase; text-decoration:none; padding:16px 36px; border-radius:2px;">
          ↓ &nbsp; ${pdf.label}
        </a>
        <p style="color:#A0A0A0; font-family:Arial,sans-serif; font-size:11px; margin-top:12px;">
          If the button doesn't work, copy this link into your browser:<br>
          <a href="${appUrl}${pdf.file}" style="color:#C8833A;">${appUrl}${pdf.file}</a>
        </p>
      </div>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You — IREO THE CORRIDORS</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background-color: #F5F0EB; font-family: Georgia, 'Times New Roman', serif; color: #1C1C1C; }
    .wrapper { max-width: 620px; margin: 32px auto; background: #FFFFFF; border: 1px solid rgba(200,131,58,0.2); }
    .top-bar { height: 4px; background: linear-gradient(90deg, #C8833A 0%, #E8B87E 50%, #C8833A 100%); }
    .header { background: linear-gradient(135deg, #1C1C1C 0%, #2a1f0f 100%); padding: 44px 40px; text-align: center; }
    .header-label { color: #C8833A; font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 12px; }
    .header-title { color: #F5F0EB; font-size: 28px; font-weight: normal; letter-spacing: 0.5px; }
    .divider { width: 48px; height: 2px; background: #C8833A; margin: 16px auto 0; }
    .body { padding: 44px 40px; }
    .greeting { color: #1C1C1C; font-size: 20px; font-weight: normal; margin-bottom: 16px; }
    .body p { color: #4a4a4a; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.8; margin-bottom: 14px; }
    .highlight-box { background: #FDF8F3; border: 1px solid rgba(200,131,58,0.2); border-left: 3px solid #C8833A; padding: 20px 24px; margin: 28px 0; }
    .highlight-box p { color: #1C1C1C; font-size: 13px; font-weight: bold; margin-bottom: 10px; }
    .bullet { color: #4a4a4a; font-family: Arial, sans-serif; font-size: 13px; line-height: 2.1; }
    .bullet span { color: #C8833A; font-weight: bold; margin-right: 8px; }
    .signature { color: #C8833A; font-style: italic; font-size: 14px; margin-top: 24px; line-height: 1.8; }
    .contact-strip { background: #FDF8F3; padding: 22px 40px; text-align: center; border-top: 1px solid rgba(200,131,58,0.15); border-bottom: 1px solid rgba(200,131,58,0.15); }
    .contact-strip p { color: #6B6B6B; font-family: Arial, sans-serif; font-size: 12px; line-height: 1.8; }
    .contact-strip a { color: #C8833A; text-decoration: none; font-weight: bold; }
    .footer { padding: 24px 40px; text-align: center; }
    .footer p { color: #A0A0A0; font-family: Arial, sans-serif; font-size: 10px; line-height: 1.8; }
    .footer a { color: #C8833A; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="top-bar"></div>
    <div class="header">
      <p class="header-label">IREO THE CORRIDORS</p>
      <h1 class="header-title">Thank You for Your Interest</h1>
      <div class="divider"></div>
    </div>
    <div class="body">
      <h3 class="greeting">Dear ${name},</h3>
      <p>Thank you for reaching out about <strong>Ireo The Corridors</strong> — Gurugram's finest ready-to-move luxury residential township, presented exclusively by <strong>Do Bigha Zamin</strong>.</p>
      <p>${subLine}</p>
      ${brochureBlock}
      <div class="highlight-box">
        <p>Why Ireo The Corridors stands apart:</p>
        <div class="bullet"><span>→</span> Ready to move in — OC received, zero construction risk</div>
        <div class="bullet"><span>→</span> Only 36 families per acre — lowest density in the segment</div>
        <div class="bullet"><span>→</span> 2-acre clubhouse with 40+ amenities including Olympic pool</div>
        <div class="bullet"><span>→</span> Pre-installed Hot &amp; Cold AC in every room</div>
        <div class="bullet"><span>→</span> Starting at ₹2.40 Cr* for 2 BHK (1,296 sq.ft)</div>
      </div>
      <p>We offer <strong>complimentary chauffeur pickup</strong> from anywhere in Delhi/NCR for private site visits — at no cost to you. Zero brokerage. Best price guaranteed.</p>
      <p class="signature">Warm regards,<br>The Do Bigha Zamin Advisory Team</p>
    </div>
    <div class="contact-strip">
      <p>Questions? Reach us directly: <a href="tel:+919899480775">+91 98994 80775</a> &nbsp;·&nbsp; <a href="mailto:explore@dobighazam.in">explore@dobighazam.in</a></p>
      <p>Available Mon–Sun &nbsp;·&nbsp; 10:00 AM – 7:00 PM IST</p>
    </div>
    <div class="footer">
      <p>Do Bigha Zamin &nbsp;·&nbsp; Authorised Channel Partner for Ireo The Corridors &nbsp;·&nbsp; HRERA 378 of 2017</p>
      <p>This email was sent because you submitted an enquiry on <a href="https://corridorsireo.com">corridorsireo.com</a></p>
    </div>
  </div>
</body>
</html>`;
}

// ── API Endpoint ──────────────────────────────────────────────────────────────

interface EnquiryBody {
  name: string;
  phone: string;
  email: string;
  formType?: string;
  config?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  pickup?: string;
}

app.post('/api/enquiry', async (req, res) => {
  console.log('[server] Received body:', JSON.stringify(req.body));
  const { name, phone, email, formType = 'enquiry', config, preferredDate, preferredTime, message, pickup } = req.body as EnquiryBody;

  if (!name?.trim() || !phone?.trim()) {
    return res.status(400).json({ success: false, error: 'Name and phone are required.' });
  }

  const fromAddress = `"${process.env.SMTP_FROM_NAME || 'IREO The Corridors'}" <${process.env.SMTP_USER || 'explore@dobighazam.in'}>`;
  const ownerEmail = process.env.OWNER_EMAIL || 'explore@dobighazam.in';
  const formLabel = formatFormType(formType);

  try {
    // 1. Notify owner
    await transporter.sendMail({
      from: fromAddress,
      to: ownerEmail,
      subject: `New ${formLabel} Lead — IREO THE CORRIDORS`,
      html: ownerEmailHtml(name.trim(), phone.trim(), email?.trim() || '', formType, config, preferredDate, preferredTime, message, pickup),
    });

    // 2. Thank-you to user (only if email was provided)
    if (email?.trim()) {
      const userSubject = formType === 'brochure'
        ? 'Your Ireo The Corridors Brochure is Here — IREO THE CORRIDORS'
        : formType === 'master-plan'
        ? 'Your Ireo The Corridors Master Plan is Ready — IREO THE CORRIDORS'
        : 'Thank You for Your Interest — IREO THE CORRIDORS';
      await transporter.sendMail({
        from: fromAddress,
        to: email.trim(),
        subject: userSubject,
        html: userEmailHtml(name.trim(), formType),
      });
    }

    res.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[server] Email send error:', message);
    console.error('[server] Full error:', err);
    res.status(500).json({ success: false, error: `Email error: ${message}` });
  }
});

// ── Start ─────────────────────────────────────────────────────────────────────

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`[server] Running on http://localhost:${PORT}`);
  console.log(`[server] SMTP host: ${process.env.SMTP_HOST || 'mail.dobighazam.in'}:${process.env.SMTP_PORT || '465'}`);
  console.log(`[server] SMTP user: ${process.env.SMTP_USER || '(not set)'}`);
  console.log(`[server] SMTP pass: ${process.env.SMTP_PASSWORD ? '(set, length=' + process.env.SMTP_PASSWORD.length + ')' : '(NOT SET)'}`);

  // Test SMTP connection on startup
  transporter.verify((err, _success) => {
    if (err) {
      console.error('[server] SMTP connection FAILED:', err.message);
      console.error('[server] Full SMTP error:', err);
    } else {
      console.log('[server] SMTP connection OK — ready to send emails');
    }
  });
});
