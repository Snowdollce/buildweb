"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "หน้าแรก", href: "/", id: "" },
    { name: "เนื้อหาหลักสูตร", href: "/#curriculum-section", id: "curriculum-section" },
    { name: "ค่าลงทะเบียน", href: "/#pricing-section", id: "pricing-section" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fefdf5] border-b-2 border-[#412d17] sketch-shadow-sm select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#f6d41c] text-[#412d17] px-2.5 py-1 rounded-lg font-black text-sm sketch-border sketch-shadow-sm transform group-hover:rotate-[-2deg] transition-transform">
              DX-09
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#412d17] leading-none">
                Build WebApp with AI
              </span>
              <span className="text-[10px] font-bold text-[#412d17]/60 leading-none mt-1">
                Vibe Coding
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={(e) => item.id && handleNavClick(e, item.id)}
                className="font-black text-sm text-[#412d17] hover:text-[#ea580c] transition-colors relative py-1 cursor-pointer group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea580c] transition-all group-hover:w-full" />
              </Link>
            ))}
            
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
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={(e) => item.id && handleNavClick(e, item.id)}
              className="block font-black text-base py-2 text-[#412d17] hover:text-[#ea580c] transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
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
