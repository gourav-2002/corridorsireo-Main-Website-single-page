/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Phone, Menu, X, MessageCircle, CheckCircle2, Leaf, Users, Trophy, Gem, Building2, Key, LayoutGrid, Bed, Utensils, ShowerHead, Zap, Waves, Dumbbell, Star, Play, Baby, Trees, Shield, ChevronRight, MapPin, Train, ArrowUpRight, Car, Clock, Mail, TrendingUp, Wallet, ShieldCheck, Calendar, Map as MapIcon, Info, Check, Ban, CircleOff, ArrowRight, Globe, Plus } from 'lucide-react';

const Counter = ({ value, duration = 1.5 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const FloatingActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919899888015';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi I am interested in Ireo The Corridors and would like to know more about pricing and site visit.');
    window.open(`https://wa.me/919899888015?text=${message}`, '_blank');
  };



  return (
    <div className="fixed bottom-[20px] right-[20px] md:bottom-[32px] md:right-[32px] z-[9998] flex flex-col items-end gap-[10px] md:gap-[12px]">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Phone Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="relative group"
            >
              {/* Tooltip (Desktop Only) */}
              <div className="hidden md:block absolute right-[64px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[9999]">
                <div className="bg-[#1C1C1C] border border-[rgba(200,131,58,0.3)] px-[14px] py-[8px] rounded-[2px] flex flex-col items-start relative mr-[8px]">
                  <span className="text-[#F5F0EB] font-sans text-[12px] font-medium leading-tight">+91 9899 888 015</span>
                  <span className="text-[#A0A0A0] text-[10px] leading-tight mt-[2px]">Call Now</span>
                  {/* Arrow */}
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#1C1C1C]"></div>
                </div>
              </div>

              <button
                onClick={handlePhoneClick}
                role="button"
                tabIndex={0}
                aria-label="Call Do Bigha Zamin at +91 9899 888 015"
                onKeyDown={(e) => e.key === 'Enter' && handlePhoneClick()}
                className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] bg-[#C8833A] border border-[rgba(200,131,58,0.6)] rounded-[4px] flex items-center justify-center cursor-pointer shadow-[0_4px_16px_rgba(200,131,58,0.35)] transition-all duration-250 hover:bg-[#E8B87E] hover:shadow-[0_6px_24px_rgba(200,131,58,0.5)] hover:-translate-y-[2px] active:scale-[0.96]"
              >
                <Phone className="text-white w-[22px] h-[22px]" />
              </button>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="relative group"
            >
              {/* Tooltip (Desktop Only) */}
              <div className="hidden md:block absolute right-[64px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[9999]">
                <div className="bg-[#1C1C1C] border border-[rgba(37,211,102,0.3)] px-[14px] py-[8px] rounded-[2px] flex flex-col items-start relative mr-[8px]">
                  <span className="text-[#F5F0EB] font-sans text-[12px] font-medium leading-tight">Chat on WhatsApp</span>
                  <span className="text-[#A0A0A0] text-[10px] leading-tight mt-[2px]">Instant Response</span>
                  {/* Arrow */}
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#1C1C1C]"></div>
                </div>
              </div>

              {/* Pulse Ring */}
              <div className="absolute inset-[-4px] border-2 border-[rgba(37,211,102,0.4)] rounded-[4px] pointer-events-none animate-[whatsapp-pulse_2s_ease-out_infinite] group-hover:[animation-play-state:paused]"></div>

              <button
                onClick={handleWhatsAppClick}
                role="button"
                tabIndex={0}
                aria-label="Chat with Do Bigha Zamin on WhatsApp"
                onKeyDown={(e) => e.key === 'Enter' && handleWhatsAppClick()}
                className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] bg-[#25D366] border border-[rgba(37,211,102,0.5)] rounded-[4px] flex items-center justify-center cursor-pointer shadow-[0_4px_16px_rgba(37,211,102,0.3)] transition-all duration-250 hover:bg-[#20BA5A] hover:shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:-translate-y-[2px] active:scale-[0.96]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.811 11.811 0 001.592 5.97L0 24l6.117-1.605a11.794 11.794 0 005.93 1.598h.005c6.632 0 12.028-5.398 12.03-12.03a11.85 11.85 0 00-3.48-8.505" fill="white" />
                </svg>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Hero Quick Enquiry Form ───────────────────────────────────────────────────
const HeroEnquiryForm = () => {
  const [form, setForm] = React.useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { setError('Name is required.'); return; }
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '').slice(-10))) { setError('Enter a valid 10-digit Indian mobile number.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Enter a valid email address.'); return; }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), phone: form.phone.trim(), email: form.email.trim(), formType: 'enquiry' }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Unable to connect. Please make sure the server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-bg-secondary/90 backdrop-blur-xl border border-accent-copper/30 p-8 rounded-[2px] shadow-2xl">
      <h3 className="font-serif text-2xl text-text-accent mb-6">Request Price Details</h3>
      {success ? (
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <CheckCircle2 size={36} className="text-accent-copper" />
          <p className="text-accent-copper font-bold uppercase tracking-[2px] text-[13px]">Thank You!</p>
          <p className="text-text-secondary text-[13px] leading-relaxed">We've received your enquiry. A confirmation email is on its way. Our advisor will call you within 30 minutes.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest text-text-secondary ml-1">Full Name *</label>
            <input required type="text" placeholder="Enter your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field rounded-[2px]" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest text-text-secondary ml-1">Mobile Number *</label>
            <input required type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-field rounded-[2px]" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest text-text-secondary ml-1">Email Address *</label>
            <input required type="email" placeholder="example@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field rounded-[2px]" />
          </div>
          {error && <p className="text-red-400 text-[12px] italic">{error}</p>}
          <button type="submit" disabled={submitting} className="btn-copper w-full rounded-[2px] mt-2 py-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
            {submitting ? (
              <><motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }} className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />Sending...</>
            ) : 'Get Best Price'}
          </button>
        </form>
      )}
      <div className="mt-6 pt-6 border-t border-accent-copper/10 flex items-center justify-center gap-3">
        <span className="text-xs text-text-secondary">Or chat instantly</span>
        <a href="https://wa.me/919899888015" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent-copper hover:text-accent-gold transition-colors">
          <MessageCircle size={18} />
          <span className="text-sm font-medium">+91 9899 888 015</span>
        </a>
      </div>
    </div>
  );
};

// ── Brochure Section Form ─────────────────────────────────────────────────────
const BrochureForm = () => {
  const inputCls = "w-full bg-[#FFFFFF] border border-[rgba(200,131,58,0.25)] text-[#0A0A0A] text-[14px] placeholder:text-[#6B6B6B] p-[14px_16px] rounded-[2px] outline-none focus:border-[#C8833A] focus:shadow-[0_0_0_3px_rgba(200,131,58,0.1)] transition-all duration-200";
  const labelCls = "text-[#C8833A] font-sans text-[10px] uppercase tracking-[2px] font-semibold block mb-[6px]";

  const [form, setForm] = React.useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { setError('Name is required.'); return; }
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '').slice(-10))) { setError('Enter a valid 10-digit Indian mobile number.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Enter a valid email address.'); return; }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), phone: form.phone.trim(), email: form.email.trim(), formType: 'brochure' }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Unable to connect. Please make sure the server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[rgba(200,131,58,0.1)] border border-[rgba(200,131,58,0.3)] flex items-center justify-center">
          <CheckCircle2 size={32} className="text-[#C8833A]" />
        </div>
        <h3 className="font-serif text-[22px] text-[#0A0A0A]">Brochure Sent!</h3>
        <p className="text-[#6B6B6B] font-sans text-[14px] leading-relaxed max-w-[320px]">
          The official <strong>Ireo The Corridors brochure</strong> has been sent to <strong>{form.email}</strong>. Please check your inbox (and spam folder if needed). Our advisor will also be in touch shortly.
        </p>
        <a
          href="/Ireo-corrodor-broucher.pdf"
          download
          className="mt-2 inline-flex items-center gap-2 bg-[#C8833A] text-white font-sans text-[12px] uppercase tracking-[2px] font-semibold py-[14px] px-[28px] rounded-[2px] hover:bg-[#E8B87E] hover:text-[#0A0A0A] transition-colors duration-300"
        >
          <ArrowRight size={14} /> Download PDF Now
        </a>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-serif text-[26px] text-[#0A0A0A] mb-[6px]">Unlock Full Brochure Access</h3>
      <p className="font-sans text-[#6B6B6B] text-[14px] mb-[28px]">
        Enter your details — we'll send the PDF directly to your email.
      </p>
      <div className="w-full h-[1px] bg-[rgba(200,131,58,0.3)] mb-[28px]"></div>
      <form onSubmit={handleSubmit} className="flex flex-col" noValidate>
        <div className="mb-[16px]">
          <label className={labelCls}>FULL NAME *</label>
          <input type="text" placeholder="Your full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
        </div>
        <div className="mb-[16px]">
          <label className={labelCls}>PHONE NUMBER *</label>
          <input type="tel" placeholder="+91 XXXXXXXXXX" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
        </div>
        <div className="mb-[24px]">
          <label className={labelCls}>EMAIL ADDRESS *</label>
          <input type="email" placeholder="example@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
        </div>
        {error && <p className="text-red-500 font-sans text-[12px] italic mb-[12px]">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#C8833A] text-white font-sans text-[13px] uppercase tracking-[2px] font-semibold py-[16px] rounded-[2px] flex items-center justify-center gap-[10px] hover:bg-[#E8B87E] hover:text-[#0A0A0A] transition-colors duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <><motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }} className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> Sending...</>
          ) : (
            <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> Send Brochure to My Email</>
          )}
        </button>
      </form>
    </>
  );
};

const cards = [
  {
    icon: <CircleOff size={20} className="text-[#C8833A]" />,
    num: "01",
    title: "Zero Brokerage from Buyers",
    desc: "Our commission is paid entirely by the developer. You pay exactly the same price as going directly to the builder, with full advisory support.",
  },
  {
    icon: <TrendingUp size={20} className="text-[#C8833A]" />,
    num: "02",
    title: "Direct Developer Pricing",
    desc: "As an officially authorised channel partner, we have direct access to the developer's pricing. No inflated quotes, no hidden margins.",
  },
  {
    icon: <Users size={20} className="text-[#C8833A]" />,
    num: "03",
    title: "End-to-End Support",
    desc: "We don't disappear after the booking. Our team walks with you through every step — from floor plan selection to final key handover.",
  },
  {
    icon: <Building2 size={20} className="text-[#C8833A]" />,
    num: "04",
    title: "Home Loan Assistance",
    desc: "We work with SBI, HDFC, ICICI, and more to get you the best loan rates. Our desk handles all paperwork on your behalf at zero extra charge.",
  },
  {
    icon: <Car size={20} className="text-[#C8833A]" />,
    num: "05",
    title: "Complimentary Site Visit",
    desc: "We arrange a private, expert-led tour of the full 37.5-acre township. Complimentary luxury pickup and drop from anywhere in Delhi/NCR included.",
  },
  {
    icon: <ShieldCheck size={20} className="text-[#C8833A]" />,
    num: "06",
    title: "RERA Verified Compliance",
    desc: "Do Bigha Zamin is a RERA-registered firm. We operate with complete legal compliance and full transparency at every step.",
  },
];

const distanceData = {
  "Education": [
    { destination: "Lovely Public School", distance: "On-site (within campus)" },
    { destination: "DPS International, Sector 67A", distance: "~0.050 km — walking distance" },
    { destination: "Beacon School", distance: "~0.4 km" },
    { destination: "St. Xavier's High School, Sector 49", distance: "~3 km" },
    { destination: "Shalom Presidency School", distance: "~6.5 km" },
    { destination: "GD Goenka World School", distance: "~7.7 km" },
    { destination: "Shiv Nadar School", distance: "~14 km" },
    { destination: "Proposed 215-acre University Campus, Sector 68", distance: "Adjacent" },
  ],
  "Healthcare": [
    { destination: "On-site Medical Facility", distance: "Within campus" },
    { destination: "Kamal Hospital", distance: "Nearby" },
    { destination: "Marengo Asia Hospital", distance: "~6.3 km" },
    { destination: "Artemis Hospital", distance: "~7.5 km" },
    { destination: "Medanta — The Medicity", distance: "~11 km" },
    { destination: "Fortis Hospital", distance: "~11 km" },
    { destination: "Paras Hospital", distance: "~12 km" },
  ],
  "Shopping": [
    { destination: "Retail Convenience Store", distance: "On-site (within campus)" },
    { destination: "AIPL Joy Street", distance: "~1.9 km" },
    { destination: "WorldMark Gurgaon", distance: "~2.1 km" },
    { destination: "AIPL Joy Central", distance: "~2.4 km" },
    { destination: "Airia Mall", distance: "~3.4 km" },
    { destination: "Ambience Mall", distance: "~18 km" },
  ],
  "Business Hubs": [
    { destination: "Lankmark Cybermark", distance: "~1.8 km" },
    { destination: "WorldMark Offices", distance: "~1.8 km" },
    { destination: "AIPL Offices", distance: "~2.3 km" },
    { destination: "Grand View Tower", distance: "~5.4 km" },
    { destination: "JMD Megapolis", distance: "~10 km" },
    { destination: "DLF Cyber City / Horizon Centre", distance: "~10 km" },
    { destination: "Vipul Trade Centre", distance: "~10 mins" },
    { destination: "Cyber City (Gurugram CBD)", distance: "~20 mins" },
  ],
  "Hotels": [
    { destination: "Hilton", distance: "~2.3 km" },
    { destination: "Grand Hyatt", distance: "~5.1 km" },
    { destination: "Radisson Sohna", distance: "~5 km" },
    { destination: "DoubleTree Hilton", distance: "~6.4 km" },
    { destination: "Le Meridien", distance: "~15 km" },
  ],
  "Transport": [
    { destination: "Sohna Elevated Road", distance: "0 mins — direct access" },
    { destination: "Gurgaon Railway Station", distance: "~15 mins" },
    { destination: "Rapid Metro Station", distance: "~15 mins" },
    { destination: "HUDA City Centre Metro (Yellow Line)", distance: "~25 mins" },
    { destination: "IGI Airport", distance: "~40 mins" },
  ],
};

const faqData = [
  {
    number: "01",
    question: "Is Ireo The Corridors ready to move in?",
    answer: "Yes. Ireo The Corridors is a fully ready-to-move project. The Occupancy Certificate (OC) has already been received from the relevant authorities, and possession can be handed over within days of completing the payment and documentation process. There is zero construction risk and no waiting period."
  },
  {
    number: "02",
    question: "What is the starting price of Ireo The Corridors?",
    answer: "The starting price for a 2 BHK apartment (1,296 sq.ft Super BUA) is approximately ₹2.40–2.47 Cr* at a BSP of ₹19,000 per sq.ft. Please note that this is indicative pricing — PLC, registration, GST, IFMS, and other charges are extra. Contact Do Bigha Zamin for current availability and the best offer applicable at the time of enquiry."
  },
  {
    number: "03",
    question: "What is the RERA registration number for Ireo The Corridors?",
    answer: "Ireo The Corridors is registered under the Haryana Real Estate Regulatory Authority (HRERA):",
    bullets: [
      "Phase 1: HRERA 378 of 2017 (dated 07.12.2017)",
      "Phase 2: HRERA 377 of 2017 (dated 07.12.2017)",
      "You can verify this at hareraggm.gov.in"
    ]
  },
  {
    number: "04",
    question: "Who is Do Bigha Zamin and what is their role?",
    answer: "Do Bigha Zamin is an authorised channel partner for Ireo The Corridors, operating through the website corridorsireo.com. We are a RERA-registered real estate advisory firm based in Gurgaon. We assist buyers with floor plan selection, pricing negotiation, site visits, home loan assistance, documentation, and possession formalities — all at no additional charge to the buyer. We work directly with the Ireo developer team and provide full transparency at every step."
  },
  {
    number: "05",
    question: "What are the available flat configurations?",
    answer: "Ireo The Corridors offers four unit configurations:",
    bullets: [
      "2 BHK (1,296–1,300 sq.ft)",
      "2 BHK + Study (1,484–1,594 sq.ft)",
      "3 BHK (1,727 sq.ft)",
      "3 BHK + Servant Room (1,893–2,650 sq.ft)"
    ]
  },
  {
    number: "06",
    question: "What amenities are available at Ireo The Corridors?",
    answer: "The project features a 2-acre, two-storied clubhouse with 40+ amenities including an Olympic-size swimming pool, air-conditioned gymnasium, tennis courts, squash courts, basketball court, football field, spa, banquet hall (500+ capacity), fine dining restaurant, café, sports bar, mini theatre, billiards room, library, children's play zones, crèche, 2 km jogging trail, yoga studio, and much more. Please refer to the full amenities section on this page for the complete list."
  },
  {
    number: "07",
    question: "Is home loan available for Ireo The Corridors?",
    answer: "Yes. Ireo The Corridors is pre-approved for home loans with all major banks including SBI, HDFC, ICICI, Axis Bank, Kotak Mahindra, PNB, and others. As highlighted in many Ireo Corridors review insights, Do Bigha Zamin provides end-to-end home loan assistance as part of our channel partner service — at no extra cost."
  },
  {
    number: "08",
    question: "What is the residential density at Ireo The Corridors?",
    answer: "Ireo The Corridors has one of the lowest residential densities in the Golf Course Extension Road segment — just 36 families per acre. The segment average for competing projects is 100+ families per acre. This translates into significantly more open space, privacy, and a quieter living environment for residents, which is often highlighted in Ireo Corridors review discussions."
  },
  {
    number: "09",
    question: "How far is Ireo The Corridors from IGI Airport?",
    answer: "Ireo The Corridors is approximately 40–45 minutes from Indira Gandhi International Airport (IGI Airport) via the NH-48 expressway. With the Sohna Elevated Road now operational, the commute has become significantly faster and more predictable."
  },
  {
    number: "10",
    question: "What makes Ireo The Corridors different from other apartments in Gurgaon?",
    answer: "Several factors set The Corridors apart:",
    bullets: [
      "Ultra-low density of just 36 families/acre vs 100+ for most competitors",
      "60% of total land dedicated to open greens (10 acres)",
      "2-acre, two-storied clubhouse — the largest in the segment",
      "Pre-installed Hot & Cold AC in all rooms — included in the price",
      "Fully ready to move — OC received, zero risk",
      "On-site school, hospital, post office, and retail — a self-sufficient township",
      "Institutional-grade developer: Ireo Group with US $2B PE fund backing"
    ]
  },
  {
    number: "11",
    question: "How can I schedule a site visit?",
    answer: "Simply contact Do Bigha Zamin — the authorised channel partner for Ireo The Corridors — at +91 9899 888 015 or fill out the enquiry form on this page. We arrange complimentary chauffeur pickup and drop from anywhere in Delhi/NCR, a private expert-led walkthrough of the clubhouse and apartments, and a live pricing discussion — all at no cost to you."
  },
  {
    number: "12",
    question: "Is there a brokerage fee for buying through Do Bigha Zamin?",
    answer: "No. Do Bigha Zamin charges zero brokerage from buyers. As an authorised channel partner, our commission is paid by the developer. You get the same price as going direct — with the added benefit of our full advisory support, loan assistance, and end-to-end buying assistance."
  },
  {
    number: "13",
    question: "What is the payment plan for Ireo The Corridors?",
    answer: "The Ready-to-Move (RTM) Plan is as follows: 10% at booking, 15% within 15 days of booking, and 75% at the time of possession — along with registration charges, IFMS, and other applicable costs. Contact Do Bigha Zamin for a customised payment schedule and any current developer offers."
  },
  {
    number: "14",
    question: "Are ground floor apartments available? Do they have private gardens?",
    answer: "Yes, select ground floor apartments at Ireo The Corridors come with private garden areas that overlook the landscaped greens of the township. Contact Do Bigha Zamin for current availability of ground floor units."
  }
];

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const previousValue = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const duration = 1200; // Longer duration for better effect
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Use easeOutExpo for smoother finish
      const easeOutExpo = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      const current = Math.floor(easeOutExpo(progress) * (value - startValue) + startValue);

      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        previousValue.current = value;
      }
    };

    window.requestAnimationFrame(step);
  }, [value, isInView]);

  return <span ref={ref}>{displayValue.toLocaleString('en-IN')}</span>;
}

const highlights = [
  {
    number: "01",
    title: "60% Open Green Spaces — 10 Acres of Interconnected Greens",
    body: "Breathe easy in a township where over 60% of the total land is dedicated to open greens. The Corridors features 10 acres of interconnected, thoughtfully landscaped gardens, parks, courtyards, and nature trails — all right outside your door. A dedicated 2 km fitness trail with distance markers and fitness stations winds through this green belt, offering a daily jogging and cycling experience that no gym can replicate. Ground floor apartments even come with private gardens overlooking the green zone.",
    icon: <Leaf size={32} />
  },
  {
    number: "02",
    title: "Just 36 Families Per Acre — The Lowest Density in the Segment",
    body: "Privacy is one of the rarest luxuries in modern Gurgaon. At Ireo Corridors Sector 67 Gurgaon, it’s standard. With one of the lowest residential densities in the city — just 36 families per acre — residents enjoy genuine elbow room, quiet evenings, and a sense of exclusivity that no high-rise cluster can match. Compared to the segment average of 100+ families per acre, the difference becomes immediately apparent.",
    icon: <Users size={32} />
  },
  {
    number: "03",
    title: "The Largest Clubhouse in the Segment — 2 Acres, 2 Storeys, 40+ Amenities",
    body: "The two-storied, 2-acre clubhouse is the social and recreational heart of the community. Packed with over 40 premium amenities — including an Olympic-size swimming pool, fully-equipped AC gymnasium, squash and tennis courts, a plush spa, fine dining restaurant, sports bar, café, banquet hall for 500+, mini theatre, billiards room, library, business centre, and dedicated children's zones — this isn't a clubhouse, it's a resort you get to call home. Every single day.",
    icon: <Trophy size={32} />
  },
  {
    number: "04",
    title: "Premium Finishes Included — Hot & Cold AC in Every Room, Starting ₹2.40 Cr",
    body: "Every apartment at Ireo The Corridors comes pre-installed with a signature Hot & Cold AC system in all rooms — a feature typically reserved for significantly more expensive projects. Add to that: laminated wooden flooring in the master bedroom, imported marble flooring in the living and dining area, modular kitchen with hob and chimney, granite countertops, premium sanitary ware (Kohler/Grohe), glass shower partition in the master bathroom, built-in wardrobe niches, and Legrand/Schneider modular switches. This is not standard delivery — it's an upgraded home right from day one.",
    icon: <Gem size={32} />
  },
  {
    number: "05",
    title: "A City Within a City — School, Hospital, Retail, All on Campus",
    body: "The Ireo Corridors is one of the very few residential communities in Gurgaon that is genuinely self-sufficient. Within the campus, residents have access to a full-fledged high school (Lovely Public School, on-site), a hospital/medical facility, a crèche, a post office, and a retail convenience store. DPS International is just a 5-minute drive away, while Airia Mall is also within 5 minutes. WorldMark Offices, AIPL Joy Street, and Landmark Cyberpark are all located within 2 km.",
    icon: <Building2 size={32} />
  },
  {
    number: "06",
    title: "OC Received · Immediate Possession · Zero Construction Risk",
    body: "Unlike under-construction projects that come with the risk of delays, cost overruns, and uncertain timelines, Ireo The Corridors is fully ready to move in, with the Occupancy Certificate (OC) already received from the authorities. This means you can take possession and move in within days of completing the documentation. For investors, this also means the ability to immediately put the property on rent — rental income starts from day one, not two years from now, making it an ideal option for those looking for 3 bhk in gurgaon ready to move.",
    icon: <Key size={32} />
  }
];

