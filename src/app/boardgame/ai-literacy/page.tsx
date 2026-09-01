"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Maximize2, RefreshCw } from "lucide-react";

export default function BoardgameAiLiteracyPage() {
  const [iframeKey, setIframeKey] = useState(0);

  const handleRefresh = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#0f172a] select-none overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="w-full bg-[#1e293b] border-b border-slate-700 px-4 py-2.5 flex items-center justify-between z-10 shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>กลับหน้าหลัก</span>
          </Link>
          <div className="h-5 w-[1px] bg-slate-700 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg">🎲</span>
            <div className="flex flex-col">
              <h1 className="text-xs sm:text-sm font-black text-white leading-tight">
                บอร์ดเกมเศรษฐี AI Literacy
              </h1>
              <span className="text-[10px] text-amber-400 font-semibold hidden sm:inline">
                Generative AI Creative Design (15 Challenge Cards & Final Boss Rush)
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            title="เริ่มเกมใหม่ / รีเฟรช"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold border border-slate-600 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">เริ่มใหม่</span>
          </button>
          <a
            href="/boardgame/ai-literacy/index.html"
            target="_blank"
            rel="noopener noreferrer"
            title="เปิดเต็มหน้าต่างใหม่"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f6d41c] hover:bg-amber-400 text-[#412d17] text-xs sm:text-sm font-black transition-transform hover:scale-105"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>เปิดเต็มจอ ↗</span>
          </a>
        </div>
      </div>

      {/* Game Iframe Container */}
      <div className="flex-1 w-full h-full relative bg-[#0f172a]">
        <iframe
          key={iframeKey}
          src="/boardgame/ai-literacy/index.html"
          className="w-full h-full border-0"
          title="บอร์ดเกมเศรษฐี Generative AI Creative Design"
          allow="autoplay; fullscreen"
        />
      </div>
    </div>
  );
}
