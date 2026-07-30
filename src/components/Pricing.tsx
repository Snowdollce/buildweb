"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface PricingProps {
  isHub?: boolean;
}

export default function Pricing({ isHub = false }: PricingProps) {
  const dxMgaInclusions = [
    "รูปแบบการเรียน Onsite with Hand-on Workshop",
    "รับวุฒิบัตร E-Certificate รับรองจากสถาบันเพิ่มผลผลิตแห่งชาติ",
    "สิทธิ์เข้าถึงคลังแสง AI ⚡ สำหรับดาวน์โหลดเทมเพลตและ Prompt พิเศษ",
  ];

  const dx09Inclusions = [
    "สิทธิ์เข้าอบรมสำหรับผู้เรียน 2 ท่าน (สมัคร 1 อบรมได้ 2 คน)",
    "รับวุฒิบัตร E-Certificate รับรองจากสถาบันเพิ่มผลผลิตแห่งชาติ",
    "ระบบวิดีโอบันทึกย้อนหลังสำหรับทบทวนบทเรียนได้นาน 15 วัน",
    "สิทธิ์เข้าถึงคลังแสง AI ⚡ สำหรับดาวน์โหลดเทมเพลตและเครื่องมือแอป",
  ];

  const dxMgaCard = (
    <div className="bg-[#fcfbf7] sketch-border-thick rounded-3xl p-6 sm:p-10 sketch-shadow-lg relative overflow-hidden flex flex-col justify-between rotate-[-1.5deg] hover:rotate-0 hover:scale-[1.01] transition-all w-full">
      {/* Beginner Ribbon */}
      <div className="absolute top-4 -right-12 bg-[#1f7a3a] text-white text-[10px] font-black py-2 px-12 rotate-[45deg] sketch-border text-center uppercase tracking-wider select-none shadow-sm">
        มือใหม่เริ่มตัวนี้!
      </div>

      <div className="space-y-6">
        {/* Course Title Badge */}
        <div className="bg-[#f6d41c] text-[#412d17] text-xs sm:text-sm font-black px-4 py-2 rounded-xl sketch-border sketch-shadow-sm inline-block rotate-[-1deg] w-fit">
          🎨 DX-MGA: Generative AI & Design
        </div>

        {/* Price Display */}
        <div className="py-4 text-center sm:text-left">
          <div className="text-4xl sm:text-5xl font-black text-[#412d17] font-display flex items-baseline justify-center sm:justify-start gap-1">
            5,000 <span className="text-lg font-bold text-slate-500">บาท / คน</span>
          </div>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 mt-2">
            * ค่าบริการก่อน VAT 7%
          </p>
        </div>

        {/* Ticket Tear Line Divider */}
        <div className="w-full flex items-center justify-between gap-1 py-1">
          <div className="w-4 h-8 bg-white border-r-2 border-y-2 border-[#412d17] rounded-r-full -ml-7 sm:-ml-11 shrink-0" />
          <div className="w-full border-t-2 border-dashed border-[#412d17]/40" />
          <div className="w-4 h-8 bg-white border-l-2 border-y-2 border-[#412d17] rounded-l-full -mr-7 sm:-mr-11 shrink-0" />
        </div>

        {/* Inclusions list */}
        <div className="w-full text-left space-y-4 pt-2">
          <h4 className="font-bold text-[#412d17] text-sm sm:text-base flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#1f7a3a]" /> สิ่งที่คุณจะได้รับจากการอบรม:
          </h4>
          
          <ul className="space-y-3 pl-1">
            {dxMgaInclusions.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1f7a3a] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Register CTA Button */}
      <div className="w-full pt-8">
        <a
          href="https://productivity.ftpi.or.th/event/29922/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-base sm:text-lg py-3.5 rounded-2xl sketch-border sketch-shadow-lg transition-transform duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-sm"
        >
          กดลงทะเบียนที่นี่ 🚀
        </a>
      </div>
    </div>
  );

  const dx09Card = (
    <div className="bg-[#fbf8ee] sketch-border-thick rounded-3xl p-6 sm:p-10 sketch-shadow-lg relative overflow-hidden flex flex-col justify-between rotate-[1.5deg] hover:rotate-0 hover:scale-[1.01] transition-all w-full">
      {/* Value Ribbon */}
      <div className="absolute top-4 -right-12 bg-[#d64545] text-white text-[10px] font-black py-2 px-12 rotate-[45deg] sketch-border text-center uppercase tracking-wider select-none shadow-sm">
        คุ้มที่สุด!
      </div>

      <div className="space-y-6">
        {/* Course Title Badge */}
        <div className="bg-[#f6d41c] text-[#412d17] text-xs sm:text-sm font-black px-4 py-2 rounded-xl sketch-border sketch-shadow-sm inline-block rotate-[1deg] w-fit">
          💻 DX-09: Build WebApp with AI
        </div>

        {/* Price Display */}
        <div className="py-4 text-center sm:text-left">
          <div className="text-4xl sm:text-5xl font-black text-[#412d17] font-display flex items-baseline justify-center sm:justify-start gap-1">
            3,500 <span className="text-lg font-bold text-slate-500">บาท / 2 ท่าน</span>
          </div>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 mt-2">
            * ค่าบริการก่อน VAT 7% (ดีลพิเศษ: สมัคร 1 แถม 1)
          </p>
        </div>

        {/* Ticket Tear Line Divider */}
        <div className="w-full flex items-center justify-between gap-1 py-1">
          <div className="w-4 h-8 bg-white border-r-2 border-y-2 border-[#412d17] rounded-r-full -ml-7 sm:-ml-11 shrink-0" />
          <div className="w-full border-t-2 border-dashed border-[#412d17]/40" />
          <div className="w-4 h-8 bg-white border-l-2 border-y-2 border-[#412d17] rounded-l-full -mr-7 sm:-mr-11 shrink-0" />
        </div>

        {/* Inclusions list */}
        <div className="w-full text-left space-y-4 pt-2">
          <h4 className="font-bold text-[#412d17] text-sm sm:text-base flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#1f7a3a]" /> สิ่งที่คุณจะได้รับจากการอบรม:
          </h4>
          
          <ul className="space-y-3 pl-1">
            {dx09Inclusions.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1f7a3a] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Register CTA Button */}
      <div className="w-full pt-8">
        <a
          id="pricing-cta-register"
          href="https://productivity.ftpi.or.th/event/35117/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-base sm:text-lg py-3.5 rounded-2xl sketch-border sketch-shadow-lg transition-transform duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-sm"
        >
          กดลงทะเบียนที่นี่ 🚀
        </a>
      </div>
    </div>
  );

  return (
    <section id="pricing-section" className="relative w-full bg-[#fef9c3] py-16 md:py-24 border-b-4 border-[#412d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#ea580c] text-white text-xs sm:text-sm font-extrabold px-6 py-2 rounded-full sketch-border sketch-shadow-sm rotate-[1.5deg] mb-5">
            ราคาคุ้มค่าเพื่อการเติบโตขององค์กร 💼
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#412d17] leading-tight">
            ค่าธรรมเนียมในการสมัครอบรม
          </h2>
        </div>

        {/* Pricing Layout */}
        {isHub ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {dxMgaCard}
            {dx09Card}
          </div>
        ) : (
          <div className="max-w-xl mx-auto">
            {dx09Card}
          </div>
        )}

      </div>
    </section>
  );
}
