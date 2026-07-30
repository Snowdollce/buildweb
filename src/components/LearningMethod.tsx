"use client";

import { Wrench, Search, Compass, Share2, Award, ArrowRight, ArrowDown } from "lucide-react";

export default function LearningMethod() {
  const steps = [
    {
      step: "01",
      title: "รู้จัก Tools",
      subtitle: "Understand Tools",
      desc: "ทำความเข้าใจศักยภาพ ขีดจำกัด และความสามารถของ AI ในปัจจุบันอย่างถูกต้อง",
      color: "bg-[#fffbeb] border-[#f6d41c]",
      icon: <Wrench className="w-6 h-6 text-[#ea580c]" />
    },
    {
      step: "02",
      title: "รู้ปัญหาในกระบวนการงาน",
      subtitle: "Identify Pain Points",
      desc: "มองเห็นปัญหาและจุดคอขวดในขั้นตอนการทำงานจริงที่คอยดึงประสิทธิภาพ",
      color: "bg-[#fef2f2] border-[#d64545]",
      icon: <Search className="w-6 h-6 text-[#d64545]" />
    },
    {
      step: "03",
      title: "รู้จักเลือก Tools ที่จะใช้",
      subtitle: "Select Right Tools",
      desc: "เลือกและจับคู่เครื่องมือที่ตรงกับโจทย์ ไม่ใช่ใช้ทุกอย่างอย่างไร้ทิศทาง",
      color: "bg-[#f0f9ff] border-sky-500",
      icon: <Compass className="w-6 h-6 text-sky-600" />
    },
    {
      step: "04",
      title: "รู้ว่าจะใช้ AI ในส่วนใดของ Workflow",
      subtitle: "Map AI to Workflow",
      desc: "วางแผนขั้นตอนและแทรก AI ลงในจุดการทำงานเพื่อทดแทนส่วนซ้ำซ้อนอย่างมีกลยุทธ์",
      color: "bg-[#f3faf0] border-[#1f7a3a]",
      icon: <Share2 className="w-6 h-6 text-[#1f7a3a]" />
    },
    {
      step: "05",
      title: "Outcome ได้ผลลัพธ์ที่ไปต่อยอดได้จริง",
      subtitle: "Measurable Outcomes",
      desc: "ผลผลิตที่ลดเวลาการทำงานจริง และนำระบบไปประยุกต์เติบโตธุรกิจต่อได้ทันที",
      color: "bg-[#faf5ff] border-purple-500",
      icon: <Award className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 border-b-4 border-[#412d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#ea580c] text-white text-xs sm:text-sm font-extrabold px-5 py-2 rounded-full sketch-border sketch-shadow-sm rotate-[-1deg] mb-5">
            THE METHODOLOGY ⚡
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#412d17] leading-tight">
            เปลี่ยน Use Case <br className="xs:inline sm:hidden" />
            ให้กลายเป็น <span className="bg-[#f6d41c] px-3 py-1 rounded-2xl sketch-border inline-block rotate-[1deg] sketch-shadow-sm mt-1">Implementation Work</span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-500 max-w-2xl mx-auto leading-relaxed mt-4">
            เราไม่เริ่มจากการเลือกเครื่องมือแบบสุ่มสี่สุ่มห้า แต่เราฝึกวิธีคิดวิเคราะห์กระบวนการทำงาน 
            เชื่อมต่อกลยุทธ์ เพื่อให้ได้ผลลัพธ์เชิงธุรกิจที่ใช้งานได้จริง
          </p>
        </div>

        {/* Horizontal Scroll on desktop / Stack on mobile */}
        <div className="relative flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-2">
          {steps.map((item, idx) => {
            const rotations = ["rotate-[-1.5deg]", "rotate-[1deg]", "rotate-[-1deg]", "rotate-[1.5deg]", "rotate-[-0.5deg]"];
            const rot = rotations[idx % rotations.length];
            return (
              <div key={idx} className="flex flex-col xl:flex-row items-center w-full xl:w-auto xl:flex-1">
                
                {/* Step Card */}
                <div 
                  className={`w-full sketch-border ${item.color} p-6 rounded-2xl ${rot} sketch-shadow hover:rotate-0 hover:scale-[1.03] transition-all duration-250 flex flex-col justify-between min-h-[220px]`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-black bg-white px-2.5 py-1 rounded-md sketch-border">
                      STEP {item.step}
                    </span>
                    <div className="p-2 bg-white rounded-lg sketch-border">
                      {item.icon}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-[#412d17] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-normal pt-1.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector */}
                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center my-3 xl:my-0 xl:mx-2 shrink-0">
                    {/* Desktop Arrow */}
                    <ArrowRight className="hidden xl:block w-6 h-6 text-[#412d17]" />
                    {/* Mobile Arrow */}
                    <ArrowDown className="block xl:hidden w-6 h-6 text-[#412d17] animate-bounce" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
