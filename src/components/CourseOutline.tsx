"use client";

import Image from "next/image";
import { Award, Code, Database, Globe, PlayCircle, Settings } from "lucide-react";

export default function CourseOutline() {
  const learningSteps = [
    "วิเคราะห์ Pain Point และคัดเลือก Use Case ประจำองค์กร",
    "วางแผนการพัฒนาเว็บแอป เพื่อลดภาระงานที่ทำซ้ำๆ",
    "ลงมือสร้าง Web App ผ่านเครื่องมือ AI Multi-Tooling",
    "ทดสอบการรับ-ส่งข้อมูล และปรับจูนผลลัพธ์การทำงาน",
    "เตรียมต้นแบบพร้อมต่อยอดนำขึ้นระบบออนไลน์และเปิดใช้งานจริง",
  ];

  const modules = [
    {
      icon: <Code className="w-6 h-6 text-[#ea580c]" />,
      title: "Foundations of Modern Web & Vibe Coding",
      description: "ทำความเข้าใจและเตรียมความพร้อมในการก้าวสู่ยุคสั่งงานคอมพิวเตอร์ด้วยคำพูด",
      bullets: [
        "ความแตกต่างระหว่าง HTML (โครงสร้าง), CSS (หน้าตา), JavaScript (การทำงาน) ในมุมมองของ 'คนสั่งงาน'",
        "ทำความรู้จัก Vibe Coding = เปลี่ยนภาษาพูดในชีวิตประจำวันให้กลายเป็นภาษาระบบแอปพลิเคชัน",
        "ศึกษาแนวทางประยุกต์ใช้งานจริงในงานธุรกิจระดับองค์กร (Practical Business Use Cases)",
        "แนะนำ Checklist ขั้นตอนการออกแบบ Workflow เพื่อการวางโครงสร้างเว็บแอปด้วยตนเองอย่างถูกต้อง",
      ],
    },
    {
      icon: <Database className="w-6 h-6 text-[#ea580c]" />,
      title: "AI Multi-Tooling & Workspace Integration",
      description: "ลงมือปฏิบัติการทำเว็บแอป เชื่อมต่อระบบ และประมวลผลหลังบ้านจริงด้วยพลังปัญญาประดิษฐ์",
      bullets: [
        "Gemini as an Architect: ใช้ Gemini ช่วยระดมสมอง วางแผนผังโครงสร้าง และออกแบบ UI ของแอปพลิเคชัน",
        "Workshop 1 & 2: การออกแบบโครงสร้างระบบและการสร้างแอปพลิเคชันขนาดเล็ก (Mini App) ด้วย Canvas",
        "เชื่อมต่อระบบฐานข้อมูล: เปลี่ยน Google Sheets ให้กลายเป็นพื้นที่เก็บข้อมูล (Database) แบบไม่มีค่าใช้จ่าย",
        "Workshop 3 & 4: จัดการ Logic หลังบ้าน ระบบรับส่งข้อมูล และควบคุมการแสดงผลของหน้าเว็บ",
        "AI as a Senior Developer (Workshop 5): ใช้ AI ช่วยในการเขียนโค้ดและแก้ไของค์ประกอบทั้งหมดของโปรเจกต์",
      ],
    },
    {
      icon: <Settings className="w-6 h-6 text-[#ea580c]" />,
      title: "Debugging & System Refinement",
      description: "เรียนรู้เทคนิคการเป็นผู้ตรวจสอบ ตรวจหาและแก้ไขข้อผิดพลาดเพื่อความเสถียรของแอปพลิเคชัน",
      bullets: [
        "การตรวจสอบและอ่านโค้ดหาจุดบกพร่อง (Bug) จากโค้ดที่ AI สร้างขึ้น",
        "วิเคราะห์สาเหตุของปัญหาและเสนอวิธีแก้ไขร่วมกับ AI เพื่อแก้จุดติดขัดรายส่วน",
        "เทคนิคการ Prompt ป้อนข้อมูลย้อนกลับเพื่อสั่งงานระบบให้แก้ไขอย่างรวดเร็วและตรงจุด",
      ],
    },
    {
      icon: <Globe className="w-6 h-6 text-[#ea580c]" />,
      title: "Deployment & Practical Launching",
      description: "นำเว็บแอปพลิเคชันขึ้นใช้ออนไลน์จริง และเตรียมนำไปปรับใช้จริงกับโจทย์ในองค์กร",
      bullets: [
        "เรียนรู้วิธีและหลักการนำเว็บแอปพลิเคชันขึ้นระบบออนไลน์ (Deployment) บนโฮสต์จริง",
        "ทดสอบการกรอกข้อมูล บันทึกข้อมูล และการแสดงผลจริงผ่านสมาร์ทโฟนและคอมพิวเตอร์",
        "รับประกาศนียบัตร E-Certificate จากสถาบันเพิ่มผลผลิตแห่งชาติเพื่อยืนยันวิทยฐานะ",
      ],
    },
  ];

  return (
    <section id="curriculum-section" className="relative w-full bg-white py-16 md:py-24 border-b-4 border-[#412d17]">
      
      {/* Top Torn Accent */}
      <div className="absolute top-[-30px] left-0 right-0 h-[30px] bg-red-400 z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Image - Replacing text heading */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="relative w-full max-w-[450px] aspect-[450/110]">
            <Image
              src="/Learningjourney.png"
              alt="Learning Journey"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Training Format Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Workshop Steps */}
          <div className="lg:col-span-6 bg-[#fbf8ee] sketch-border rounded-3xl p-6 sm:p-10 sketch-shadow relative">
            <div className="absolute -top-3.5 left-8 text-2xl">📌</div>
            <h3 className="text-xl sm:text-2xl font-black text-[#412d17] mb-6 flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-[#ea580c]" />
              เรียนรู้ผ่านการลงมือทำ (80% Hands-On)
            </h3>
            
            <ul className="space-y-4">
              {learningSteps.map((step, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="flex items-center justify-center bg-[#f6d41c] text-[#412d17] font-black text-sm w-6 h-6 rounded-full sketch-border shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-700 leading-normal">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Workshop Requirements */}
          <div className="lg:col-span-6 bg-[#f3faf0] border-2 border-[#1f7a3a] rounded-3xl p-6 sm:p-10 sketch-shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#1f7a3a] flex items-center gap-2">
                <Award className="w-6 h-6 text-[#1f7a3a]" />
                รายละเอียดรูปแบบการฝึกอบรม
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white sketch-border p-4 rounded-xl sketch-shadow-sm">
                  <div className="text-3xl font-black text-[#ea580c]">20%</div>
                  <div className="text-xs font-bold text-slate-600 mt-1">ทฤษฎี & บรรยายแนวคิด</div>
                </div>
                <div className="bg-white sketch-border p-4 rounded-xl sketch-shadow-sm">
                  <div className="text-3xl font-black text-[#1f7a3a]">80%</div>
                  <div className="text-xs font-bold text-slate-600 mt-1">ฝึกปฏิบัติทำจริงรายบุคคล</div>
                </div>
              </div>

              <div className="space-y-2 text-sm sm:text-base text-slate-700 font-medium">
                <p>💻 <strong>อุปกรณ์ที่ต้องเตรียม:</strong> Notebook 1 คนต่อ 1 เครื่อง (สเปกปกติ)</p>
                <p>⚙️ <strong>ระบบปฏิบัติการ:</strong> แนะนำ Windows</p>
                <p>🔑 <strong>บัญชีผู้ใช้:</strong> เตรียมบัญชี Google และเครื่องมือ AI ที่ใช้ในคลาส</p>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-white/70 border border-[#cfe6cf] rounded-xl text-xs sm:text-sm font-bold text-[#1f7a3a] text-center">
              * ไม่จำเป็นต้องมีพื้นฐานเขียนโค้ดมาก่อน สอนจับมือทำตั้งแต่ศูนย์
            </div>
          </div>
        </div>

        {/* Notebook Curriculum Section */}
        <div className="relative bg-[#fefdf5] sketch-border-thick rounded-3xl p-4 sm:p-8 md:p-12 sketch-shadow-lg notebook-lines notebook-margin overflow-hidden">
          {/* Notebook Spiral Decoration */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-[48px] w-2 border-r-2 border-dashed border-red-200/35 pointer-events-none" />

          <div className="pl-12 md:pl-16 space-y-12">
            <div>
              <span className="bg-[#f6d41c] text-[#412d17] text-xs font-black px-3 py-1 rounded-md sketch-border">
                SYLLABUS
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#412d17] mt-3">
                หัวข้อและเนื้อหาการเรียนการสอนรายส่วน
              </h3>
            </div>

            {/* Modules Timeline */}
            <div className="space-y-10 relative before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-[#412d17]/30">
              {modules.map((mod, idx) => (
                <div key={idx} className="relative pl-8 space-y-3 group">
                  
                  {/* Circle Pin */}
                  <span className="absolute top-2.5 left-0 w-6 h-6 bg-white sketch-border rounded-full flex items-center justify-center group-hover:bg-[#f6d41c] transition-colors shrink-0">
                    <span className="w-2.5 h-2.5 bg-[#412d17] rounded-full" />
                  </span>

                  <div className="bg-white/95 sketch-border p-5 rounded-2xl sketch-shadow-sm hover:sketch-shadow transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <div className="p-2 bg-orange-50 rounded-lg sketch-border w-fit">
                        {mod.icon}
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-[#412d17]">
                          Module {idx + 1}: {mod.title}
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-slate-500">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-4 pt-3 border-t border-slate-100">
                      {mod.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex gap-2 items-start text-xs sm:text-sm font-bold text-slate-700 leading-relaxed py-1">
                          <span className="text-[#ea580c] select-none mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
