"use client";

import { ArrowUp, Award } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#412d17] text-white py-12 relative overflow-hidden">
      
      {/* Torn Edge Accent Top */}
      <div className="absolute top-0 left-0 right-0 h-[10px] bg-[#fbf8ee] border-b-2 border-[#412d17] z-10 pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-8 mb-8">
          
          {/* Logo / Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#f6d41c] text-[#412d17] p-1.5 rounded-lg font-black text-xs sketch-border">
                DX-09
              </div>
              <span className="font-extrabold text-base tracking-wide text-white">
                Build WebApp with AI Vibe Coding
              </span>
            </div>
            <p className="text-xs font-medium text-white/60">
              จัดโดยสถาบันเพิ่มผลผลิตแห่งชาติ (FTPI)
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-white/80">
            <button
              onClick={() => scrollToSection("curriculum-section")}
              className="hover:text-[#f6d41c] transition-colors cursor-pointer"
            >
              เนื้อหาหลักสูตร
            </button>
            <button
              onClick={() => scrollToSection("pricing-section")}
              className="hover:text-[#f6d41c] transition-colors cursor-pointer"
            >
              ค่าลงทะเบียน
            </button>
            <Link
              href="/ai-vault"
              className="hover:text-[#f6d41c] text-[#f6d41c] transition-colors cursor-pointer"
            >
              คลังแสง AI ⚡
            </Link>
            <a
              href="https://productivity.ftpi.or.th/event/35117/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f6d41c] transition-colors"
            >
              ลิงก์ลงทะเบียนเว็บ FTPI 🔗
            </a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 p-2.5 rounded-xl border border-white/20 transition-all cursor-pointer group"
              aria-label="เลื่อนขึ้นบนสุด"
            >
              <ArrowUp className="w-5 h-5 text-[#f6d41c] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Footer Bottom Copy */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 text-xs font-semibold text-white/40">
          <div>
            © {new Date().getFullYear()} Thailand Productivity Institute. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4" /> สถาบันเพิ่มผลผลิตแห่งชาติ
          </div>
        </div>

      </div>
    </footer>
  );
}
