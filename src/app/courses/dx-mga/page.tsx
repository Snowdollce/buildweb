"use client";

import Link from "next/link";
import { Sparkles, ArrowLeft, Calendar, Mail, CheckCircle2, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function DxMgaComingSoon() {
  const highlights = [
    "ปูพื้นฐานการสั่งงาน AI (Prompt Engineering) สำหรับการสร้างสรรค์ผลงาน",
    "เทคนิคการใช้ Midjourney และ DALL-E 3 สร้างภาพประกอบธุรกิจระดับมืออาชีพ",
    "ประยุกต์ใช้ Canva AI ช่วยออกแบบ Layout, Slide Presentation และคอนเทนต์ใน 10 นาที",
    "ลดเวลาการทำงานกราฟิกและงานครีเอทีฟขององค์กรได้มากกว่า 70%",
  ];

  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#fefdf5]">
        
        {/* Header Breadcrumb Banner */}
        <section className="bg-[#f6d41c] py-8 border-b-4 border-[#412d17] relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-400/10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-sm font-black text-[#412d17] hover:text-[#ea580c] bg-white px-3.5 py-1.5 rounded-lg sketch-border sketch-shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> กลับหน้ารวมหลักสูตร
            </Link>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex-1">
          <div className="bg-white sketch-border-thick rounded-3xl p-6 sm:p-10 md:p-12 sketch-shadow-lg relative overflow-hidden">
            {/* Ribbon Badge */}
            <div className="absolute top-8 -right-14 bg-[#1f7a3a] text-white text-[10px] sm:text-xs font-black py-2 px-14 rotate-[45deg] sketch-border text-center uppercase tracking-wider select-none shadow-sm">
              มือใหม่เริ่มตัวนี้! ⭐️
            </div>

            <div className="space-y-8">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#f6d41c]/30 text-[#ea580c] text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-full sketch-border">
                <Sparkles className="w-4 h-4" /> Generative AI & Design
              </div>

              {/* Title & Info */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#412d17] leading-tight">
                  DX-MGA: Mastering Generative AI Creative Design for Business Efficiency
                </h1>
                <p className="text-base sm:text-lg font-bold text-slate-600 leading-relaxed">
                  หลักสูตรเปลี่ยนไอเดียสร้างสรรค์ให้กลายเป็นผลงานจริงระดับมือโปรด้วย Generative AI 
                  สอนตั้งแต่เริ่มต้นแบบจับมือทำเพื่อเพิ่มขีดความสามารถการทำคอนเทนต์และกราฟิกสำหรับธุรกิจ
                </p>
              </div>

              {/* Status / Announcement Box */}
              <div className="bg-[#fffbeb] sketch-border p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4 relative">
                <span className="text-4xl animate-bounce">📢</span>
                <div className="text-center sm:text-left space-y-1">
                  <h4 className="font-black text-lg text-[#ea580c]">
                    COMING SOON — อยู่ระหว่างจัดเตรียมหลักสูตร
                  </h4>
                  <p className="text-sm font-bold text-[#412d17]/80">
                    หลักสูตรนี้กำลังจะเปิดให้ลงทะเบียนเรียนเร็วๆ นี้ สามารถลงชื่อแสดงความสนใจเพื่อรับสิทธิ์ส่วนลดพิเศษก่อนใคร!
                  </p>
                </div>
              </div>

              {/* What will you learn */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-black text-[#412d17] flex items-center gap-2">
                  📌 ไฮไลท์สิ่งที่คุณจะได้เรียนรู้:
                </h3>
                <ul className="grid grid-cols-1 gap-3 pl-1">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#1f7a3a] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-bold text-slate-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pre-Register form or Button */}
              <div className="border-t border-dashed border-slate-200 pt-8 mt-6">
                <div className="max-w-md mx-auto space-y-4">
                  <h4 className="text-base font-black text-[#412d17] text-center">
                    📫 ลงชื่อแสดงความสนใจเพื่อรับสิทธิ์และอัปเดตวันเปิดเรียน:
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="กรอกอีเมลของคุณ..."
                      className="flex-1 px-4 py-3 rounded-xl sketch-border text-sm font-bold bg-[#fefdf5] focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                    <button 
                      onClick={() => alert("ขอบคุณที่แสดงความสนใจ! ทีมงานจะส่งรายละเอียดเพิ่มเติมให้ทางอีเมลเมื่อหลักสูตรพร้อมเปิดสอน 🚀")}
                      className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-sm px-6 py-3 rounded-xl sketch-border sketch-shadow-sm transition-transform active:translate-x-[1px] active:translate-y-[1px] active:shadow-none cursor-pointer"
                    >
                      ลงชื่อสนใจเรียน ✨
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
