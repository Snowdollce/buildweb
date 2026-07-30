"use client";

import Link from "next/link";
import { Sparkles, Wrench, Film, Folder, Wallet, Lock } from "lucide-react";
import LearningMethod from "@/components/LearningMethod";
import LearningPath from "@/components/LearningPath";
import Footer from "@/components/Footer";

export default function CourseHub() {
  const courses = [
    {
      code: "DX-MGA",
      title: "Mastering Generative AI Creative Design for Business Efficiency",
      category: "Generative AI & Design",
      desc: "หลักสูตรเริ่มต้นสำหรับผู้ที่ต้องการนำ Generative AI มาช่วยในการสร้างสรรค์งานออกแบบ คอนเทนต์ และสไลด์การนำเสนออย่างมืออาชีพ เพื่อเพิ่มประสิทธิภาพการทำงานในธุรกิจ",
      badge: "มือใหม่เริ่มตัวนี้ ⭐",
      badgeColor: "bg-[#1f7a3a] text-white",
      href: "/courses/dx-mga",
      color: "bg-[#fbf8ee] border-[#1f7a3a]",
      accentColor: "#1f7a3a",
      duration: "1 วันเต็ม (Online)",
      target: "นักการตลาด, ผู้สร้างคอนเทนต์, เจ้าของธุรกิจ, มือใหม่ไม่มีพื้นฐาน",
      ctaText: "ดูรายละเอียดหลักสูตร ➔"
    },
    {
      code: "DX-09",
      title: "Build WebApp with AI (Vibe Coding)",
      category: "Build WebApp with AI",
      desc: "หลักสูตรเปลี่ยนพนักงานทั่วไป (Non-Technical) ให้กลายเป็น 'ผู้สร้าง' ที่สั่ง AI เขียนโค้ดและขึ้นระบบเว็บแอป/AI Workflow ใช้งานจริงในองค์กรทันทีใน 1 วัน โดยไม่ต้องเขียนโค้ดเอง",
      badge: "หลักสูตรยอดนิยม 🔥",
      badgeColor: "bg-[#d64545] text-white",
      href: "/dx-09",
      color: "bg-white border-[#412d17]",
      accentColor: "#ea580c",
      duration: "1 วันเต็ม (Online)",
      target: "ผู้บริหาร, ฝ่ายพัฒนาธุรกิจ, Non-Tech ที่อยากทำเว็บแอป/ระบบฐานข้อมูล",
      ctaText: "ดูรายละเอียดหลักสูตร ➔"
    }
  ];

  const vaultProblems = [
    {
      icon: <Film className="w-6 h-6 text-[#ea580c]" />,
      title: "ทำคอนเทนต์ไม่ทัน / ไม่กล้าออกกล้อง",
      desc: "แจก Prompt เขียนสคริปต์ ออกแบบสตอรี่บอร์ด และสร้างวิดีโอโดยไม่ต้องโชว์หน้า"
    },
    {
      icon: <Folder className="w-6 h-6 text-[#1f7a3a]" />,
      title: "งานซ้ำซ้อนประหยัดเวลาทำธุรกิจ",
      desc: "เทมเพลตจัดสรร Workflow ด้วย AI ลดเวลาทำงานที่ต้องทำซ้ำๆ ให้เหลือไม่กี่นาที"
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#d64545]" />,
      title: "อยากมีระบบของตัวเองแต่โค้ดไม่เป็น",
      desc: "สอนวิธีกำหนดคำสั่งให้ AI สร้างโค้ดหน้าเว็บ เชื่อมต่อระบบฐานข้อมูลแบบ No-Code"
    },
    {
      icon: <Wallet className="w-6 h-6 text-sky-600" />,
      title: "มีของในหัวแต่ไม่รู้จะขายยังไง",
      desc: "เปลี่ยนทักษะและสินค้าดิจิทัลในหัวให้เป็นหน้าขายของ (Landing Page) พร้อมเก็บรายชื่อลูกค้า"
    }
  ];

  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#fefdf5]">
        
        {/* HERO HOOK SECTION - Stopping early bounce and fast scroll */}
        <section 
          className="relative w-full overflow-hidden bg-[#f6d41c] py-16 md:py-24 border-b-4 border-[#412d17]"
          style={{
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Dim Overlay */}
          <div className="absolute inset-0 bg-yellow-400/20 pointer-events-none" />

          {/* Sketch Decorative Items */}
          <div className="absolute top-6 left-6 text-3xl opacity-20 hidden md:block select-none pointer-events-none">⭐</div>
          <div className="absolute bottom-6 right-6 text-3xl opacity-20 hidden md:block select-none pointer-events-none">⚡</div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-8">
            
            {/* Attention Grabbing Badge */}
            <div className="inline-block bg-[#412d17] text-[#f6d41c] text-xs sm:text-sm font-black px-4 py-2 tracking-widest uppercase transform rotate-[-1.5deg] sketch-border sketch-shadow-sm select-none">
              ⚠️ หยุดอ่านตรงนี้หากคุณกำลังรีบ!
            </div>

            {/* Hook Headline */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#412d17] leading-tight font-display tracking-tight drop-shadow-[1px_1px_0px_rgba(255,255,255,0.5)]">
                คิดคอนเทนต์ · ใช้ AI ในเวิร์กโฟล์วการทำงานได้อย่างแนบเนียน · สร้างระบบแบบ No-Code ได้ภายในวันเดียว
              </h1>
              
              <div className="inline-block bg-white px-4 py-2.5 rounded-2xl sketch-border rotate-[1deg] sketch-shadow-sm">
                <p className="text-base sm:text-lg md:text-xl font-black text-[#d64545]">
                  &quot;ใช้งาน AI ให้ได้มากกว่าการถามตอบ แต่ต้องเพิ่ม Productivity ลดเวลาในการทำงานได้จริง&quot;
                </p>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#412d17]/85 max-w-2xl mx-auto leading-relaxed">
              เราคัดสรรหลักสูตรที่จะเปลี่ยนให้คุณเป็นคนทำงานที่เหนือชั้นกว่าเดิม 
              เรียนรู้ผ่านกระบวนการปฏิบัติจริงเพื่อสร้างผลลัพธ์เป็นของตัวเองในวันเดียว
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="#courses-section"
                className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl sketch-border sketch-shadow-lg transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-sm select-none cursor-pointer"
              >
                เลือกหลักสูตรที่เหมาะกับคุณ 🚀
              </a>
              <a
                href="#ai-vault-section"
                className="bg-white hover:bg-slate-50 text-[#412d17] font-bold text-base px-6 py-4 rounded-xl sketch-border sketch-shadow transition-all select-none cursor-pointer"
              >
                เข้าถึงคลังแสง AI 🔑
              </a>
            </div>

          </div>

          <div className="torn-divider-bottom" />
        </section>

        {/* LEARNING METHOD SECTION */}
        <LearningMethod />

        {/* COURSE GRID SECTION */}
        <section id="courses-section" className="relative w-full bg-white py-16 md:py-24 border-b-4 border-[#412d17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-[#ea580c] text-white text-xs sm:text-sm font-extrabold px-5 py-2 rounded-full sketch-border sketch-shadow-sm rotate-[1.5deg] mb-5">
                OUR COURSES 📚
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#412d17]">
                เลือกหลักสูตรอบรมเพิ่มประสิทธิภาพด้วย AI
              </h2>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {courses.map((course, idx) => {
                const rotations = ["rotate-[-1deg]", "rotate-[1deg]"];
                const rot = rotations[idx % rotations.length];
                return (
                  <div
                    key={idx}
                    className={`sketch-border-thick ${course.color} rounded-3xl p-6 sm:p-8 md:p-10 ${rot} sketch-shadow-lg relative overflow-hidden flex flex-col justify-between`}
                  >
                    {/* Ribbon badge */}
                    {course.badge && (
                      <div className="absolute top-6 right-6">
                        <span className={`inline-block text-xs font-black px-3.5 py-1.5 rounded-full sketch-border ${course.badgeColor} sketch-shadow-sm`}>
                          {course.badge}
                        </span>
                      </div>
                    )}

                    <div className="space-y-6">
                      {/* Course Category & Code */}
                      <div className="space-y-2">
                        <span className="inline-block bg-[#f6d41c] text-[#412d17] text-xs font-black px-2.5 py-1 rounded-md sketch-border">
                          {course.code}
                        </span>
                        <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                          {course.category}
                        </p>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-[#412d17] leading-tight pt-1">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm font-bold text-slate-600 leading-relaxed">
                        {course.desc}
                      </p>

                      {/* Info Highlights */}
                      <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-bold text-[#412d17]/80">
                        <p className="flex items-center gap-2">
                          ⏱️ <strong>ระยะเวลาเรียน:</strong> {course.duration}
                        </p>
                        <p className="flex items-start gap-2">
                          🎯 <strong>เหมาะสำหรับ:</strong> <span className="text-slate-600 font-bold">{course.target}</span>
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-8">
                      <Link
                        href={course.href}
                        className="block w-full text-center bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-base py-3.5 rounded-xl sketch-border sketch-shadow transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-sm"
                      >
                        {course.ctaText}
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* LEARNING PATH SECTION */}
        <LearningPath />

        {/* AI VAULT DETAILS SECTION (คลังแสง AI) */}
        <section id="ai-vault-section" className="relative w-full bg-white py-16 md:py-24 border-b-4 border-[#412d17]">
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-[#fbf8ee] sketch-border-thick rounded-3xl p-6 sm:p-10 md:p-12 sketch-shadow-lg relative overflow-hidden">
              {/* Tape Accent */}
              <div className="absolute top-[-10px] left-10 w-[90px] h-[25px] bg-[#f6d41c]/60 transform rotate-[-6deg]" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Vault Info Column */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-1.5 bg-[#ea580c] text-white text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full sketch-border rotate-[-1.5deg] sketch-shadow-sm">
                    <Lock className="w-3.5 h-3.5" /> รวมอยู่ในคลังแสง AI
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#412d17] leading-tight">
                    สิทธิพิเศษสำหรับผู้เรียน:<br />
                    เข้าถึง &quot;คลังแสง AI&quot; สุดพิเศษ
                  </h2>

                  <div className="space-y-4 font-bold text-slate-700 leading-relaxed text-sm sm:text-base">
                    <p>
                      <strong>คลังแสง AI คืออะไร?</strong> <br />
                      คือพื้นที่คัดสรร รวบรวม และแบ่งปันเทมเพลตระดับพรีเมียม, Prompt สำเร็จรูป, โครงสร้างไฟล์ และเครื่องมือช่วยงาน AI ต่างๆ ที่คัดสรรมาโดยเฉพาะ เพื่อให้นำไปประกอบใช้จริงในงานธุรกิจได้ทันที ไม่ต้องเริ่มต้นเขียนเองจากศูนย์
                    </p>
                    <p className="bg-[#f6d41c]/20 p-4 rounded-xl sketch-border border-dashed border-[#ea580c] text-[#ea580c]">
                      🔒 <strong>ใครมีสิทธิ์ได้เข้าถึง?</strong> <br />
                      สิทธิ์นี้สงวนไว้เฉพาะสำหรับผู้เรียนที่ลงทะเบียนเรียนในหลักสูตรอบรม และจะได้รับรหัสผ่านหรือลิงก์เฉพาะตามที่คุณครูผู้สอนอนุญาตเป็นรายบุคคลเท่านั้น
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/ai-vault"
                      className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-base px-6 py-3.5 rounded-xl sketch-border sketch-shadow transition-transform active:translate-x-[1px] active:translate-y-[1px] active:shadow-none cursor-pointer"
                    >
                      เข้าสู่ระบบคลังแสง AI ⚡
                    </Link>
                  </div>
                </div>

                {/* Vault Problem-solving Grid Column */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {vaultProblems.map((prob, idx) => {
                    const rotations = ["rotate-[-1.5deg]", "rotate-[1.5deg]", "rotate-[-0.5deg]", "rotate-[0.5deg]"];
                    const rot = rotations[idx % rotations.length];
                    return (
                      <div 
                        key={idx}
                        className={`bg-white sketch-border p-5 rounded-2xl ${rot} sketch-shadow flex flex-col gap-3.5 items-start`}
                      >
                        <div className="p-2.5 bg-[#fefdf5] rounded-xl sketch-border shrink-0">
                          {prob.icon}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-black text-sm sm:text-base text-[#412d17] leading-tight">
                            {prob.title}
                          </h4>
                          <p className="text-xs font-semibold text-slate-500 leading-normal">
                            {prob.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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