const configurations = [
  {
    label: "2 BHK",
    title: "2 BHK",
    price: "₹2.40 Cr*",
    superArea: "1,296 sq.ft",
    carpetArea: "842 sq.ft",
    rooms: "2 Bedrooms, 2 Bathrooms, 3 Balconies",
    idealFor: "Perfect for young couples or small families seeking a modern, efficient home with premium finishes — ideal for those looking for 2 bhk in gurgaon ready to move options.",
    features: ["Master Bedroom with En-suite", "Spacious Living & Dining", "Modular Kitchen", "Hot & Cold ACs"],
    image: "/2bhk-luxury-apartment.webp",
    pdfUrl: "/ireo-2bhk-floor-plan.pdf"
  },
  {
    label: "2 BHK + Study",
    title: "2 BHK + Study",
    price: "₹2.85 Cr*",
    superArea: "1,540 sq.ft",
    carpetArea: "1,001 sq.ft",
    rooms: "2 Bedrooms, 1 Study, 2 Bathrooms, 3 Balconies",
    idealFor: "Ideal for professionals working from home or growing families needing that extra flexible space.",
    features: ["Dedicated Study/Office", "Large Master Suite", "Utility Area", "Premium Marble Flooring"],
    image: "/2bhk-study-premium.webp",
    pdfUrl: "/ireo-2bhk-study-floor-plan.pdf"
  },
  {
    label: "3 BHK",
    title: "3 BHK",
    price: "₹3.95 Cr*",
    superArea: "2,140 sq.ft",
    carpetArea: "1,391 sq.ft",
    rooms: "3 Bedrooms, 3 Bathrooms, 4 Balconies",
    idealFor: "Designed for families who value space, luxury, and a sense of openness in every room, these 3BHK flats in Gurgaon offer the perfect blend of comfort and modern living.",
    features: ["Three Large Bedrooms", "Expansive Living Area", "Servant Room with Toilet", "Wrap-around Balconies"],
    image: "/3bhk-grand-residence.webp",
    pdfUrl: "/ireo-3bhk-floor-plan.pdf"
  },
  {
    label: "3 BHK + Servant",
    title: "3 BHK + Servant",
    price: "₹5.04 Cr*",
    superArea: "2,650 sq.ft",
    carpetArea: "1,722 sq.ft",
    rooms: "3 Bedrooms, 1 Servant Room, 4 Bathrooms, 5 Balconies",
    idealFor: "The pinnacle of luxury at The Corridors, these residences offer maximum space and privacy for discerning families seeking 3bhk flats in gurgaon ready to move.",
    features: ["Ultra-spacious Layout", "Separate Servant Entrance", "Gourmet Kitchen", "Panoramic Views"],
    image: "/3bhk-servant-ultra.webp",
    pdfUrl: "/ireo-3bhk-servant-floor-plan.pdf"
  }
];

function HighlightCard({ item, index }: { item: any; index: number; key?: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [index]);

  return (
    <div
      ref={domRef}
      className={`bg-bg-secondary border border-accent-copper/20 p-10 rounded-[4px] transition-all duration-500 ease-out hover:border-accent-copper/60 hover:shadow-[0_0_20px_rgba(200,131,58,0.12)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
        }`}
    >
      <div className="text-accent-copper mb-6">
        {item.icon}
      </div>
      <span className="text-accent-copper text-[11px] tracking-[3px] uppercase font-medium mb-2 block">
        {item.number}
      </span>
      <h3 className="font-serif text-text-accent text-[20px] font-semibold leading-[1.3] mb-3">
        {item.title}
      </h3>
      <div className="w-10 h-[2px] bg-accent-copper mb-5"></div>
      <p className="text-text-secondary text-[14px] leading-[1.8]">
        {item.body}
      </p>
    </div>
  );
}

