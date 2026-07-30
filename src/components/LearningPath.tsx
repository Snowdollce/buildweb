"use client";

export default function LearningPath() {
  const modules = [
    {
      id: "00",
      title: "เริ่มให้ถูก",
      bullets: ["เห็นปลายทาง", "เข้าใจ Claude Code", "ใช้หลักคุณ Brief, AI Build"],
      color: "bg-white",
    },
    {
      id: "01",
      title: "ติดตั้งและควบคุม",
      bullets: ["Desktop", "Terminal", "VS Code", "Modes และคำสั่งพื้นฐาน"],
      color: "bg-white",
    },
    {
      id: "02",
      title: "Brief ให้ AI ไม่หลงทาง",
      bullets: ["เข้าใจ 3 ไฟล์หลัก", "CLAUDE.md", "PRD.md", "brand.md"],
      color: "bg-white",
    },
    {
      id: "03",
      title: "สร้างเว็บหลายหน้า",
      bullets: ["Plan", "Design", "Build ทีละเฟส", "Responsive", "แก้ Error"],
      color: "bg-white",
    },
    {
      id: "04",
      title: "ต่อฐานข้อมูลจริง",
      bullets: ["Neon", "ระบบบทความ", "เก็บ Lead", "ดูข้อมูลในหน้า Admin"],
      color: "bg-white",
    },
    {
      id: "05",
      title: "ปล่อยขึ้นออนไลน์",
      bullets: ["GitHub", "Vercel", "Deploy", "อัปเดตเว็บ", "ต่อโดเมน"],
      color: "bg-white",
    },
    {
      id: "06",
      title: "ต่อยอดเป็นระบบอื่น",
      bullets: ["ใช้เว็บนี้เป็นฐาน", "แล้วขยายไปสู่งาน", "และระบบของธุรกิจ"],
      color: "bg-[#412d17] text-[#fefdf5]",
    },
  ];

  return (
    <section className="relative w-full bg-[#fbf8ee] py-16 md:py-24 border-b-4 border-[#412d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub-header & Title */}
        <div className="space-y-4 mb-12 text-center lg:text-left">
          <span className="text-[#ea580c] font-extrabold text-sm uppercase tracking-wide">
            — เส้นทาง MASTERCLASS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#412d17] leading-tight">
            จากไม่เคยใช้ ➔ สร้าง ➔ ต่อข้อมูล ➔ ปล่อยขึ้นจริง
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#412d17]/80">
            ไม่กระโดดข้ามพื้นฐาน และไม่ทิ้งคุณไว้กลางทาง ทุก Module ต่อกันเป็นโปรเจกต์เดียว
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {modules.map((mod, idx) => {
            const rotations = ["rotate-[-1deg]", "rotate-[1deg]", "rotate-[-1.5deg]", "rotate-[0.5deg]"];
            const rot = mod.id === "06" ? "rotate-[-2deg]" : rotations[idx % rotations.length];
            const isDark = mod.id === "06";

            return (
              <div 
                key={idx}
                className={`sketch-border p-6 rounded-2xl ${mod.color} ${rot} sketch-shadow transition-transform hover:rotate-0 hover:scale-[1.02] duration-250 flex flex-col justify-between min-h-[180px]`}
              >
                <div>
                  <span className={`text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-md sketch-border ${isDark ? "bg-[#f6d41c] text-[#412d17]" : "bg-[#f6d41c] text-[#412d17]"}`}>
                    MODULE {mod.id}
                  </span>
                  <h4 className="text-lg font-black mt-3 leading-tight">
                    {mod.title}
                  </h4>
                </div>

                <div className={`text-xs sm:text-sm font-semibold leading-relaxed border-t border-dashed mt-4 pt-3 ${isDark ? "border-[#fefdf5]/20 text-[#fefdf5]/80" : "border-[#412d17]/20 text-slate-600"}`}>
                  <ul className="space-y-1">
                    {mod.bullets.map((bullet, bulletIdx) => (
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

          {/* Goal Callout inside the Grid */}
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 bg-[#fbf8ee] sketch-border border-dashed p-6 rounded-2xl flex items-center justify-center rotate-[0.5deg]">
            <p className="text-center font-bold text-[#412d17] text-base leading-relaxed max-w-3xl">
              🎯 <strong>ปลายทางไม่ใช่แค่ &quot;ดูจบ&quot;</strong> แต่คือคุณเข้าใจกระบวนการสั่ง AI ให้สร้างระบบ และนำวิธีเดียวกันไปใช้กับโปรเจกต์ต่อไปได้
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
