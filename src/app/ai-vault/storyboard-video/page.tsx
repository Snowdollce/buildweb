"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Copy, Check, ChevronDown, ChevronUp, Terminal } from "lucide-react";
import { STORYBOARD_PROMPT, VIDEO_FLOW_PROMPT } from "@/data/prompts";
import Footer from "@/components/Footer";

export default function StoryboardVideoPromptPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [copiedStatus, setCopiedStatus] = useState<number | null>(null);

  useEffect(() => {
    document.title = "คอร์ส AI กับคลังแสงแห่งการเรียนรู้ ทดลองเล่น";
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const copyPrompt = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStatus(index);
      setTimeout(() => setCopiedStatus(null), 2000);
    });
  };

  const prompts = [
    {
      id: 1,
      num: "01",
      badge: "01 · CHATGPT PROMPT",
      title: "Storyboard Generator",
      desc: "ตั้ง ChatGPT เป็นนักเขียนสตอรี่บอร์ดและผู้กำกับโฆษณาภาพยนตร์ — สร้างกริดภาพ 9 ช่อง สัดส่วน 9:16 ที่มีความสม่ำเสมอของตัวละครและสินค้าอย่างสมบูรณ์แบบ",
      bullets: [
        "วิเคราะห์รูปภาพสินค้าและจัดทำสตอรี่บอร์ดอัตโนมัติ",
        "วางทิศทางมุมกล้อง โครงเรื่อง และจัดแสงระดับโฆษณาพรีเมียม",
        "ควบคุมความสม่ำเสมอของตัวละครและโปรดักต์ทั้ง 9 เฟรม",
        "ปรับเปลี่ยนสัดส่วนอัตโนมัติตามโจทย์ (16:9, 9:16, 1:1, 4:5)"
      ],
      rawContent: STORYBOARD_PROMPT,
      accentColor: "border-[#f6d41c]",
      badgeColor: "bg-[#fffbeb] text-[#ea580c] border-[#f6d41c]"
    },
    {
      id: 2,
      num: "02",
      badge: "02 · GOOGLE FLOW PROMPT",
      title: "Google Flow Video Prompt Generator",
      desc: "แปลงสตอรี่บอร์ดของคุณให้เป็นวิดีโอโฆษณา 10 วินาทีด้วย Google FLOW — ล็อกชุด ล็อกทรงผม ล็อกใบหน้า ล็อกโปรดักต์ พร้อมกำหนดเพลงและบทพูดในทีเดียว",
      bullets: [
        "ล็อกองค์ประกอบสำคัญ (Face Lock, Hair Lock, Outfit Lock, Product Lock)",
        "แปลงสตอรี่บอร์ดทีละพาเนลเป็น Flow Video Prompt อย่างละเอียด",
        "กำหนดดนตรีประกอบและบทพูดสั้นๆ (ภาษาอังกฤษสำเนียงท้องถิ่น หรือภาษาไทย) ใน 2 วินาทีแรก",
        "ให้ผลลัพธ์เป็น Flow Code สำหรับนำไปใช้รันวิดีโอได้ทันทีโดยไม่มีการวิเคราะห์อื่นๆ"
      ],
      rawContent: VIDEO_FLOW_PROMPT,
      accentColor: "border-[#1f7a3a]",
      badgeColor: "bg-[#f0fdf4] text-[#1f7a3a] border-[#1f7a3a]"
    }
  ];

  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#fefdf5] pb-20">
        
        {/* Top Banner section */}
        <section className="relative w-full overflow-hidden bg-[#f6d41c] py-12 md:py-16 border-b-4 border-[#412d17]">
          <div className="absolute inset-0 bg-yellow-400/10 pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            
            {/* Back Breadcrumb */}
            <div className="mb-4">
              <Link
                href="/ai-vault"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#412d17] hover:text-[#ea580c] bg-white sketch-border px-3.5 py-1.5 rounded-xl sketch-shadow-sm transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                กลับไปยังคลังแสงหลัก
              </Link>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-block bg-[#412d17] text-white text-[10px] sm:text-xs font-black px-3.5 py-1.5 tracking-wider rounded-md">
                EXCLUSIVE AI PROMPT
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#412d17] leading-tight">
                Prompt การสร้างสตอรี่บอร์ดและสร้างคลิปวิดีโอ
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-bold text-[#412d17]/80 max-w-2xl mx-auto">
                แจกฟรีชุดคำสั่ง Prompt สั่งงาน Generative AI สำหรับกระบวนการทำวิดีโอโปรดักชัน
                ตั้งแต่เริ่มเขียนภาพ Storyboard จนถึงการเจเนอเรตวิดีโอโฆษณาคุณภาพสูง
              </p>
            </div>

          </div>
          <div className="torn-divider-bottom" />
        </section>

        {/* Prompts Cards Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full py-16 space-y-12">
          
          {prompts.map((prompt, idx) => {
            const isExpanded = expandedCard === prompt.id;
            const rotations = ["rotate-[-0.5deg]", "rotate-[0.5deg]"];
            const rot = rotations[idx % rotations.length];
            return (
              <div
                key={prompt.id}
                className={`relative bg-white sketch-border-thick rounded-3xl p-6 sm:p-10 ${rot} sketch-shadow-lg transition-all duration-200 overflow-hidden`}
              >
                
                {/* Large Background Faded Number */}
                <div className="absolute top-4 right-6 text-7xl sm:text-8xl font-black text-[#412d17]/5 select-none pointer-events-none font-display">
                  {prompt.num}
                </div>

                <div className="space-y-6">
                  {/* Category Tracker Badge */}
                  <div className={`inline-block text-[10px] sm:text-xs font-black px-3.5 py-1.5 rounded-lg sketch-border ${prompt.badgeColor}`}>
                    {prompt.badge}
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#412d17] leading-tight">
                      {prompt.title}
                    </h2>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-3xl">
                      {prompt.desc}
                    </p>
                  </div>

                  {/* Bullets lists */}
                  <ul className="space-y-2.5 max-w-3xl">
                    {prompt.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start text-xs sm:text-sm font-bold text-slate-700">
                        <span className="text-[#ea580c] shrink-0">✦</span>
                        <span className="leading-normal">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-dashed border-[#412d17]/10 flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => toggleExpand(prompt.id)}
                        className={`w-full sm:w-auto font-black text-sm px-6 py-3.5 rounded-xl sketch-border sketch-shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          isExpanded 
                            ? "bg-[#ea580c] text-white hover:bg-[#c2410c]" 
                            : "bg-white text-[#412d17] hover:bg-slate-50"
                        }`}
                      >
                        {isExpanded ? (
                          <>
                            <span>ซ่อนกล่องข้อความ Prompt 📋</span>
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            <span>ดูเนื้อหา Prompt และคัดลอก 📋</span>
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => copyPrompt(prompt.rawContent, prompt.id)}
                        className="w-full sm:w-auto bg-[#f6d41c] hover:bg-[#eecb14] text-[#412d17] font-black text-sm px-6 py-3.5 rounded-xl sketch-border sketch-shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        {copiedStatus === prompt.id ? (
                          <>
                            <Check className="w-4 h-4 text-[#1f7a3a]" />
                            <span>คัดลอกสำเร็จแล้ว! 🚀</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>คัดลอก Prompt 🔗</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Expandable Markdown Code block */}
                    {isExpanded && (
                      <div className="mt-4 space-y-3 animate-fade-in">
                        <div className="flex items-center justify-between bg-[#412d17] text-white px-4 py-2 rounded-t-xl text-xs font-bold sketch-border border-b-0">
                          <span className="flex items-center gap-1.5">
                            <Terminal className="w-4 h-4 text-[#f6d41c]" />
                            RAW SYSTEM PROMPT ({prompt.num})
                          </span>
                          <button
                            onClick={() => copyPrompt(prompt.rawContent, prompt.id)}
                            className="bg-white/10 hover:bg-white/20 text-[#f6d41c] px-2.5 py-1 rounded-md text-[10px] font-black transition-colors cursor-pointer"
                          >
                            {copiedStatus === prompt.id ? "คัดลอกแล้ว!" : "คัดลอกด่วน 📋"}
                          </button>
                        </div>
                        
                        <div className="bg-[#fbf8ee] border-2 border-[#412d17] rounded-b-xl p-4 sm:p-6 shadow-inner max-h-[450px] overflow-y-auto font-mono text-xs text-[#412d17] leading-relaxed whitespace-pre-wrap select-all selection:bg-[#f6d41c] selection:text-[#412d17]">
                          {prompt.rawContent}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}

        </section>

      </main>
      <Footer />
    </>
  );
}
