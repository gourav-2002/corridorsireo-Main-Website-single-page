import { Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#1C1C1C] border-b border-[rgba(200,131,58,0.2)]">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-12 h-[85px] flex items-center justify-between">
          <a href="/" className="flex flex-col group shrink-0">
            <div className="flex items-center gap-0">
              <span className="font-serif text-[18px] lg:text-[20px] text-white tracking-tight leading-none whitespace-nowrap">
                THE CORRIDORS
              </span>
              <span className="mx-1 lg:mx-2 text-[#C8833A] text-[18px] lg:text-[20px] font-light leading-none">|</span>
              <span className="text-[#C8833A] text-[18px] mr-6 lg:text-[20px] font-light leading-none tracking-wide">ireo</span>
            </div>
            <span className="text-[8px] lg:text-[9px] text-[#A0A0A0] uppercase tracking-[1.5px] mt-1 font-medium group-hover:text-[#C8833A] transition-colors whitespace-nowrap">
              Presented by Do Bigha Zamin
            </span>
          </a>

          <a
            href="tel:+919899888015"
            className="hidden sm:flex items-center gap-2 group whitespace-nowrap"
          >
            <Phone size={14} className="text-[#C8833A] group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-[13px] text-[#C8833A] font-semibold tracking-wide">+91 9899 888 015</span>
          </a>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 pt-[85px]">
        <div className="max-w-[600px] w-full text-center py-24 flex flex-col items-center gap-8">
          {/* Decorative line */}
          <div className="flex items-center gap-4 w-full max-w-[200px]">
            <div className="flex-1 h-px bg-[rgba(200,131,58,0.3)]" />
            <span className="text-[#C8833A] text-[11px] uppercase tracking-[4px] font-medium">404</span>
            <div className="flex-1 h-px bg-[rgba(200,131,58,0.3)]" />
          </div>

          <h1 className="font-serif text-[52px] lg:text-[72px] text-white leading-[1.05] tracking-tight">
            Page Not<br />
            <span className="text-[#C8833A] italic">Found</span>
          </h1>

          <p className="text-[#A0A0A0] text-[15px] lg:text-[16px] leading-relaxed max-w-[420px]">
            The page you're looking for doesn't exist or has been moved. Let us guide you back to The Corridors.
          </p>

          {/* Divider */}
          <div className="w-12 h-[1.5px] bg-[#C8833A]" />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="/"
              className="w-full sm:w-auto bg-[#C8833A] text-white px-8 py-4 text-[11px] uppercase tracking-[2px] font-bold rounded-[2px] hover:bg-[#E8B87E] transition-all duration-300 shadow-[0_4px_20px_rgba(200,131,58,0.25)] whitespace-nowrap"
            >
              Back to Home
            </a>
            <a
              href="tel:+919899888015"
              className="w-full sm:w-auto border border-[rgba(200,131,58,0.4)] text-[#C8833A] px-8 py-4 text-[11px] uppercase tracking-[2px] font-bold rounded-[2px] hover:border-[#C8833A] hover:bg-[rgba(200,131,58,0.05)] transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Phone size={13} />
              Call Us
            </a>
          </div>

          {/* Footer note */}
          <p className="text-[#A0A0A0] text-[11px] uppercase tracking-[2px] mt-4">
            Ireo The Corridors — Sector 67A, Gurugram
          </p>
        </div>
      </main>

      {/* Bottom accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#C8833A] to-transparent opacity-40" />
    </div>
  );
}
