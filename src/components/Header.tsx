"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [boardgameDropdownOpen, setBoardgameDropdownOpen] = useState(false);
  const boardgameDropdownRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string, id?: string) => {
    if (id && pathname === targetPath) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
      setDropdownOpen(false);
      setBoardgameDropdownOpen(false);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (boardgameDropdownRef.current && !boardgameDropdownRef.current.contains(event.target as Node)) {
        setBoardgameDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fefdf5] border-b-2 border-[#412d17] sketch-shadow-sm select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#f6d41c] text-[#412d17] px-2.5 py-1 rounded-lg font-black text-sm sketch-border sketch-shadow-sm transform group-hover:rotate-[-2deg] transition-transform">
              DX Hub
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#412d17] leading-none">
                AI Capability Development
              </span>
              <span className="text-[10px] font-bold text-[#412d17]/60 leading-none mt-1">
                DX Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-black text-sm text-[#412d17] hover:text-[#ea580c] transition-colors relative py-1 cursor-pointer group"
            >
              หน้าแรก
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea580c] transition-all group-hover:w-full" />
            </Link>

            {/* Courses Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center gap-1 font-black text-sm text-[#412d17] hover:text-[#ea580c] transition-colors py-1 cursor-pointer"
              >
                คอร์สทั้งหมด
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white sketch-border sketch-shadow-sm rounded-xl py-2 px-1.5 z-50 transform rotate-[-0.5deg]"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href="/courses/dx-mga"
                    onClick={(e) => handleNavClick(e, "/courses/dx-mga")}
                    className="block font-bold text-xs sm:text-sm text-[#412d17] hover:text-[#ea580c] hover:bg-[#f6d41c]/20 px-3 py-2.5 rounded-lg transition-colors"
                  >
                    🎨 Generative AI & Design
                  </Link>
                  <Link
                    href="/dx-09"
                    onClick={(e) => handleNavClick(e, "/dx-09")}
                    className="block font-bold text-xs sm:text-sm text-[#412d17] hover:text-[#ea580c] hover:bg-[#f6d41c]/20 px-3 py-2.5 rounded-lg transition-colors border-t border-dashed border-[#412d17]/10"
                  >
                    💻 Build WebApp with AI
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#pricing-section"
              onClick={(e) => handleNavClick(e, "/", "pricing-section")}
              className="font-black text-sm text-[#412d17] hover:text-[#ea580c] transition-colors relative py-1 cursor-pointer group"
            >
              ค่าลงทะเบียน
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea580c] transition-all group-hover:w-full" />
            </Link>
            
            {/* Boardgame Dropdown */}
            <div className="relative" ref={boardgameDropdownRef}>
              <button
                onClick={() => setBoardgameDropdownOpen(!boardgameDropdownOpen)}
                onMouseEnter={() => setBoardgameDropdownOpen(true)}
                className={`flex items-center gap-1 font-black text-sm transition-colors py-1 cursor-pointer ${
                  pathname.startsWith("/boardgame") ? "text-[#ea580c]" : "text-[#412d17] hover:text-[#ea580c]"
                }`}
              >
                🎲 Boardgame
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${boardgameDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {boardgameDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-72 bg-white sketch-border sketch-shadow-sm rounded-xl py-2 px-1.5 z-50 transform rotate-[0.5deg]"
                  onMouseLeave={() => setBoardgameDropdownOpen(false)}
                >
                  <Link
                    href="/boardgame/ai-literacy"
                    onClick={() => setBoardgameDropdownOpen(false)}
                    className="block font-bold text-xs sm:text-sm text-[#412d17] hover:text-[#ea580c] hover:bg-[#f6d41c]/20 px-3 py-2.5 rounded-lg transition-colors"
                  >
                    🎯 AI Literacy
                    <span className="block text-[10px] text-[#412d17]/60 font-semibold mt-0.5">
                      เกมเศรษฐี Gen AI Creative Design
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/prompt-workshop"
              className={`font-black text-sm transition-colors relative py-1 cursor-pointer group ${
                pathname.startsWith("/prompt-workshop") ? "text-[#ea580c]" : "text-[#412d17] hover:text-[#ea580c]"
              }`}
            >
              Workshop Playground
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#ea580c] transition-all ${pathname.startsWith("/prompt-workshop") ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>

            <Link
              href="/ai-vault"
              className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl font-black text-sm sketch-border transition-all hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${
                pathname.startsWith("/ai-vault")
                  ? "bg-[#f6d41c] text-[#412d17] sketch-shadow-sm"
                  : "bg-white text-[#412d17] hover:bg-[#f6d41c] sketch-shadow-sm"
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#ea580c] animate-pulse" />
              คลังแสง AI ⚡
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#412d17] focus:outline-none cursor-pointer hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="เมนูหลัก"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-[#412d17] bg-[#fefdf5] py-4 px-6 space-y-3 shadow-inner">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block font-black text-base py-2 text-[#412d17] hover:text-[#ea580c] transition-colors cursor-pointer"
          >
            หน้าแรก
          </Link>
          
          <div className="space-y-1.5 pl-2 border-l-2 border-[#ea580c]/30">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest px-2 py-1">คอร์สทั้งหมด</div>
            <Link
              href="/courses/dx-mga"
              onClick={() => setIsOpen(false)}
              className="block font-bold text-sm py-2 px-2 text-[#412d17] hover:text-[#ea580c] hover:bg-slate-50 rounded-lg transition-colors"
            >
              🎨 Generative AI & Design
            </Link>
            <Link
              href="/dx-09"
              onClick={() => setIsOpen(false)}
              className="block font-bold text-sm py-2 px-2 text-[#412d17] hover:text-[#ea580c] hover:bg-slate-50 rounded-lg transition-colors"
            >
              💻 Build WebApp with AI
            </Link>
          </div>

          <Link
            href="/#pricing-section"
            onClick={(e) => handleNavClick(e, "/", "pricing-section")}
            className="block font-black text-base py-2 text-[#412d17] hover:text-[#ea580c] transition-colors cursor-pointer"
          >
            ค่าลงทะเบียน
          </Link>

          <div className="space-y-1.5 pl-2 border-l-2 border-[#ea580c]/30">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest px-2 py-1">🎲 Boardgame</div>
            <Link
              href="/boardgame/ai-literacy"
              onClick={() => setIsOpen(false)}
              className="block font-bold text-sm py-2 px-2 text-[#412d17] hover:text-[#ea580c] hover:bg-slate-50 rounded-lg transition-colors"
            >
              🎯 AI Literacy
              <span className="block text-[11px] text-[#412d17]/60 font-normal">
                เกมเศรษฐี Generative AI Creative Design
              </span>
            </Link>
          </div>

          <Link
            href="/prompt-workshop"
            onClick={() => setIsOpen(false)}
            className={`block font-black text-base py-2 transition-colors cursor-pointer ${
              pathname.startsWith("/prompt-workshop") ? "text-[#ea580c]" : "text-[#412d17] hover:text-[#ea580c]"
            }`}
          >
            Workshop Playground
          </Link>

          <div className="pt-2">
            <Link
              href="/ai-vault"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-black text-base sketch-border transition-all ${
                pathname.startsWith("/ai-vault")
                  ? "bg-[#f6d41c] text-[#412d17] sketch-shadow-sm"
                  : "bg-white text-[#412d17] hover:bg-[#f6d41c] sketch-shadow-sm"
              }`}
            >
              <Sparkles className="w-5 h-5 text-[#ea580c] animate-pulse" />
              คลังแสง AI ⚡
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
