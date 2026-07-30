"use client";

export default function LearningPath() {
  const phases = [
    {
      id: "01",
      course: "DX-MGA",
      courseTitle: "Generative AI & Design",
      title: "ปูพื้นฐานและสั่งงาน AI และวิเคราะห์ Use Case",
      desc: "เริ่มต้นคิดเชิงสร้างสรรค์ ฝึกใช้ Prompt Engineering สั่งงาน AI เพื่อหาไอเดียและวิเคราะห์ Use Case ในธุรกิจ",
      bullets: ["เข้าใจตรรกะการคุยกับ AI", "วิเคราะห์ Use Case ประจำวัน", "เทคนิคควบคุมผลลัพธ์"],
      color: "bg-[#fffbeb] border-[#f6d41c]",
      badgeColor: "bg-[#1f7a3a] text-white",
      isDark: false
    },
    {
      id: "02",
      course: "DX-MGA",
      courseTitle: "Generative AI & Design",
      title: "ออกแบบสื่อและสไลด์ รังสรรค์งานครีเอทีฟเพียงพริบตา",
      desc: "สร้างสรรค์งานภาพกราฟิกด้วย Midjourney/DALL-E 3 และใช้ Canva AI ออกแบบสื่อและสไลด์ในเวลาอันรวดเร็ว",
      bullets: ["สร้างภาพแบรนด์ระดับมือโปร", "ออกแบบเลย์เอาต์กราฟิก", "ผลิตสไลด์นำเสนอด้วย AI"],
      color: "bg-[#fcfbf7] border-[#412d17]",
      badgeColor: "bg-[#1f7a3a] text-white",
      isDark: false
    },
    {
      id: "03",
      course: "DX-09",
      courseTitle: "Build WebApp with AI",
      title: "Vibe Coding สร้างเว็บหลายหน้า (สั่ง AI เขียนโค้ด UI/UX และแก้ Bug โดยไม่โค้ดเอง)",
      desc: "ก้าวสู่บทบาท 'ผู้สร้าง' ใช้เครื่องมือ AI สั่งทำเว็บแอปพลิเคชัน คุมหน้าตา UI/UX และแก้ Bug ร่วมกับ AI ได้ทันที",
      bullets: ["หลักการ Vibe Coding", "สั่งสร้างเว็บหน้าตาพรีเมียม", "วิเคราะห์และแก้ไข Bug ร่วมกับ AI"],
      color: "bg-[#fef2f2] border-[#d64545]",
      badgeColor: "bg-[#ea580c] text-white",
      isDark: false
    },
    {
      id: "04",
      course: "DX-09",
      courseTitle: "Build WebApp with AI",
      title: "ต่อยอดระบบฐานข้อมูล (เชื่อมระบบหลังบ้านและผู้ใช้งานอย่างแนบเนียน ด้วย Google Ecosystem)",
      desc: "เชื่อมต่อแอปพลิเคชันเข้ากับ Google Sheets, Forms, และ Ecosystem ของ Google เพื่อจัดการระบบข้อมูลหลังบ้านและผู้ใช้งานอย่างมีประสิทธิภาพ",
      bullets: ["สร้างระบบฐานข้อมูลฟรี", "จัดการ Logic และการรับส่งค่า", "สร้างหน้าแอดมินจัดการหลังบ้าน"],
      color: "bg-[#f0f9ff] border-sky-500",
      badgeColor: "bg-[#ea580c] text-white",
      isDark: false
    },
    {
      id: "05",
      course: "ALL COURSES",
      courseTitle: "Implementation Success",
      title: "ได้ Prototype ที่พร้อมปล่อยขึ้นออนไลน์",
      desc: "การอัปโหลดโค้ดขึ้นโฮสต์จริง (เช่น Vercel) เชื่อมระบบ เข้าทดสอบการใช้งานผ่านสมาร์ทโฟน และเตรียมขยายผลให้พร้อมใช้ในทีม",
      bullets: ["Deploy ขึ้นเว็บออนไลน์จริง", "ทดสอบผ่านระบบสมาร์ทโฟน", "นำผลลัพธ์ไปประยุกต์ใช้ในทีม"],
      color: "bg-[#412d17] text-[#fefdf5] border-[#412d17]",
      badgeColor: "bg-[#f6d41c] text-[#412d17]",
      isDark: true
    }
  ];

  return (
    <section className="relative w-full bg-[#fbf8ee] py-16 md:py-24 border-b-4 border-[#412d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="space-y-4 mb-16 text-center lg:text-left">
          <span className="text-[#ea580c] font-extrabold text-sm uppercase tracking-wide">
            — PATH TO SUCCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#412d17] leading-tight">
            เส้นทางการเรียนรู้สู่ความสำเร็จ
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#412d17]/80">
            จากเริ่มต้นไม่มีพื้นฐาน สู่การครีเอทดีไซน์ และสร้างระบบใช้งานได้จริงด้วยขุมพลัง AI
          </p>
        </div>

        {/* Timeline Grid (5 Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {phases.map((phase, idx) => {
            const rotations = ["rotate-[-1deg]", "rotate-[1deg]", "rotate-[-1.5deg]", "rotate-[0.5deg]", "rotate-[-2deg]"];
            const rot = rotations[idx % rotations.length];
            const isDark = phase.isDark;

            return (
              <div 
                key={idx}
                className={`sketch-border p-6 rounded-2xl ${phase.color} ${rot} sketch-shadow transition-transform hover:rotate-0 hover:scale-[1.03] duration-250 flex flex-col justify-between min-h-[260px]`}
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black px-2.5 py-1 rounded-md bg-[#f6d41c] text-[#412d17] sketch-border">
                      PHASE {phase.id}
                    </span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded ${phase.badgeColor}`}>
                      {phase.course}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-black leading-tight">
                      {phase.title}
                    </h4>
                    <p className={`text-xs font-bold ${isDark ? "text-slate-300" : "text-slate-500"}`}>
                      {phase.desc}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <div className={`text-xs font-semibold leading-relaxed border-t border-dashed mt-4 pt-3 ${isDark ? "border-[#fefdf5]/20 text-[#fefdf5]/80" : "border-[#412d17]/20 text-slate-600"}`}>
                  <ul className="space-y-1">
                    {phase.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-center gap-1.5">
                        <span className={isDark ? "text-[#f6d41c]" : "text-[#ea580c]"}>•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div className="bg-[#fbf8ee] sketch-border border-dashed p-6 rounded-2xl flex items-center justify-center rotate-[0.5deg]">
          <p className="text-center font-bold text-[#412d17] text-sm sm:text-base leading-relaxed max-w-4xl">
            💡 <strong>คำแนะนำในการเลือกหลักสูตร:</strong> หากคุณเป็นมือใหม่ ให้เริ่มเรียนจาก <strong>DX-MGA</strong> เพื่อปูพื้นฐานการสื่อสารกับ AI และการออกแบบงานครีเอทีฟ จากนั้นต่อยอดความสามารถขึ้นระบบแอปพลิเคชันอย่างเข้มข้นใน <strong>DX-09</strong> เพื่อความสมบูรณ์แบบในการทำงานองค์กร!
          </p>
        </div>

      </div>
    </section>
  );
}
