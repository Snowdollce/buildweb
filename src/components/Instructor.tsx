"use client";

import Image from "next/image";
import { BookOpen, User } from "lucide-react";

export default function Instructor() {
  const lectureTopics = [
    "Digital Mindset for Future Innovators",
    "Mastering Generative AI Creative Design for Business Efficiency",
  ];

  return (
    <section className="relative w-full bg-[#fbf8ee] py-16 md:py-24 border-b-4 border-[#412d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Image - Replacing text heading */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="relative w-full max-w-[450px] aspect-[450/110]">
            <Image
              src="/name_instructor.png"
              alt="วิทยากรผู้บรรยาย"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Instructor Content Card */}
        <div className="max-w-4xl mx-auto bg-white sketch-border rounded-3xl p-6 sm:p-12 sketch-shadow-lg relative">
          <div className="absolute top-[-10px] right-10 w-[80px] h-[25px] bg-[#f6d41c]/60 transform rotate-[6deg] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Bio Info */}
            <div className="md:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[#ea580c] text-xs sm:text-sm font-extrabold bg-orange-50 border border-orange-100 rounded-md px-3 py-1 inline-flex items-center gap-1.5 sketch-border-sm">
                  <User className="w-3.5 h-3.5" /> วิทยากรผู้เชี่ยวชาญ
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-black text-[#412d17] tracking-tight">
                  อ.แพรว จันทกานต์ คูชัมภู
                </h3>
                
                <p className="text-sm sm:text-base font-bold text-slate-500 leading-normal">
                  Senior Capability Development and Training Course Management,<br />
                  สถาบันเพิ่มผลผลิตแห่งชาติ (FTPI)
                </p>
              </div>

              <div className="p-4 bg-slate-50 sketch-border rounded-2xl text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                ด้วยประสบการณ์ตรงในการพัฒนาขีดความสามารถบุคลากรและการจัดหลักสูตรฝึกอบรมสำหรับองค์กรชั้นนำ มุ่งมั่นนำเทคโนโลยี AI และแนวคิดสมัยใหม่มาถ่ายทอดแบบเข้าใจง่าย เพื่อช่วยให้พนักงานสามารถสร้างสรรค์ชิ้นงานและระบบอัตโนมัติได้อย่างมีประสิทธิภาพสูงสุด
              </div>
            </div>

            {/* Right Course Topics (บรรยายหลักสูตร) */}
            <div className="md:col-span-6 bg-[#fefdf5] sketch-border p-6 sm:p-8 rounded-2xl sketch-shadow-sm space-y-6">
              <h4 className="text-lg sm:text-xl font-black text-[#412d17] flex items-center gap-2 border-b-2 border-dashed border-[#412d17]/20 pb-3">
                <BookOpen className="w-5.5 h-5.5 text-[#ea580c]" />
                บรรยายหลักสูตร
              </h4>
              
              <ul className="space-y-4">
                {lectureTopics.map((topic, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="flex items-center justify-center bg-[#ea580c] text-white w-5 h-5 rounded-full text-xs font-bold shrink-0 mt-1 select-none">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-700 leading-relaxed">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
