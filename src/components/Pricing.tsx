"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function Pricing() {
  const inclusions = [
    "สิทธิ์เข้าอบรมสำหรับผู้เรียน 2 ท่าน (สมัคร 1 อบรมได้ 2 คน)",
    "รับวุฒิบัตร E-Certificate รับรองจากสถาบันเพิ่มผลผลิตแห่งชาติ",
    "ระบบวิดีโอบันทึกย้อนหลังสำหรับทบทวนบทเรียนได้นาน 15 วัน",
    "สิทธิ์เข้ากลุ่มเรียนรู้หลังการอบรมเพื่อรับคำปรึกษาและอัปเดตเครื่องมือ",
  ];

  return (
    <section id="pricing-section" className="relative w-full bg-white py-16 md:py-24 border-b-4 border-[#412d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#ea580c] text-white text-sm sm:text-base font-extrabold px-6 py-2 rounded-full sketch-border sketch-shadow-sm rotate-[1.5deg] mb-5">
            ราคาคุ้มค่าเพื่อการเติบโตขององค์กร 💼
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#412d17] leading-tight">
            ค่าธรรมเนียมในการสมัครอบรม
          </h2>
        </div>

        {/* Pricing Ticket Container */}
        <div className="max-w-xl mx-auto bg-[#fbf8ee] sketch-border-thick rounded-3xl p-6 sm:p-10 sketch-shadow-lg relative overflow-hidden">
          
          {/* Post-it Badge decoration */}
          <div className="absolute top-4 -right-12 bg-[#d64545] text-white text-xs font-black py-2 px-12 rotate-[45deg] sketch-border-sm text-center uppercase tracking-wider select-none shadow-sm">
            คุ้มที่สุด!
          </div>

          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Offer Detail */}
            <div className="bg-[#f6d41c] text-[#412d17] text-base sm:text-lg font-black px-8 py-3 rounded-2xl sketch-border sketch-shadow rotate-[-1.5deg] tracking-wide inline-block">
              🔥 ดีลพิเศษ: สมัคร 1 อบรมได้ 2 คน
            </div>

            {/* Price Display */}
            <div className="py-4">
              <div className="text-5xl sm:text-6xl font-black text-[#412d17] font-display flex items-baseline justify-center gap-1">
                3,500 <span className="text-xl font-bold text-slate-500">บาท</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-500 mt-2">
                * ค่าบริการก่อน VAT 7%
              </p>
            </div>

            {/* Ticket Tear Line Divider */}
            <div className="w-full flex items-center justify-between gap-1 py-2">
              <div className="w-4 h-8 bg-white border-r-2 border-y-2 border-[#412d17] rounded-r-full -ml-7 sm:-ml-11 shrink-0" />
              <div className="w-full border-t-2 border-dashed border-[#412d17]/40" />
              <div className="w-4 h-8 bg-white border-l-2 border-y-2 border-[#412d17] rounded-l-full -mr-7 sm:-mr-11 shrink-0" />
            </div>

            {/* Inclusions list */}
            <div className="w-full text-left space-y-4 pt-2">
              <h4 className="font-bold text-[#412d17] text-base flex items-center gap-2">
                <ShieldCheck className="w-5.5 h-5.5 text-[#1f7a3a]" /> สิ่งที่คุณจะได้รับจากการอบรมครั้งนี้:
              </h4>
              
              <ul className="space-y-3.5 pl-1">
                {inclusions.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#1f7a3a] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Register CTA Button */}
            <div className="w-full pt-6">
              <a
                id="pricing-cta-register"
                href="https://productivity.ftpi.or.th/event/35117/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-lg sm:text-xl py-4 rounded-2xl sketch-border sketch-shadow-lg transition-transform duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-sm"
              >
                กดลงทะเบียนสมัครเรียนที่นี่ 🎯
              </a>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-3 text-center">
                * ระบบจะนำท่านไปลงทะเบียนที่เว็บไซต์ของสถาบันเพิ่มผลผลิตแห่งชาติ
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
