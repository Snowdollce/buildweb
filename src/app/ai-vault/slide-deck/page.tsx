"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Copy, Check, Search, Filter, Terminal, BookOpen, Clipboard, HelpCircle } from "lucide-react";
import { slideUseCasesData, SlideUseCase } from "@/data/slideDeckData";
import Footer from "@/components/Footer";

// Custom SVG Doughnut Chart Component
function SvgDoughnutChart() {
  const categories = [
    { label: "ผู้บริหาร & ยุทธศาสตร์", count: 5, color: "#ea580c" }, // Orange
    { label: "วิชาการ & การสอน", count: 5, color: "#f6d41c" }, // Yellow
    { label: "ธุรกิจ & การตลาด", count: 5, color: "#d64545" }, // Red
    { label: "ข้อมูล & เทคนิค", count: 5, color: "#1f7a3a" }   // Green
  ];

  const total = 20;
  let accumulatedAngle = 0;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
      {/* SVG Doughnut */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0">
        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#fefdf5" strokeWidth="4" />
          
          {/* 4 Quadrants (each 25%) */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            stroke="#ea580c"
            strokeWidth="3.8"
            strokeDasharray="25 75"
            strokeDashoffset="0"
            className="transition-all duration-500 hover:opacity-80 cursor-pointer"
          />
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            stroke="#f6d41c"
            strokeWidth="3.8"
            strokeDasharray="25 75"
            strokeDashoffset="-25"
            className="transition-all duration-500 hover:opacity-80 cursor-pointer"
          />
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            stroke="#d64545"
            strokeWidth="3.8"
            strokeDasharray="25 75"
            strokeDashoffset="-50"
            className="transition-all duration-500 hover:opacity-80 cursor-pointer"
          />
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            stroke="#1f7a3a"
            strokeWidth="3.8"
            strokeDasharray="25 75"
            strokeDashoffset="-75"
            className="transition-all duration-500 hover:opacity-80 cursor-pointer"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full w-[70%] h-[70%] m-auto sketch-border">
          <span className="text-2xl font-black text-[#412d17]">20</span>
          <span className="text-[10px] font-bold text-slate-500">USE CASES</span>
        </div>
      </div>

      {/* Legends */}
      <div className="space-y-3.5 w-full">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-white p-2.5 rounded-xl sketch-border sketch-shadow-sm transition-transform hover:scale-[1.02]">
            <div className="w-4 h-4 rounded-md sketch-border shrink-0" style={{ backgroundColor: cat.color }} />
            <div className="flex-1 flex justify-between items-center gap-4 text-xs font-bold text-[#412d17]">
              <span>{cat.label}</span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md text-slate-600 border border-slate-200">
                {cat.count} ข้อ (25%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SlideDeckPromptPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [copiedCardId, setCopiedCardId] = useState<number | null>(null);
  
  // Custom Prompt Builder states
  const [builderRole, setBuilderRole] = useState("คุณคือที่ปรึกษาการบริหารยุทธศาสตร์ระดับสูง");
  const [builderAudience, setBuilderAudience] = useState("ผู้บริหารระดับสูงและคณะกรรมการบริษัท");
  const [builderGoal, setBuilderGoal] = useState("นำเสนอสรุปประเด็นการดำเนินงานและแผนยุทธศาสตร์ประจำปี");
  const [builderStructure, setBuilderStructure] = useState("7 สไลด์ : 1. ปก / 2. Executive Summary / 3. ผลการดำเนินงาน / 4. ปัญหาสำคัญ / 5. แผนยุทธศาสตร์ / 6. ประมาณการงบ / 7. มติที่ต้องอนุมัติ");
  const [builderStyle, setBuilderStyle] = useState("Corporate Luxury โทนสีน้ำเงินเข้ม-ทอง");
  const [builderLang, setBuilderLang] = useState("ไทย");
  const [copiedBuilder, setCopiedBuilder] = useState(false);

  // Set page tab title
  useEffect(() => {
    document.title = "คอร์ส AI กับคลังแสงแห่งการเรียนรู้ ทดลองเล่น";
  }, []);

  const getFormattedPrompt = (item: SlideUseCase) => {
    return `บทบาท : ${item.role}
แหล่งข้อมูล : ${item.source}
กลุ่มเป้าหมาย : ${item.audience}
เป้าหมาย : ${item.goal}
โครงสร้างสไลด์ : ${item.structure}
กติกา : ${item.rules}
สไตล์ภาพ : ${item.style}
ภาษา : ${item.language}`;
  };

  const copyToClipboard = (text: string, id: number | string) => {
    navigator.clipboard.writeText(text).then(() => {
      if (typeof id === "number") {
        setCopiedCardId(id);
        setTimeout(() => setCopiedCardId(null), 2000);
      } else if (id === "builder") {
        setCopiedBuilder(true);
        setTimeout(() => setCopiedBuilder(false), 2000);
      }
    });
  };

  const filteredUseCases = slideUseCasesData.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.goal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.style.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  const customBuilderOutput = `บทบาท : ${builderRole}
แหล่งข้อมูล : ใช้เฉพาะเนื้อหาในแหล่งที่อัปโหลดเท่านั้น ห้ามเพิ่มข้อมูลนอกแหล่ง
กลุ่มเป้าหมาย : ${builderAudience}
เป้าหมาย : ${builderGoal}
โครงสร้างสไลด์ : ${builderStructure}
กติกา : หัวสไลด์ต้องเป็นประโยคใจความสำคัญ (Action Title) ไม่ใช้คำลอยๆ, ไม่เกิน 4 bullets ต่อแผ่น, อ้างอิงตัวเลขจริงจากเอกสาร
สไตล์ภาพ : ${builderStyle}
ภาษา : ${builderLang}`;

  const features = [
    {
      icon: "📂",
      title: "Source-Grounded Engine",
      desc: "รองรับการอัปโหลดเอกสารสูงสุดถึง 50 แหล่งข้อมูล (PDF, Google Docs, Slides, Web URL, YouTube Transcript และ Audio) AI จะตอบและสร้างสไลด์จากข้อมูลเหล่านี้เท่านั้น ไร้การมั่วข้อมูล"
    },
    {
      icon: "🎨",
      title: "Studio / Slide Deck Generator",
      desc: "ระบบแปลงเอกสารทั้งคลังให้กลายเป็นร่างโครงสร้างสไลด์ (Slide Outline & Content Draft) ได้ด้วยการกดเพียงคลิกเดียวจากเมนู Studio ในหน้าต่างหลัก"
    },
    {
      icon: "✏️",
      title: "Custom Prompt Editor (ปุ่มดินสอ)",
      desc: "หัวใจสำคัญในการควบคุมคุณภาพ สามารถกดแก้ไข Prompt คำสั่งตรงไอคอนรูปดินสอในหมวด Slide Deck เพื่อกำหนด Role, Audience, Rules และ Visual Style ได้ลึกซึ้ง"
    },
    {
      icon: "🔗",
      title: "Citation & Source Tracing",
      desc: "ทุกหัวข้อ ข้อความ หรือตัวเลขที่ถูกเจนในสไลด์ สามารถกดคลิกที่ตัวเลขกำกับอ้างอิงเพื่อย้อนกลับไปดูบรรทัด/หน้าต้นฉบับในเอกสารได้ทันที ตรวจสอบความถูกต้องได้ 100%"
    },
    {
      icon: "🎙️",
      title: "Audio Overview Integration",
      desc: "ฟีเจอร์สร้าง Audio Podcast สรุปเนื้อหาสไลด์ ช่วยให้วิทยากรหรือผู้บริหารใช้ฟังซ้อมนำเสนอ หรือสรุปประเด็นสำคัญฟังระหว่างการเดินทางได้"
    },
    {
      icon: "⚡",
      title: "Export & Visual Handoff",
      desc: "เมื่อได้โครงสร้างเนื้อหาและ Action Titles จาก Gemini Notebook สามารถส่งต่อข้อความไปยัง Google Slides, PowerPoint หรือ Canva เพื่อใส่สไตล์ visual ต่อได้ทันที"
    }
  ];

  const workflowSteps = [
    { step: 1, title: "เตรียม Data Sources", desc: "รวบรวมไฟล์รายงาน วิจัย สรุปประชุม หรือ URL ที่เกี่ยวข้อง" },
    { step: 2, title: "อัปโหลดเข้า Notebook", desc: "นำไฟล์ใส่ใน Gemini Notebook เพื่อสร้างฐานข้อมูลเฉพาะ" },
    { step: 3, title: "เปิด Studio > Slide", desc: "ไปยังเมนู Studio เลือกฟังก์ชันสร้างสไลด์" },
    { step: 4, title: "ใส่ Prompt (ปุ่มดินสอ)", desc: "คัดลอก Master Prompt จากคู่มือนี้ไปใส่ในช่องดินสอ ✏️" },
    { step: 5, title: "ส่งต่อออกแบบ Visual", desc: "นำโครงสร้างไปจัดธีมและภาพใน PPT หรือ Canva" }
  ];

  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#fefdf5] pb-20">
        
        {/* Banner */}
        <section className="relative w-full overflow-hidden bg-[#f6d41c] py-12 md:py-16 border-b-4 border-[#412d17]">
          <div className="absolute inset-0 bg-yellow-400/10 pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            {/* Back Button */}
            <div className="mb-4">
              <Link
                href="/ai-vault"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#412d17] hover:text-[#ea580c] bg-white sketch-border px-3.5 py-1.5 rounded-xl sketch-shadow-sm transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                กลับไปยังคลังแสงหลัก
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
              <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white sketch-border text-[#412d17] rounded-full text-xs font-semibold sketch-shadow-sm">
                  <span>✦ Creative Director Edition</span>
                  <span className="text-[#412d17]/30">|</span>
                  <span>Grounded AI Engine</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#412d17] leading-tight">
                  เปลี่ยนเนื้อหาดิบ สู่ <span className="bg-white px-2 py-0.5 rounded-lg text-[#ea580c] sketch-border inline-block rotate-[1deg] sketch-shadow-sm">Slide Deck เวิลด์คลาส</span> ด้วย Gemini Notebook
                </h1>
                <p className="text-sm sm:text-base font-bold text-[#412d17]/85 leading-relaxed max-w-2xl">
                  คู่มือและคลัง Master Prompts ปรับแต่งเฉพาะทาง 20 สถานการณ์ ครอบคลุมการควบคุมบทบาท แหล่งข้อมูล โครงสร้างสไลด์ และสไตล์ภาพ ให้คุณสร้าง Presentation ที่กระชับ ตรงประเด็น แม่นยำ 100% โดยไร้ปัญหา AI Hallucination
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full">
                  <span className="flex items-center gap-1.5 bg-[#fefdf5] sketch-border px-3 py-1 rounded-full text-xs font-bold sketch-shadow-sm text-[#412d17]">
                    🟢 Source Grounding 100%
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#fefdf5] sketch-border px-3 py-1 rounded-full text-xs font-bold sketch-shadow-sm text-[#412d17]">
                    🟢 ควบคุมไม่เกิน 10 สไลด์
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#fefdf5] sketch-border px-3 py-1 rounded-full text-xs font-bold sketch-shadow-sm text-[#412d17]">
                    🟢 รองรับ Custom Prompts
                  </span>
                </div>
              </div>

              {/* Doughnut Chart card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md bg-white p-6 rounded-2xl sketch-border-thick sketch-shadow-lg space-y-4">
                  <div className="flex justify-between items-center border-b border-dashed border-[#412d17]/20 pb-3">
                    <h3 className="font-black text-[#412d17] text-sm">สัดส่วนหมวดหมู่ 20 Use Cases</h3>
                    <span className="text-[10px] font-bold text-slate-400">ภาพรวมคลัง Prompts</span>
                  </div>
                  <SvgDoughnutChart />
                </div>
              </div>
            </div>
          </div>
          <div className="torn-divider-bottom" />
        </section>

        {/* Section 1: Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
          <div className="border-l-4 border-[#ea580c] pl-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#412d17]">
              1. ฟีเจอร์หลักและการทำงานของ Gemini Notebook
            </h2>
            <p className="text-slate-500 text-sm mt-1">เข้าใจขีดความสามารถเฉพาะตัวที่ออกแบบมาเพื่อการจัดการความรู้และทำสไลด์โดยเฉพาะ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const rotations = ["rotate-[-1.5deg]", "rotate-[1deg]", "rotate-[-1deg]"];
              const rot = rotations[idx % rotations.length];
              return (
                <div
                  key={idx}
                  className={`bg-white sketch-border p-6 sm:p-8 rounded-2xl ${rot} sketch-shadow transition-transform hover:rotate-0 hover:scale-[1.02] duration-250 space-y-3.5`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#fffbeb] sketch-border flex items-center justify-center text-xl shrink-0">
                    {feat.icon}
                  </div>
                  <h3 className="font-black text-[#412d17] text-base sm:text-lg leading-snug">{feat.title}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Workflow */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-10">
          <div className="border-l-4 border-[#ea580c] pl-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#412d17]">
              2. ขั้นตอนการทำงาน (Professional Workflow)
            </h2>
            <p className="text-slate-500 text-sm mt-1">5 ขั้นตอนมาตรฐานจากข้อมูลดิบสู่สไลด์ระดับมืออาชีพ</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl sketch-border-thick sketch-shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {workflowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl sketch-border space-y-3 flex flex-col justify-between ${
                    step.step === 4 ? "bg-[#fffbeb] border-[#ea580c] shadow-sm" : "bg-[#fbf8ee] border-[#412d17]"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-[#412d17] text-[#f6d41c] font-black flex items-center justify-center text-sm sketch-border">
                      {step.step}
                    </div>
                    <h4 className="font-black text-[#412d17] text-sm sm:text-base leading-tight">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 20 Use Cases */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-[#ea580c] pl-4">
            <div className="space-y-1.5">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#412d17]">
                3. คลัง 20 Master Prompts สำหรับ 20 Use Cases
              </h2>
              <p className="text-slate-500 text-sm">คัดลอก Prompt ที่โครงสร้างสมบูรณ์ครบ 8 องค์ประกอบ พร้อมใช้งานได้ทันที</p>
            </div>
            
            {/* Search & Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 ค้นหา Use Case..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2.5 border-2 border-[#412d17] rounded-xl text-sm font-bold text-[#412d17] bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50"
                />
              </div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2.5 border-2 border-[#412d17] rounded-xl text-sm font-bold text-[#412d17] bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50"
              >
                <option value="all">หมวดหมู่ทั้งหมด</option>
                <option value="executive">ผู้บริหาร & ยุทธศาสตร์</option>
                <option value="academic">วิชาการ & การสอน</option>
                <option value="business">ธุรกิจ & การตลาด</option>
                <option value="data">ข้อมูล & เทคนิค</option>
              </select>
            </div>
          </div>

          {/* Prompts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredUseCases.length > 0 ? (
              filteredUseCases.map((item, idx) => {
                const fullPrompt = getFormattedPrompt(item);
                const rotations = ["rotate-[-0.5deg]", "rotate-[0.5deg]"];
                const rot = rotations[idx % rotations.length];
                
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-3xl sketch-border-thick p-5 sm:p-7 ${rot} sketch-shadow-lg flex flex-col justify-between overflow-hidden relative`}
                  >
                    {/* Tiny watermark number */}
                    <div className="absolute top-2 right-4 text-5xl font-black text-slate-100 select-none pointer-events-none">
                      {String(item.id).padStart(2, '0')}
                    </div>

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-black text-[#412d17] text-base sm:text-lg leading-snug">
                          {item.title}
                        </h3>
                        <span className="px-2.5 py-1 bg-[#fffbeb] text-[#ea580c] sketch-border rounded-lg text-[10px] font-black shrink-0">
                          {item.categoryLabel}
                        </span>
                      </div>

                      {/* Displaying Prompt structure fields */}
                      <div className="bg-[#412d17] text-white p-4.5 rounded-xl font-sans text-xs leading-relaxed space-y-1.5 sketch-border border-dashed relative">
                        <div className="text-[10px] font-black text-[#f6d41c] uppercase tracking-wider mb-2 border-b border-white/10 pb-1.5 flex justify-between">
                          <span>PROMPT ใน Studio</span>
                          <span>วางในช่อง Slide Deck > ✏️</span>
                        </div>
                        <p><strong className="text-[#f6d41c]">บทบาท :</strong> {item.role}</p>
                        <p><strong className="text-[#f6d41c]">แหล่งข้อมูล :</strong> {item.source}</p>
                        <p><strong className="text-[#f6d41c]">กลุ่มเป้าหมาย :</strong> {item.audience}</p>
                        <p><strong className="text-[#f6d41c]">เป้าหมาย :</strong> {item.goal}</p>
                        <p><strong className="text-[#f6d41c]">โครงสร้างสไลด์ :</strong> {item.structure}</p>
                        <p><strong className="text-[#f6d41c]">กติกา :</strong> {item.rules}</p>
                        <p><strong className="text-[#f6d41c]">สไตล์ภาพ :</strong> {item.style}</p>
                        <p><strong className="text-[#f6d41c]">ภาษา :</strong> {item.language}</p>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-dashed border-[#412d17]/10 flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-500 uppercase">
                        พร้อมใช้งาน Gemini Notebook
                      </span>
                      <button
                        onClick={() => copyToClipboard(fullPrompt, item.id)}
                        className="px-3.5 py-2 bg-[#f6d41c] hover:bg-[#eecb14] text-[#412d17] font-black text-xs rounded-xl sketch-border sketch-shadow-sm flex items-center gap-1 transition-all cursor-pointer"
                      >
                        {copiedCardId === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#1f7a3a]" />
                            <span>คัดลอกสำเร็จ!</span>
                          </>
                        ) : (
                          <>
                            <Clipboard className="w-3.5 h-3.5" />
                            <span>คัดลอก Prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full bg-white p-12 text-center rounded-3xl sketch-border sketch-shadow">
                <p className="text-slate-500 font-bold text-sm">❌ ไม่พบ Use Case ที่ตรงกับเงื่อนไขการค้นหา</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Live Generator */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-10">
          <div className="border-l-4 border-[#ea580c] pl-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#412d17]">
              4. เครื่องมือสร้าง Custom Prompt อัตโนมัติ
            </h2>
            <p className="text-slate-500 text-sm mt-1">กำหนดพารามิเตอร์ของคุณเอง เพื่อสร้าง Prompt ที่ผ่านการปรับแต่งโครงสร้างมาตรฐาน 8 ข้อ</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl sketch-border-thick sketch-shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            {/* Pin decoration */}
            <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 text-3xl select-none">📌</div>

            {/* Inputs Panel */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-black text-[#412d17] mb-1">1. บทบาท (Role)</label>
                <input
                  type="text"
                  value={builderRole}
                  onChange={(e) => setBuilderRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 border-2 border-[#412d17] rounded-xl text-sm font-bold text-[#412d17] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 bg-[#fefdf5]"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-[#412d17] mb-1">2. กลุ่มเป้าหมาย (Target Audience)</label>
                <input
                  type="text"
                  value={builderAudience}
                  onChange={(e) => setBuilderAudience(e.target.value)}
                  className="w-full px-3.5 py-2.5 border-2 border-[#412d17] rounded-xl text-sm font-bold text-[#412d17] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 bg-[#fefdf5]"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-[#412d17] mb-1">3. เป้าหมายหลัก (Goal)</label>
                <input
                  type="text"
                  value={builderGoal}
                  onChange={(e) => setBuilderGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 border-2 border-[#412d17] rounded-xl text-sm font-bold text-[#412d17] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 bg-[#fefdf5]"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-[#412d17] mb-1">4. จำนวนและโครงสร้างสไลด์ (ไม่เกิน 10 สไลด์)</label>
                <input
                  type="text"
                  value={builderStructure}
                  onChange={(e) => setBuilderStructure(e.target.value)}
                  className="w-full px-3.5 py-2.5 border-2 border-[#412d17] rounded-xl text-sm font-bold text-[#412d17] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 bg-[#fefdf5]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#412d17] mb-1">5. สไตล์ภาพ (Visual Style)</label>
                  <input
                    type="text"
                    value={builderStyle}
                    onChange={(e) => setBuilderStyle(e.target.value)}
                    className="w-full px-3.5 py-2.5 border-2 border-[#412d17] rounded-xl text-sm font-bold text-[#412d17] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 bg-[#fefdf5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#412d17] mb-1">6. ภาษา (Language)</label>
                  <input
                    type="text"
                    value={builderLang}
                    onChange={(e) => setBuilderLang(e.target.value)}
                    className="w-full px-3.5 py-2.5 border-2 border-[#412d17] rounded-xl text-sm font-bold text-[#412d17] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50 bg-[#fefdf5]"
                  />
                </div>
              </div>
            </div>

            {/* Generated Prompt Preview */}
            <div className="lg:col-span-6 bg-[#412d17] text-slate-100 p-5 sm:p-7 rounded-2xl flex flex-col justify-between space-y-4 sketch-border relative">
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-[10px] font-black text-[#f6d41c]">PROMPT PREVIEW (พร้อมก๊อปปี้)</span>
                  <span className="text-[10px] text-white/50">วางในช่อง Slide Deck > ✏️</span>
                </div>
                <pre className="text-xs font-mono whitespace-pre-wrap leading-relaxed text-slate-200 overflow-y-auto max-h-72 custom-scrollbar select-all">
                  {customBuilderOutput}
                </pre>
              </div>
              
              <button
                onClick={() => copyToClipboard(customBuilderOutput, "builder")}
                className="w-full py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-sm rounded-xl sketch-border sketch-shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {copiedBuilder ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>คัดลอก Custom Prompt สำเร็จแล้ว! 🚀</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>คัดลอก Custom Prompt นี้ 🔗</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Section 5: Pro-tips */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
          <div className="border-l-4 border-[#ea580c] pl-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#412d17]">
              5. Creative Director’s Pro-Tips
            </h2>
            <p className="text-slate-500 text-sm mt-1">กฎเหล็ก 3 ข้อ เพื่อยกระดับสไลด์จากธรรมดา สู่ระดับสากล</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tip 1 */}
            <div className="bg-gradient-to-br from-[#fffbeb] to-amber-50 p-7 rounded-2xl sketch-border sketch-shadow space-y-3.5 rotate-[-1deg]">
              <div className="text-[#ea580c] font-black text-base sm:text-lg">💡 Rule 1: Strict Source Control</div>
              <h4 className="font-black text-[#412d17] text-sm">ป้องกัน AI มั่วข้อมูล 100%</h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                ต้องใส่คำสั่งกำกับใน Prompt เสมอว่า <span className="font-bold text-[#ea580c] underline">&ldquo;ใช้เฉพาะเนื้อหาในแหล่งที่อัปโหลดเท่านั้น ห้ามเพิ่มข้อมูลนอกแหล่ง&rdquo;</span> เพื่อบังคับให้โมเดลดึงข้อมูลเฉพาะเอกสารอ้างอิงจริงเท่านั้น
              </p>
            </div>
            {/* Tip 2 */}
            <div className="bg-gradient-to-br from-[#f0f9ff] to-sky-50 p-7 rounded-2xl sketch-border sketch-shadow space-y-3.5 rotate-[1deg]">
              <div className="text-sky-600 font-black text-base sm:text-lg">🎯 Rule 2: Action Titles Matter</div>
              <h4 className="font-black text-[#412d17] text-sm">ห้ามใช้หัวสไลด์คำลอยๆ</h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                อย่าปล่อยให้ AI เขียนหัวสไลด์ว่า &ldquo;ผลการดำเนินงาน&rdquo; แต่จงบังคับกติกาใน Prompt ให้สรุปใจความ เช่น <span className="font-bold text-sky-600 underline">&ldquo;ยอดขาย Q3 เติบโต 15% จากการขยายตลาดเอเชีย&rdquo;</span> เพื่อให้ผู้ฟังเข้าใจอินไซต์ทันที
              </p>
            </div>
            {/* Tip 3 */}
            <div className="bg-gradient-to-br from-[#f0fdf4] to-emerald-50 p-7 rounded-2xl sketch-border sketch-shadow space-y-3.5 rotate-[-0.5deg]">
              <div className="text-[#1f7a3a] font-black text-base sm:text-lg">📌 Rule 3: One Slide = One Takeaway</div>
              <h4 className="font-black text-[#412d17] text-sm">ไม่เกิน 10 สไลด์ ต่อ Deck</h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                การคุมจำนวนสไลด์ไม่ให้เกิน 10 แผ่น จะบังคับให้ AI สกัดเฉพาะ &ldquo;น้ำเนื้อ&rdquo; ที่ทรงอิมแพกต์ที่สุด ลดภาระสายตาของผู้ฟัง และสร้างการนำเสนอที่น่าจดจำ
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
