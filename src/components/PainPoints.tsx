"use client";

import { AlertTriangle, CheckCircle, Clock, ShieldAlert, Sparkles, TrendingUp, Users } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    {
      icon: <Clock className="w-8 h-8 text-[#d64545]" />,
      title: "งานแมนวลซ้ำซ้อนและล่าช้า",
      desc: "ส่งข้อมูลไปมาทางอีเมลหรือแชท พิมพ์สรุปมือ ทำข้อมูลสรุปรายงานทีไรก็เหนื่อย ใช้เวลาเกือบครึ่งวันส่งต่อหลายขั้นตอน",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-[#d64545]" />,
      title: "เขียนโค้ดไม่เป็น เริ่มไม่ได้สักที",
      desc: "มีไอเดียดีๆ ที่อยากสร้างเว็บแอปพลิเคชันสำหรับใช้ในทีมหรือเก็บข้อมูล แต่ติดที่ไม่มีทักษะโปรแกรมมิ่ง เขียนโค้ดไม่เป็น",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#d64545]" />,
      title: "พึ่งพาโปรแกรมเมอร์/จ้างพัฒนาแพง",
      desc: "คุยงานไม่ตรงเป้า ใช้เวลารอคิวนานจากแผนก IT หรือจ้าง Outsource ภายนอกมีราคาแพง แถมแก้นิดเดียวก็ยุ่งยากวุ่นวาย",
    },
  ];

  const benefits = [
    {
      title: "ทำงานเร็วขึ้นและลดเวลา",
      desc: "เปลี่ยนงานที่ต้องคอยจัดการทีละไฟล์ให้กลายเป็นระบบประมวลผลคำสั่งเดียว จบภายในไม่กี่วินาที",
      color: "bg-[#eef8ee] border-[#1f7a3a]",
      icon: <Sparkles className="w-6 h-6 text-[#1f7a3a]" />
    },
    {
      title: "ลดต้นทุนทางธุรกิจ",
      desc: "ประยุกต์ใช้เครื่องมือและฐานข้อมูลฟรีอย่างมีประสิทธิภาพ พัฒนาขึ้นมาใช้เองโดยไม่ต้องเสียเงินจ้าง Outsource",
      color: "bg-[#f3faf0] border-[#1f7a3a]",
      icon: <TrendingUp className="w-6 h-6 text-[#1f7a3a]" />
    },
    {
      title: "ลด Human Error",
      desc: "ป้องกันความผิดพลาดจากการกรอกหรือคัดลอกข้อมูลซ้ำซ้อน ด้วยระบบจัดการแบบมีตรรกะและอัตโนมัติ",
      color: "bg-[#eef8ee] border-[#1f7a3a]",
      icon: <CheckCircle className="w-6 h-6 text-[#1f7a3a]" />
    },
    {
      title: "เพิ่ม Productivity รวมขององค์กร",
      desc: "พนักงานทุกคนทำงานร่วมกันผ่านข้อมูลแชร์เดียวกัน อัปเดตข้อมูลแบบเรียลไทม์ ติดตามสถานะงานง่าย",
      color: "bg-[#f3faf0] border-[#1f7a3a]",
      icon: <Users className="w-6 h-6 text-[#1f7a3a]" />
    },
  ];

  return (
    <section className="relative w-full bg-[#fbf8ee] py-16 md:py-24 border-b-4 border-[#412d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pain Points Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#d64545] text-white text-sm sm:text-base font-extrabold px-6 py-2 rounded-full sketch-border sketch-shadow-sm rotate-[-1deg] mb-5">
            เหนื่อยไหมกับกระบวนการแบบเดิม? 🤔
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#412d17] leading-tight">
            ปัญหายอดฮิตของคนทำงาน<br className="sm:hidden" /> ที่ต้องการทางออกด้วย AI
          </h2>
        </div>

        {/* Pain Points Cards (Post-it note look) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {painPoints.map((item, idx) => {
            const rotations = ["rotate-[-1.5deg]", "rotate-[1deg]", "rotate-[-1deg]"];
            const rot = rotations[idx % rotations.length];
            return (
              <div
                key={idx}
                className={`relative bg-white sketch-border p-8 rounded-2xl ${rot} sketch-shadow transition-transform hover:rotate-0 hover:scale-[1.02] duration-250`}
              >
                {/* Pin Icon decoration */}
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 text-2xl select-none">📌</div>
                
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-red-50 rounded-full sketch-border border-dashed">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#412d17]">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why AI & WebApp Section */}
        <div className="bg-white sketch-border rounded-3xl p-6 md:p-12 sketch-shadow-lg relative overflow-hidden">
          <div className="absolute top-[-10px] left-10 w-[80px] h-[25px] bg-[#f6d41c]/55 transform rotate-[-8deg] shadow-xs" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left intro text */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs sm:text-sm font-extrabold text-[#1f7a3a] bg-[#eef8ee] border border-[#cfe6cf] rounded-md px-3 py-1">
                ประโยชน์ที่คุณจะได้รับ
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#412d17] leading-tight">
                ทำไม WebApp และ AI Workflow<br />
                ถึงมีความสำคัญต่อคุณและธุรกิจ?
              </h3>
              <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
                หลักสูตรนี้มุ่งเน้นการเปลี่ยนพนักงานจาก <strong>"ผู้ใช้โปรแกรมทั่วไป"</strong> ให้กลายเป็น 
                <strong> "ผู้สร้างระบบอัตโนมัติ"</strong> เพื่อแก้ปัญหาหน้างานจริงทันที โดยได้ผลลัพธ์เป็น 
                Prototype กลับไปใช้งานได้จริง
              </p>
            </div>

            {/* Right benefit grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className={`sketch-border ${item.color} p-6 rounded-2xl sketch-shadow-sm flex items-start gap-4 transition-transform duration-150 hover:scale-[1.02]`}
                >
                  <div className="p-2 bg-white rounded-xl sketch-border">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-[#412d17] text-base">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item.desc}
                    </p>
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
