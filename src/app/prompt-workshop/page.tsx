"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft, RefreshCw, Send, ChevronRight, CheckCircle2, UserCircle2, Dices, Copy, Download, Check } from "lucide-react";
import { WORKSHOPS, Workshop, Role } from "./data";

export default function PromptWorkshopPlayground() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [reflection, setReflection] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleStartWorkshop = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setCurrentChallengeIndex(0);
    setSelectedRole(workshop.roles[0]); // default to first role
    setPrompt("");
    setAiResponse(null);
    setReflection("");
  };

  const randomizeChallenge = () => {
    if (!selectedWorkshop) return;
    const newIndex = Math.floor(Math.random() * selectedWorkshop.challenges.length);
    setCurrentChallengeIndex(newIndex);
    setPrompt("");
    setAiResponse(null);
    setReflection("");
  };

  const handleRunPrompt = async () => {
    if (!prompt.trim() || !selectedRole || !selectedWorkshop) return;
    setIsLoading(true);
    setAiResponse(null);

    const currentChallenge = selectedWorkshop.challenges[currentChallengeIndex];

    try {
      const res = await fetch("/api/workshop-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          role: selectedRole,
          challenge: currentChallenge,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setAiResponse(`⚠️ เกิดข้อผิดพลาด: ${data.error || "ไม่สามารถเชื่อมต่อ AI ได้ กรุณาตรวจสอบ API Key"}`);
      } else {
        setAiResponse(data.text);
      }
    } catch (err: any) {
      setAiResponse(`⚠️ เกิดข้อผิดพลาดในการส่งข้อมูล: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTryAnotherRole = () => {
    setPrompt("");
    setAiResponse(null);
  };

  const handleExit = () => {
    setSelectedWorkshop(null);
    setSelectedRole(null);
  };

  const handleCopy = () => {
    if (!aiResponse) return;
    navigator.clipboard.writeText(aiResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!aiResponse) return;
    const element = document.createElement("a");
    const file = new Blob([aiResponse], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `AI-Response-${selectedRole?.name || "result"}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // 1. HOME SCREEN: Select Workshop
  if (!selectedWorkshop) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-[#ea580c]" />
            AI Prompt Workshop Playground
          </h1>
          <p className="text-lg md:text-xl text-[#412d17]/80 max-w-2xl mx-auto">
            Interactive workspace for practicing Prompt through different roles and perspectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOPS.map((ws) => (
            <div key={ws.id} className="bg-white p-6 rounded-2xl sketch-border sketch-shadow-sm flex flex-col h-full hover:-translate-y-1 hover:sketch-shadow transition-all">
              <h3 className="text-xl font-bold mb-3">{ws.title}</h3>
              <p className="text-sm text-[#412d17]/70 mb-6 flex-grow">{ws.description}</p>
              
              <div className="mb-6 p-4 bg-[#fefdf5] rounded-xl sketch-border border-dashed">
                <p className="text-xs font-bold text-[#ea580c] mb-1">CHALLENGE</p>
                <p className="text-sm font-medium line-clamp-2">{ws.challenges[0]}</p>
              </div>

              <button 
                onClick={() => handleStartWorkshop(ws)}
                className="w-full bg-[#412d17] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 sketch-shadow-sm"
              >
                Start Workshop <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const currentChallenge = selectedWorkshop.challenges[currentChallengeIndex];

  // 2. WORKSHOP PLAYGROUND
  return (
    <div className="min-h-screen bg-[#fefdf5] pb-20">
      {/* Workshop Header */}
      <div className="bg-white border-b-2 border-[#412d17] sticky top-[64px] md:top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold">
            <button onClick={handleExit} className="text-[#412d17]/60 hover:text-[#ea580c] flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Exit
            </button>
            <span className="text-[#412d17]/30">/</span>
            <span>{selectedWorkshop.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-bold px-3 py-1.5 rounded-lg border-2 border-transparent text-[#412d17]/60 hover:text-[#412d17] transition-colors">
              How to Use
            </button>
            <button onClick={handleExit} className="text-sm font-bold px-3 py-1.5 rounded-lg border-2 border-[#412d17] bg-white hover:bg-slate-50 transition-colors sketch-shadow-sm flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Exit Workshop
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR: Brief & Roles */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white p-5 rounded-2xl sketch-border sketch-shadow-sm">
              <h2 className="text-sm font-bold text-[#412d17]/60 uppercase tracking-wider mb-1">Workshop</h2>
              <h3 className="text-xl font-black mb-6 leading-tight">{selectedWorkshop.title}</h3>
              
              <div className="space-y-4">
                <div className="p-3 border-2 border-red-500 rounded-xl relative mt-3">
                  <span className="absolute -top-3 left-3 bg-white px-2 text-xs font-bold text-red-500">CHALLENGE</span>
                  <p className="text-sm font-medium">{currentChallenge}</p>
                  
                  <button 
                    onClick={randomizeChallenge}
                    className="mt-3 w-full text-xs font-bold bg-red-50 text-red-600 hover:bg-red-100 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-red-200"
                  >
                    <Dices className="w-3.5 h-3.5" /> สุ่มโจทย์ใหม่
                  </button>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#ea580c] uppercase mb-1">Your Mission</h4>
                  <p className="text-sm text-[#412d17]/80">{selectedWorkshop.mission}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl sketch-border sketch-shadow-sm">
              <h2 className="text-sm font-bold text-[#412d17]/60 uppercase tracking-wider mb-4">Your Role Rotation</h2>
              <div className="space-y-2">
                {selectedWorkshop.roles.map((role) => {
                  const isSelected = selectedRole?.id === role.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role)}
                      className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-start gap-3 ${
                        isSelected 
                          ? "border-[#412d17] bg-[#412d17] text-white sketch-shadow-sm" 
                          : "border-transparent hover:border-[#412d17]/20 hover:bg-slate-50"
                      }`}
                    >
                      <div className={`mt-0.5 ${isSelected ? "text-[#f6d41c]" : "text-[#412d17]/40"}`}>
                        {isSelected ? <CheckCircle2 className="w-5 h-5" /> : <div className="w-5 h-5 rounded-full border-2 border-current" />}
                      </div>
                      <div>
                        <div className="font-bold text-sm">{role.name}</div>
                        <div className={`text-xs mt-1 line-clamp-2 ${isSelected ? "text-white/80" : "text-[#412d17]/60"}`}>
                          {role.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT: Prompt & Response */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Bar: Current Role context */}
            <div className="grid md:grid-cols-2 gap-4">
               <div className="bg-[#fefdf5] p-4 rounded-2xl border-2 border-[#412d17]/10 flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg mt-0.5 border-2 border-[#412d17]/10">
                    <Sparkles className="w-5 h-5 text-[#ea580c]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#ea580c] uppercase mb-0.5">Current Challenge</h3>
                    <p className="text-sm font-bold line-clamp-2">{currentChallenge}</p>
                  </div>
               </div>
               <div className="bg-[#f6d41c]/10 p-4 rounded-2xl border-2 border-[#f6d41c] flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg mt-0.5 border-2 border-[#f6d41c]">
                    <UserCircle2 className="w-5 h-5 text-[#412d17]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#ea580c] uppercase mb-0.5">Current Role</h3>
                    <p className="text-sm font-bold">{selectedRole?.name}</p>
                    <p className="text-xs text-[#412d17]/70 mt-0.5">{selectedRole?.description}</p>
                  </div>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column: Prompt Input */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl border-2 border-red-500 sketch-shadow-sm overflow-hidden flex flex-col h-[500px]">
                  <div className="p-4 border-b-2 border-red-500/20 bg-slate-50 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md border-2 border-red-500 text-red-500 flex items-center justify-center font-bold text-xs">1</span>
                    <h3 className="font-bold text-red-500 uppercase">Your Prompt</h3>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <p className="text-sm text-[#412d17]/70 mb-3">เขียน Prompt ของคุณให้ชัดเจน เพื่อให้ AI เข้าใจและช่วยคุณได้ดีที่สุด</p>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="เขียน Prompt ของคุณที่นี่..."
                      className="w-full flex-grow resize-none outline-none notebook-lines notebook-margin p-4 pl-12 text-sm leading-8 bg-transparent border-2 border-transparent focus:border-red-500/20 rounded-xl transition-colors"
                    />
                    
                    {prompt.length > 0 && prompt.length < 25 && (
                      <div className="mt-3 p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                        💡 <strong>คำแนะนำ:</strong> Prompt ของคุณค่อนข้างสั้น ลองเพิ่มรายละเอียด บทบาท หรือรูปแบบผลลัพธ์ที่ต้องการดูนะครับ
                      </div>
                    )}
                    
                    <div className="text-right text-xs text-[#412d17]/40 mt-2 font-mono">
                      {prompt.length} / 2000
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <button 
                      onClick={handleRunPrompt}
                      disabled={isLoading || !prompt.trim()}
                      className="w-full bg-[#412d17] disabled:bg-[#412d17]/50 text-white font-bold py-3 rounded-xl hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 sketch-shadow-sm"
                    >
                      {isLoading ? (
                         <><RefreshCw className="w-5 h-5 animate-spin" /> กำลังประมวลผลด้วย AI...</>
                      ) : (
                         <><Send className="w-4 h-4" /> Run Prompt (Gemini AI)</>
                      )}
                    </button>
                    {aiResponse && (
                      <button onClick={handleTryAnotherRole} className="w-full mt-3 text-sm font-bold text-[#ea580c] hover:underline flex items-center justify-center gap-2">
                        <RefreshCw className="w-4 h-4" /> Try Again (เขียนใหม่)
                      </button>
                    )}
                  </div>
                </div>

                {/* Tips block */}
                <div className="bg-white p-4 rounded-xl border-2 border-dashed border-[#412d17]/20">
                  <h4 className="text-xs font-bold mb-2">💡 TIPS สำหรับการเขียน Prompt ที่ดี</h4>
                  <ul className="text-xs space-y-1 text-[#412d17]/80">
                    <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#1f7a3a] mt-0.5 shrink-0" /> ระบุบทบาท (Role) ที่ชัดเจน</li>
                    <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#1f7a3a] mt-0.5 shrink-0" /> อธิบายบริบท / สถานการณ์</li>
                    <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#1f7a3a] mt-0.5 shrink-0" /> บอกสิ่งที่ต้องการให้ช่วย</li>
                    <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#1f7a3a] mt-0.5 shrink-0" /> ระบุรูปแบบผลลัพธ์ (เช่น ตาราง, เป็นข้อๆ)</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: AI Response & Reflection */}
              <div className="space-y-6">
                <div className={`bg-white rounded-2xl border-2 ${aiResponse ? 'border-red-500 sketch-shadow-red' : 'border-[#412d17]/20'} overflow-hidden flex flex-col min-h-[350px]`}>
                  <div className={`p-4 border-b-2 flex items-center justify-between ${aiResponse ? 'border-red-500/20 bg-slate-50' : 'border-[#412d17]/10 bg-slate-50'}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${aiResponse ? 'text-red-500 border-2 border-red-500' : 'bg-slate-200 text-slate-500'}`}><Sparkles className="w-3.5 h-3.5" /></span>
                      <h3 className={`font-bold ${aiResponse ? 'text-red-500' : 'text-slate-500'}`}>2. AI RESPONSE (GEMINI)</h3>
                    </div>
                    {aiResponse && (
                       <div className="flex gap-2">
                          <button onClick={handleCopy} className="text-[10px] font-bold px-2 py-1 border-2 border-[#412d17]/20 rounded-md hover:bg-slate-100 flex items-center gap-1">
                            {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                            {copied ? "Copied!" : "Copy"}
                          </button>
                          <button onClick={handleDownload} className="text-[10px] font-bold px-2 py-1 border-2 border-[#412d17]/20 rounded-md hover:bg-slate-100 flex items-center gap-1">
                            <Download className="w-3 h-3" /> Download
                          </button>
                       </div>
                    )}
                  </div>
                  <div className="p-4 flex-grow bg-[#fefdf5]/50">
                    {!aiResponse ? (
                      <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-12">
                        <Sparkles className="w-12 h-12 mb-3" />
                        <p className="text-sm font-medium">ผลลัพธ์จาก AI ตาม Prompt และ Role ของคุณ<br/>จะปรากฏที่นี่</p>
                      </div>
                    ) : (
                      <div className="prose prose-sm prose-orange max-w-none whitespace-pre-wrap font-sans text-[#412d17] leading-relaxed">
                        {aiResponse}
                      </div>
                    )}
                  </div>
                </div>

                {/* Reflection */}
                {aiResponse && (
                  <div className="bg-white rounded-2xl border-2 border-red-500 overflow-hidden">
                    <div className="p-4 border-b-2 border-red-500/20 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md border-2 border-red-500 text-red-500 flex items-center justify-center font-bold text-xs">3</span>
                      <h3 className="font-bold uppercase text-red-500">Reflect & Learn</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-bold mb-3">จากคำตอบของ AI ในมุมมองนี้ คุณเรียนรู้อะไร?</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                         <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-md text-slate-600">AI ให้ความสำคัญกับอะไรเป็นพิเศษ?</span>
                         <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-md text-slate-600">รูปแบบของคำตอบเป็นอย่างไร?</span>
                      </div>
                      <textarea
                        value={reflection}
                        onChange={(e) => setReflection(e.target.value)}
                        placeholder="เขียนสิ่งที่คุณสังเกตหรือเรียนรู้จาก Role นี้..."
                        className="w-full resize-none outline-none border-2 border-[#412d17]/10 rounded-xl p-3 text-sm focus:border-red-500/50 transition-colors h-24 bg-transparent"
                      />
                      <div className="mt-4 flex justify-center">
                        <button 
                          onClick={() => {
                            const nextRoleIndex = selectedWorkshop.roles.findIndex(r => r.id === selectedRole?.id) + 1;
                            if (nextRoleIndex < selectedWorkshop.roles.length) {
                              setSelectedRole(selectedWorkshop.roles[nextRoleIndex]);
                              handleTryAnotherRole();
                            } else {
                              alert("เยี่ยมมาก! คุณได้ทดลองครบทุก Role แล้ว");
                            }
                          }}
                          className="bg-white text-[#ea580c] border-2 border-[#ea580c] font-bold py-2.5 px-8 rounded-xl hover:bg-[#ea580c] hover:text-white transition-colors flex items-center gap-2 sketch-shadow-sm w-full justify-center"
                        >
                          <RefreshCw className="w-4 h-4" /> Try Another Role
                        </button>
                      </div>
                      <p className="text-center text-xs text-slate-400 mt-2">เปลี่ยน Role เพื่อดูมุมมองใหม่</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
