"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqData = [
    {
      id: "faq-1",
      q: "ไม่มีพื้นฐานเรียนได้หรือไม่?",
      a: "ได้แน่นอนครับ หลักสูตรนี้ออกแบบมาเพื่อผู้เริ่มต้นหรือคนสายปฏิบัติการทั่วไป (Non-Technical) ที่อยากสร้างระบบอัตโนมัติไว้ใช้งานจริง โดยสอนใช้เครื่องมือ AI ช่วยคิด ช่วยเขียนโค้ด และประกอบร่างเว็บแอปทีละสเต็ปอย่างละเอียดโดยไม่ต้องห่วงเรื่องการพิมพ์โค้ด",
    },
    {
      id: "faq-2",
      q: "ต้องเตรียมอะไรล่วงหน้าบ้าง?",
      a: "รบกวนจัดเตรียมคอมพิวเตอร์ Notebook (1 คนต่อ 1 เครื่อง) และสมัครลงทะเบียนบัญชีสำหรับเข้าใช้งานเครื่องมือต่างๆ ที่จะระบุในคำแนะนำหลักสูตร (เช่น บัญชี Google และบัญชีเครื่องมือ AI) เพื่อความสะดวกรวดเร็วในการทำเวิร์กชอป",
    },
    {
      id: "faq-3",
      q: "แนะนำระบบปฏิบัติการอะไรเป็นพิเศษไหม?",
      a: "แนะนำเป็น Windows เนื่องจากตัวอย่างขั้นตอนและคำแนะนำในคลาสจะอิงกับสภาพแวดล้อมระบบปฏิบัติการ Windows เป็นหลัก แต่หากท่านใดถนัดใช้ระบบปฏิบัติการ macOS หรือ Linux ก็ยังเรียนและปรับคำสั่งตามได้เช่นกัน",
    },
    {
      id: "faq-4",
      q: "ติดต่อสอบถามหรือรับคำแนะนำหลังคลาสเรียนจบแล้วได้หรือไม่?",
      a: "ได้แน่นอนครับ ผู้เรียนสามารถติดต่อวิทยากรผ่านอีเมล หรือเข้ามามีส่วนร่วมพูดคุยแบ่งปันประสบการณ์ใน Community เฉพาะกลุ่มของผู้เรียนสำหรับหลักสูตรนี้ได้ตลอดเวลาครับ",
    },
    {
      id: "faq-5",
      q: "หลักสูตรนี้จำกัดผู้เข้าเรียนจำนวนกี่ท่าน?",
      a: "เพื่อคุณภาพสูงสุดในการดูแลและตอบคำถามผู้เรียนทุกคนในระหว่างทำเวิร์กชอป หลักสูตรนี้จึงเปิดรับจำกัดจำนวนเพียง 15 คน (15 บัญชีผู้เรียน) เท่านั้นครับ",
    },
  ];

  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#fbf8ee] py-16 md:py-24 border-b-4 border-[#412d17]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading Image - Replacing text heading */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="relative w-full max-w-[450px] aspect-[450/110]">
            <Image
              src="/FAQ.png"
              alt="คำถามที่พบบ่อย"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* FAQs Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openId === item.id;
            const rotations = ["rotate-[-0.5deg]", "rotate-[0.5deg]"];
            const rot = rotations[idx % rotations.length];
            return (
              <div
                key={item.id}
                className={`bg-white sketch-border rounded-2xl ${rot} sketch-shadow-sm hover:sketch-shadow transition-all duration-200 overflow-hidden`}
              >
                
                {/* Header Toggle */}
                <button
                  id={item.id}
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-base sm:text-lg text-[#412d17] hover:bg-slate-50/50 cursor-pointer focus:outline-none transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5.5 h-5.5 text-[#ea580c] shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-[#ea580c]" : ""
                    }`}
                  />
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-dashed border-[#412d17]/10" : "max-h-0"
                  }`}
                >
                  <div className="p-5 text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed bg-[#fefdf5]/40">
                    {item.a}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
