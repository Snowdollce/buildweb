"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Film, Folder, Wrench, Wallet, Lock, Unlock, Copy, Check, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";

export default function AiVaultPortal() {
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // Check if already unlocked on mount
  useEffect(() => {
    document.title = "คอร์ส AI กับคลังแสงแห่งการเรียนรู้ ทดลองเล่น";
    const savedStatus = localStorage.getItem("dx09_vault_unlocked");
    if (savedStatus === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "s8069d27x") {
      setIsUnlocked(true);
      setError("");
      localStorage.setItem("dx09_vault_unlocked", "true");
    } else {
      setError("รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง ❌");
    }
  };

  const handleLock = () => {
    setIsUnlocked(false);
    setPasscode("");
    localStorage.removeItem("dx09_vault_unlocked");
  };

  const copyToClipboard = (path: string) => {
    const fullUrl = `${window.location.origin}${path}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedLink(path);
      setTimeout(() => setCopiedLink(null), 2000);
    });
  };

  const explanationCards = [
    {
      icon: <Film className="w-8 h-8 text-[#ea580c]" />,
      title: "ทำคอนเทนต์ไม่ทัน ไม่กล้าออกกล้อง",
      desc: "อยากโพสต์ทุกวัน แต่ถ่าย-ตัดต่อ-เขียน script เองจนหมดแรง แถมไม่อยากเห็นหน้าตัวเอง",
      color: "bg-[#fffbeb] border-[#f6d41c]"
    },
    {
      icon: <Folder className="w-8 h-8 text-[#1f7a3a]" />,
      title: "งานซ้ำๆ กินเวลาทั้งวัน",
      desc: "ตอบลูกค้า ทำรายงาน วางแผน เองทุกอย่าง ไม่เหลือเวลาไปโตธุรกิจ",
      color: "bg-[#f0fdf4] border-[#1f7a3a]"
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#d64545]" />,
      title: "อยากมีระบบของตัวเอง แต่โค้ดไม่เป็น",
      desc: "ระบบจองคิว แชตบอต เว็บ — จ้างคนทำก็แพง ทำเองก็ไม่เป็น",
      color: "bg-[#fef2f2] border-[#d64545]"
    },
    {
      icon: <Wallet className="w-8 h-8 text-sky-600" />,
      title: "มีของในหัว แต่เปลี่ยนเป็นเงินไม่เป็น",
      desc: "อยากขายคอร์ส/สินค้าดิจิทัล แต่ไม่รู้จะปั้น product ออกมาขายยังไง",
      color: "bg-[#f0f9ff] border-sky-500"
    }
  ];

  const subpages = [
    {
      title: "Prompt การสร้างสตอรี่บอร์ดและสร้างคลิปวิดีโอ",
      path: "/ai-vault/storyboard-video",
      description: "คลังแสงย่อยแจก Prompt สำหรับสร้าง Storyboard และสร้างวิดีโอ Google Flow"
    },
    {
      title: "Slide Deck AI Prompt",
      path: "/ai-vault/slide-deck",
      description: "คลังแสงย่อยแจก Prompt สำหรับแปลงเอกสารเป็นสไลด์ Presentation เวิลด์คลาสด้วย Gemini Notebook"
    }
  ];

  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#fefdf5] pb-16">
        
        {/* Hero Header Section */}
        <section className="relative w-full overflow-hidden bg-[#f6d41c] py-16 border-b-4 border-[#412d17]">
          {/* Dim Overlay */}
          <div className="absolute inset-0 bg-yellow-400/10 pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-6">
            <div className="inline-block bg-[#412d17] text-[#f6d41c] text-xs sm:text-sm font-bold px-4 py-1.5 tracking-wider uppercase transform rotate-[-1.5deg] sketch-border sketch-shadow-sm select-none">
              ★ AI VAULT ★
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#412d17] leading-tight font-display tracking-tight">
              คลังแสง AI <br className="xs:inline sm:hidden" />
              <span className="bg-white px-3 py-1 rounded-2xl sketch-border inline-block rotate-[1deg] sketch-shadow-sm mt-2 text-[#ea580c]">
                แห่งการเรียนรู้ ทดลองเล่น
              </span>
            </h1>
            
            <p className="text-base sm:text-lg font-bold text-[#412d17]/85 max-w-2xl mx-auto leading-relaxed">
              ยินดีต้อนรับสู่พื้นที่จัดเก็บและแจกจ่าย Prompt เครื่องมือ AI สุดพิเศษ
              โดยผู้เรียนแต่ละท่านจะได้รับลิงก์เฉพาะตามที่คุณครูอนุญาตเท่านั้น
            </p>
          </div>
          <div className="torn-divider-bottom" />
        </section>

        {/* Explanation Cards Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#ea580c] text-white text-xs sm:text-sm font-extrabold px-5 py-2 rounded-full sketch-border sketch-shadow-sm rotate-[-1deg] mb-4">
              คลังแสง AI นี้ช่วยแก้ปัญหาอะไรบ้าง? 💡
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#412d17]">
              เปลี่ยนอุปสรรคในการทำธุรกิจให้จบในปุ่มเดียว
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {explanationCards.map((card, idx) => {
              const rotations = ["rotate-[-1deg]", "rotate-[1deg]", "rotate-[-0.5deg]", "rotate-[0.5deg]"];
              const rot = rotations[idx % rotations.length];
              return (
                <div
                  key={idx}
                  className={`sketch-border ${card.color} p-6 sm:p-8 rounded-2xl ${rot} sketch-shadow transition-transform hover:rotate-0 hover:scale-[1.02] duration-250 flex gap-4 items-start`}
                >
                  <div className="p-3 bg-white rounded-2xl sketch-border shrink-0">
                    {card.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-black text-[#412d17]">{card.title}</h3>
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Admin Passcode Protected Control Panel */}
        <section className="max-w-3xl mx-auto px-4 w-full mt-8">
          <div className="bg-white sketch-border-thick rounded-3xl p-6 sm:p-10 sketch-shadow-lg relative overflow-hidden">
            {/* Notebook Tape Accent */}
            <div className="absolute top-[-10px] left-10 w-[80px] h-[25px] bg-[#f6d41c]/55 transform rotate-[-8deg]" />
            
            {!isUnlocked ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 justify-center text-center">
                  <Lock className="w-6 h-6 text-[#ea580c] animate-bounce" />
                  <h3 className="text-xl sm:text-2xl font-black text-[#412d17]">
                    แผงควบคุมคลังแสง (เฉพาะผู้ดูแลระบบ)
                  </h3>
                </div>
                
                <p className="text-sm font-bold text-center text-slate-500 max-w-md mx-auto">
                  กรุณากรอกรหัสผ่านเพื่อเข้าใช้งานเครื่องมือสร้างและคัดลอกลิงก์ของคลังแสง AI ทั้งหมด
                </p>

                <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center">
                  <input
                    type="password"
                    placeholder="ใส่รหัสผ่านตรงนี้..."
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl sketch-border text-sm font-bold text-[#412d17] bg-[#fefdf5] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50"
                  />
                  <button
                    type="submit"
                    className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-sm px-6 py-3 rounded-xl sketch-border sketch-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                  >
                    ปลดล็อก 🔓
                  </button>
                </form>

                {error && (
                  <p className="text-xs font-black text-center text-[#d64545]">{error}</p>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-dashed border-[#412d17]/25 pb-4">
                  <div className="flex items-center gap-2">
                    <Unlock className="w-6 h-6 text-[#1f7a3a]" />
                    <h3 className="text-xl sm:text-2xl font-black text-[#412d17]">
                      รายการลิงก์คลังแสง AI ทั้งหมด
                    </h3>
                  </div>
                  
                  <button
                    onClick={handleLock}
                    className="bg-[#d64545] hover:bg-[#b93c3c] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg sketch-border sketch-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                  >
                    ล็อกแผงควบคุม 🔒
                  </button>
                </div>

                <div className="space-y-4">
                  {subpages.map((sub, idx) => (
                    <div
                      key={idx}
                      className="bg-[#fbf8ee] sketch-border p-4.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <span className="inline-block bg-[#1f7a3a] text-white font-black text-[10px] px-2 py-0.5 rounded-md">
                          ACTIVE SUBPAGE
                        </span>
                        <h4 className="font-bold text-[#412d17] text-sm sm:text-base">
                          {sub.title}
                        </h4>
                        <p className="text-xs font-medium text-slate-500">
                          {sub.description}
                        </p>
                      </div>

                      <div className="flex gap-2 items-center">
                        <Link
                          href={sub.path}
                          className="bg-white hover:bg-slate-50 text-[#412d17] font-extrabold text-xs px-3.5 py-2.5 rounded-lg sketch-border sketch-shadow-sm flex items-center gap-1 transition-all"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#ea580c]" />
                          ดูหน้าเพจ
                        </Link>
                        
                        <button
                          onClick={() => copyToClipboard(sub.path)}
                          className="bg-[#f6d41c] hover:bg-[#eecb14] text-[#412d17] font-extrabold text-xs px-3.5 py-2.5 rounded-lg sketch-border sketch-shadow-sm flex items-center gap-1 transition-all cursor-pointer"
                        >
                          {copiedLink === sub.path ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#1f7a3a]" />
                              คัดลอกแล้ว!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              คัดลอกลิงก์ 🔗
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