const AnimatedStat = ({ value, isFloat = false, duration = 1.8 }: { value: number; isFloat?: boolean; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

      const easeOutExpo = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      const current = easeOutExpo(progress) * value;

      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{isFloat ? displayValue.toFixed(1) : Math.floor(displayValue)}</span>;
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeConfigIdx, setActiveConfigIdx] = useState(0);
  const [activeAmenityTab, setActiveAmenityTab] = useState("All Amenities");
  const [activeDistanceTab, setActiveDistanceTab] = useState<keyof typeof distanceData>("Education");

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(150); // In Lakhs
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [pickupRequired, setPickupRequired] = useState(true);
  const [siteVisitForm, setSiteVisitForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    date: '',
    timeSlot: '',
    configuration: ''
  });
  const [siteVisitSubmitting, setSiteVisitSubmitting] = useState(false);
  const [siteVisitSuccess, setSiteVisitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  // Enquiry Form State
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    configuration: 'Not Sure',
    preferredTime: 'Anytime',
    message: ''
  });
  const [enquiryErrors, setEnquiryErrors] = useState<string[]>([]);

  // ── Quick Lead Modal State ───────────────────────────────────────────────────
  type ModalType = 'enquiry' | 'floor-plan' | 'brochure' | 'site-visit' | 'master-plan' | null;
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [pendingPdfUrl, setPendingPdfUrl] = useState('');
  const [modalForm, setModalForm] = useState({ name: '', phone: '', email: '', config: '', preferredDate: '' });
  const [modalErrors, setModalErrors] = useState<{ [k: string]: string }>({});
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [k: string]: string } = {};
    if (!modalForm.name.trim()) errors.name = 'Name is required';
    if (!modalForm.phone.trim()) errors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(modalForm.phone.replace(/\D/g, '').slice(-10))) errors.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!modalForm.email.trim()) errors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(modalForm.email)) errors.email = 'Please enter a valid email address';
    setModalErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setModalSubmitting(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: modalForm.name.trim(),
          phone: modalForm.phone.trim(),
          email: modalForm.email.trim(),
          formType: activeModal || 'enquiry',
          config: modalForm.config || undefined,
          preferredDate: modalForm.preferredDate || undefined,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setModalSuccess(true);
        if (activeModal === 'floor-plan' && pendingPdfUrl) {
          setTimeout(() => window.open(pendingPdfUrl, '_blank'), 500);
        }
        setTimeout(() => {
          setActiveModal(null);
          setModalSuccess(false);
          setModalForm({ name: '', phone: '', email: '', config: '', preferredDate: '' });
          setPendingPdfUrl('');
        }, 4000);
      } else {
        setModalErrors({ submit: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setModalErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setModalSubmitting(false);
    }
  };

  const openModal = (type: ModalType, pdfUrl = '') => {
    setActiveModal(type);
    setPendingPdfUrl(pdfUrl);
    setModalForm({ name: '', phone: '', email: '', config: '', preferredDate: '' });
    setModalErrors({});
    setModalSuccess(false);
    setModalSubmitting(false);
  };

  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];
    if (!enquiryForm.fullName) errors.push('fullName');
    if (!enquiryForm.mobile || !/^[6-9]\d{9}$/.test(enquiryForm.mobile.replace(/\D/g, '').slice(-10))) errors.push('mobile');
    if (enquiryForm.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiryForm.email)) errors.push('email');
    setEnquiryErrors(errors);
    if (errors.length > 0) return;

    setEnquirySubmitting(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: enquiryForm.fullName.trim(),
          phone: enquiryForm.mobile.trim(),
          email: enquiryForm.email.trim(),
          formType: 'enquiry',
          config: enquiryForm.configuration !== 'Not Sure' ? enquiryForm.configuration : undefined,
          preferredTime: enquiryForm.preferredTime,
          message: enquiryForm.message.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setEnquirySuccess(true);
        setEnquiryForm({ fullName: '', mobile: '', email: '', configuration: 'Not Sure', preferredTime: 'Anytime', message: '' });
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please make sure the server is running (npm run server) and try again.');
    } finally {
      setEnquirySubmitting(false);
    }
  };

  // FAQ State
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = [];
    if (!siteVisitForm.fullName) errors.push('fullName');
    if (!siteVisitForm.mobile || !/^[6-9]\d{9}$/.test(siteVisitForm.mobile.replace(/\D/g, '').slice(-10))) errors.push('mobile');
    if (siteVisitForm.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(siteVisitForm.email)) errors.push('email');
    if (!siteVisitForm.date) errors.push('date');
    if (!siteVisitForm.timeSlot) errors.push('timeSlot');

    setFormErrors(errors);
    if (errors.length > 0) return;

    setSiteVisitSubmitting(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: siteVisitForm.fullName.trim(),
          phone: siteVisitForm.mobile.trim(),
          email: siteVisitForm.email.trim(),
          formType: 'site-visit',
          preferredDate: siteVisitForm.date,
          preferredTime: siteVisitForm.timeSlot,
          pickup: pickupRequired ? 'Yes — Pickup Needed' : 'No — I\'ll Drive',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSiteVisitSuccess(true);
        setSiteVisitForm({ fullName: '', mobile: '', email: '', date: '', timeSlot: '', configuration: '' });
      } else {
        setFormErrors(['submit']);
      }
    } catch {
      setFormErrors(['submit']);
    } finally {
      setSiteVisitSubmitting(false);
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  useEffect(() => {
    const P = loanAmount * 100000;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) {
      setEmi(Math.round(P / n));
    } else {
      const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(Math.round(emiValue));
    }
  }, [loanAmount, interestRate, tenure]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['overview', 'floor-plans', 'amenities', 'gallery', 'location', 'investment', 'developer', 'rera', 'faq', 'authorised-partner'];
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A] font-sans selection:bg-[#C8833A] selection:text-white">
      {/* SECTION 1 — NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${isScrolled
          ? 'bg-[#1C1C1C]/97 backdrop-blur-sm border-b border-accent-copper/30'
          : 'bg-[#1C1C1C] border-b border-accent-copper/20'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12 h-[85px] flex items-center justify-between relative">
          {/* LEFT ZONE: Logo block */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col group shrink-0"
          >
            <div className="flex items-center gap-0">
              <span className="font-serif text-[18px] lg:text-[20px] text-white tracking-tight leading-none whitespace-nowrap">THE CORRIDORS</span>
              <span className="mx-1 lg:mx-2 text-accent-copper text-[18px] lg:text-[20px] font-light leading-none">|</span>
              <span className="text-accent-copper text-[18px] mr-6 lg:text-[20px] font-light leading-none tracking-wide">ireo</span>
            </div>
            <span className="text-[8px] lg:text-[9px] text-white/70 uppercase tracking-[1.5px] mt-1 font-medium group-hover:text-accent-copper transition-colors whitespace-nowrap">Presented by Do Bigha Zamin</span>
          </a>

          {/* CENTER ZONE: Navigation Links (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-x-3 xl:gap-x-5">
            {[
              { name: 'Overview', id: 'overview' },
              { name: 'Floor Plans', id: 'floor-plans' },
              { name: 'Amenities', id: 'amenities' },
              { name: 'Gallery', id: 'gallery' },
              { name: 'Location', id: 'location' },
              { name: 'Investment', id: 'investment' },
              { name: 'Developer', id: 'developer' },
              { name: 'FAQ', id: 'faq' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-[10px] xl:text-[12px] uppercase tracking-[1px] font-medium transition-all duration-300 relative py-2 whitespace-nowrap ${activeSection === link.id ? 'text-accent-copper' : 'text-text-secondary hover:text-white'
                  }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-copper"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT ZONE: Contact & CTA */}
          <div className="flex items-center gap-3 lg:gap-5 shrink-0">
            <a
              href="tel:+919899888015"
              className="hidden xl:flex items-center gap-2 text-ivory hover:text-accent-copper transition-all duration-300 group whitespace-nowrap"
            >
              <Phone size={14} className="text-accent-copper group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-[13px] text-accent-copper font-semibold tracking-wide whitespace-nowrap">+91 9899 888 015</span>
            </a>

            <button
              onClick={() => openModal('enquiry')}
              className="hidden sm:block bg-accent-copper text-white px-5 lg:px-7 py-3 text-[11px] lg:text-[11px] uppercase tracking-[1.5px] font-bold rounded-[2px] hover:bg-accent-gold transition-all duration-300 shadow-[0_4px_15px_rgba(200,131,58,0.2)] whitespace-nowrap shrink-0"
            >
              Enquire Now
            </button>

            {/* Mobile/Tablet Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-accent-copper"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-[2px] bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-[2px] bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-[2px] bg-current"
              />
            </button>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
            <motion.div
              className="h-full bg-accent-copper"
              style={{ width: `${scrollProgress}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />
          </div>
        </div>

        {/* Mobile/Tablet Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
              />

              {/* Drawer Content */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="lg:hidden absolute top-[72px] left-0 w-full bg-[#1C1C1C] border-b border-accent-copper/30 z-[9999] overflow-hidden"
              >
                <div className="px-6 py-10 flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    {[
                      { name: 'Overview', id: 'overview' },
                      { name: 'Floor Plans', id: 'floor-plans' },
                      { name: 'Amenities', id: 'amenities' },
                      { name: 'Gallery', id: 'gallery' },
                      { name: 'Location', id: 'location' },
                      { name: 'Investment', id: 'investment' },
                      { name: 'Developer', id: 'developer' },
                      { name: 'FAQ', id: 'faq' }
                    ].map((link, idx) => (
                      <motion.button
                        key={link.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => scrollToSection(link.id)}
                        className={`text-[16px] uppercase tracking-[3px] font-bold text-left py-2 border-b border-white/5 ${activeSection === link.id ? 'text-accent-copper' : 'text-white'
                          }`}
                      >
                        {link.name}
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-6 pt-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-text-secondary text-[10px] uppercase tracking-[2px]">Direct Contact</span>
                      <a href="tel:+919899888015" className="text-white text-[18px] font-bold tracking-wider flex items-center gap-3">
                        <Phone size={18} className="text-accent-copper" />
                        +91 9899 888 015
                      </a>
                    </div>

                    <button
                      onClick={() => openModal('enquiry')}
                      className="w-full bg-accent-copper text-white py-5 text-[14px] uppercase tracking-[3px] font-bold rounded-[2px] shadow-[0_4px_20px_rgba(200,131,58,0.3)]"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* SECTION 2 — HERO */}

      <section className="relative w-full overflow-hidden flex flex-col">

  {/* Background */}
  <div className="absolute inset-0 z-0">
    <img
      src="/ireo-hero.webp"
      alt="Luxury High Rise"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* ================= MOBILE HERO ================= */}
  <div className="relative z-10 block lg:hidden px-4 pt-24 pb-10 bg-[#f8fafc]">

    <div className="flex flex-col gap-5">

      {/* Label */}
      <p className="text-[10px] tracking-[2px] uppercase text-green-700 bg-green-100 w-fit px-3 py-1 rounded-full font-medium mt-4">
        IREO CORRIDORS · SECTOR 67A · GURGAON
      </p>

      {/* Heading */}
      <h1 className="text-[26px] leading-[1.2] font-bold text-gray-900">
        Ireo Corridors Gurgaon Ready to Move Luxury Apartments
      </h1>

      {/* Image */}
<div className="w-full mt-2 rounded-xl border border-accent-copper p-[4px]">
  <img
    src="/ireo-hero.webp"
    alt="Ireo Corridors Gurgaon"
    className="w-full h-[200px] object-cover rounded-lg"
  />
</div>

      {/* Sub */}
      <p className="text-[14px] text-gray-600">
        Discover Ireo Corridors Sector 67A Gurgaon, a thoughtfully planned township offering ready to move apartments in Gurgaon. Located on Golf Course Extension Road, this premium project features spacious 2 BHK and 3 BHK homes, modern amenities, and excellent resale value.
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {['Ready to Move', 'OC Received', '37.5 Acres', 'HRERA Verified'].map((tag) => (
          <span
            key={tag}
            className="text-[12px] text-white/80 bg-accent-copper border border-gray-200 px-3 py-1 rounded-full shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Form Card */}
      <div className="rounded-2xl p-4">
        <HeroEnquiryForm />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button
  onClick={() => scrollToSection('site-visit')}
  className="btn-copper w-full rounded-[2px] mt-2 py-4 flex items-center justify-center gap-2"
>
  Schedule Site Visit →
</button>

        <button
          onClick={() => scrollToSection('brochure')}
          className="w-full border border-gray-300 text-gray-800 py-4 rounded-xl text-[14px] font-semibold bg-white"
        >
          Download Brochure
        </button>
      </div>

    </div>
  </div>

  {/* ================= DESKTOP HERO ================= */}
  <div className="relative z-10 hidden lg:flex flex-grow items-center pt-24">

    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="grid grid-cols-[60%_40%] gap-12 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <span className="section-label">
            IREO CORRIDORS · SECTOR 67A GURGAON · GOLF COURSE EXTENSION ROAD
          </span>

          <h1 className="font-serif text-[50px] text-white leading-[1.1] font-bold">
            Ireo Corridors Gurgaon
            Ready to Move Luxury Apartments
          </h1>

          <p className="font-serif italic text-xl text-yellow-400">
            Premium 2 & 3 BHK Apartments in Sector 67A Gurgaon
          </p>

          <p className="text-white/90 max-w-xl">
            Discover Ireo Corridors Sector 67A Gurgaon, a thoughtfully planned township offering ready to move apartments in Gurgaon. Located on Golf Course Extension Road, this premium project features spacious 2 BHK and 3 BHK homes, modern amenities, and excellent resale value.
          </p>

          <div className="flex gap-4 mt-4">
            <button onClick={() => scrollToSection('site-visit')} className="btn-copper">
              Schedule a Site Visit
            </button>

            <button onClick={() => scrollToSection('brochure')} className="btn-outline-copper">
              Download Brochure
            </button>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div>
          <HeroEnquiryForm />
        </div>

      </div>
    </div>
  </div>

  {/* ================= BOTTOM BAR ================= */}
  <div className="relative z-10 bg-black/80 border-t border-white/20 mt-auto hidden lg:block">
    <div className="max-w-7xl mx-auto grid grid-cols-6 divide-x divide-white/20">
      {[
        { value: '₹2.40 Cr*', label: 'Starting Price' },
        { value: 'Ready to Move', label: 'Status' },
        { value: '37.5 Acres', label: 'Total Area' },
        { value: '27 Towers', label: 'Development' },
        { value: '₹19,000/sq.ft', label: 'Avg. Price' },
        { value: 'HRERA Verified', label: 'Compliance' }
      ].map((stat, idx) => (
        <div key={idx} className="px-6 py-6 text-center">
          <span className="text-yellow-400 text-sm">{stat.value}</span>
          <div className="text-white/70 text-[10px] uppercase tracking-[2px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>

</section>
      

      {/* SECTION 1 — PROBLEM-SOLUTION SECTION */}
      <section className="relative py-[120px] bg-white overflow-hidden">

  {/* subtle divider line */}
  <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>

  <div className="max-w-7xl mx-auto px-6 text-center mb-20">

    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-[12px] tracking-[3px] uppercase text-[#C8833A] mb-4 block font-bold"
    >
      WHY THIS MATTERS
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="font-serif text-[44px] md:text-[56px] text-[#0A0A0A] mb-6 leading-tight"
    >
      Still Living in Overcrowded Societies in Gurgaon?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-[18px] text-[#6B6B6B] max-w-[640px] mx-auto leading-[1.8] font-medium"
    >
      You’ve worked hard for years — your home in Gurgaon should now reflect your success, not your compromises.
    </motion.p>
  </div>

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-[60px] relative">

    {/* LEFT — Pain Points */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h4 className="text-[#C8833A] uppercase tracking-[3px] text-[12px] mb-8 font-bold flex items-center gap-3">
        <span className="w-8 h-[2px] bg-[#C8833A]"></span> The Old Reality
      </h4>

      <div className="flex flex-col gap-4">
        {[
          "Narrow internal roads leading to frequent congestion within the society",
          "Lack of modern clubhouse and recreational amenities",
          "Minimal green spaces with no proper parks or open areas",
          "High-density construction resulting in limited privacy and constant noise",
          "Absence of dedicated play areas for children and family-friendly zones",
          "Ageing infrastructure with issues like power outages, water supply concerns, and lift breakdowns"
        ].map((point, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-6 border border-black/5 bg-[#F8F6F3]/30 shadow-sm hover:shadow-md hover:border-red-500/20 transition-all duration-300 rounded-[2px]"
          >
            <span className="text-red-500 text-[16px] mt-[2px] font-bold">✕</span>
            <p className="text-[#6B6B6B] text-[17px] leading-[1.7] font-medium">
              {point}
            </p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT — Solution */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative bg-[#FFFFFF] border-2 border-[#C8833A]/10 p-10 md:p-12 rounded-[2px] shadow-2xl"
    >

      {/* top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C8833A]"></div>

      <h3 className="font-serif text-[#0A0A0A] text-[32px] mb-4 font-bold">
        The Upgrade You Deserve at Ireo Corridors Gurgaon
      </h3>

      <div className="w-16 h-1 bg-[#C8833A] mb-8"></div>

      <div className="space-y-6 text-[#6B6B6B] text-[17px] leading-[1.9] font-medium">
        <p>
          Welcome to Ireo Corridors Sector 67A Gurgaon — a premium ready to move residential project, presented by Do Bigha Zamin.
        </p>
        <p>
          Spread across 37.5 acres on Golf Course Extension Road, this luxury township offers spacious 2 BHK and 3 BHK apartments with modern amenities, low-density living, and strong resale potential in Gurgaon.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mt-12">
        {[
          { val: "37.5 Acres", label: "Township Size" },
          { val: "36 Families", label: "Per Acre Density" },
          { val: "10 Acres", label: "Open Greens" },
          { val: "2 Acre Club", label: "Premium Hub" }
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#F8F6F3] border border-[#C8833A]/10 p-6 hover:scale-[1.03] transition-all duration-300 shadow-sm rounded-[2px]"
          >
            <span className="font-serif text-[#C8833A] text-[26px] font-bold tracking-tight">
              {stat.val}
            </span>
            <p className="text-[#6B6B6B] uppercase text-[10px] tracking-[2px] mt-1.5 font-bold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

    </motion.div>

  </div>
</section>

      {/* SECTION 2 — PROJECT OVERVIEW SECTION */}
      <section id="overview" className="py-[120px] bg-[#F8F6F3] border-t-2 border-[#C8833A]/10">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C8833A] uppercase tracking-[4px] text-[11px] font-bold block mb-4"
          >
            THE PROJECT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[42px] md:text-[56px] text-[#0A0A0A] max-w-[900px] mx-auto leading-tight font-bold"
          >
            Ireo The Corridors — A World in Its Own Right
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-20 items-start">
          {/* LEFT COLUMN — Long Form Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-[17px] text-[#6B6B6B] leading-[1.9] font-medium">
              Ireo The Corridors is not just a residential project. It is a landmark township — one of the largest gated condominiums in Gurugram — designed to deliver a living experience that very few addresses in the NCR can match. Located in Sector 67A on the prestigious Golf Course Extension Road, The Corridors redefines what it means to live well in Gurgaon.
            </p>
            <div className="w-20 h-1 bg-[#C8833A] my-2"></div>
            <p className="text-[17px] text-[#6B6B6B] leading-[1.9] font-medium">
              Spread across a sprawling 37.5 acres in Sector 67A Gurgaon, Ireo Corridors Sector 67 Gurgaon is designed with only 20% of the land dedicated to construction, offering residents something increasingly rare in modern Gurgaon — space, privacy, and greenery on a massive scale. With over 10 acres of interconnected greens woven throughout the community, this ready to move residential project creates a refreshing living experience, making it one of the most sought-after luxury apartments in Gurgaon.
            </p>
            <p className="text-[17px] text-[#6B6B6B] leading-[1.9] font-medium">
              The township integrates 27 thoughtfully designed residential towers Rising over 14 floors, housing a total of 1,356 families across a range of unit configurations — all delivered with the quality finishes you'd typically find only at a higher price point.
            </p>

            <div className="flex flex-wrap gap-5 mt-8">
              <button
                onClick={() => openModal('enquiry')}
                className="bg-[#C8833A] text-white px-10 py-4.5 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] shadow-xl shadow-[#C8833A]/20 hover:bg-[#0A0A0A] transition-all"
              >
                Get Current Inventory
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="bg-transparent border-2 border-[#C8833A] text-[#C8833A] px-10 py-4.5 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#C8833A] hover:text-white transition-all"
              >
                View Connectivity
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Project Stats Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-1 shadow-2xl rounded-[2px] border border-[#C8833A]/10"
          >
            <div className="flex flex-col">
              {[
                { k: "Developer", v: "Ireo Private Limited" },
                { k: "Location", v: "Sector 67A, Gurgaon" },
                { k: "Total Area", v: "37.5 Acres" },
                { k: "Density", v: "36 Families / Acre" },
                { k: "Open Space", v: "10 Acres (60% Greens)" },
                { k: "Clubhouse", v: "2 Acres · 40+ Amenities" },
                { k: "Configurations", v: "2, 2.5, 3 BHK + SQ" },
                { k: "Possession", v: "Ready to Move (OC Recd)" },
                { k: "HRERA Redg.", v: "378 of 2017" },
                { k: "Partner", v: "Do Bigha Zamin" }
              ].map((row, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center px-6 py-[18px] border-b border-[#C8833A]/5 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F6F3]/50'}`}
                >
                  <span className="text-[#C8833A] text-[11px] uppercase tracking-wider font-bold">{row.k}</span>
                  <span className="text-[#0A0A0A] text-[15px] font-bold text-right">{row.v}</span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-[#C8833A] text-white flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[2px] font-bold">Trusted by 100+ Families</span>
              <ShieldCheck size={20} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION — PROJECT HIGHLIGHTS */}
      <section className="py-[120px] bg-bg-primary border-t border-accent-copper/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-4 block"
            >
              PROJECT HIGHLIGHTS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[48px] text-white max-w-[900px] mx-auto leading-tight"
            >
              The Luxury of Space, Privacy, and Ready Possession
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <HighlightCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — VIDEO WALKTHROUGH */}
      <section className="py-[60px] lg:py-[120px] bg-[#FFFFFF] border-t-[3px] border-[#C8833A]">
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12">
          {/* HEADER */}
          <div className="text-center">
            <h4 className="text-[#C8833A] uppercase tracking-[4px] text-[11px] mb-[20px] font-semibold">
              EXPERIENCE THE VIBE
            </h4>
            <h2 className="font-serif text-[34px] lg:text-[52px] text-[#0A0A0A] leading-[1.2]">
              See It to Feel It.
            </h2>
            <p className="font-sans text-[#6B6B6B] text-[18px] max-w-[580px] mx-auto leading-[1.7] mt-[16px] mb-[12px]">
              Real walkthroughs. Real spaces. Watch our short films and experience life at The Ireo Corridors before your site visit.
            </p>
            <p className="font-sans text-[#6B6B6B] text-[12px] italic mt-[12px] mb-[64px]">
              4 short films · filmed on-site at Ireo The Corridors · presented by Do Bigha Zamin
            </p>
          </div>

          {/* VIDEO GRID */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[20px]">
            {/* Video 1 */}
            <div className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[2px] overflow-hidden flex flex-col group hover:border-[rgba(200,131,58,0.5)] hover:shadow-[0_4px_20px_rgba(200,131,58,0.12)] transition-all duration-300">
              <div className="w-full aspect-[9/16] relative">
                <iframe
                  src="https://www.youtube.com/embed/VV8oH-tnMS0?mute=1&amp;autoplay=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="SHORT FILM 01 - Lobby & Entry Experience"
                ></iframe>
              </div>
             
            </div>

            {/* Video 2 */}
            <div className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[2px] overflow-hidden flex flex-col group hover:border-[rgba(200,131,58,0.5)] hover:shadow-[0_4px_20px_rgba(200,131,58,0.12)] transition-all duration-300">
              <div className="w-full aspect-[9/16] relative">
                <iframe
                  src="https://www.youtube.com/embed/y1bDQoJ9T7Y?mute=1&amp;autoplay=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="SHORT FILM 02 - Green Spaces & Outdoor Life"
                ></iframe>
              </div>
              
            </div>

            {/* Video 3 */}
            <div className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[2px] overflow-hidden flex flex-col group hover:border-[rgba(200,131,58,0.5)] hover:shadow-[0_4px_20px_rgba(200,131,58,0.12)] transition-all duration-300">
              <div className="w-full aspect-[9/16] relative">
                <iframe
                  src="https://www.youtube.com/embed/13F2MocJ-WQ?mute=1&amp;autoplay=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="SHORT FILM 03 - Clubhouse Tour"
                ></iframe>
              </div>
              
            </div>

            {/* Video 4 */}
            <div className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[2px] overflow-hidden flex flex-col group hover:border-[rgba(200,131,58,0.5)] hover:shadow-[0_4px_20px_rgba(200,131,58,0.12)] transition-all duration-300">
              <div className="w-full aspect-[9/16] relative">
                <iframe
                  src="https://www.youtube.com/embed/0GRuOdtmouA?mute=1&amp;autoplay=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="SHORT FILM 04 - Apartment View & Interiors"
                ></iframe>
              </div>
             
            </div>
          </div>

          {/* BOTTOM CTA STRIP */}
          <div className="mt-[56px] flex flex-col md:flex-row justify-between items-center gap-[24px] bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[2px] p-[28px_24px] lg:p-[36px_48px]">
            <div className="text-center md:text-left flex-1 max-w-[600px]">
              <h3 className="font-serif text-[24px] text-[#0A0A0A] leading-snug">
                Want the Full Experience?
              </h3>
              <p className="font-sans text-[#6B6B6B] text-[14px] mt-[6px] leading-[1.6]">
                Nothing beats walking through the actual 37.5-acre township. Schedule a free site visit with Do Bigha Zamin — pickup included from anywhere in Delhi/NCR.
              </p>
            </div>

            <div className="flex flex-col gap-[12px] w-full md:w-auto min-w-[220px]">
              <button
                onClick={() => scrollToSection('site-visit')}
                className="w-full bg-[#C8833A] text-white font-sans text-[12px] uppercase tracking-[2px] font-semibold py-[12px] px-[28px] rounded-[2px] hover:bg-[#E8B87E] hover:text-[#0A0A0A] transition-colors duration-300 active:scale-[0.98]"
              >
                Book a Free Site Visit
              </button>
              <a
                href="https://wa.me/919899888015?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit."
                target="_blank"
                rel="noreferrer"
                className="w-full flex justify-center items-center bg-transparent border border-[#C8833A] text-[#C8833A] font-sans text-[12px] uppercase tracking-[2px] font-semibold py-[12px] px-[28px] rounded-[2px] hover:bg-[rgba(200,131,58,0.05)] transition-colors duration-300 active:scale-[0.98]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — BROCHURE DOWNLOAD */}
      <section id="brochure" className="py-[60px] lg:py-[100px] bg-[#FFFFFF] border-y-[3px] border-[#C8833A]">
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12">
          {/* PART A — SECTION HEADER */}
          <div className="text-center">
            <h4 className="text-[#C8833A] uppercase tracking-[4px] text-[11px] mb-[20px] font-semibold">
              RESOURCES
            </h4>
            <h2 className="font-serif text-[34px] lg:text-[52px] text-[#0A0A0A] leading-[1.2]">
              Get the Complete Project Brochure
            </h2>
            <p className="font-sans text-[#6B6B6B] text-[18px] max-w-[900px] mx-auto leading-[1.7] mt-[16px] mb-[64px]">
              Download the official brochure of Ireo The Corridors Sector 67A Gurgaon to explore detailed floor plans, master plan, specifications, payment plan, and complete project insights. Discover everything about this ready to move residential project, including apartment configurations and resale opportunities. Enter your details below to receive the brochure instantly on WhatsApp.
            </p>
          </div>

          {/* PART B — MAIN LAYOUT */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[60px] items-start">

            {/* LEFT COLUMN — Lead Capture Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.3)] border-t-[3px] border-t-[#C8833A] rounded-[2px] p-[32px_24px] lg:p-[44px_40px] w-full shadow-sm"
            >
              <BrochureForm />

              {/* Reassurance */}
              <div className="flex flex-wrap items-center justify-center gap-[16px] mt-[14px]">
                {["Instant Email Delivery", "No Spam Guaranteed", "Zero Brokerage · Zero Pressure"].map((text, i) => (
                  <div key={i} className="flex items-center gap-[4px]">
                    <span className="text-[#C8833A] text-[11px] font-bold">✓</span>
                    <span className="text-[#6B6B6B] font-sans text-[11px] font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="font-sans text-[#6B6B6B] text-[11px] italic text-center mt-[10px] leading-[1.6]">
                By submitting, you agree to be contacted by Do Bigha Zamin — Authorised Channel Partner for Ireo The Corridors. Your information will not be shared with any third party.
              </p>
            </motion.div>

            {/* RIGHT COLUMN — What's Inside + Direct Contact */}
            <div className="flex flex-col w-full">

              {/* TOP BLOCK — What's inside */}
              <div>
                <h3 className="font-serif text-[24px] text-[#0A0A0A] mb-[8px]">What's Inside the Brochure?</h3>
                <div className="w-[40px] h-[1px] bg-[#C8833A] mb-[24px]"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                  {[
                    { icon: <LayoutGrid className="text-[#C8833A] w-[18px] h-[18px]" />, text: "All Floor Plans" },
                    { icon: <MapIcon className="text-[#C8833A] w-[18px] h-[18px]" />, text: "Township Master Plan" },
                    { icon: <Zap className="text-[#C8833A] w-[18px] h-[18px]" />, text: "Premium Specifications" },
                    { icon: <Wallet className="text-[#C8833A] w-[18px] h-[18px]" />, text: "Payment Plan Details" },
                    { icon: <Building2 className="text-[#C8833A] w-[18px] h-[18px]" />, text: "Project Overview" },
                    { icon: <MapPin className="text-[#C8833A] w-[18px] h-[18px]" />, text: "Location & Connectivity" },
                    { icon: <TrendingUp className="text-[#C8833A] w-[18px] h-[18px]" />, text: "Investment Analysis" },
                    { icon: <Shield className="text-[#C8833A] w-[18px] h-[18px]" />, text: "RERA & Legal Details" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.18)] rounded-[2px] p-[16px_14px] flex items-center gap-[10px] hover:border-[rgba(200,131,58,0.45)] hover:bg-[rgba(200,131,58,0.04)] transition-all duration-250"
                    >
                      {item.icon}
                      <span className="font-sans text-[#0A0A0A] text-[13px] font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* MIDDLE DIVIDER */}
              <div className="w-full h-[1px] bg-[rgba(200,131,58,0.2)] my-[28px]"></div>

              {/* BOTTOM BLOCK — Direct contact alternative */}
              <div>
                <span className="text-[#6B6B6B] font-sans text-[12px] uppercase tracking-[2px] font-semibold block mb-[16px]">
                  PREFER TO TALK DIRECTLY?
                </span>

                <div className="flex flex-col gap-[10px]">
                  {/* WhatsApp Card */}
                  <motion.a
                    href="https://wa.me/919899888015?text=Hi%2C%20I%20would%20like%20to%20receive%20the%20complete%20brochure%20of%20Ireo%20The%20Corridors."
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-[rgba(37,211,102,0.06)] border border-[rgba(37,211,102,0.25)] rounded-[2px] p-[16px_18px] flex items-center gap-[14px] cursor-pointer hover:bg-[rgba(37,211,102,0.1)] transition-colors duration-250"
                  >
                    <MessageCircle className="text-[#25D366] w-[24px] h-[24px]" />
                    <div className="flex flex-col">
                      <span className="text-[#0A0A0A] font-sans text-[14px] font-semibold">WhatsApp Us Now</span>
                      <span className="text-[#6B6B6B] font-sans text-[12px]">Instant response · Brochure in 2 minutes</span>
                    </div>
                  </motion.a>

                  {/* Phone Card */}
                  <motion.a
                    href="tel:+919899888015"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.18 }}
                    className="bg-[rgba(200,131,58,0.06)] border border-[rgba(200,131,58,0.25)] rounded-[2px] p-[16px_18px] flex items-center gap-[14px] cursor-pointer hover:bg-[rgba(200,131,58,0.1)] transition-colors duration-250"
                  >
                    <Phone className="text-[#C8833A] w-[22px] h-[22px]" />
                    <div className="flex flex-col">
                      <span className="text-[#0A0A0A] font-sans text-[14px] font-semibold">Call +91 9899 888 015</span>
                      <span className="text-[#6B6B6B] font-sans text-[12px]">Mon–Sun · 10 AM – 7 PM · Instant callback</span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* PART C — BOTTOM TRUST BANNER */}
          <div className="mt-[64px] bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[2px] p-[28px_24px] lg:p-[36px_80px]">
            <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[60px]">

              {/* LEFT — text block */}
              <div className="lg:w-[60%] w-full text-center lg:text-left">
                <h3 className="font-serif text-[#0A0A0A] text-[22px] leading-[1.3] mb-[8px]">
                  Do Bigha Zamin — Authorised Channel Partner
                </h3>
                <p className="font-sans text-[#6B6B6B] text-[13px] leading-[1.7]">
                  We are the officially authorised channel partner for Ireo The Corridors. Every detail we share — pricing, floor plans, RERA numbers — is sourced directly from the developer. Zero fabrication. Zero markup. Complete transparency.
                </p>
              </div>

              {/* RIGHT — four trust tags */}
              <div className="lg:w-[40%] w-full grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                {[
                  { icon: <Shield className="text-[#C8833A] w-[14px] h-[14px]" />, text: "RERA Registered" },
                  { icon: <CircleOff className="text-[#C8833A] w-[14px] h-[14px]" />, text: "Zero Brokerage" },
                  { icon: <CheckCircle2 className="text-[#C8833A] w-[14px] h-[14px]" />, text: "Authorised by Ireo" },
                  { icon: <Star className="text-[#C8833A] w-[14px] h-[14px]" />, text: "100+ Families Helped" }
                ].map((tag, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="bg-[#FFFFFF] border border-[rgba(200,131,58,0.25)] rounded-[2px] p-[10px_14px] flex items-center justify-center lg:justify-start gap-[8px]"
                  >
                    {tag.icon}
                    <span className="font-sans text-[#0A0A0A] text-[12px] font-medium leading-none">{tag.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — CONFIGURATIONS & FLOOR PLANS */}
      <section id="floor-plans" className="py-[120px] bg-bg-secondary border-t border-accent-copper/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-4 block"
            >
              LAYOUTS & PRICING
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[48px] text-white max-w-[900px] mx-auto leading-tight"
            >
              Choose Your Perfect Space
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[18px] text-text-secondary max-w-[950px] mx-auto leading-[1.7] mt-4"
            >
              Explore the thoughtfully designed Ireo Corridors floor plan to find a layout that perfectly fits your lifestyle.
            
            </motion.p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {configurations.map((config, idx) => (
              <button
                key={idx}
                onClick={() => setActiveConfigIdx(idx)}
                className={`px-8 py-4 text-[12px] uppercase tracking-[2px] transition-all duration-300 border ${activeConfigIdx === idx
                  ? 'bg-accent-copper border-accent-copper text-white'
                  : 'bg-transparent border-accent-copper/30 text-text-secondary hover:border-accent-copper'
                  } rounded-[2px]`}
              >
                {config.label}
              </button>
            ))}
          </div>

          {/* Active Config Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeConfigIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-[60px] items-center bg-bg-primary p-8 lg:p-12 border border-accent-copper/10"
            >
              {/* Left: Details */}
              <div>
                <span className="text-accent-copper text-[11px] tracking-[4px] uppercase mb-4 block">Configuration Details</span>
                <h3 className="font-serif text-[36px] text-text-accent mb-6 leading-tight">
                  {configurations[activeConfigIdx].title}
                </h3>

                <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-accent-copper/10">
                  <div>
                    <span className="text-text-secondary text-[10px] uppercase tracking-widest mb-1 block">Super Area</span>
                    <span className="text-white text-[20px] font-medium">{configurations[activeConfigIdx].superArea}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary text-[10px] uppercase tracking-widest mb-1 block">Starting Price</span>
                    <span className="text-accent-gold text-[20px] font-medium">{configurations[activeConfigIdx].price}</span>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full border border-accent-copper/30 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-1.5 h-1.5 bg-accent-copper rounded-full"></div>
                    </div>
                    <div>
                      <span className="text-white text-[15px] font-medium block mb-1">Accommodation</span>
                      <p className="text-text-secondary text-[14px]">{configurations[activeConfigIdx].rooms}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full border border-accent-copper/30 flex items-center justify-center mt-1 shrink-0">
                      <div className="w-1.5 h-1.5 bg-accent-copper rounded-full"></div>
                    </div>
                    <div>
                      <span className="text-white text-[15px] font-medium block mb-1">Ideal For</span>
                      <p className="text-text-secondary text-[14px]">{configurations[activeConfigIdx].idealFor}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {configurations[activeConfigIdx].features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-text-secondary text-[13px]">
                      <CheckCircle2 size={14} className="text-accent-copper" />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button onClick={() => openModal('enquiry')} className="btn-copper rounded-[2px] px-10">Get Best Price</button>
                  <a
                    href={configurations[activeConfigIdx].pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-copper rounded-[2px] px-10 flex items-center justify-center"
                  >
                    Download Floor Plan
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative aspect-[4/3] overflow-hidden border border-accent-copper/20 group">
                <img
                  src={configurations[activeConfigIdx].image}
                  alt={configurations[activeConfigIdx].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pricing Summary Table */}
          <div className="mt-20 overflow-x-auto">
            <table className="w-full border-collapse border border-accent-copper/10">
              <thead>
                <tr className="bg-bg-primary">
                  <th className="border border-accent-copper/10 p-5 text-left text-accent-copper text-[11px] uppercase tracking-[2px]">Configuration</th>
                  <th className="border border-accent-copper/10 p-5 text-left text-accent-copper text-[11px] uppercase tracking-[2px]">Super Area</th>
                  <th className="border border-accent-copper/10 p-5 text-left text-accent-copper text-[11px] uppercase tracking-[2px]">Carpet Area</th>
                  <th className="border border-accent-copper/10 p-5 text-left text-accent-copper text-[11px] uppercase tracking-[2px]">Starting Price</th>
                  <th className="border border-accent-copper/10 p-5 text-left text-accent-copper text-[11px] uppercase tracking-[2px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {configurations.map((config, idx) => (
                  <tr key={idx} className="hover:bg-bg-primary/50 transition-colors">
                    <td className="border border-accent-copper/10 p-5 text-white text-[14px] font-medium">{config.label}</td>
                    <td className="border border-accent-copper/10 p-5 text-text-secondary text-[14px]">{config.superArea}</td>
                    <td className="border border-accent-copper/10 p-5 text-text-secondary text-[14px]">{config.carpetArea}</td>
                    <td className="border border-accent-copper/10 p-5 text-accent-gold text-[14px] font-semibold">{config.price}</td>
                    <td className="border border-accent-copper/10 p-5">
                      <button className="text-accent-copper text-[11px] uppercase tracking-[2px] font-bold hover:underline">Enquire Now</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Strip */}
          <div className="mt-12 bg-accent-copper p-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-[2px]">
            <div className="text-center md:text-left">
              <h4 className="text-white font-serif text-[24px] mb-1">Limited Inventory Available in Sector 67A</h4>
              <p className="text-white/80 text-[14px]">Ready-to-move apartments with OC. Book your site visit today.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => openModal('enquiry')} className="bg-white text-accent-copper px-8 py-3 text-[12px] uppercase tracking-[2px] font-bold hover:bg-ivory transition-colors rounded-[2px]">Get Best Price</button>
              <button onClick={() => scrollToSection('site-visit')} className="bg-transparent border border-white text-white px-8 py-3 text-[12px] uppercase tracking-[2px] font-bold hover:bg-white/10 transition-colors rounded-[2px]">Schedule Site Visit</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — MASTER PLAN */}
      <section className="py-[60px] lg:py-[120px] bg-[#FFFFFF] border-t-[3px] border-[#C8833A]">
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12">
          {/* PART A — SECTION HEADER */}
          <div className="text-center">
            <h4 className="text-[#C8833A] uppercase tracking-[4px] text-[11px] mb-[20px] font-semibold">
              BLUEPRINT
            </h4>
            <h2 className="font-serif text-[34px] lg:text-[52px] text-[#0A0A0A] leading-[1.2] mb-4">
              Explore the Master Plan of Ireo Corridors
            </h2>
            <p className="font-sans text-[#6B6B6B] text-[18px] max-w-[900px] mx-auto leading-[1.7] mt-[16px] mb-[16px]">
              Every acre of Ireo The Corridors Sector 67A Gurgaon is thoughtfully designed to maximise green spaces, privacy, and community living. This ready to move residential project on Golf Course Extension Road offers a well-planned township layout with low-density living and modern infrastructure. Explore the complete master plan below to understand the layout of this premium development.
            </p>

            <div className="flex justify-center items-center gap-[8px] mb-[64px]">
              <div className="w-[32px] h-[2px] bg-[rgba(200,131,58,0.3)]"></div>
              <div className="w-[32px] h-[2px] bg-[#C8833A]"></div>
              <div className="w-[32px] h-[2px] bg-[rgba(200,131,58,0.3)]"></div>
            </div>
          </div>

          {/* PART B — MASTER PLAN VISUAL + HIGHLIGHTS */}
          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-[56px] items-start">

            {/* LEFT COLUMN — Master Plan Visual */}
            <div className="flex flex-col w-full">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-[#F8F6F3] border border-[rgba(200,131,58,0.3)] rounded-[6px] overflow-hidden w-full lg:min-h-[500px] min-h-[320px] flex items-center justify-center p-4"
              >

                {/* IMAGE */}
                <img
                  src="/ireo-corridors-master-plan.webp"   // 👈 apni image ka path yaha daal
                  alt="Ireo The Corridors Master Plan"
                  className="w-full h-full object-contain rounded-[4px]"
                />

                {/* Optional subtle overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

              </motion.div>



              <div className="flex flex-wrap items-center gap-x-[20px] gap-y-[12px] mt-[12px]">
                <div className="flex items-center gap-[6px]">
                  <div className="w-[14px] h-[14px] bg-[rgba(200,131,58,0.5)] border border-[#C8833A]"></div>
                  <span className="font-sans text-[#0A0A0A] text-[12px]">Residential Towers</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="w-[14px] h-[14px] bg-[rgba(200,131,58,0.08)] border border-[rgba(200,131,58,0.4)]"></div>
                  <span className="font-sans text-[#0A0A0A] text-[12px]">Green Areas (60%)</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="w-[14px] h-[14px] bg-[rgba(200,131,58,0.15)] border border-[#C8833A]"></div>
                  <span className="font-sans text-[#0A0A0A] text-[12px]">Clubhouse & Amenities</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="w-[14px] h-[14px] bg-[#D4CFC8] border border-transparent"></div>
                  <span className="font-sans text-[#0A0A0A] text-[12px]">Internal Roads</span>
                </div>
              </div>

              <button
                onClick={() => openModal('master-plan')}
                className="mt-[20px] w-full bg-[#C8833A] text-white font-sans text-[13px] uppercase tracking-[2px] font-semibold py-[16px] rounded-[2px] flex items-center justify-center gap-[10px] hover:bg-[#E8B87E] hover:text-[#0A0A0A] transition-colors duration-300 active:scale-[0.98]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="currentColor text-white">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Master Plan
              </button>
              <p className="font-sans text-[#6B6B6B] text-[11px] italic text-center mt-[8px]">
                The master plan PDF will be sent directly to your email.
              </p>
            </div>

            {/* RIGHT COLUMN — Highlights */}
            <div className="flex flex-col">
              <span className="text-[#C8833A] uppercase tracking-[3px] text-[11px] mb-[16px] font-semibold block">TOWNSHIP LAYOUT AT A GLANCE</span>
              <h3 className="font-serif text-[#0A0A0A] text-[30px] leading-[1.3] mb-[8px]">Designed for Space.</h3>
              <h4 className="font-serif italic text-[#C8833A] text-[22px] mb-[24px]">Built for Life.</h4>

              <div className="w-[48px] h-[1px] bg-[#C8833A] mb-[28px]"></div>

              <div className="flex flex-col gap-[12px]">
                {[
                  { val: "60%", title: "Open Green Spaces", desc: "Over 10 acres of interconnected landscaped greens — parks, nature trails, courtyards, and private gardens." },
                  { val: "20%", title: "Built-up Area Only", desc: "Just 20% of the total 37.5 acres is used for construction — an extraordinary ratio for any Gurgaon township." },
                  { val: "27", title: "Residential Towers", desc: "27 thoughtfully positioned towers — each oriented for cross-ventilation, natural light, and green-facing views." },
                  { val: "2 Acres", title: "Central Clubhouse Zone", desc: "The 2-acre clubhouse sits at the heart of the township — accessible within a short walk from every single tower." }
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-[#F8F6F3] border-l-[3px] border-l-[#C8833A] border border-[rgba(200,131,58,0.2)] p-[18px_20px] rounded-[2px] transition-all duration-300 hover:bg-[rgba(200,131,58,0.05)] hover:border-l-[#E8B87E]"
                  >
                    <span className="text-[#C8833A] font-serif text-[32px] font-semibold leading-none block">{card.val}</span>
                    <h5 className="text-[#0A0A0A] font-sans text-[14px] font-semibold mt-[4px]">{card.title}</h5>
                    <p className="text-[#6B6B6B] font-sans text-[13px] leading-[1.7] mt-[6px]">
                      {card.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-[10px] mt-[20px]">
                {["On-Site School", "On-Site Hospital", "Retail & Post Office"].map((pill, idx) => (
                  <div key={idx} className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.3)] px-[16px] py-[8px] rounded-[2px] text-[#0A0A0A] font-sans text-[12px] font-medium">
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PART C — BOTTOM STATS STRIP */}
          <div className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[2px] p-[32px_24px] lg:p-[40px_80px] mt-[72px]">
            <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-evenly gap-y-[32px] lg:gap-y-0 relative">
              {/* Vertical dividers for desktop */}
              <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-[1px] bg-[rgba(200,131,58,0.3)]"></div>
              <div className="hidden lg:block absolute left-[40%] top-0 bottom-0 w-[1px] bg-[rgba(200,131,58,0.3)]"></div>
              <div className="hidden lg:block absolute left-[60%] top-0 bottom-0 w-[1px] bg-[rgba(200,131,58,0.3)]"></div>
              <div className="hidden lg:block absolute left-[80%] top-0 bottom-0 w-[1px] bg-[rgba(200,131,58,0.3)]"></div>

              {[
                { val: 37.5, label: "TOTAL TOWNSHIP SIZE", suffix: " Acres", isFloat: true },
                { val: 27, label: "RESIDENTIAL TOWERS", suffix: " Towers" },
                { val: 1356, label: "TOTAL UNITS", suffix: "" },
                { val: 10, label: "OPEN GREENS", suffix: " Acres" },
                { val: 36, label: "FAMILIES PER ACRE", suffix: "", isLast: true }
              ].map((stat, idx) => (
                <div key={idx} className={`flex flex-col items-center text-center w-full ${stat.isLast ? 'col-span-2 lg:col-span-1' : ''}`}>
                  <span className="text-[#C8833A] font-serif text-[40px] font-semibold leading-none">
                    <AnimatedStat value={stat.val} isFloat={stat.isFloat} />{stat.suffix}
                  </span>
                  <span className="text-[#6B6B6B] font-sans text-[11px] uppercase tracking-[2px] mt-[6px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OVERVIEW / DEVELOPER */}
      <section id="overview" className="py-24 bg-bg-primary">
        <div id="developer"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label mb-4 block">The Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl text-text-accent mb-8 leading-tight">
                A Township Designed Around Your Life
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  Ireo The Corridors is one of the largest and most thoughtfully planned residential townships in Gurgaon. Spanning over 37.5 acres in Sector 67A, it offers a lifestyle that balances urban convenience with natural serenity.
                </p>
                <p>
                  With over 10 acres of dedicated green spaces and a massive 2-acre clubhouse, Ireo Corridors Gurgaon offers a thoughtfully designed environment focused on community, wellness, and relaxation. Located in Sector 67A Gurgaon on Golf Course Extension Road, this ready to move residential project ensures seamless connectivity between towers through its unique “Corridors” concept, while maintaining privacy, openness, and low-density living.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <span className="text-3xl font-serif text-accent-copper block mb-1">10+</span>
                  <span className="text-[10px] uppercase tracking-widest text-text-secondary">Acres of Greens</span>
                </div>
                <div>
                  <span className="text-3xl font-serif text-accent-copper block mb-1">2 Acre</span>
                  <span className="text-[10px] uppercase tracking-widest text-text-secondary">Luxury Clubhouse</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden border border-accent-copper/20"
            >
              <img
                src="/township-around-life.webp"
                alt="Luxury Living"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent-copper/10 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* SECTION: LOCATION */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 items-center">

            {/* IMAGE (NOW LEFT) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] border border-[#C8833A]/20 overflow-hidden rounded-[6px] group"
            >

              {/* GOOGLE MAP */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.4646180647883!2d77.0670626749477!3d28.38581594524264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2300655bb3af%3A0x3fb7d48cafe752fb!2sIreo%20The%20Corridors!5e1!3m2!1sen!2sin!4v1773913702599!5m2!1sen!2sin"
                className="w-full h-full border-0 contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>



            </motion.div>

            {/* CONTENT (NOW RIGHT) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C8833A] uppercase tracking-[3px] text-[12px] mb-4 block">
                Strategic Connectivity
              </span>

              <h2 className="font-serif text-4xl text-[#111] mb-8">
                Sector 67A, Gurgaon
              </h2>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-[#C8833A]/40"></div>
                  <div>
                    <h4 className="text-[#C8833A] text-sm font-medium mb-1 uppercase tracking-wider">
                      Prime Location
                    </h4>
                    <p className="text-[#666] text-sm">
                      Situated on the Golf Course Extension Road, the most sought-after residential hub.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-[#C8833A]/40"></div>
                  <div>
                    <h4 className="text-[#C8833A] text-sm font-medium mb-1 uppercase tracking-wider">
                      Connectivity
                    </h4>
                    <p className="text-[#666] text-sm">
                      Easy access to Sohna Road, NH-8, and the upcoming Metro corridor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-[#C8833A]/40"></div>
                  <div>
                    <h4 className="text-[#C8833A] text-sm font-medium mb-1 uppercase tracking-wider">
                      Social Infrastructure
                    </h4>
                    <p className="text-[#666] text-sm">
                      Proximity to top schools like St. Xavier's and hospitals like Medanta.
                    </p>
                  </div>
                </div>

              </div>

              {/* <button className="mt-10 border border-[#C8833A] text-[#C8833A] px-8 py-3 text-[12px] uppercase tracking-[2px] hover:bg-[#C8833A] hover:text-white transition-all duration-300 rounded-[2px]">
                View Location Map
              </button> */}

            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION — PRICING & PAYMENT PLAN */}
      <section id="investment" className="py-[120px] bg-bg-primary border-t border-accent-copper/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-[72px]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-copper text-[11px] tracking-[4px] uppercase font-medium mb-5 block"
            >
              INVESTMENT
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] md:text-[52px] text-white leading-tight"
            >
              Pricing & Payment Plans
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[18px] text-text-secondary max-w-[950px] mx-auto leading-[1.7] mt-4"
            >
              Ireo Corridors Gurgaon offers complete pricing transparency for homebuyers looking for ready to move apartments in Sector 67A Gurgaon. Below is the latest payment plan for immediate possession, along with details on apartment pricing and configurations. For resale options, customised payment schedules, and home loan assistance, connect with Do Bigha Zamin — your trusted channel partner for Ireo Corridors price insights.
            </motion.p>
          </div>

          {/* PART A — BSP + Additional Charges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-[72px]">
            {/* LEFT CARD — Base Selling Price */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-secondary border border-accent-copper/25 p-10 rounded-[2px]"
            >
              <span className="text-accent-copper text-[11px] tracking-[3px] uppercase font-medium mb-6 block">BASE SELLING PRICE</span>
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-serif text-[52px] text-accent-gold leading-none">₹19,000</h3>
              </div>
              <p className="text-text-secondary text-[14px] mb-6">per sq.ft (Super Built-up Area)</p>

              <div className="w-full h-[1px] bg-accent-copper/20 my-6"></div>

              <div className="space-y-2">
                {[
                  "1 Covered Parking Included per Unit",
                  "OC Received Asset — Zero Construction Risk",
                  "Bank Approved — SBI · HDFC · ICICI · Axis & more"
                ].map((note, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
                    <CheckCircle2 size={16} className="text-accent-copper shrink-0" />
                    <span className="text-white text-[14px]">{note}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CARD — Additional Charges Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-secondary border border-accent-copper/25 p-10 rounded-[2px]"
            >
              <span className="text-accent-copper text-[11px] tracking-[3px] uppercase font-medium mb-6 block">CHARGES OVER & ABOVE BSP</span>

              <div className="space-y-0">
                {[
                  { name: "Preferential Location Charges (PLC)", desc: "Floor, view, and orientation-based premium" },
                  { name: "Goods & Services Tax (GST)", desc: "As applicable — current rates apply at time of allotment" },
                  { name: "IFMS — Interest-Free Maintenance Security", desc: "One-time deposit — amount to be confirmed" },
                  { name: "Registration & Stamp Duty", desc: "As per Haryana government rates applicable at time of registration" },
                  { name: "Possession Charges", desc: "As per developer's schedule — confirmed at allotment" },
                  { name: "Additional Car Parking", desc: "1 covered parking included; extra parking at additional cost" }
                ].map((charge, i) => (
                  <div key={i} className="flex items-start gap-4 py-3.5 border-b border-white/5 last:border-0">
                    <div className="w-2 h-2 bg-accent-copper rounded-full mt-1.5 shrink-0"></div>
                    <div>
                      <h4 className="text-white text-[14px] font-medium">{charge.name}</h4>
                      <p className="text-text-secondary text-[13px] mt-0.5">{charge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* PART B — Ready-to-Move Payment Plan */}
          <div className="mt-[72px]">
            <div className="mb-12">
              <h4 className="text-accent-copper text-[15px] tracking-[3px] uppercase font-bold mb-2">READY-TO-MOVE PAYMENT PLAN</h4>
              <p className="text-text-secondary text-[14px]">Immediate Possession Plan — 3 simple milestones</p>
            </div>

            {/* MILESTONE TIMELINE */}
            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-accent-copper/40 z-0"></div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                {[
                  {
                    num: "1",
                    title: "Application & Booking",
                    badge: "10%",
                    desc: "Secure your unit with the initial booking amount. Documentation and allotment letter initiated immediately."
                  },
                  {
                    num: "2",
                    title: "Within 15 Days of Booking",
                    badge: "15%",
                    desc: "Second payment towards total consideration. Formalises the allotment and initiates agreement for sale."
                  },
                  {
                    num: "3",
                    title: "Handover & Possession",
                    badge: "75%",
                    desc: "Balance payment along with registration charges, IFMS, and other possession-related charges before key handover."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="w-14 h-14 rounded-full border-2 border-accent-copper bg-bg-primary flex items-center justify-center mb-6"
                    >
                      <span className="font-serif text-[22px] text-accent-copper">{step.num}</span>
                    </motion.div>
                    <h5 className="font-serif text-[18px] text-white font-semibold mb-2">{step.title}</h5>
                    <div className="bg-accent-copper text-white text-[12px] tracking-[1px] uppercase font-bold px-3.5 py-1 rounded-[2px] mb-4">
                      {step.badge}
                    </div>
                    <p className="text-text-secondary text-[15px] leading-[1.7] max-w-[260px]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional charges row */}
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              {[
                { label: "+ Registration", sub: "Stamp duty as per Haryana rates" },
                { label: "+ IFMS", sub: "Interest-Free Maintenance Security" },
                { label: "+ Possession Charges", sub: "As per developer schedule" }
              ].map((tag, i) => (
                <div key={i} className="bg-accent-copper/10 border border-accent-copper/25 p-4 md:px-6 md:py-3 rounded-[2px] text-center min-w-[200px]">
                  <span className="text-accent-copper text-[15px] font-bold block mb-1">{tag.label}</span>
                  <span className="text-text-secondary text-[14px]">{tag.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PART C — Booking Amount Guide + EMI Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[72px]">
            {/* LEFT — Booking Amount Guide */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-bg-secondary border border-accent-copper/25 p-10 rounded-[2px]"
            >
              <span className="text-accent-copper text-[11px] tracking-[3px] uppercase font-medium mb-8 block">BOOKING AMOUNT GUIDE</span>

              <div className="space-y-0 mb-6">
                {[
                  { name: "2 BHK", amount: "₹13.50 Lakhs*" },
                  { name: "2 BHK + Study", amount: "₹15.00 Lakhs*" },
                  { name: "3 BHK", amount: "₹20.00 Lakhs*" },
                  { name: "3 BHK + Servant", amount: "₹25.00 Lakhs*" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-white text-[15px] font-medium">{row.name}</span>
                    <span className="text-accent-gold font-serif text-[20px]">{row.amount}</span>
                  </div>
                ))}
              </div>

              <p className="text-text-secondary text-[11px] italic mb-8">
                *Booking amounts subject to change. Contact Do Bigha Zamin for confirmed current figures.
              </p>

              <button onClick={() => openModal('enquiry')} className="w-full bg-accent-copper text-white py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-accent-copper/90 transition-colors">
                Check Current Availability
              </button>
            </motion.div>

            {/* RIGHT — EMI Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-bg-secondary border border-accent-copper/25 p-10 rounded-[2px]"
            >
              <span className="text-accent-copper text-[11px] tracking-[3px] uppercase font-medium mb-8 block">EMI CALCULATOR</span>

              <div className="space-y-8">
                {/* Loan Amount */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-white text-[13px]">Loan Amount</label>
                    <span className="text-accent-gold font-serif text-[28px]">₹{loanAmount} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="300"
                    step="10"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-bg-primary rounded-lg appearance-none cursor-pointer accent-accent-copper"
                  />
                </div>

                {/* Interest Rate */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-white text-[13px]">Interest Rate (% p.a.)</label>
                    <span className="text-accent-gold font-serif text-[28px]">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="6.5"
                    max="12"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-bg-primary rounded-lg appearance-none cursor-pointer accent-accent-copper"
                  />
                </div>

                {/* Tenure */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-white text-[13px]">Tenure (Years)</label>
                    <span className="text-accent-gold font-serif text-[28px]">{tenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-1.5 bg-bg-primary rounded-lg appearance-none cursor-pointer accent-accent-copper"
                  />
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-bg-primary border border-accent-copper/40 p-6 mt-10 rounded-[2px]">
                <span className="text-accent-copper text-[11px] tracking-[3px] uppercase font-bold block mb-2">ESTIMATED MONTHLY EMI</span>
                <div className="text-accent-gold font-serif text-[42px]">
                  ₹<AnimatedNumber value={emi} />
                </div>
              </div>

              <p className="text-text-secondary text-[11px] italic mt-6">
                *Indicative only. Actual EMI depends on bank rate, processing fees, and your profile. Do Bigha Zamin assists with loan applications — zero extra charge.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-accent-copper/90 text-[12px] font-medium">SBI · HDFC · ICICI · Axis · Kotak · PNB</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION — BANK APPROVALS */}
      <section className="py-[48px] lg:py-[80px] bg-[#FFFFFF] border-t-[3px] border-[#C8833A]">
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12">
          {/* HEADER */}
          <div className="text-center">
            <h4 className="text-[#C8833A] uppercase tracking-[4px] text-[11px] mb-[20px] font-semibold">
              BANK APPROVALS
            </h4>
            <h2 className="font-serif text-[30px] lg:text-[44px] text-[#0A0A0A] leading-[1.2]">
              Home Loans Available with All Major Banks
            </h2>
            <p className="font-sans text-[#6B6B6B] text-[17px] max-w-[900px] mx-auto leading-[1.7] mt-[16px] mb-[56px]">
              Ireo Corridors Gurgaon, located in Sector 67A Gurgaon, is approved by leading banks and financial institutions for home loans, making it easier to own a ready to move apartment in this premium development. Do Bigha Zamin offers end-to-end assistance — from loan application to final disbursement — ensuring a smooth and hassle-free home buying experience at no extra cost.
            </p>
          </div>

          {/* MAIN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-[56px] items-start">

            {/* LEFT COLUMN — Text + Features */}
            <div className="flex flex-col lg:sticky lg:top-[120px] h-fit">
              <h3 className="font-serif text-[26px] text-[#0A0A0A] mb-[20px]">
                Why Get Your Loan Through Do Bigha Zamin?
              </h3>

              <div className="w-[48px] h-[1px] bg-[#C8833A] mb-[24px]"></div>

              <div className="flex flex-col">
                {[
                  { title: "Zero Processing Fee from Us", desc: "We charge absolutely nothing for loan assistance. Our service is completely free for buyers." },
                  { title: "Best Interest Rate Negotiation", desc: "We compare rates across all partner banks and negotiate the best possible deal for your profile." },
                  { title: "End-to-End Paperwork Support", desc: "From application to disbursement — our team handles all documentation and follow-ups on your behalf." },
                  { title: "Fast Approval — Pre-Approved Project", desc: "The Ireo Corridors is already pre-approved by all major banks, ensuring significantly faster loan processing." },
                  { title: "All Buyer Profiles Welcome", desc: "Salaried, self-employed, NRI — we assist all buyer profiles with customised loan structuring." }
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-[14px] py-[14px] border-b border-[rgba(200,131,58,0.12)]"
                  >
                    <div className="w-[28px] h-[28px] rounded-[2px] border-[1.5px] border-[#C8833A] bg-[rgba(200,131,58,0.06)] flex items-center justify-center shrink-0">
                      <span className="text-[#C8833A] text-[12px] font-semibold leading-none">✓</span>
                    </div>

                    <div>
                      <h4 className="text-[#0A0A0A] font-sans text-[14px] font-semibold mb-[3px]">{row.title}</h4>
                      <p className="text-[#6B6B6B] font-sans text-[13px] leading-[1.7]">{row.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* <a
                href="https://wa.me/919899888015?text=Hi%2C%20I%20am%20interested%20in%20a%20home%20loan%20for%20Ireo%20The%20Corridors.%20Please%20help%20me%20with%20the%20best%20available%20rate."
                target="_blank"
                rel="noreferrer"
                className="mt-[24px] inline-flex justify-center items-center bg-[#C8833A] text-white font-sans text-[12px] uppercase tracking-[2px] font-semibold py-[14px] px-[28px] rounded-[2px] hover:bg-[#E8B87E] hover:text-[#0A0A0A] transition-colors duration-300 w-fit active:scale-[0.98]"
              >
                Get Free Loan Assistance →
              </a> */}
            </div>

            {/* RIGHT COLUMN — Bank Cards Grid */}
            <div className="flex flex-col w-full">
              <span className="text-[#6B6B6B] uppercase tracking-[2px] font-sans text-[11px] mb-[20px] font-medium block">PRE-APPROVED BY THESE BANKS</span>

              <div className="grid grid-cols-2 lg:grid-cols-2 gap-[18px]">
                {[
                  { abbr: "SBI", full: "State Bank of India" },
                  { abbr: "HDFC", full: "HDFC Bank" },
                  { abbr: "ICICI", full: "ICICI Bank" },
                  { abbr: "Axis", full: "Axis Bank" },
                  { abbr: "Kotak", full: "Kotak Mahindra" },
                  { abbr: "PNB", full: "Punjab National Bank" }
                ].map((bank, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[2px] h-[72px] p-[20px_16px] flex flex-col items-center justify-center gap-[4px] hover:bg-[rgba(200,131,58,0.06)] hover:border-[rgba(200,131,58,0.5)] hover:shadow-[0_4px_12px_rgba(200,131,58,0.1)] transition-all duration-250 cursor-default"
                  >
                    <span className="text-[#C8833A] font-serif text-[20px] font-bold text-center leading-none block">{bank.abbr}</span>
                    <span className="text-[#6B6B6B] font-sans text-[10px] uppercase tracking-[1px] text-center leading-none block">{bank.full}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-[14px] bg-[rgba(200,131,58,0.06)] border border-dashed border-[rgba(200,131,58,0.35)] rounded-[2px] p-[14px_20px]">
                <p className="font-sans text-[#6B6B6B] text-[12px] italic text-center leading-snug">
                  &amp; many more leading banks and NBFCs — contact Do Bigha Zamin for the complete list
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM TRUST STRIP */}
          <div className="mt-[56px] bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[2px] p-[24px] lg:p-[32px_48px]">
            <div className="grid grid-cols-2 lg:flex lg:flex-row justify-evenly gap-y-[24px] lg:gap-y-0 text-center items-center relative">
              {/* Vertical dividers for desktop */}
              <div className="hidden lg:block absolute left-[25%] top-[10%] bottom-[10%] w-[1px] bg-[rgba(200,131,58,0.3)]"></div>
              <div className="hidden lg:block absolute left-[50%] top-[10%] bottom-[10%] w-[1px] bg-[rgba(200,131,58,0.3)]"></div>
              <div className="hidden lg:block absolute left-[75%] top-[10%] bottom-[10%] w-[1px] bg-[rgba(200,131,58,0.3)]"></div>

              {[
                {
                  icon: <Shield className="text-[#C8833A] w-[22px] h-[22px]" />,
                  title: "RERA Registered",
                  sub: "Do Bigha Zamin"
                },
                {
                  icon: <CircleOff className="text-[#C8833A] w-[22px] h-[22px]" />,
                  title: "Zero Brokerage",
                  sub: "From buyers"
                },
                {
                  icon: <Clock className="text-[#C8833A] w-[22px] h-[22px]" />,
                  title: "30 Min Response",
                  sub: "7 days a week"
                },
                {
                  icon: <ShieldCheck className="text-[#C8833A] w-[22px] h-[22px]" />,
                  title: "End-to-End Support",
                  sub: "Loan to possession"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-[6px] w-full"
                >
                  <div className="flex justify-center mb-1">{item.icon}</div>
                  <span className="text-[#0A0A0A] font-sans text-[13px] font-semibold leading-tight block">{item.title}</span>
                  <span className="text-[#6B6B6B] font-sans text-[11px] leading-tight block">{item.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PREMIUM SPECIFICATIONS */}
      <section id="specifications" className="py-[120px] bg-white border-t border-[#C8833A]/20">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-[72px]">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C8833A] text-[11px] tracking-[4px] uppercase font-medium mb-5 block"
            >
              PREMIUM SPECIFICATIONS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] md:text-[52px] text-[#111] leading-tight"
            >
              Built to Last. Finished to Impress.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[18px] text-[#666] max-w-[600px] mx-auto leading-[1.7] mt-4"
            >
              Every corner of your home at The Ireo Corridors is crafted with precision and premium materials to ensure lasting quality and elegance.
            </motion.p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Living & Dining Area",
                icon: <LayoutGrid size={28} />,
                specs: [
                  "Imported Marble Flooring",
                  "Acrylic Emulsion Paint on walls and ceilings",
                  "UPVC / Powder Coated Aluminium Windows with mosquito mesh",
                  "Concealed electrical conduits with copper wiring"
                ]
              },
              {
                num: "02",
                title: "Bedrooms",
                icon: <Bed size={28} />,
                specs: [
                  "Laminated Wooden Flooring in Master Bedroom",
                  "Vitrified Tiles in secondary bedrooms",
                  "Built-in Wardrobe Niches",
                  "Acrylic Emulsion Paint throughout"
                ]
              },
              {
                num: "03",
                title: "Kitchen",
                icon: <Utensils size={28} />,
                specs: [
                  "Modular Kitchen with Hob & Chimney",
                  "Granite Countertop",
                  "Anti-Skid Ceramic Tiles on floor",
                  "Stainless Steel Sink"
                ]
              },
              {
                num: "04",
                title: "Bathrooms",
                icon: <ShowerHead size={28} />,
                specs: [
                  "Premium Sanitary Ware",
                  "Glass Shower Partition",
                  "Anti-Skid Tiles",
                  "Geyser provision"
                ]
              },
              {
                num: "05",
                title: "Electrical & AC",
                icon: <Zap size={28} />,
                specs: [
                  "Pre-Installed AC System",
                  "Copper Wiring",
                  "Modular Switches",
                  "Ample power points"
                ]
              },
              {
                num: "06",
                title: "Building & Infrastructure",
                icon: <Building2 size={28} />,
                specs: [
                  "100% Power Backup",
                  "High-Speed Elevators",
                  "CCTV Surveillance",
                  "EV Charging Provision"
                ]
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FAF8F5] border border-[#C8833A]/20 p-9 rounded-[6px] hover:border-[#C8833A]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
              >
                <div className="text-[#C8833A] mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                <span className="text-[#C8833A] text-[11px] tracking-[3px] uppercase font-medium block">
                  {card.num}
                </span>

                <h3 className="font-serif text-[#111] text-[20px] font-semibold mb-3">
                  {card.title}
                </h3>

                <div className="w-9 h-[2px] bg-[#C8833A] mb-5"></div>

                <ul className="space-y-2">
                  {card.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#C8833A] mt-2 rounded-[1px]"></div>
                      <span className="text-[#555] text-[13px] leading-[1.8]">{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

         

        </div>
      </section>

      {/* SECTION — AMENITIES */}
      <section id="amenities" className="py-[120px] bg-[#0A0A0A] border-t border-accent-copper/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-copper uppercase tracking-[4px] text-[11px] font-medium mb-5 block"
            >
              LIFESTYLE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[52px] md:text-[34px] text-white mb-6 leading-[1.1]"
            >
              World-Class Amenities at Ireo The Corridors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-lg max-w-[900px] mx-auto leading-relaxed"
            >
              Experience a lifestyle that goes beyond the ordinary at Ireo Corridors Gurgaon. Located in Sector 67A Gurgaon, this ready to move residential project offers world-class amenities designed for modern urban living. From fitness and recreation to relaxation and social gatherings, every space is thoughtfully crafted to enhance comfort, community, and everyday luxury — making it a perfect choice for ready to move flats in Gurgaon.
            </motion.p>
          </div>

          {/* Clubhouse Hero Block */}
          <div className="mb-20">
            <div className="relative h-[500px] overflow-hidden group">
              <img
                src="/2-acre-clubhouse.webp"
                alt="Clubhouse at Ireo The Corridors"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 max-w-lg">
                <h3 className="font-serif text-3xl text-accent-copper mb-3">The 2-Acre Clubhouse</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  One of the largest in Gurgaon, featuring a grand entrance lobby, temperature-controlled pool, and multiple fine-dining options.
                </p>
              </div>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {['All Amenities', 'Clubhouse', 'Sports', 'Wellness', 'Kids', 'Social', 'Nature', 'Security', 'Utilities'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveAmenityTab(tab)}
                  className={`px-6 py-3 text-xs uppercase tracking-widest border transition-all duration-300 ${activeAmenityTab === tab
                    ? 'bg-accent-copper text-white border-accent-copper'
                    : 'border-accent-copper/20 text-text-secondary hover:border-accent-copper/50 hover:text-ivory'
                    }`}
                  style={{ borderRadius: '2px' }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Amenity Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-20">
            {[
              { name: 'Temperature Controlled Pool', icon: <Waves className="w-5 h-5" />, category: 'Clubhouse' },
              { name: 'State-of-the-Art Gym', icon: <Dumbbell className="w-5 h-5" />, category: 'Wellness' },
              { name: 'Olympic-Size Swimming Pool', icon: <Waves className="w-5 h-5" />, category: 'Sports' },
              { name: 'Full-Size Football Field', icon: <LayoutGrid className="w-5 h-5" />, category: 'Sports' },
              { name: 'Professional Tennis Courts', icon: <LayoutGrid className="w-5 h-5" />, category: 'Sports' },
              { name: 'Badminton Courts', icon: <LayoutGrid className="w-5 h-5" />, category: 'Sports' },
              { name: 'Squash Courts', icon: <LayoutGrid className="w-5 h-5" />, category: 'Sports' },
              { name: 'Table Tennis Room', icon: <LayoutGrid className="w-5 h-5" />, category: 'Sports' },
              { name: 'Skating Rink', icon: <LayoutGrid className="w-5 h-5" />, category: 'Sports' },
              { name: 'Yoga & Meditation Deck', icon: <Leaf className="w-5 h-5" />, category: 'Wellness' },
              { name: 'Luxury Spa & Sauna', icon: <Star className="w-5 h-5" />, category: 'Wellness' },
              { name: 'Private Mini Theatre', icon: <Play className="w-5 h-5" />, category: 'Clubhouse' },
              { name: 'Kids Play Area', icon: <Baby className="w-5 h-5" />, category: 'Kids' },
              { name: 'Toddlers Pool', icon: <Waves className="w-5 h-5" />, category: 'Kids' },
              { name: 'Jogging & Cycling Track', icon: <Trees className="w-5 h-5" />, category: 'Nature' },
              { name: 'Themed Zen Gardens', icon: <Trees className="w-5 h-5" />, category: 'Nature' },
              { name: 'Fine Dining Restaurant', icon: <Utensils className="w-5 h-5" />, category: 'Social' },
              { name: 'Cafeteria & Lounge', icon: <Utensils className="w-5 h-5" />, category: 'Social' },
              { name: 'Grand Party Hall', icon: <Building2 className="w-5 h-5" />, category: 'Social' },
              { name: 'Library & Reading Room', icon: <Building2 className="w-5 h-5" />, category: 'Clubhouse' },
              { name: 'Business Centre', icon: <Building2 className="w-5 h-5" />, category: 'Clubhouse' },
              { name: 'Concierge Services', icon: <Shield className="w-5 h-5" />, category: 'Utilities' },
              { name: '24/7 Multi-Tier Security', icon: <Shield className="w-5 h-5" />, category: 'Security' },
              { name: 'CCTV Surveillance', icon: <Shield className="w-5 h-5" />, category: 'Security' },
              { name: '100% Power Backup', icon: <Zap className="w-5 h-5" />, category: 'Utilities' },
              { name: 'High-Speed Elevators', icon: <Zap className="w-5 h-5" />, category: 'Utilities' },
              { name: 'Rainwater Harvesting', icon: <Leaf className="w-5 h-5" />, category: 'Utilities' },
              { name: 'On-Site Maintenance', icon: <Shield className="w-5 h-5" />, category: 'Utilities' }
            ].filter(amenity => activeAmenityTab === 'All Amenities' || amenity.category === activeAmenityTab)
              .map((amenity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  className="group flex items-center gap-4 bg-[#1C1C1C] border border-accent-copper/15 p-[24px_20px] min-h-[88px] transition-all duration-300 hover:bg-accent-copper/5 hover:border-accent-copper/45 hover:shadow-[0_4px_20px_rgba(200,131,58,0.08)] relative overflow-hidden"
                  style={{ borderRadius: '2px' }}
                >
                  {/* Left Accent on Hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-copper scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  {/* Icon Container */}
                  <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-accent-copper/10 border border-accent-copper/25 text-accent-copper group-hover:bg-accent-copper/20 transition-colors duration-300">
                    {amenity.icon}
                  </div>

                  {/* Amenity Name */}
                  <span className="text-white/60 text-sm font-medium leading-tight font-sans">
                    {amenity.name}
                  </span>
                </motion.div>
              ))}
          </div>

          {/* Amenity Count Banner */}
          <div className="bg-accent-copper/10 border-y border-accent-copper/20 py-6 mb-20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
              <div>
                <span className="text-accent-copper font-serif text-3xl block">50+</span>
                <span className="text-text-secondary text-[10px] uppercase tracking-widest">Total Amenities</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-accent-copper/20" />
              <div>
                <span className="text-accent-copper font-serif text-3xl block">2 Acres</span>
                <span className="text-text-secondary text-[10px] uppercase tracking-widest">Clubhouse Area</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-accent-copper/20" />
              <div>
                <span className="text-accent-copper font-serif text-3xl block">10+</span>
                <span className="text-text-secondary text-[10px] uppercase tracking-widest">Sports Facilities</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA Strip */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#1C1C1C] border border-accent-copper/20 p-8 lg:p-12" style={{ borderRadius: '2px' }}>
            <div className="max-w-2xl text-center lg:text-left">
              <h4 className="font-serif text-2xl text-accent-copper mb-3">Experience the Amenities Yourself</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Schedule a complimentary site visit — Do Bigha Zamin arranges expert-led walkthrough of the full 2-acre clubhouse. Pickup included from anywhere in Delhi/NCR.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button onClick={() => scrollToSection('site-visit')} className="px-8 py-4 bg-accent-copper text-white text-xs uppercase tracking-widest font-medium hover:bg-accent-copper/90 transition-all duration-300 whitespace-nowrap" style={{ borderRadius: '2px' }}>
                Book Clubhouse Tour
              </button>
              <button onClick={() => openModal('brochure')} className="px-8 py-4 border border-accent-copper text-accent-copper text-xs uppercase tracking-widest font-medium hover:bg-accent-copper hover:text-white transition-all duration-300 whitespace-nowrap" style={{ borderRadius: '2px' }}>
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — GALLERY */}
      <section id="gallery" className="py-[120px] bg-[#FFFFFF] border-t-[3px] border-[#C8833A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C8833A] uppercase tracking-[4px] text-[11px] font-semibold mb-5 block"
            >
              VISUAL TOUR
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] md:text-[52px] text-[#0A0A0A] mb-6 leading-[1.1]"
            >
              A Life Worth Seeing at Ireo Corridors Gurgaon
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6B6B6B] text-lg max-w-[900px] mx-auto leading-relaxed mb-4"
            >
              Every corner of The Ireo Corridors tells a story of luxury, precision, and architectural excellence. Explore the spaces that define your new lifestyle, perfect for those seeking ready to move in flats in Gurgaon.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#C8833A] text-xs italic font-serif"
            >
              Marketed by Do Bigha Zamin — Authorised Channel Partner
            </motion.p>
          </div>

          {/* Premium Bento Grid Collage — White Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] p-2 mb-6">
            {/* Image 1: Main Feature (2x2) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:row-span-2 relative overflow-hidden group cursor-pointer bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[4px] h-[400px] lg:h-[600px]"
            >
              <img
                src="/ireo-gallery-1.webp"
                alt="Clubhouse Arrival Lobby"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            </motion.div>

            {/* Image 2: Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden group cursor-pointer bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[4px] aspect-square"
            >
              <img
                src="/ireo-gallery-2.webp"
                alt="Premium Apartment Balcony View"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />

            </motion.div>

            {/* Image 3: Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden group cursor-pointer bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[4px] aspect-square"
            >
              <img
                src="/ireo-gallery-3.webp"
                alt="Olympic Size Swimming Pool"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />

            </motion.div>

            {/* Image 4: Horizontal (Span 2) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 relative overflow-hidden group cursor-pointer bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[4px] h-[280px]"
            >
              <img
                src="/ireo-gallery-8.webp"
                alt="Themed Zen Gardens"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />

            </motion.div>

            {/* Image 5: Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden group cursor-pointer bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[4px] aspect-square"
            >
              <img
                src="/ireo-gallery-4.webp"
                alt="Master Bedroom Interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />

            </motion.div>

            {/* Image 6: Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden group cursor-pointer bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[4px] aspect-square"
            >
              <img
                src="/ireo-gallery-5.webp"
                alt="Grand Clubhouse Exterior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />

            </motion.div>

            {/* Image 7: Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative overflow-hidden group cursor-pointer bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[4px] aspect-square"
            >
              <img
                src="/ireo-gallery-6.webp"
                alt="Kids Play Zone"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />

            </motion.div>

            {/* Image 8: Square */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="relative overflow-hidden group cursor-pointer bg-[#F8F6F3] border border-[rgba(200,131,58,0.2)] rounded-[4px] aspect-square"
            >
              <img
                src="/ireo-gallery-7.webp"
                alt="Jogging Track"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                referrerPolicy="no-referrer"
              />

            </motion.div>
          </div>




          {/* Gallery CTA Block — Redesigned for White Theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8F6F3] border border-[rgba(200,131,58,0.25)] border-t-[4px] border-t-[#C8833A] p-8 lg:p-[64px_80px] rounded-[4px] shadow-[0_15px_40px_rgba(200,131,58,0.05)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
              <div>
                <span className="text-[#C8833A] uppercase tracking-[4px] text-[10px] font-bold mb-4 block">EXPERIENCE IT IN PERSON</span>
                <h3 className="font-serif text-[32px] md:text-[42px] text-[#0A0A0A] mb-6 leading-tight">Nothing Compares to the Real View.</h3>
                <p className="text-[#6B6B6B] text-[16px] leading-relaxed mb-8 max-w-[580px]">
                  While photographs capture the beauty, the massive scale of Gurgaon's largest planned condominium can only be felt in person. Walk through the actual 2-acre clubhouse and themed gardens today.
                </p>
                <div className="flex flex-col sm:flex-row gap-8">
                  {[
                    { label: "Expert-Led Tour", icon: <Check size={16} /> },
                    { label: "Full Project Access", icon: <Check size={16} /> },
                    { label: "No Brokerage Fee", icon: <Check size={16} /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="text-[#C8833A]">{item.icon}</div>
                      <span className="text-[#0A0A0A] text-[11px] uppercase tracking-widest font-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('site-visit')}
                  className="w-full py-5 bg-[#C8833A] text-white text-[12px] uppercase tracking-[2px] font-bold hover:bg-[#0A0A0A] transition-all duration-300 shadow-xl shadow-accent-copper/20 rounded-[2px] active:scale-[0.98]"
                >
                  Book Your Site Visit
                </button>
                <a
                  href="https://wa.me/919899888015?text=Hi%2C%20I%20want%20to%20schedule%20a%20site%20visit%20for%20Ireo%20The%20Corridors."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-5 border border-[#C8833A] text-[#C8833A] text-[12px] uppercase tracking-[2px] font-bold hover:bg-[#F8F6F3] transition-all duration-300 flex items-center justify-center gap-3 rounded-[2px] active:scale-[0.98]"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 — LOCATION & CONNECTIVITY */}
      <section id="location" className="py-[120px] bg-[#FFFFFF] border-t-[3px] border-[#C8833A]">
        <div className="max-w-7xl mx-auto px-6">
          {/* PART 1A — SECTION HEADER */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C8833A] text-[11px] uppercase tracking-[4px] font-semibold mb-5 block"
            >
              LOCATION
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] md:text-[52px] text-[#0A0A0A] mb-4 leading-tight"
            >
              Perfectly Located. Seamlessly Connected.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6B6B6B] text-[18px] max-w-[900px] mx-auto leading-[1.7] mt-4"
            >
              Ireo The Corridors sits on Golf Course Extension Road, Sector 67A — one of Gurgaon’s most sought-after residential corridors. Backed by the Sohna Elevated Road and SPR, getting anywhere in NCR is quick and stress-free, making it an excellent choice for ready to move flats in Gurgaon.
            </motion.p>
          </div>

          {/* PART 1B — MAP + WHY SECTOR 67A */}
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-[60px] items-start">
            {/* LEFT COLUMN — Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="h-[480px] bg-bg-primary border border-accent-copper/30 rounded-[4px] overflow-hidden relative">
                <img
                  src="/located-seamlessly-connected.webp"
                  alt="Ireo The Corridors Location Map"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Golf Course Ext. Road — Direct Frontage",
                  "Sohna Elevated Road — 0 Mins",
                  "SPR — Seamless Access"
                ].map((tag, idx) => (
                  <div key={idx} className="bg-accent-copper/10 border border-accent-copper/30 px-[18px] py-[10px] rounded-[4px]">
                    <span className="text-accent-copper text-[12px] uppercase tracking-[1.5px] font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN — Why Sector 67A */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <span className="text-[#C8833A] text-[11px] uppercase tracking-[3px] font-bold mb-4">WHY SECTOR 67A?</span>
              <h3 className="font-serif text-[32px] text-[#0A0A0A] leading-[1.3] mb-2">This Is Not a Location Catching Up.</h3>
              <p className="font-serif italic text-[#C8833A] text-[18px] mb-6">It Has Already Arrived.</p>
              <div className="w-12 h-[1px] bg-[#C8833A] mb-6"></div>

              <div className="space-y-5 text-[#6B6B6B] text-[15px] leading-[1.9]">
                <p>
                  Sector 67A is rapidly emerging as one of Gurgaon’s most desirable residential addresses. Flanked by Golf Course Extension Road on one side and the Southern Peripheral Road (SPR) on the other, the area offers unmatched access to Gurgaon’s corporate and retail hubs — without the congestion of older, more established sectors. To better understand the layout and planning, explore the Ireo Corridors site plan.
                </p>
                <p>
                  The recently operationalised Sohna Elevated Road has been a game-changer for this corridor — residents can now reach Rajiv Chowk and NH-48 in under 30 minutes. With a planned metro extension along the SPR corridor, infrastructure investment here continues to drive strong long-term capital appreciation.
                </p>
              </div>

              <div className="mt-7">
                <span className="text-[#C8833A] text-[11px] uppercase tracking-[3px] font-bold mb-4 block">ROAD CONNECTIVITY</span>
                <div className="flex flex-col">
                  {[
                    { title: "NH-248A", desc: "Direct access from project gate" },
                    { title: "Sohna Elevated Road", desc: "0 minutes from project — direct access" },
                    { title: "Southern Peripheral Road (SPR)", desc: "Seamless multi-direction access" },
                    { title: "Golf Course Extension Road", desc: "Primary frontage road" },
                    { title: "NH-48", desc: "National Highway to Delhi — approx. 20 mins" }
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-3 border-b border-[#0A0A0A]/5">
                      <ArrowUpRight size={16} className="text-[#C8833A] mt-1 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[#0A0A0A] text-[14px] font-semibold">{row.title}</span>
                        <span className="text-[#6B6B6B] text-[12px]">{row.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* PART 1C — CONNECTIVITY DISTANCE TABLES */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="text-[#C8833A] text-[12px] uppercase tracking-[3px] font-bold block">DISTANCES AT A GLANCE</span>
            </div>

            {/* Tab Selectors */}
            <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-4 mb-12 pb-2">
              {Object.keys(distanceData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveDistanceTab(tab as keyof typeof distanceData)}
                  className={`px-8 py-4 text-[12px] uppercase tracking-[2px] transition-all duration-300 border shrink-0 ${activeDistanceTab === tab
                    ? 'bg-[#C8833A] border-[#C8833A] text-white'
                    : 'bg-transparent border-[#C8833A]/30 text-[#6B6B6B] hover:border-[#C8833A]'
                    } rounded-[2px] font-semibold`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Table Card */}
            <div className="bg-[#F8F6F3] border border-[#C8833A]/20 rounded-[4px] overflow-hidden shadow-sm">
              <div className="bg-[#C8833A] px-6 py-4 flex justify-between items-center">
                <span className="text-white text-[11px] uppercase tracking-[2px] font-bold">Destination</span>
                <span className="text-white text-[11px] uppercase tracking-[2px] font-bold">Distance / Time</span>
              </div>
              <div className="flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDistanceTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {distanceData[activeDistanceTab].map((row, idx) => (
                      <div
                        key={idx}
                        className={`flex justify-between items-center px-6 py-4 border-b border-[#C8833A]/10 ${idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F8F6F3]'
                          }`}
                      >
                        <span className="text-[#0A0A0A] text-[14px] font-medium">{row.destination}</span>
                        <span className="text-[#C8833A] text-[14px] text-right font-semibold">{row.distance}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Metro Callout Strip */}
            <div className="mt-6 bg-[#F8F6F3] border border-[#C8833A]/25 p-5 md:p-8 rounded-[4px] flex items-start gap-6 shadow-sm">
              <div className="w-12 h-12 bg-[#C8833A]/10 rounded-full flex items-center justify-center shrink-0">
                <Train size={24} className="text-[#C8833A]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#0A0A0A] text-[15px] font-bold">Planned Metro on SPR Corridor — Under Planning</span>
                <p className="text-[#6B6B6B] text-[14px] leading-relaxed">
                  Rapid Metro accessible in 15 mins · HUDA City Centre in 25 mins · The upcoming SPR metro extension will be a major value catalyst for Ireo residents.
                </p>
              </div>
            </div>
          </div>

          {/* PART 1D — SITE VISIT EXPERIENCE BLOCK */}
          <div className="mt-20 bg-[#F8F6F3] border border-[#C8833A]/20 p-8 md:p-16 rounded-[4px] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[60px]">
              {/* LEFT — text content */}
              <div className="flex flex-col">
                <span className="text-[#C8833A] text-[11px] uppercase tracking-[3px] font-bold mb-4">THE DO BIGHA ZAMIN EXPERIENCE</span>
                <h3 className="font-serif text-[36px] text-[#0A0A0A] leading-[1.3] mb-5">See It First. Decide with Confidence.</h3>
                <div className="w-12 h-[1px] bg-[#C8833A] mb-6"></div>
                <p className="text-[#6B6B6B] text-[15px] leading-[1.85] mb-7">
                  As your authorised channel partner, Do Bigha Zamin arranges complimentary site visits to Ireo The Corridors, where our senior advisors guide you through every corner of this 37.5-acre township — ideal for those considering ready to move in flats in Gurgaon.
                </p>
                <div className="flex flex-col">
                  {[
                    { title: "Complimentary Chauffeur Pickup", desc: "Luxury pickup and drop from your doorstep anywhere in Delhi/NCR — at zero charge." },
                    { title: "Expert-Led Clubhouse Walkthrough", desc: "Private guided tour of the 2-acre clubhouse and available apartments." },
                    { title: "Live Pricing & Inventory Discussion", desc: "Real-time pricing and inventory availability discussed upfront and transparently." },
                    { title: "RERA Document Support", desc: "Complete due diligence guidance and RERA documentation verification." }
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-4 border-b border-[#0A0A0A]/5">
                      <CheckCircle2 size={20} className="text-[#C8833A] mt-1 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[#0A0A0A] text-[15px] font-bold">{row.title}</span>
                        <span className="text-[#6B6B6B] text-[13px]">{row.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — contact + CTA card */}
              <div className="bg-[#FFFFFF] border border-[#C8833A]/20 p-9 rounded-[4px] flex flex-col shadow-lg shadow-[#C8833A]/5">
                <span className="text-[#C8833A] text-[11px] uppercase tracking-[2px] font-bold mb-2">BOOK YOUR VISIT</span>
                <h4 className="font-serif text-[26px] text-[#0A0A0A] mb-6">Speak to a Advisor</h4>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C8833A]/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-[#C8833A]" />
                    </div>
                    <span className="text-[#0A0A0A] text-[16px] font-bold">+91 9899 888 015</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C8833A]/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#C8833A]" />
                    </div>
                    <span className="text-[#0A0A0A] text-[14px] font-medium">explore@dobighazam.in</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C8833A]/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-[#C8833A]" />
                    </div>
                    <span className="text-[#6B6B6B] text-[13px] font-medium">Mon–Sun · 10:00 AM – 7:00 PM</span>
                  </div>
                </div>

                <div className="h-[1px] bg-[#C8833A]/20 mb-8"></div>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => scrollToSection('site-visit')}
                    className="bg-[#C8833A] text-white py-5 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#0A0A0A] transition-all shadow-md active:scale-[0.98]"
                  >
                    Schedule a Free Site Visit
                  </button>
                  <a
                    href="https://wa.me/919899888015"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent border border-[#C8833A] text-[#C8833A] py-5 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#C8833A]/5 transition-all text-center flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    WhatsApp Us Now
                  </a>
                  <a
                    href="tel:+919899888015"
                    className="bg-transparent border border-[#6B6B6B]/30 text-[#6B6B6B] py-5 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-black/5 transition-all text-center active:scale-[0.98]"
                  >
                    Call +91 9899 888 015
                  </a>
                </div>
                <p className="text-[#6B6B6B] text-[11px] italic text-center mt-6">
                  Certified Channel Partner · HRERA 378 of 2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 2 — INVESTMENT POTENTIAL */}
      <section id="investment" className="py-[120px] bg-[#FFFFFF] border-t-[3px] border-[#C8833A]">
        <div className="max-w-7xl mx-auto px-6">
          {/* PART 2A — SECTION HEADER */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C8833A] text-[11px] uppercase tracking-[4px] font-bold mb-5 block"
            >
              INVESTMENT
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] md:text-[52px] text-[#0A0A0A] mb-4 leading-tight max-w-[800px] mx-auto"
            >
              Not Just a Home. A High-Yielding Asset.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6B6B6B] text-[18px] max-w-[640px] mx-auto leading-[1.7] mt-4"
            >
              Here is why investors and end-users alike are choosing this ready-to-move township as their smartest real estate decision in 2025.
            </motion.p>
          </div>

          {/* PART 2B — INVESTMENT HERO STATS STRIP */}
          <div className="bg-[#F8F6F3] border-t border-b border-[#C8833A]/25 py-12 px-6 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-[#C8833A]/25">
              {[
                { val: 15, suffix: "%", label: "Annual Capital Appreciation", prefix: "12–" },
                { val: 3.5, suffix: "%+", label: "Rental Yield" },
                { val: 90, suffix: "k", label: "Monthly Rental Range", prefix: "₹42k–₹" },
                { val: 0, suffix: "", label: "Ready to Move — OC Received", prefix: "Zero Risk" },
                { val: 1, suffix: "", label: "Rental Income Starts", prefix: "Day " }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4">
                  <div className="font-serif text-[#C8833A] text-[36px] md:text-[48px] leading-none mb-2">
                    {stat.prefix}
                    {stat.val > 0 ? <AnimatedNumber value={stat.val} /> : ""}
                    {stat.suffix}
                  </div>
                  <span className="text-[#6B6B6B] uppercase text-[11px] tracking-[2px] font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PART 2C — READY TO MOVE ADVANTAGE + RENTAL TABLE */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-[60px] items-start">
            {/* LEFT — Ready to Move Advantage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <span className="text-[#C8833A] text-[11px] uppercase tracking-[3px] font-bold mb-4">READY-TO-MOVE ADVANTAGE</span>
              <h3 className="font-serif text-[32px] text-[#0A0A0A] leading-[1.3] mb-3">Your Money Works from Day One.</h3>
              <div className="w-12 h-[1px] bg-[#C8833A] mb-6"></div>
              <p className="text-[#6B6B6B] text-[15px] leading-[1.9] mb-7">
                Unlike under-construction projects where your money is locked for 2–5 years with no returns and the constant risk of delays, The Corridors Ireo is fully ready. OC received. Possession immediate. This means rental income starts from month one.
              </p>

              <div className="space-y-3 mb-7">
                {[
                  { title: "OC Received — Zero Construction Risk", desc: "Unlike under-construction projects, your investment is in a completed, legally certified asset." },
                  { title: "Immediate Possession Available", desc: "Move in within days of documentation completion. No waiting, no delays, no uncertainty." },
                  { title: "Rental Income from Month One", desc: "Strong corporate rental demand from WorldMark, AIPL, and Cyber City professionals." }
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#F8F6F3] border-l-[3px] border-[#C8833A] p-4 md:p-5 rounded-[2px] shadow-sm"
                  >
                    <span className="text-[#0A0A0A] text-[14px] font-bold block mb-1">{card.title}</span>
                    <p className="text-[#6B6B6B] text-[13px] leading-[1.7]">{card.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6">
                <span className="text-[#C8833A] text-[11px] uppercase tracking-[2px] font-bold mb-4 block">CAPITAL APPRECIATION DRIVERS</span>
                <div className="flex flex-col">
                  {[
                    { title: "12–15% Annual Appreciation on Golf Course Ext. Road", desc: "Historical growth rate as infrastructure in this corridor reaches full maturity." },
                    { title: "Sohna Elevated Road — Already Operational", desc: "Has already driven significant price surge in this micro-market." },
                    { title: "Planned Metro Extension on SPR", desc: "The next major catalyst — metro connectivity will unlock the next price surge." }
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-3 border-b border-[#0A0A0A]/5">
                      <div className="text-[#C8833A] mt-1 shrink-0">▲</div>
                      <div className="flex flex-col">
                        <span className="text-[#0A0A0A] text-[14px] font-semibold">{row.title}</span>
                        <span className="text-[#6B6B6B] text-[13px]">{row.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Rental Income Table */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <span className="text-[#C8833A] text-[11px] uppercase tracking-[3px] font-bold mb-4">RENTAL INCOME POTENTIAL</span>
              <div className="bg-[#FFFFFF] border border-[#C8833A]/25 rounded-[4px] overflow-hidden shadow-sm">
                <div className="bg-[#C8833A] px-6 py-4 flex justify-between items-center">
                  <span className="text-white text-[11px] uppercase tracking-[2px] font-bold">Configuration</span>
                  <span className="text-white text-[11px] uppercase tracking-[2px] font-bold">Monthly Rental</span>
                  <span className="text-white text-[11px] uppercase tracking-[2px] font-bold">Yield</span>
                </div>
                <div className="flex flex-col">
                  {[
                    { config: "2 BHK (1,296 sq.ft)", rental: "₹42,000 – ₹50,000/month", yield: "3.5%+" },
                    { config: "3 BHK (1,727 sq.ft)", rental: "₹60,000 – ₹70,000/month", yield: "3.5%+" },
                    { config: "3 BHK + Servant", rental: "₹75,000 – ₹90,000/month", yield: "3.5%+" }
                  ].map((row, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className={`grid grid-cols-[1.2fr_1.5fr_0.5fr] items-center px-6 py-4 border-b border-[#C8833A]/10 ${idx % 2 === 0 ? 'bg-[#F8F6F3]' : 'bg-[#FFFFFF]'
                        }`}
                    >
                      <span className="text-[#0A0A0A] text-[14px] font-bold">{row.config}</span>
                      <span className="text-[#C8833A] text-[14px] font-semibold">{row.rental}</span>
                      <span className="text-[#0A0A0A] text-[14px] text-right">{row.yield}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-4 bg-[#F8F6F3] border border-[#C8833A]/20 p-5 rounded-[4px] shadow-sm">
                <p className="text-[#6B6B6B] text-[13px] leading-[1.7]">
                  thousands of corporate professionals from WorldMark, AIPL, and Cyber City activeley seek quality rental accommodation here.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Luxury Retail & DPS International — all within 5 km",
                  "Proposed 215-acre university campus adjacent — major driver",
                  "Sector 67A surrounded by Grade-A offices and premium residences"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-4 py-2.5 border-b border-[#0A0A0A]/5">
                    <ChevronRight size={16} className="text-[#C8833A] mt-0.5 shrink-0" />
                    <span className="text-[#6B6B6B] text-[13px] leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* PART 2D — MARKET COMPARISON TABLE */}
          <div className="mt-20">
            <div className="flex flex-col mb-8">
              <span className="text-[#C8833A] text-[12px] uppercase tracking-[3px] font-bold block mb-2">MARKET COMPARISON</span>
              <p className="text-[#6B6B6B] text-[14px]">See how Ireo The Corridors stacks up against standard competing projects in the segment.</p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#C8833A]/20 rounded-[4px] overflow-hidden shadow-sm">
              <div className="bg-[#F8F6F3] grid grid-cols-[1fr_1fr_1fr] px-6 py-4 border-b border-[#C8833A]/10">
                <span className="text-[#6B6B6B] text-[11px] uppercase tracking-[2px] font-bold">FEATURE</span>
                <span className="text-[#C8833A] text-[11px] uppercase tracking-[2px] font-bold">IREO THE CORRIDORS</span>
                <span className="text-[#6B6B6B] text-[11px] uppercase tracking-[2px] font-bold">STANDARD PROJECTS</span>
              </div>
              <div className="flex flex-col">
                {[
                  { feature: "Density", ireo: "36 Families / Acre", comp: "100+ Families / Acre", better: true },
                  { feature: "Green Area", ireo: "60% Landscaped", comp: "20–25% Utility Green", better: true },
                  { feature: "Clubhouse Size", ireo: "2 Acres (2 Stories)", comp: "0.5–1 Acre", better: true },
                  { feature: "Internal Roads", ireo: "Wide corridors", comp: "Narrow / Congested", better: true },
                  { feature: "Air Conditioning", ireo: "Hot & Cold — pre-installed", comp: "Provision only", better: true },
                  { feature: "Possession", ireo: "Ready to Move — OC Received", comp: "Delayed", better: true },
                  { feature: "Price Entry", ireo: "₹2.40 Cr", comp: "Similar or higher", better: true }
                ].map((row, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className={`grid grid-cols-[1fr_1fr_1fr] items-center px-6 py-4 border-b border-[#0A0A0A]/5 ${idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F8F6F3]'
                      }`}
                  >
                    <span className="text-[#6B6B6B] text-[13px] uppercase tracking-[1px] font-medium">{row.feature}</span>
                    <div className="flex items-center gap-2">
                      {row.better && <span className="text-[#C8833A] text-sm font-bold">✓</span>}
                      <span className="text-[#0A0A0A] text-[14px] font-bold">{row.ireo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 text-sm">✗</span>
                      <span className="text-[#6B6B6B] text-[14px]">{row.comp}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-[#6B6B6B] text-[11px] italic mt-4">
              *Comparison based on publicly available information. IREO data is developer-verified.
            </p>
          </div>

          {/* BOTTOM CTA STRIP */}
          <div className="mt-20 bg-[#F8F6F3] border border-[#C8833A]/20 py-10 px-8 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-[4px] shadow-sm">
            <div className="text-center lg:text-left">
              <h4 className="font-serif text-[#0A0A0A] text-[24px] mb-2">Ready for a Smart Investment?</h4>
              <p className="text-[#6B6B6B] text-[14px] max-w-[500px]">Talk to Do Bigha Zamin — Authorised Channel Partner. Zero brokerage. Best price guaranteed.</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <button
                onClick={() => openModal('enquiry')}
                className="bg-[#C8833A] text-white px-8 py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#0A0A0A] transition-all shadow-md"
              >
                Get Details
              </button>
              <button
                onClick={() => scrollToSection('site-visit')}
                className="bg-transparent border border-[#C8833A] text-[#C8833A] px-8 py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#C8833A]/5 transition-all"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — RERA COMPLIANCE */}
      <section id="rera" className="py-[80px] border-t border-accent-copper/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#1A1A1A] border border-accent-copper/20 rounded-[8px] p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-10"
          >
            {/* Icon */}
            <div className="shrink-0 w-[80px] h-[80px] bg-[#2A2208] rounded-[12px] border border-accent-copper/30 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C8833A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <polyline points="9 15 11 17 15 13"/>
              </svg>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-green-600 text-white text-[10px] uppercase tracking-[2px] font-bold px-3 py-1 rounded-full">Verified HRERA</span>
                <span className="text-text-secondary text-[11px] uppercase tracking-[2px]">Safe Asset</span>
              </div>
              <h3 className="font-serif text-white text-[32px] md:text-[40px] mb-4 leading-tight">100% RERA Compliant Project</h3>
              <p className="text-text-secondary text-[14px] leading-relaxed max-w-[620px] mb-6">
                Ireo The Corridors is a fully registered asset under the Haryana Real Estate Regulatory Authority. All structural audits, environment clearances, and legal titles are validated and open for complete public inspection. Your investment is protected by federal laws and premium institutional backing.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-[#0A0A0A] border border-accent-copper/20 rounded-[4px] px-5 py-3 flex items-center gap-4">
                  <div>
                    <p className="text-text-secondary text-[9px] uppercase tracking-[2px] mb-1">Registration No.</p>
                    <p className="text-accent-copper font-mono font-bold text-[15px] tracking-widest">HRERA 378 of 2017</p>
                  </div>
                  <div className="w-[1px] h-8 bg-accent-copper/20"></div>
                  <a
                    href="https://haryanarera.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[11px] uppercase tracking-[2px] font-bold hover:text-accent-copper transition-colors"
                  >
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Side Badges */}
            <div className="flex lg:flex-col gap-4 shrink-0">
              <div className="w-[120px] h-[110px] bg-[#222222] border border-accent-copper/20 rounded-[8px] flex flex-col items-center justify-center gap-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8833A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <p className="text-white text-[11px] font-bold uppercase tracking-[1px]">Clear Title</p>
                <p className="text-text-secondary text-[10px]">Freehold Land</p>
              </div>
              <div className="w-[120px] h-[110px] bg-[#222222] border border-accent-copper/20 rounded-[8px] flex flex-col items-center justify-center gap-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8833A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
                  <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
                <p className="text-white text-[11px] font-bold uppercase tracking-[1px]">Bank Ready</p>
                <p className="text-text-secondary text-[10px]">Leading Approvals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION — IREO INSTITUTIONAL HERITAGE */}
      <section className="py-[100px] bg-[#FFFFFF] border-t border-[#C8833A]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#C8833A] text-[11px] uppercase tracking-[4px] font-semibold mb-4 block">Institutional Heritage</span>
              <h2 className="font-serif text-[#0A0A0A] text-[36px] md:text-[44px] leading-tight mb-6">
                India's First & Largest Private Equity Real Estate Fund
              </h2>
              <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-4">
                Ireo Group isn't just a builder; it's a financial powerhouse. Founded with a vision to bring international quality standards to India, Ireo manages a portfolio of over <strong className="text-[#0A0A0A]">US $2 Billion</strong>.
              </p>
              <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-4">
                Their investor roster includes global giants like <strong className="text-[#C8833A] underline decoration-[#C8833A]/40">JP Morgan Chase, TPG-Axon, and Citadel Investment Group</strong>, alongside prestigious institutions such as <strong className="text-[#C8833A] italic">Stanford University and the University of Rochester</strong>.
              </p>
              <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-8">
                The Corridors Ireo represents the absolute peak of this institutional expertise — a 37.5-acre township that stands as a landmark of global engineering in the heart of South Gurugram.
              </p>
              <div className="bg-[#FDF8F3] border-l-[3px] border-[#C8833A] p-5 rounded-r-[4px]">
                <div className="flex items-start gap-3">
                  <span className="text-[#C8833A] text-[32px] font-serif leading-none mt-[-4px]">"</span>
                  <p className="text-[#4a4a4a] text-[14px] italic leading-relaxed">
                    "Our mission is to replace 'standard' with 'exemplary'. Every acre at the Corridors is a testament to institutional-grade planning."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '$2B+', label: 'PE Fund Size', sub: 'Dedicated to Indian Real Estate' },
                { value: '2004', label: 'Founded', sub: '20+ Years of Indian Legacy' },
                { value: '6+', label: 'States Presence', sub: 'True Pan-India Footprint' },
                { value: 'Elite', label: 'Grade', sub: 'Institutional Quality Standards' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#F8F6F3] border border-[#C8833A]/15 rounded-[8px] p-6 text-center">
                  <p className="font-serif text-[#0A0A0A] text-[36px] md:text-[44px] leading-none mb-2">{stat.value}</p>
                  <p className="text-[#C8833A] text-[10px] uppercase tracking-[2px] font-bold mb-1">{stat.label}</p>
                  <p className="text-[#888] text-[11px]">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION — IREO PAST PROJECTS PORTFOLIO */}
      <section className="py-[100px] bg-[#F8F6F3] border-t border-[#C8833A]/20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-[#0A0A0A] text-[32px] md:text-[40px]">Ireo Corridors — Past Projects Portfolio</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Grand Arch', location: 'Sector 58, Gurgaon', img: '/ireo-grand-arch.webp' },
              { name: 'Victory Valley', location: 'Sector 67, Gurgaon', img: '/ireo-victory-vallyey.webp' },
              { name: 'Skyon', location: 'Sector 60, Gurgaon', img: '/ire-skyon.webp' },
              { name: 'ASCOTT', location: 'Sector 59, Gurgaon, Haryana', img: '/ireo-ascott.webp' },
              { name: 'The Uptown', location: 'Sector 66, Gurgaon, Haryana', img: '/ireo-the-uptown.webp' },
              { name: 'Grand Hyatt', location: 'Sector 58, Gurugram, Haryana', img: '/ireo-grand-hyatt.webp' },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#FFFFFF] rounded-[8px] overflow-hidden border border-[#C8833A]/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-[#0A0A0A] text-[18px] mb-1">{project.name}</h4>
                  <p className="text-[#888] text-[12px] flex items-center gap-1 mb-3">
                    <span className="text-[#C8833A]">📍</span> {project.location}
                  </p>
                  <span className="inline-flex items-center gap-1 bg-green-50 border border-green-200 text-green-700 text-[11px] font-semibold px-3 py-1 rounded-full">
                    ✓ Delivered
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — AUTHORISED CHANNEL PARTNER */}
      <section
        id="authorised-partner"
        className="bg-[#0A0A0A] py-[60px] md:py-[120px] border-t-[3px] border-[#C8833A] relative overflow-hidden"
      >
        {/* subtle grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px",
          }}
        />

        <div className="max-w-[1440px] mx-auto px-5 lg:px-12 relative">

          {/* ── SECTION HEADER ── */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C8833A] text-[11px] uppercase tracking-[4px] font-bold block mb-5"
            >
              AUTHORISED CHANNEL PARTNER
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] md:text-[52px] text-white leading-[1.2] max-w-[760px] mx-auto"
            >
              Why Buy Through Do Bigha Zamin?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif italic text-[18px] text-[#C8833A] leading-[1.7] mt-4 max-w-[620px] mx-auto"
            >
              "Your trusted guide — from first enquiry to final possession."
            </motion.p>
          </div>

          {/* ── WHO WE ARE ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] mb-[72px]">
            {/* LEFT — image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[280px] md:h-[420px] relative overflow-hidden rounded-[2px] shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80"
                alt="Do Bigha Zamin Office"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-[#E8B87E] text-[10px] uppercase tracking-[3px] block mb-2 font-bold">
                  BASED IN GURGAON · SINCE 2020
                </span>
                <h3 className="font-serif text-white text-[28px] leading-[1.3]">Do Bigha Zamin</h3>
                <p className="text-white/70 text-[13px] mt-1.5 leading-[1.6]">
                  Premium Real Estate Advisory · Golf Course Extension Road
                </p>
              </div>

              {/* Verified badge — dark glass */}
              <div className="absolute top-5 right-5 bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#C8833A]/50 px-3.5 py-2 rounded-[2px] flex items-center gap-2">
                <Shield size={14} className="text-[#C8833A]" />
                <span className="text-white text-[11px] uppercase tracking-[1px] font-bold">Verified Partner</span>
              </div>
            </motion.div>

            {/* RIGHT — text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <span className="text-[#C8833A] text-[11px] uppercase tracking-[3px] block mb-4 font-bold">WHO WE ARE</span>
              <h3 className="font-serif text-white text-[32px] leading-[1.3] mb-2">Not Just Brokers.</h3>
              <p className="font-serif italic text-[#C8833A] text-[20px] mb-6">Your Trusted Real Estate Advisors.</p>

              <div className="w-12 h-[1px] bg-[#C8833A] mb-6" />

              <div className="space-y-[18px]">
                {[
                  "Do Bigha Zamin is a RERA-registered real estate advisory firm based in Gurgaon, specialising in premium residential properties across Golf Course Road and Golf Course Extension Road.",
                  "We are an officially authorised channel partner for Ireo The Corridors Gurgaon, working directly with the developer team to bring you accurate pricing, genuine inventory, and the best possible terms.",
                  "In a market full of aggressive salespeople, we operate differently. For buyers exploring Ireo Corridors Gurgaon, our commission is paid by the developer — which means our advice to you is completely free and fully aligned with your interests.",
                ].map((t, i) => (
                  <p key={i} className="text-[#8A8A8A] text-[15px] leading-[1.9]">{t}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {["RERA Registered", "Authorised Partner", "Zero Brokerage"].map((label) => (
                  <div
                    key={label}
                    className="bg-[#141414] border border-[#C8833A]/30 px-[18px] py-2.5 rounded-[2px] text-[#C8833A] text-[11px] uppercase tracking-[1px] font-bold"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── WHAT WE DO FOR YOU ── */}
          <div className="mb-[72px]">
            <div className="text-center mb-12">
              <span className="text-[#C8833A] text-[12px] uppercase tracking-[3px] font-bold">WHAT WE DO FOR YOU</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="
                  bg-[#111111]
                  border border-[#C8833A]/20
                  border-l-[3px] border-l-[#C8833A]
                  p-8 rounded-[2px]
                  transition-all duration-300
                  hover:border-[#C8833A]/50 hover:bg-[#161616] hover:shadow-[0_0_24px_0_rgba(200,131,58,0.08)]
                  group
                "
                >
                  <div className="w-11 h-11 bg-[#1A1A1A] border border-[#C8833A]/25 flex items-center justify-center mb-5 rounded-[2px]">
                    {card.icon}
                  </div>
                  <span className="text-[#C8833A] text-[10px] uppercase tracking-[3px] block mb-2 font-bold">{card.num}</span>
                  <h4 className="font-serif text-white text-[18px] font-bold leading-[1.3] mb-2.5">{card.title}</h4>
                  <div className="w-8 h-[1.5px] bg-[#C8833A] mb-4" />
                  <p className="text-[#6B6B6B] text-[14px] leading-[1.8]">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── TRUST NUMBERS STRIP ── */}
          <div className="bg-[#111111] border-y border-[#C8833A]/25 py-10 md:py-14 px-6 md:px-20 mx-[-20px] md:mx-0">
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0">
              {[
                { value: null, display: <><Counter value={100} />+</>, label: "FAMILIES HELPED" },
                { display: "Zero", label: "BROKERAGE CHARGED" },
                { display: "24/7", label: "ADVISORY SUPPORT" },
                { display: "RERA", label: "VERIFIED FIRM" },
              ].map((item, i, arr) => (
                <>
                  <div key={i} className="flex flex-col items-center gap-2 text-center">
                    <div className="font-serif text-[52px] text-[#C8833A] font-bold leading-none">
                      {item.display}
                    </div>
                    <span className="text-[#5A5A5A] text-[11px] uppercase tracking-[2px] mt-1 font-bold">{item.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <>
                      <div className="hidden md:block w-[1px] h-[60px] bg-[#C8833A]/20 self-center" />
                      <div className="md:hidden w-full h-[1px] bg-[#C8833A]/15" />
                    </>
                  )}
                </>
              ))}
            </div>
          </div>

          {/* ── CTA BLOCK ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
            mt-[72px] max-w-[900px] mx-auto
            bg-[#0E0E0E]
            border border-[#C8833A]/30
            border-t-[3px] border-t-[#C8833A]
            p-10 md:p-14 rounded-[2px] text-center
            shadow-[0_8px_40px_rgba(200,131,58,0.08)]
          "
          >
            <span className="text-[#C8833A] text-[11px] uppercase tracking-[3px] block mb-4 font-bold">
              READY TO GET STARTED?
            </span>
            <h3 className="font-serif text-white text-[38px] leading-[1.2] mb-4">
              Talk to Do Bigha Zamin Today.
            </h3>
            <p className="text-[#6B6B6B] text-[16px] leading-[1.8] max-w-[560px] mx-auto mb-9">
              Whether you have a question about pricing, floor plans, or want to visit the site — our advisors are available 7 days a week. We respond within 30 minutes.
            </p>

            <div className="flex flex-wrap justify-center gap-3.5">
              <button onClick={() => scrollToSection('site-visit')} className="bg-[#C8833A] text-white px-9 py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#E8933A] transition-all shadow-md">
                Book Site Visit
              </button>
              <button className="bg-[#25D366] text-white px-9 py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#20C05E] transition-all shadow-md">
                WhatsApp Us
              </button>
              <button className="bg-transparent border border-[#C8833A] text-[#C8833A] px-9 py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#C8833A]/10 transition-all">
                Call +91 9899 888 015
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {["Zero Brokerage", "RERA Registered", "Direct Developer Terms"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <Check size={14} className="text-[#C8833A]" />
                  <span className="text-white/70 font-bold text-[12px]">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 1 — TESTIMONIALS */}
      <section id="testimonials" className="py-[120px] bg-[#FFFFFF] border-t-[3px] border-[#C8833A]">
        <div className="max-w-7xl mx-auto px-6">
          {/* PART 1A — SECTION HEADER */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C8833A] text-[11px] uppercase tracking-[4px] font-bold mb-5 block"
            >
              VOICES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] md:text-[52px] text-[#0A0A0A] mb-6 leading-tight"
            >
              What Residents Say
            </motion.h2>

            {/* Decorative element */}
            <div className="flex justify-center items-center gap-2 mb-16">
              <div className="w-8 h-[2px] bg-[#C8833A]/30"></div>
              <div className="w-8 h-[2px] bg-[#C8833A]"></div>
              <div className="w-8 h-[2px] bg-[#C8833A]/30"></div>
            </div>
          </div>

          {/* PART 1B — TESTIMONIALS LAYOUT */}
          <div className="relative">
            {/* Decorative opening quote mark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
              <span className="font-serif text-[180px] text-[#C8833A]/10 leading-none">"</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {[
                {
                  initials: "AS",
                  name: "Anand Sharma",
                  title: "Director, IT Firm",
                  tag: "RESIDENT",
                  quote: "Moving from Sector 56 was the best decision we ever made. The breathing space here is unlike anything else in Gurgaon. My kids love the sports courts and the greenery."
                },
                {
                  initials: "PV",
                  name: "Priyanka Verma",
                  title: "Doctor",
                  tag: "RESIDENT",
                  quote: "The low density is a real game changer. After long shifts at the hospital, I value my peace and privacy more than anything. The Corridors delivers exactly that — every evening."
                },
                {
                  initials: "RM",
                  name: "Rohan Malhotra",
                  title: "NRI Investor, UAE",
                  tag: "NRI INVESTOR",
                  quote: "As an NRI investor, the ready-to-move status and Ireo's brand reputation were the two key factors. The rental yield has been consistent since day one. Very happy with the returns."
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-[#F8F6F3] border border-[#C8833A]/20 p-10 rounded-[2px] relative group hover:border-[#C8833A]/55 hover:shadow-md transition-all duration-300 border-l-[3px] border-l-[#C8833A]"
                >
                  {/* Star row */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C8833A] text-[14px]">★</span>
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="font-serif italic text-[#0A0A0A] text-[17px] leading-[1.85] mb-8">
                    {testimonial.quote}
                  </p>

                  {/* Author row */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-[#C8833A] flex items-center justify-center rounded-full shrink-0 shadow-sm">
                        <span className="text-white font-sans text-[14px] font-bold">{testimonial.initials}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#0A0A0A] text-[15px] font-bold">{testimonial.name}</span>
                        <span className="text-[#6B6B6B] text-[12px]">{testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* SECTION 2 — SITE VISIT */}
      <section id="site-visit" className="py-[120px] bg-[#FFFFFF] border-t-[3px] border-[#C8833A]">
        <div className="max-w-7xl mx-auto px-6">
          {/* PART 2A — SECTION HEADER */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C8833A] text-[11px] uppercase tracking-[4px] font-bold mb-5 block"
            >
              VISIT THE SITE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] md:text-[52px] text-[#0A0A0A] mb-6 leading-tight"
            >
              Experience Global Living First-Hand
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6B6B6B] text-[18px] max-w-[640px] mx-auto leading-[1.7] mt-4"
            >
              Book your exclusive guided tour of the 37.5-acre township with Do Bigha Zamin — authorised channel partner for Ireo The Corridors Gurgaon.
            </motion.p>
          </div>

          {/* PART 2B — MAIN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-[60px] items-start">
            {/* LEFT COLUMN — What You Get + Site Info */}
            <div>
              <h3 className="text-[#C8833A] text-[11px] uppercase tracking-[3px] font-bold mb-7">WHAT YOU GET ON A SITE VISIT</h3>

              <div className="space-y-4">
                {[
                  { title: "Complimentary Chauffeur Pickup", desc: "Luxury pickup and drop from your doorstep anywhere in Delhi/NCR, at no charge." },
                  { title: "Expert-Led Walkthrough", desc: "A private tour of the 2-acre clubhouse, landscaped greens, and available sample apartments." },
                  { title: "Live Pricing Discussion", desc: "Real-time pricing, inventory availability, and developer offers — all transparent, all upfront." },
                  { title: "Documentation Guidance", desc: "Our team walks you through all RERA documents, payment plans, and loan options on-site." },
                  { title: "No Pressure. No Rush.", desc: "We are advisors, not salespeople. Take your time and make your decision at your own pace." }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-[#F8F6F3] border border-[#C8833A]/20 p-5 md:p-6 rounded-[2px] flex items-start gap-5 hover:border-[#C8833A]/55 transition-all duration-300 shadow-sm"
                  >
                    <div className="w-8 h-8 border-2 border-[#C8833A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-[#C8833A]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#0A0A0A] text-[15px] font-bold mb-1">{feature.title}</span>
                      <span className="text-[#6B6B6B] text-[13px] leading-[1.7]">{feature.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Site Office Info card */}
              <div className="mt-8 bg-[#F8F6F3] border border-[#C8833A]/25 p-6 md:p-8 rounded-[2px] shadow-sm">
                <div className="flex items-start gap-4 mb-5 pb-5 border-b border-[#C8833A]/15">
                  <MapPin size={18} className="text-[#C8833A] mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[#C8833A] text-[10px] uppercase tracking-[2px] font-bold mb-1">SITE OFFICE</span>
                    <p className="text-[#0A0A0A] text-[14px] font-bold leading-[1.6]">Ireo The Corridors, Sector 67A, Golf Course Extension Road, Gurugram</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={16} className="text-[#C8833A] mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[#C8833A] text-[10px] uppercase tracking-[2px] font-bold mb-1">OPENING HOURS</span>
                    <p className="text-[#0A0A0A] text-[14px] font-bold">Monday – Sunday · 10:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Booking Form Card */}
            <div className="bg-[#FFFFFF] border border-[#C8833A]/35 p-8 md:p-11 rounded-[2px] relative shadow-xl">
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C8833A]"></div>

              <h3 className="font-serif text-[#0A0A0A] text-[26px] mb-2 font-bold">Book Your Site Visit</h3>
              <p className="text-[#6B6B6B] text-[14px] mb-8">Complimentary · No Brokerage · Expert Guided</p>

              <div className="w-full h-[1px] bg-[#C8833A]/20 mb-8"></div>

              <form onSubmit={handleFormSubmit} className="flex flex-col">
                {/* Field 1 */}
                <div className="mb-4">
                  <label className="text-[#C8833A] text-[10px] uppercase tracking-[2px] font-bold mb-2 block">FULL NAME</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={siteVisitForm.fullName}
                    onChange={(e) => setSiteVisitForm({ ...siteVisitForm, fullName: e.target.value })}
                    className={`w-full bg-[#F8F6F3] border ${formErrors.includes('fullName') ? 'border-red-500' : 'border-[#C8833A]/20'} focus:border-[#C8833A] focus:outline-none px-4 py-4 text-[#0A0A0A] text-[14px] rounded-[2px] transition-all`}
                  />
                </div>

                {/* Field 2 */}
                <div className="mb-3.5">
                  <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-medium mb-1.5 block">MOBILE NUMBER</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={siteVisitForm.mobile}
                    onChange={(e) => setSiteVisitForm({ ...siteVisitForm, mobile: e.target.value })}
                    className={`w-full bg-[#F8F6F3] border ${formErrors.includes('mobile') ? 'border-red-500' : 'border-[#C8833A]/20'} focus:border-[#C8833A] focus:outline-none px-4 py-3.5 text-[#0A0A0A] text-[14px] rounded-[2px] transition-all`}
                  />
                  {formErrors.includes('mobile') && <span className="text-red-500 text-[11px] mt-1 block">Enter a valid 10-digit Indian mobile number</span>}
                </div>

                {/* Email */}
                <div className="mb-3.5">
                  <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-medium mb-1.5 block">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={siteVisitForm.email}
                    onChange={(e) => setSiteVisitForm({ ...siteVisitForm, email: e.target.value })}
                    className={`w-full bg-[#F8F6F3] border ${formErrors.includes('email') ? 'border-red-500' : 'border-[#C8833A]/20'} focus:border-[#C8833A] focus:outline-none px-4 py-3.5 text-[#0A0A0A] text-[14px] rounded-[2px] transition-all`}
                  />
                  {formErrors.includes('email') && <span className="text-red-500 text-[11px] mt-1 block">Enter a valid email address</span>}
                </div>

                {/* Field 3 */}
                <div className="mb-3.5">
                  <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-medium mb-1.5 block">PREFERRED DATE</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={siteVisitForm.date}
                    onChange={(e) => setSiteVisitForm({ ...siteVisitForm, date: e.target.value })}
                    className={`w-full bg-[#F8F6F3] border ${formErrors.includes('date') ? 'border-accent-copper' : 'border-accent-copper/20'} focus:border-accent-copper focus:outline-none px-4 py-3.5 text-ivory text-[14px] placeholder:text-text-secondary/50 rounded-[2px] transition-all`}
                  />
                </div>

                {/* Field 4 */}
                <div className="mb-3.5">
                  <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-medium mb-1.5 block">PREFERRED TIME SLOT</label>
                  <select
                    value={siteVisitForm.timeSlot}
                    onChange={(e) => setSiteVisitForm({ ...siteVisitForm, timeSlot: e.target.value })}
                    className={`w-full bg-[#F8F6F3] border ${formErrors.includes('timeSlot') ? 'border-accent-copper' : 'border-accent-copper/20'} focus:border-accent-copper focus:outline-none px-4 py-3.5 text-ivory text-[14px] rounded-[2px] transition-all appearance-none`}
                  >
                    <option value="">Select a time slot</option>
                    <option value="10:00 AM – 12:00 PM">10:00 AM – 12:00 PM</option>
                    <option value="12:00 PM – 02:00 PM">12:00 PM – 02:00 PM</option>
                    <option value="02:00 PM – 04:00 PM">02:00 PM – 04:00 PM</option>
                    <option value="04:00 PM – 06:00 PM">04:00 PM – 06:00 PM</option>
                    
                  </select>
                </div>

                {/* Field 5 */}
                <div className="mb-3.5">
                  <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-medium mb-1.5 block">COMPLIMENTARY PICKUP REQUIRED?</label>
                  <div className="flex gap-0">
                    <button
                      type="button"
                      onClick={() => setPickupRequired(true)}
                      className={`w-1/2 py-4 text-[11px] uppercase tracking-[1px] font-bold border transition-all ${pickupRequired ? 'bg-[#C8833A] border-[#C8833A] text-white' : 'bg-transparent border-[#C8833A]/30 text-[#C8833A]'} rounded-l-[2px]`}
                    >
                      Yes — Pickup Needed
                    </button>
                    <button
                      type="button"
                      onClick={() => setPickupRequired(false)}
                      className={`w-1/2 py-4 text-[11px] uppercase tracking-[1px] font-bold border transition-all ${!pickupRequired ? 'bg-[#C8833A] border-[#C8833A] text-white' : 'bg-transparent border-[#C8833A]/30 text-[#C8833A]'} rounded-r-[2px]`}
                    >
                      No — I'll Drive
                    </button>
                  </div>
                </div>


                {siteVisitSuccess ? (
                  <div className="text-center py-6 border border-[#C8833A]/30 bg-[#FDF8F3] rounded-[2px]">
                    <CheckCircle2 className="text-[#C8833A] w-10 h-10 mx-auto mb-3" />
                    <p className="text-[#C8833A] text-[13px] uppercase tracking-[2px] font-bold mb-1">Site Visit Confirmed!</p>
                    <p className="text-[#4a4a4a] text-[13px]">Our team will call you to finalise the schedule.</p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={siteVisitSubmitting}
                    className="w-full bg-[#C8833A] text-white py-4.5 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] mt-2 hover:bg-[#0A0A0A] transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {siteVisitSubmitting ? 'Submitting...' : <>Confirm My Site Visit <ArrowRight size={14} /></>}
                  </button>
                )}

                {formErrors.includes('submit') && (
                  <p className="text-red-500 text-[12px] text-center mt-2">Failed to submit. Please try again.</p>
                )}

                <p className="text-[#6B6B6B] text-[11px] italic text-center mt-4 leading-relaxed">
                  By submitting, you agree to be contacted by Do Bigha Zamin. Your information is safe with us and will not be shared with third parties.
                </p>

                <div className="flex items-center justify-center gap-3 mt-6 pt-5 border-t border-[#C8833A]/15">
                  <span className="text-[#6B6B6B] text-[12px]">Prefer to call?</span>
                  <span className="text-[#C8833A] text-[13px] font-bold">+91 9899 888 015</span>
                </div>
              </form>
            </div>
          </div>

          {/* PART 2C — TRUST BADGES STRIP */}
          <div className="mt-20 bg-[#F8F6F3] border-y border-[#C8833A]/15 py-10 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
                {[
                  { icon: <Shield size={24} />, text: "HRERA Verified" },
                  { icon: <CheckCircle2 size={24} />, text: "OC Received" },
                  { icon: <Building2 size={24} />, text: "Bank Approved" },
                  { icon: <Ban size={24} />, text: "Zero Brokerage" },
                  { icon: <Star size={24} />, text: "Authorised Partner" }
                ].map((badge, idx) => (
                  <React.Fragment key={idx}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`flex flex-col items-center gap-2 text-center ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                    >
                      <div className="text-[#C8833A]">{badge.icon}</div>
                      <span className="text-[#0A0A0A] text-[13px] font-bold uppercase tracking-[1px]">{badge.text}</span>
                    </motion.div>
                    {idx < 4 && <div className="hidden md:block w-[1px] h-10 bg-[#C8833A]/20"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FAQ */}
      <section id="faq" className="bg-[#FFFFFF] py-[120px] border-t-[3px] border-[#C8833A]">
        <div className="max-w-7xl mx-auto px-6">
          {/* PART 2A — SECTION HEADER */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C8833A] uppercase tracking-[4px] text-[11px] font-bold block mb-5"
            >
              COMMON QUESTIONS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] md:text-[52px] text-[#0A0A0A] leading-tight mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-[860px] mx-auto flex flex-col gap-4">
            {faqData.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`border transition-all duration-300 rounded-[2px] overflow-hidden ${activeFaqIdx === idx ? 'bg-[#FFFFFF] border-[#C8833A]/40 shadow-md' : 'bg-[#F8F6F3] border-[#C8833A]/15 hover:border-[#C8833A]/30'}`}
              >
                <button
                  onClick={() => setActiveFaqIdx(activeFaqIdx === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left gap-6 group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[#C8833A] font-serif text-[18px] font-bold opacity-60">{faq.number}</span>
                    <span className={`text-[18px] md:text-[16px] font-bold transition-colors duration-300 ${activeFaqIdx === idx ? 'text-[#C8833A]' : 'text-[#0A0A0A] group-hover:text-[#C8833A]'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 flex items-center justify-center border border-[#C8833A]/20 rounded-full transition-all duration-500 ${activeFaqIdx === idx ? 'rotate-45 bg-[#C8833A] text-white' : 'text-[#C8833A] group-hover:bg-[#C8833A]/10'}`}>
                    <Plus size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {activeFaqIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 pt-2 ml-14 md:ml-0 border-l-2 border-[#C8833A]/30">
                        <p className="text-[#6B6B6B] text-[16px] leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        {faq.bullets && (
                          <ul className="flex flex-col gap-3">
                            {faq.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#C8833A] rounded-full mt-2 shrink-0"></div>
                                <span className="text-[#6B6B6B] text-[15px]">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* FAQ Bottom CTA Strip */}
          <div className="mt-20 bg-[#F8F6F3] border border-[#C8833A]/20 py-12 px-6 rounded-[2px] shadow-sm">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[#C8833A] uppercase tracking-[3px] text-[10px] font-bold block mb-4">STILL HAVE QUESTIONS?</span>
              <h3 className="text-[#0A0A0A] font-serif text-[32px] md:text-[24px] mb-4">We're Here to Help — 7 Days a Week</h3>
              <p className="text-[#6B6B6B] text-[16px] mb-10 max-w-2xl mx-auto">
                If you couldn't find the answer you were looking for, feel free to reach out to our team directly.
              </p>

              <div className="flex flex-wrap justify-center gap-5">
                <button className="bg-[#C8833A] text-white px-8 py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#0A0A0A] transition-all shadow-md flex items-center gap-2">
                  <Phone size={14} /> Call Us Now
                </button>
                <button className="bg-[#25D366] text-white px-8 py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#25D366]/90 transition-all shadow-md flex items-center gap-2">
                  <MessageCircle size={14} /> WhatsApp Us
                </button>
                <button
                  onClick={() => openModal('enquiry')}
                  className="bg-transparent border border-[#C8833A] text-[#C8833A] px-8 py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#C8833A]/5 transition-all flex items-center gap-2"
                >
                  <Mail size={14} /> Send an Enquiry
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-[#6B6B6B] text-[13px]">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#C8833A]" />
                  <span>9:00 AM — 8:00 PM IST</span>
                </div>
                <div className="w-1 h-1 bg-[#C8833A]/30 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#C8833A]" />
                  <span>+91 9899 888 015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — ENQUIRY / CONTACT FORM */}
      <section id="enquiry" className="bg-bg-primary py-[120px] md:py-[60px] border-t border-accent-copper/30">
        <div className="max-w-7xl mx-auto px-6">
          {/* PART 1A — SECTION HEADER */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-copper uppercase tracking-[4px] text-[11px] font-bold block mb-5"
            >
              GET IN TOUCH
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[52px] md:text-[34px] text-white leading-tight mb-6"
            >
              Let's Discuss Your Dream Home
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-[18px] md:text-[16px] max-w-2xl mx-auto leading-relaxed"
            >
              Our property experts are available 7 days a week to assist you with pricing, floor plans, and private site visits.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-start">
            {/* Left Column — Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div>
                <h3 className="text-[white] text-[24px] font-serif mb-8 border-l-2 border-accent-copper pl-5">REACH US DIRECTLY</h3>
                <div className="flex flex-col gap-6">
                  {[
                    { icon: <Phone size={20} />, label: "Call for Enquiries", value: "+91 9899 888 015" },
                    { icon: <MessageCircle size={20} />, label: "WhatsApp Chat", value: "+91 9899 888 015" },
                    { icon: <Mail size={20} />, label: "Email Address", value: "explore@dobighazam.in" },
                    
                    { icon: <MapPin size={20} />, label: "Corporate Office", value: "15th Floor, OCUS Quantum, Sector 51, Gurgaon" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-5 group">
                      <div className="w-10 h-10 bg-bg-secondary border border-accent-copper/20 flex items-center justify-center text-accent-copper group-hover:bg-accent-copper group-hover:text-white transition-all duration-300 rounded-[2px]">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-text-secondary text-[11px] uppercase tracking-[2px] mb-1">{item.label}</span>
                        <span className="text-white/75 text-[16px] font-medium">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            

              {/* Cinematic Image Block */}
              <div className="relative h-[280px] group overflow-hidden rounded-[2px]">
                <img
                  src="/discuss-your-dream-home.webp"
                  alt="Ireo Corridors"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield size={16} className="text-accent-copper" />
                    <span className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Authorised Partner</span>
                  </div>
                  <h4 className="text-ivory font-serif text-[22px] leading-tight mb-2">Do Bigha Zamin</h4>
                  <p className="text-text-secondary text-[12px] leading-relaxed">
                    Official marketing & advisory partner for Ireo The Corridors. RERA Registered.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-accent-copper text-white py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-accent-copper hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone size={14} /> Call Now
                </button>
                <button className="bg-emerald-600 text-white py-4 text-[12px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle size={14} /> WhatsApp
                </button>
              </div>
            </motion.div>

            {/* Right Column — Enquiry Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-secondary border border-accent-copper/25 p-10 md:p-6 relative rounded-[2px]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-copper"></div>
              <div className="mb-10">
                <h3 className="text-white text-[28px] font-serif mb-3">Send Us an Enquiry</h3>
                <p className="text-text-secondary text-[14px]">Fill out the form below and our team will get back to you with the best available pricing and inventory.</p>
              </div>

              <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={enquiryForm.fullName}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                      className={`bg-bg-primary border ${enquiryErrors.includes('fullName') ? 'border-accent-copper' : 'border-accent-copper/20'} focus:border-accent-copper focus:outline-none px-5 py-4 text-white text-[14px] rounded-[2px] transition-all`}
                    />
                    {enquiryErrors.includes('fullName') && <span className="text-accent-copper text-[10px] italic">Name is required</span>}
                  </div>
                  {/* Mobile Number */}
                  <div className="flex flex-col gap-2">
                    <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit number"
                      value={enquiryForm.mobile}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, mobile: e.target.value })}
                      className={`bg-bg-primary border ${enquiryErrors.includes('mobile') ? 'border-accent-copper' : 'border-accent-copper/20'} focus:border-accent-copper focus:outline-none px-5 py-4 text-white text-[14px] rounded-[2px] transition-all`}
                    />
                    {enquiryErrors.includes('mobile') && <span className="text-accent-copper text-[10px] italic">Enter a valid 10-digit Indian mobile number</span>}
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                    className={`bg-bg-primary border ${enquiryErrors.includes('email') ? 'border-accent-copper' : 'border-accent-copper/20'} focus:border-accent-copper focus:outline-none px-5 py-4 text-white text-[14px] rounded-[2px] transition-all`}
                  />
                  {enquiryErrors.includes('email') && <span className="text-accent-copper text-[10px] italic">Enter a valid email address</span>}
                </div>

                {/* Interested Configuration */}
                <div className="flex flex-col gap-4">
                  <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Interested Configuration</label>
                  <div className="flex flex-wrap gap-3">
                    {["2 BHK", "2 BHK + Study", "3 BHK", "3 BHK + Servant", "Not Sure"].map((config) => (
                      <button
                        key={config}
                        type="button"
                        onClick={() => setEnquiryForm({ ...enquiryForm, configuration: config })}
                        className={`px-4 py-2.5 text-[12px] font-medium border transition-all duration-300 rounded-[2px] ${enquiryForm.configuration === config
                          ? 'bg-accent-copper border-accent-copper text-white'
                          : 'bg-transparent border-accent-copper/20 text-text-secondary hover:border-accent-copper/60'
                          }`}
                      >
                        {config}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Contact Time */}
                <div className="flex flex-col gap-4">
                  <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Preferred Contact Time</label>
                  <div className="flex flex-wrap gap-3">
                    {["Morning", "Afternoon", "Evening", "Anytime"].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setEnquiryForm({ ...enquiryForm, preferredTime: time })}
                        className={`px-4 py-2.5 text-[12px] font-medium border transition-all duration-300 rounded-[2px] ${enquiryForm.preferredTime === time
                          ? 'bg-accent-copper border-accent-copper text-white'
                          : 'bg-transparent border-accent-copper/20 text-text-secondary hover:border-accent-copper/60'
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Message / Specific Question</label>
                  <textarea
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    className="bg-bg-primary border border-accent-copper/20 focus:border-accent-copper focus:outline-none px-5 py-4 text-white text-[14px] rounded-[2px] transition-all resize-none"
                  ></textarea>
                </div>

                {enquirySuccess ? (
                  <div className="w-full bg-accent-copper/10 border border-accent-copper/30 rounded-[2px] py-5 flex flex-col items-center gap-2">
                    <CheckCircle2 size={24} className="text-accent-copper" />
                    <p className="text-accent-copper text-[13px] font-bold uppercase tracking-[2px]">Enquiry Submitted!</p>
                    <p className="text-text-secondary text-[12px]">A confirmation email has been sent. Our advisor will call you shortly.</p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={enquirySubmitting}
                    className="w-full bg-accent-copper text-white py-5 text-[13px] uppercase tracking-[3px] font-bold rounded-[2px] hover:bg-accent-gold transition-all duration-500 shadow-lg shadow-accent-copper/10 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {enquirySubmitting ? (
                      <>
                        <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }} className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>Get Best Price & Callback <ArrowRight size={16} /></>
                    )}
                  </button>
                )}

                <p className="text-text-secondary text-[11px] text-center italic leading-relaxed">
                  * By clicking submit, you agree to our privacy policy and consent to receive calls/messages from our authorized representatives.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>






      {/* SECTION 3 — FOOTER */}
      <footer className="bg-bg-primary border-t border-accent-copper/30 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Column 1 - Brand */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl text-text-accent tracking-tight">THE CORRIDORS</span>
                  <span className="text-accent-copper text-xl font-light">| ireo</span>
                </div>
                <span className="text-[11px] text-accent-copper uppercase tracking-[1.5px] mt-1">Presented by Do Bigha Zamin</span>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                This website is operated by Do Bigha Zamin as an authorised channel partner. Not the official website of Ireo Group.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 border border-accent-copper/30 flex items-center justify-center text-accent-copper hover:bg-accent-copper hover:text-white transition-all cursor-pointer">
                    <div className="w-3 h-3 bg-current rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-accent-copper uppercase tracking-[3px] text-xs font-semibold">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {['Overview', 'Floor Plans', 'Amenities', 'Gallery', 'Location', 'Investment', 'Developer', 'RERA', 'FAQ', 'Contact'].map(link => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                      className="text-text-secondary text-sm hover:text-accent-copper transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div className="flex flex-col gap-6">
              <h4 className="text-accent-copper uppercase tracking-[3px] text-xs font-semibold">Contact</h4>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-text-secondary text-[10px] uppercase tracking-wider mb-1">Phone</span>
                  <span className="text-white text-sm">+91 9899 888 015</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-text-secondary text-[10px] uppercase tracking-wider mb-1">Email</span>
                  <span className="text-white text-sm">explore@dobighazam.in</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-text-secondary text-[10px] uppercase tracking-wider mb-1">Address</span>
                  <span className="text-white text-sm leading-relaxed">15th Floor, OCUS Quantum, Sector 51, Gurgaon</span>
                </div>
              </div>
            </div>

            {/* Column 4 - RERA & Legal */}
            <div className="flex flex-col gap-6">
              <h4 className="text-accent-copper uppercase tracking-[3px] text-xs font-semibold">RERA & Legal</h4>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-accent-copper/10 pb-2">
                  <span className="text-text-secondary text-xs">HRERA Phase 1</span>
                  <span className="text-white text-xs font-medium">378 of 2017</span>
                </div>
                <div className="flex justify-between items-center border-b border-accent-copper/10 pb-2">
                  <span className="text-text-secondary text-xs">HRERA Phase 2</span>
                  <span className="text-white text-xs font-medium">377 of 2017</span>
                </div>
                <div className="flex justify-between items-center border-b border-accent-copper/10 pb-2">
                  <span className="text-text-secondary text-xs">OC Status</span>
                  <span className="text-white text-xs font-medium">Received</span>
                </div>
                <div className="flex justify-between items-center border-b border-accent-copper/10 pb-2">
                  <span className="text-text-secondary text-xs">Title</span>
                  <span className="text-white text-xs font-medium">Freehold Clear</span>
                </div>
                <a href="https://hareraggm.gov.in" target="_blank" rel="noreferrer" className="text-accent-gold text-[10px] uppercase tracking-widest mt-2 hover:underline">
                  Verify at hareraggm.gov.in
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="pt-8 border-t border-accent-copper/20 flex justify-center items-center">
            <span className="text-text-secondary text-[11px]">© 2025 Do Bigha Zamin. All rights reserved.</span>
          </div>
        </div>
      </footer>


      {/* ── QUICK LEAD MODAL ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { if (!modalSubmitting) setActiveModal(null); }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000]"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="fixed inset-0 flex items-center justify-center z-[10001] px-4 py-6"
            >
              <div
                className="w-full max-w-[480px] bg-[#1C1C1C] border border-accent-copper/30 rounded-[3px] overflow-hidden shadow-2xl shadow-black/70 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top copper strip */}
                <div className="h-[3px] bg-gradient-to-r from-accent-copper via-accent-gold to-accent-copper" />

                {/* Header */}
                <div className="bg-gradient-to-r from-[#161616] to-[#231808] px-8 py-6 flex items-start justify-between">
                  <div>
                    <span className="text-accent-copper text-[10px] uppercase tracking-[3px] font-bold block mb-1.5">
                      IREO THE CORRIDORS
                    </span>
                    <h3 className="font-serif text-white text-[22px] font-normal leading-tight">
                      {activeModal === 'enquiry' && 'Request a Callback'}
                      {activeModal === 'floor-plan' && 'Download Floor Plans'}
                      {activeModal === 'brochure' && 'Request Brochure'}
                      {activeModal === 'site-visit' && 'Schedule a Site Visit'}
                      {activeModal === 'master-plan' && 'Download Master Plan'}
                    </h3>
                    <p className="text-text-secondary text-[12px] mt-1.5 leading-relaxed">
                      {activeModal === 'enquiry' && 'Our advisor will call you back within 30 minutes.'}
                      {activeModal === 'floor-plan' && 'Share your details to receive the floor plan PDF.'}
                      {activeModal === 'brochure' && 'Get the complete project brochure on your email.'}
                      {activeModal === 'site-visit' && 'Free chauffeur pickup anywhere in Delhi/NCR.'}
                      {activeModal === 'master-plan' && 'The PDF will be sent directly to your email.'}
                    </p>
                  </div>
                  {!modalSubmitting && (
                    <button
                      onClick={() => setActiveModal(null)}
                      className="text-text-secondary hover:text-white transition-colors ml-4 mt-0.5 flex-shrink-0"
                      aria-label="Close"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>

                {/* Body */}
                <div className="px-8 py-8">
                  {modalSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center text-center gap-4 py-6"
                    >
                      <div className="w-16 h-16 bg-accent-copper/10 border border-accent-copper/30 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={32} className="text-accent-copper" />
                      </div>
                      <h4 className="font-serif text-white text-[20px]">Thank You!</h4>
                      <p className="text-text-secondary text-[14px] leading-relaxed max-w-[320px]">
                        {activeModal === 'floor-plan' && 'Your floor plan is downloading. A confirmation has been sent to your email.'}
                        {activeModal === 'master-plan' && 'The Ireo The Corridors Master Plan PDF has been sent to your email. Check your inbox — and your spam folder if needed.'}
                        {(activeModal === 'enquiry' || activeModal === 'brochure' || activeModal === 'site-visit') && "We've received your details and sent a confirmation to your email. Our advisor will be in touch shortly."}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleModalSubmit} className="flex flex-col gap-5" noValidate>
                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Full Name *</label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={modalForm.name}
                          onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                          className={`bg-[#0A0A0A] border ${modalErrors.name ? 'border-accent-copper' : 'border-accent-copper/20'} focus:border-accent-copper focus:outline-none px-4 py-3.5 text-white text-[14px] rounded-[2px] transition-all placeholder:text-text-secondary/50`}
                        />
                        {modalErrors.name && <span className="text-accent-copper text-[10px] italic">{modalErrors.name}</span>}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Phone Number *</label>
                        <input
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={modalForm.phone}
                          onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                          className={`bg-[#0A0A0A] border ${modalErrors.phone ? 'border-accent-copper' : 'border-accent-copper/20'} focus:border-accent-copper focus:outline-none px-4 py-3.5 text-white text-[14px] rounded-[2px] transition-all placeholder:text-text-secondary/50`}
                        />
                        {modalErrors.phone && <span className="text-accent-copper text-[10px] italic">{modalErrors.phone}</span>}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Email Address *</label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          value={modalForm.email}
                          onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                          className={`bg-[#0A0A0A] border ${modalErrors.email ? 'border-accent-copper' : 'border-accent-copper/20'} focus:border-accent-copper focus:outline-none px-4 py-3.5 text-white text-[14px] rounded-[2px] transition-all placeholder:text-text-secondary/50`}
                        />
                        {modalErrors.email && <span className="text-accent-copper text-[10px] italic">{modalErrors.email}</span>}
                      </div>

                      {/* Configuration — shown for floor-plan only (not enquiry modal) */}
                      {activeModal === 'floor-plan' && (
                        <div className="flex flex-col gap-1.5">
                          <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Configuration</label>
                          <select
                            value={modalForm.config}
                            onChange={(e) => setModalForm({ ...modalForm, config: e.target.value })}
                            className="bg-[#0A0A0A] border border-accent-copper/20 focus:border-accent-copper focus:outline-none px-4 py-3.5 text-white text-[14px] rounded-[2px] transition-all"
                          >
                            <option value="">Not Sure</option>
                            <option value="2 BHK">2 BHK — ₹2.40 Cr*</option>
                            <option value="2 BHK + Study">2 BHK + Study — ₹2.85 Cr*</option>
                            <option value="3 BHK">3 BHK — ₹3.95 Cr*</option>
                            <option value="3 BHK + Servant">3 BHK + Servant — ₹5.04 Cr*</option>
                          </select>
                        </div>
                      )}

                      {/* Preferred Date — shown for site-visit */}
                      {activeModal === 'site-visit' && (
                        <div className="flex flex-col gap-1.5">
                          <label className="text-accent-copper text-[10px] uppercase tracking-[2px] font-bold">Preferred Visit Date</label>
                          <input
                            type="date"
                            value={modalForm.preferredDate}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={(e) => setModalForm({ ...modalForm, preferredDate: e.target.value })}
                            className="bg-[#0A0A0A] border border-accent-copper/20 focus:border-accent-copper focus:outline-none px-4 py-3.5 text-white text-[14px] rounded-[2px] transition-all"
                          />
                        </div>
                      )}

                      {/* Submit error */}
                      {modalErrors.submit && (
                        <p className="text-red-400 text-[12px] italic">{modalErrors.submit}</p>
                      )}

                      <button
                        type="submit"
                        disabled={modalSubmitting}
                        className="w-full bg-accent-copper text-white py-4 text-[12px] uppercase tracking-[3px] font-bold rounded-[2px] hover:bg-accent-gold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1 shadow-[0_4px_20px_rgba(200,131,58,0.25)]"
                      >
                        {modalSubmitting ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                              className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            {activeModal === 'floor-plan' && <>Download Now <ArrowRight size={14} /></>}
                            {activeModal === 'brochure' && <>Send Brochure to My Email <ArrowRight size={14} /></>}
                            {activeModal === 'site-visit' && <>Confirm Visit Request <ArrowRight size={14} /></>}
                            {activeModal === 'enquiry' && <>Get Best Price & Callback <ArrowRight size={14} /></>}
                            {activeModal === 'master-plan' && <>Send Master Plan to My Email <ArrowRight size={14} /></>}
                          </>
                        )}
                      </button>

                      <p className="text-text-secondary text-[10px] text-center italic leading-relaxed">
                        By submitting, you consent to being contacted by our authorised representatives. Zero brokerage guaranteed.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <FloatingActionButtons />
    </div>
  );
}
