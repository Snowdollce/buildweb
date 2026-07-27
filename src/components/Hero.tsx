"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#f6d41c] py-12 md:py-20 lg:py-24 border-b-4 border-[#412d17]"
      style={{
        backgroundImage: "url('/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dim Overlay for Readability */}
      <div className="absolute inset-0 bg-yellow-400/20 pointer-events-none" />

      {/* Sketch Decorative Items */}
      <div className="absolute top-6 left-6 text-3xl opacity-20 hidden md:block select-none pointer-events-none">📎</div>
      <div className="absolute bottom-6 right-6 text-3xl opacity-20 hidden md:block select-none pointer-events-none">✂️</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
            
            {/* Workshop Badge */}
            <div className="inline-block bg-[#412d17] text-[#f6d41c] text-sm md:text-base font-bold px-5 py-2 tracking-widest uppercase transform rotate-[-2deg] sketch-border sketch-shadow-sm select-none">
              ★ WORKSHOP 1 DAY ★
            </div>

            {/* Main Title (H1) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#412d17] leading-tight font-display tracking-tight drop-shadow-[1px_1px_0px_rgba(255,255,255,0.5)]">
              เปลี่ยนไอเดียในหัวของคุณ<br className="hidden sm:inline" />
              ให้กลายเป็นแอปจริงด้วยขุมพลัง AI<br />
              ใน 1 วัน <span className="bg-white px-2 py-0.5 rounded-lg text-[#d64545] sketch-border inline-block rotate-[1deg] sketch-shadow-sm">โดยไม่ต้องเขียนโค้ด</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl font-medium text-[#412d17]/90 leading-relaxed max-w-2xl">
              หลักสูตรเปลี่ยนพนักงานทั่วไป (Non-Technical) ให้กลายเป็น <strong className="text-[#d64545] underline decoration-wavy">"ผู้สร้าง"</strong> ที่สั่ง AI 
              เขียนโค้ดและขึ้นระบบเว็บแอป/AI Workflow ใช้งานจริงในองค์กรทันที
            </p>

            {/* Event Highlights (Pills) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full max-w-xl">
              <span className="flex items-center gap-1.5 bg-[#fefdf5] sketch-border px-3.5 py-1.5 rounded-full text-sm font-bold sketch-shadow-sm text-[#412d17]">
                📅 18 กันยายน 2569
              </span>
              <span className="flex items-center gap-1.5 bg-[#fefdf5] sketch-border px-3.5 py-1.5 rounded-full text-sm font-bold sketch-shadow-sm text-[#412d17]">
                ⏰ 09.00 - 16.00 น.
              </span>
              <span className="flex items-center gap-1.5 bg-[#eef8ee] border-2 border-[#1f7a3a] px-3.5 py-1.5 rounded-full text-sm font-bold sketch-shadow-sm text-[#1f7a3a]">
                🎥 Online ผ่าน Zoom (ดูย้อนหลังได้ 15 วัน)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <button
                id="hero-cta-register"
                onClick={() => scrollToSection("pricing-section")}
                className="w-full sm:w-auto bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-lg px-8 py-4 rounded-xl sketch-border sketch-shadow-lg transition-transform duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-sm animate-pulse-slow cursor-pointer"
              >
                ลงทะเบียนสมัครอบรม 🚀
              </button>
              
              <button
                id="hero-cta-outline"
                onClick={() => scrollToSection("curriculum-section")}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#412d17] font-bold text-base px-6 py-4 rounded-xl sketch-border sketch-shadow transition-all cursor-pointer"
              >
                ดูเนื้อหาและหัวข้อเรียน 📋
              </button>
            </div>

            {/* Highlights Note */}
            <div className="bg-[#fefdf5] sketch-border p-4 rounded-xl max-w-md w-full rotate-[-0.5deg] sketch-shadow-sm text-left relative">
              <div className="absolute -top-3 right-4 text-2xl select-none">📌</div>
              <div className="font-bold text-sm text-[#1f7a3a] mb-1">🎁 โปรโมชันพิเศษเฉพาะรุ่นนี้:</div>
              <div className="text-xs sm:text-sm text-[#412d17] font-medium leading-relaxed">
                สมัครอบรม 1 ท่าน <strong>รับสิทธิ์เข้าเรียนฟรีอีก 1 ท่านทันที!</strong> (ตกท่านละ 1,750 บาท เท่านั้น)
              </div>
            </div>

          </div>

          {/* Hero Right Content (Instructor Image) */}
          <div className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0">
            {/* Playful Notebook Tape Accent */}
            <div className="absolute top-[-25px] left-[20%] w-[100px] h-[30px] bg-white/60 backdrop-blur-xs sketch-border border-dashed transform rotate-[-8deg] z-10 opacity-70 hidden sm:block" />
            <div className="absolute top-[-20px] right-[25%] w-[80px] h-[30px] bg-white/60 backdrop-blur-xs sketch-border border-dashed transform rotate-[12deg] z-10 opacity-70 hidden sm:block" />

            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] flex items-end">
              {/* Instructor Portrait - No border, frame, or name caption */}
              <div className="w-full h-full relative overflow-visible flex items-end justify-center select-none pointer-events-none">
                <Image
                  src="/Instructor02.png"
                  alt="อ.แพรว จันทกานต์ คูชัมภู"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-contain object-bottom drop-shadow-[8px_8px_0px_rgba(65,45,23,0.15)]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sketch Torn Paper Transition to next section */}
      <div className="torn-divider-bottom" />
    </section>
  );
}
