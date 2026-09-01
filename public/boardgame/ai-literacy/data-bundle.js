// Embedded Data Bundle for Offline & file:// direct execution support
window.GENAI_GAME_DATA = {
  config: {
  "title": "Mastering Generative AI Creative Design Board Game",
  "version": "1.0.0",
  "totalRounds": 15,
  "boardSize": 32,
  "startingResources": {
    "aiCoin": 50,
    "creativityPoint": 0,
    "creativeEnergy": 3,
    "generativePower": 1
  },
  "passStartReward": {
    "aiCoin": 500
  },
  "scoreCalculation": {
    "coinToScoreRatio": 10,
    "powerBonusMultiplier": 20,
    "skipTurnPenalty": 0
  },
  "api": {
    "spreadsheetId": "1In60iHFC52qQn4ExXHWRTvxuk2bipHfVnNdEHx7hKTA",
    "defaultScriptUrl": "https://script.google.com/macros/s/AKfycbxGhaaGwZYMsTOxGdQ73r_k8rXICxhz8I5RI1Q1yGk2d9XWI3KhELYlIwtMuURGgYdTXA/exec"
  }
},
  board: [
  {
    "id": "tile-00",
    "index": 0,
    "name": "เข้าใจ AI ดี (รับเงิน 300)",
    "category": "CORNER",
    "type": "REWARD_CORNER",
    "x": 6.0,
    "y": 8.0,
    "color": "#10B981",
    "description": "เข้าใจ AI ดีเยี่ยม รับ 300 AI Coin"
  },
  {
    "id": "tile-01",
    "index": 1,
    "name": "AI ช่วยค้นหาข้อมูล",
    "category": "AI_FOR_WORK",
    "type": "PROPERTY",
    "propertyId": "property-01",
    "subcategory": "AI_SEARCH",
    "x": 14.5,
    "y": 8.0,
    "color": "#3B82F6"
  },
  {
    "id": "tile-02",
    "index": 2,
    "name": "AI ช่วยเขียนอีเมล",
    "category": "AI_FOR_WORK",
    "type": "PROPERTY",
    "propertyId": "property-02",
    "subcategory": "AI_EMAIL",
    "x": 22.5,
    "y": 8.0,
    "color": "#1D4ED8"
  },
  {
    "id": "tile-03",
    "index": 3,
    "name": "AI สร้างสไลด์นำเสนอ",
    "category": "AI_FOR_WORK",
    "type": "PROPERTY",
    "propertyId": "property-07",
    "subcategory": "AI_SLIDE",
    "x": 30.5,
    "y": 8.0,
    "color": "#EAB308"
  },
  {
    "id": "tile-04",
    "index": 4,
    "name": "AI ช่วยวิเคราะห์ข้อมูล",
    "category": "AI_FOR_WORK",
    "type": "PROPERTY",
    "propertyId": "property-04",
    "subcategory": "AI_ANALYSIS",
    "x": 38.5,
    "y": 8.0,
    "color": "#8B5CF6"
  },
  {
    "id": "tile-05",
    "index": 5,
    "name": "เข้าห้องน้ำ",
    "category": "CORNER",
    "type": "RESTROOM",
    "x": 47.8,
    "y": 8.0,
    "color": "#06B6D4",
    "description": "เข้าห้องน้ำ ผ่อนคลาย +1 Energy"
  },
  {
    "id": "tile-06",
    "index": 6,
    "name": "AI ช่วยแปลภาษา",
    "category": "AI_FOR_WORK",
    "type": "QUIZ",
    "subcategory": "AI_TOOLS",
    "x": 57.0,
    "y": 8.0,
    "color": "#10B981"
  },
  {
    "id": "tile-07",
    "index": 7,
    "name": "AI ช่วยสรุปเนื้อหา",
    "category": "AI_FOR_WORK",
    "type": "PROPERTY",
    "propertyId": "property-03",
    "subcategory": "AI_SUMMARY",
    "x": 65.0,
    "y": 8.0,
    "color": "#10B981"
  },
  {
    "id": "tile-08",
    "index": 8,
    "name": "AI ช่วยวางแผนงาน",
    "category": "AI_FOR_WORK",
    "type": "PROPERTY",
    "propertyId": "property-05",
    "subcategory": "AI_PLANNING",
    "x": 73.0,
    "y": 8.0,
    "color": "#F59E0B"
  },
  {
    "id": "tile-09",
    "index": 9,
    "name": "AI ช่วยตอบคำถาม",
    "category": "AI_FOR_WORK",
    "type": "QUIZ",
    "subcategory": "AI_BASICS",
    "x": 81.0,
    "y": 8.0,
    "color": "#3B82F6"
  },
  {
    "id": "tile-10",
    "index": 10,
    "name": "พัก 1 รอบ",
    "category": "CORNER",
    "type": "SKIP_TURN",
    "x": 93.0,
    "y": 8.0,
    "color": "#94A3B8",
    "description": "พักผ่อน ข้ามเทิร์น 1 รอบ"
  },
  {
    "id": "tile-11",
    "index": 11,
    "name": "AI ออกแบบ LOGO",
    "category": "AI_FOR_CREATIVITY",
    "type": "QUIZ",
    "subcategory": "AI_ART",
    "x": 93.0,
    "y": 22.0,
    "color": "#EC4899"
  },
  {
    "id": "tile-12",
    "index": 12,
    "name": "AI สร้างคอนเทนต์",
    "category": "AI_FOR_CREATIVITY",
    "type": "PROPERTY",
    "propertyId": "property-08",
    "subcategory": "AI_CONTENT",
    "x": 93.0,
    "y": 35.0,
    "color": "#F43F5E"
  },
  {
    "id": "tile-13",
    "index": 13,
    "name": "AI จัดการโซเชียลมีเดีย",
    "category": "AI_FOR_WORK",
    "type": "QUIZ",
    "subcategory": "PROMPT_ENGINEERING",
    "x": 93.0,
    "y": 48.0,
    "color": "#8B5CF6"
  },
  {
    "id": "tile-14",
    "index": 14,
    "name": "AI ช่วยรีทัชภาพ",
    "category": "AI_FOR_CREATIVITY",
    "type": "QUIZ",
    "subcategory": "AI_IMAGE",
    "x": 93.0,
    "y": 61.0,
    "color": "#D946EF"
  },
  {
    "id": "tile-15",
    "index": 15,
    "name": "AI สร้างเพลง/เสียง",
    "category": "AI_FOR_CREATIVITY",
    "type": "QUIZ",
    "subcategory": "AI_TOOLS",
    "x": 93.0,
    "y": 74.0,
    "color": "#06B6D4"
  },
  {
    "id": "tile-16",
    "index": 16,
    "name": "START (จุดเริ่มต้น)",
    "category": "CORNER",
    "type": "START",
    "x": 93.0,
    "y": 91.5,
    "color": "#10B981",
    "description": "จุดเริ่มต้น รับ 500 AI Coin"
  },
  {
    "id": "tile-17",
    "index": 17,
    "name": "AI ช่วยสร้าง 3D",
    "category": "AI_FOR_CREATIVITY",
    "type": "QUIZ",
    "subcategory": "AI_ART",
    "x": 81.0,
    "y": 91.5,
    "color": "#3B82F6"
  },
  {
    "id": "tile-18",
    "index": 18,
    "name": "AI ช่วยเขียนบท",
    "category": "AI_FOR_CREATIVITY",
    "type": "QUIZ",
    "subcategory": "PROMPT_ENGINEERING",
    "x": 73.0,
    "y": 91.5,
    "color": "#F59E0B"
  },
  {
    "id": "tile-19",
    "index": 19,
    "name": "AI สร้างวิดีโอ",
    "category": "AI_FOR_CREATIVITY",
    "type": "PROPERTY",
    "propertyId": "property-09",
    "subcategory": "AI_VIDEO",
    "x": 65.0,
    "y": 91.5,
    "color": "#14B8A6"
  },
  {
    "id": "tile-20",
    "index": 20,
    "name": "AI ผู้ช่วยอัจฉริยะ",
    "category": "AI_FOR_WORK",
    "type": "QUIZ",
    "subcategory": "AI_BASICS",
    "x": 57.0,
    "y": 91.5,
    "color": "#38BDF8"
  },
  {
    "id": "tile-21",
    "index": 21,
    "name": "AI Challenge (ท้าทาย)",
    "category": "AI_SPECIAL",
    "type": "CHALLENGE",
    "subcategory": "CHALLENGE",
    "x": 47.8,
    "y": 91.5,
    "color": "#EF4444"
  },
  {
    "id": "tile-22",
    "index": 22,
    "name": "AI สร้างภาพ (AI Art)",
    "category": "AI_FOR_CREATIVITY",
    "type": "PROPERTY",
    "propertyId": "property-06",
    "subcategory": "AI_IMAGE",
    "x": 38.5,
    "y": 91.5,
    "color": "#EC4899"
  },
  {
    "id": "tile-23",
    "index": 23,
    "name": "AI ช่วยคิดสโลแกน",
    "category": "AI_FOR_WORK",
    "type": "QUIZ",
    "subcategory": "PROMPT_ENGINEERING",
    "x": 30.5,
    "y": 91.5,
    "color": "#6366F1"
  },
  {
    "id": "tile-24",
    "index": 24,
    "name": "AI สร้างสรรค์ไอเดีย",
    "category": "AI_FOR_CREATIVITY",
    "type": "PROPERTY",
    "propertyId": "property-10",
    "subcategory": "AI_IDEA",
    "x": 22.5,
    "y": 91.5,
    "color": "#A855F7"
  },
  {
    "id": "tile-25",
    "index": 25,
    "name": "AI ออกแบบเว็บไซต์",
    "category": "AI_FOR_WORK",
    "type": "QUIZ",
    "subcategory": "AI_TOOLS",
    "x": 14.5,
    "y": 91.5,
    "color": "#0284C7"
  },
  {
    "id": "tile-26",
    "index": 26,
    "name": "Creative Spark Bonus",
    "category": "AI_SPECIAL",
    "type": "BONUS",
    "x": 6.0,
    "y": 91.5,
    "color": "#F59E0B",
    "description": "รับโบนัสพลังงาน +2 Energy"
  },
  {
    "id": "tile-27",
    "index": 27,
    "name": "AI ออกแบบแพ็กเกจ",
    "category": "AI_FOR_CREATIVITY",
    "type": "QUIZ",
    "subcategory": "AI_ART",
    "x": 6.0,
    "y": 74.0,
    "color": "#D946EF"
  },
  {
    "id": "tile-28",
    "index": 28,
    "name": "AI สตรีมมิง",
    "category": "AI_FOR_WORK",
    "type": "QUIZ",
    "subcategory": "AI_TOOLS",
    "x": 6.0,
    "y": 61.0,
    "color": "#3B82F6"
  },
  {
    "id": "tile-29",
    "index": 29,
    "name": "AI ความปลอดภัย & Ethics",
    "category": "AI_FOR_WORK",
    "type": "QUIZ",
    "subcategory": "AI_ETHICS",
    "x": 6.0,
    "y": 48.0,
    "color": "#059669"
  },
  {
    "id": "tile-30",
    "index": 30,
    "name": "AI ตัดต่อวิดีโอ",
    "category": "AI_FOR_CREATIVITY",
    "type": "QUIZ",
    "subcategory": "AI_VIDEO",
    "x": 6.0,
    "y": 35.0,
    "color": "#14B8A6"
  },
  {
    "id": "tile-31",
    "index": 31,
    "name": "AI ออกแบบโฟโต้การ์ด",
    "category": "AI_FOR_CREATIVITY",
    "type": "QUIZ",
    "subcategory": "AI_IMAGE",
    "x": 6.0,
    "y": 22.0,
    "color": "#EC4899"
  }
],
  characters: [
  {
    "id": "char-01",
    "name": "AI Explorer",
    "thaiName": "นักสำรวจ AI",
    "role": "Explorer",
    "avatarAsset": "assets/characters/char-01.png",
    "description": "ผู้เปิดประตูสู่โลกปัญญาประดิษฐ์และค้นหาขุมพลังใหม่ๆ"
  },
  {
    "id": "char-02",
    "name": "Prompt Master",
    "thaiName": "ปรมาจารย์ Prompt",
    "role": "Prompt Engineer",
    "avatarAsset": "assets/characters/char-02.png",
    "description": "ผู้เชี่ยวชาญการป้อนคำสั่งสื่อสารกับ AI ได้อย่างแม่นยำ"
  },
  {
    "id": "char-03",
    "name": "Image Creator",
    "thaiName": "นักสร้างสรรค์ภาพ AI",
    "role": "Visual Artist",
    "avatarAsset": "assets/characters/char-03.png",
    "description": "ผู้เนรมิตจินตนาการสู่ผลงานภาพศิลปะอันงดงาม"
  },
  {
    "id": "char-04",
    "name": "Video Creator",
    "thaiName": "ผู้กำกับวิดีโอ AI",
    "role": "Motion Director",
    "avatarAsset": "assets/characters/char-04.png",
    "description": "ผู้สร้างภาพยนตร์และวิดีโอเคลื่อนไหวสุดล้ำยุค"
  },
  {
    "id": "char-05",
    "name": "Storyteller",
    "thaiName": "นักเล่าเรื่อง AI",
    "role": "Writer",
    "avatarAsset": "assets/characters/char-05.png",
    "description": "ผู้ร้อยเรียงบทประพันธ์และเนื้อหาที่กินใจผู้คน"
  },
  {
    "id": "char-06",
    "name": "Creative Designer",
    "thaiName": "นักออกแบบสร้างสรรค์",
    "role": "Designer",
    "avatarAsset": "assets/characters/char-06.png",
    "description": "ผู้ออกแบบอัตลักษณ์ กราฟิก และสื่อสร้างสรรค์ครบวงจร"
  },
  {
    "id": "char-07",
    "name": "Idea Generator",
    "thaiName": "ผู้จุดประกายไอเดีย",
    "role": "Innovator",
    "avatarAsset": "assets/characters/char-07.png",
    "description": "ผู้คิดค้นนวัตกรรมและคอนเซปต์สดใหม่ไร้ขีดจำกัด"
  },
  {
    "id": "char-08",
    "name": "AI Strategist",
    "thaiName": "นักวางแผนกลยุทธ์ AI",
    "role": "Strategist",
    "avatarAsset": "assets/characters/char-08.png",
    "description": "ผู้วางกลยุทธ์ยกระดับผลิตภาพองค์กรด้วย AI"
  },
  {
    "id": "char-09",
    "name": "Problem Solver",
    "thaiName": "นักแก้ปัญหาอัจฉริยะ",
    "role": "Analyst",
    "avatarAsset": "assets/characters/char-09.png",
    "description": "ผู้ใช้ AI วิเคราะห์และแก้ปัญหาความท้าทายได้อย่างเฉียบคม"
  },
  {
    "id": "char-10",
    "name": "AI Assistance",
    "thaiName": "ผู้ช่วย AI มือโปร",
    "role": "Co-Pilot",
    "avatarAsset": "assets/characters/char-10.png",
    "description": "คู่หู AI อัจฉริยะที่ช่วยงานประจำวันได้อย่างรวดเร็ว"
  },
  {
    "id": "char-11",
    "name": "Innovation Hero",
    "thaiName": "ฮีโร่แห่งนวัตกรรม",
    "role": "Leader",
    "avatarAsset": "assets/characters/char-11.png",
    "description": "ผู้นำการเปลี่ยนแปลงทางเทคโนโลยีสู่อนาคต"
  },
  {
    "id": "char-12",
    "name": "Creative Master",
    "thaiName": "ผู้เชี่ยวชาญความคิดสร้างสรรค์",
    "role": "Master",
    "avatarAsset": "assets/characters/char-12.png",
    "description": "สุดยอดผู้เชี่ยวชาญที่ผสมผสาน AI กับความคิดสร้างสรรค์ขั้นสูงสุด"
  }
],
  properties: [
  {
    "id": "property-01",
    "name": "AI ค้นหาข้อมูล",
    "category": "AI_FOR_WORK",
    "cardAsset": "assets/cards/property-01.png",
    "color": "#3B82F6",
    "rent": 50,
    "developmentCost": 100,
    "aiPower": 200,
    "description": "ค้นหาและอ้างอิงข้อมูลเว็บอย่างรวดเร็วและแม่นยำ"
  },
  {
    "id": "property-02",
    "name": "AI เขียนอีเมล",
    "category": "AI_FOR_WORK",
    "cardAsset": "assets/cards/property-02.png",
    "color": "#1D4ED8",
    "rent": 60,
    "developmentCost": 120,
    "aiPower": 240,
    "description": "ร่างจดหมายและอีเมลสื่อสารอย่างเป็นมืออาชีพ"
  },
  {
    "id": "property-03",
    "name": "AI สรุปเนื้อหา",
    "category": "AI_FOR_WORK",
    "cardAsset": "assets/cards/property-03.png",
    "color": "#10B981",
    "rent": 70,
    "developmentCost": 140,
    "aiPower": 280,
    "description": "กลั่นกรองบทความและเอกสารยาวให้กระชับตรงประเด็น"
  },
  {
    "id": "property-04",
    "name": "AI วิเคราะห์ข้อมูล",
    "category": "AI_FOR_WORK",
    "cardAsset": "assets/cards/property-04.png",
    "color": "#8B5CF6",
    "rent": 80,
    "developmentCost": 160,
    "aiPower": 320,
    "description": "สกัด Insight คาดการณ์แนวโน้มและพฤติกรรมข้อมูล"
  },
  {
    "id": "property-05",
    "name": "AI วางแผนงาน",
    "category": "AI_FOR_WORK",
    "cardAsset": "assets/cards/property-05.png",
    "color": "#F59E0B",
    "rent": 100,
    "developmentCost": 200,
    "aiPower": 400,
    "description": "วางแผนโปรเจกต์ ลำดับขั้นตอนและจัดสรรเวลา"
  },
  {
    "id": "property-06",
    "name": "AI สร้างภาพ",
    "category": "AI_FOR_CREATIVITY",
    "cardAsset": "assets/cards/property-06.png",
    "color": "#EC4899",
    "rent": 120,
    "developmentCost": 240,
    "aiPower": 480,
    "description": "เปลี่ยนจินตนาการเป็นภาพศิลปะและกราฟิก 3D คุณภาพสูง"
  },
  {
    "id": "property-07",
    "name": "AI สร้างสไลด์",
    "category": "AI_FOR_WORK",
    "cardAsset": "assets/cards/property-07.png",
    "color": "#EAB308",
    "rent": 120,
    "developmentCost": 240,
    "aiPower": 480,
    "description": "จัดโครงสร้างและสร้างงานนำเสนอ Presentation อัตโนมัติ"
  },
  {
    "id": "property-08",
    "name": "AI สร้างคอนเทนต์",
    "category": "AI_FOR_CREATIVITY",
    "cardAsset": "assets/cards/property-08.png",
    "color": "#F43F5E",
    "rent": 150,
    "developmentCost": 300,
    "aiPower": 600,
    "description": "สร้างแคปชัน บทความ และเนื้อหาการตลาดบน Social Media"
  },
  {
    "id": "property-09",
    "name": "AI สร้างวิดีโอ",
    "category": "AI_FOR_CREATIVITY",
    "cardAsset": "assets/cards/property-09.png",
    "color": "#14B8A6",
    "rent": 180,
    "developmentCost": 360,
    "aiPower": 720,
    "description": "สร้างโมชัน วิดีโอ และเรื่องราวเสมือนจริง"
  },
  {
    "id": "property-10",
    "name": "AI สร้างสรรค์ไอเดีย",
    "category": "AI_FOR_CREATIVITY",
    "cardAsset": "assets/cards/property-10.png",
    "color": "#A855F7",
    "rent": 200,
    "developmentCost": 400,
    "aiPower": 800,
    "description": "ระดมความคิดและต่อยอดนวัตกรรมใหม่ไร้ขีดจำกัด"
  }
],
  questions: [
    {
        "id": "L1-01",
        "level": "Level 1",
        "levelName": "Digital Mindset City",
        "difficulty": "EASY",
        "category": "Digital Mindset",
        "subcategory": "DIGITAL_MINDSET",
        "question": "AI กำลังเปลี่ยนวิธีการทำงาน สิ่งใดสะท้อน Digital Mindset มากที่สุด?",
        "choices": [
            "รอให้เทคโนโลยีเสถียรก่อน",
            "เรียนรู้ ทดลอง และปรับตัว",
            "ให้ฝ่าย IT เป็นผู้รับผิดชอบ",
            "ใช้ AI ทุกอย่างทันที"
        ],
        "correctAnswer": 1,
        "explanation": "Digital Mindset คือการเปิดใจเรียนรู้ กล้าทดลองใช้เทคโนโลยีใหม่ และพร้อมปรับตัวอย่างต่อเนื่องมากกว่าการรอคอยหรือผลักภาระ",
        "score": 10,
        "source": "AI RUNNER - Level 1"
    },
    {
        "id": "L1-02",
        "level": "Level 1",
        "levelName": "Digital Mindset City",
        "difficulty": "EASY",
        "category": "Digital Mindset",
        "subcategory": "DIGITAL_MINDSET",
        "question": "เมื่อมี AI เข้ามาในองค์กร สิ่งใดควรเปลี่ยนก่อน?",
        "choices": [
            "Software",
            "Computer",
            "Mindset",
            "Job Description"
        ],
        "correctAnswer": 2,
        "explanation": "การปรับเปลี่ยน Mindset และทัศนคติของบุคลากรเป็นก้าวแรกที่สำคัญที่สุดในการขับเคลื่อนองค์กรด้วย AI ให้ประสบความสำเร็จ",
        "score": 10,
        "source": "AI RUNNER - Level 1"
    },
    {
        "id": "L2-01",
        "level": "Level 2",
        "levelName": "AI Knowledge Lab",
        "difficulty": "EASY",
        "category": "AI Knowledge",
        "subcategory": "AI_KNOWLEDGE",
        "question": "AI สามารถสร้างข้อมูลที่ดูน่าเชื่อถือแต่ไม่ถูกต้องได้หรือไม่?",
        "choices": [
            "ไม่ได้",
            "ได้",
            "ได้เฉพาะ AI รุ่นเก่า",
            "ได้เฉพาะเรื่องยาก"
        ],
        "correctAnswer": 1,
        "explanation": "ปรากฏการณ์นี้เรียกว่า AI Hallucination คือ AI สามารถสร้างข้อมูลที่ดูสมจริงน่าเชื่อถือแต่ไม่ถูกต้องได้ จึงต้องตรวจสอบเสมอ",
        "score": 10,
        "source": "AI RUNNER - Level 2"
    },
    {
        "id": "L2-02",
        "level": "Level 2",
        "levelName": "AI Knowledge Lab",
        "difficulty": "EASY",
        "category": "AI Knowledge",
        "subcategory": "AI_KNOWLEDGE",
        "question": "AI ให้คำตอบอย่างมั่นใจ สิ่งแรกที่ควรทำคือ?",
        "choices": [
            "เชื่อ",
            "Copy",
            "Verify",
            "Share"
        ],
        "correctAnswer": 2,
        "explanation": "แม้ AI จะตอบอย่างมั่นใจ สิ่งสำคัญอันดับแรกคือการ Verify (ตรวจสอบความถูกต้องและแหล่งที่มา) ก่อนนำไปใช้งานเสมอ",
        "score": 10,
        "source": "AI RUNNER - Level 2"
    },
    {
        "id": "L2-03",
        "level": "Level 2",
        "levelName": "AI Knowledge Lab",
        "difficulty": "EASY",
        "category": "AI Knowledge",
        "subcategory": "AI_KNOWLEDGE",
        "question": "Prompt ที่ดีมีประโยชน์อย่างไร?",
        "choices": [
            "ทำให้ AI ฉลาดขึ้น",
            "ช่วยกำหนดบริบทและสิ่งที่ต้องการให้ชัดเจน",
            "ทำให้ AI ไม่ผิด",
            "ทำให้ไม่ต้องตรวจสอบ"
        ],
        "correctAnswer": 1,
        "explanation": "Prompt ที่ชัดเจนจะช่วยกำหนดบริบท (Context) เป้าหมาย และข้อจำกัด ทำให้ AI ประมวลผลและให้คำตอบได้ตรงความต้องการที่สุด",
        "score": 10,
        "source": "AI RUNNER - Level 2"
    },
    {
        "id": "L3-01",
        "level": "Level 3",
        "levelName": "Productivity Factory",
        "difficulty": "MEDIUM",
        "category": "Productivity",
        "subcategory": "PRODUCTIVITY",
        "question": "ต้องอ่านเอกสาร 40 หน้าเพื่อเตรียมประชุม ควรเลือก Power-up ใด?",
        "choices": [
            "SUMMARIZE",
            "BRAINSTORM",
            "IMAGE",
            "TRANSLATE"
        ],
        "correctAnswer": 0,
        "explanation": "Power-up SUMMARIZE (การสรุปเนื้อหา) ช่วยย่อยเอกสารขนาดยาว 40 หน้าให้เหลือประเด็นสำคัญได้อย่างรวดเร็วและประหยัดเวลา",
        "score": 15,
        "source": "AI RUNNER - Level 3"
    },
    {
        "id": "L3-02",
        "level": "Level 3",
        "levelName": "Productivity Factory",
        "difficulty": "MEDIUM",
        "category": "Productivity",
        "subcategory": "PRODUCTIVITY",
        "question": "ต้องคิดชื่อ Campaign ใหม่ 20 ชื่อ ควรเลือก Power-up ใด?",
        "choices": [
            "SUMMARIZE",
            "BRAINSTORM",
            "ANALYZE",
            "DRAFT"
        ],
        "correctAnswer": 1,
        "explanation": "Power-up BRAINSTORM เหมาะสำหรับการระดมไอเดียเชิงสร้างสรรค์ สร้างทางเลือกชื่อแคมเปญที่หลากหลายได้อย่างรวดเร็ว",
        "score": 15,
        "source": "AI RUNNER - Level 3"
    },
    {
        "id": "L3-03",
        "level": "Level 3",
        "levelName": "Productivity Factory",
        "difficulty": "MEDIUM",
        "category": "Productivity",
        "subcategory": "PRODUCTIVITY",
        "question": "มีข้อมูล Survey 500 รายการ ต้องการหา Pattern เบื้องต้น ควรเลือก Power-up ใด?",
        "choices": [
            "DRAFT",
            "TRANSLATE",
            "ANALYZE",
            "SUMMARIZE"
        ],
        "correctAnswer": 2,
        "explanation": "Power-up ANALYZE ใช้สำหรับการวิเคราะห์และค้นหารูปแบบ แนวโน้ม หรือ Pattern จากชุดข้อมูลปริมาณมาก",
        "score": 15,
        "source": "AI RUNNER - Level 3"
    },
    {
        "id": "L3-04",
        "level": "Level 3",
        "levelName": "Productivity Factory",
        "difficulty": "MEDIUM",
        "category": "Productivity",
        "subcategory": "PRODUCTIVITY",
        "question": "มีบทความยาว ต้องเปลี่ยนเป็น Bullet Points สำหรับ Presentation ควรเลือก Power-up ใด?",
        "choices": [
            "SUMMARIZE",
            "TRANSFORM",
            "ANALYZE",
            "IMAGE"
        ],
        "correctAnswer": 1,
        "explanation": "Power-up TRANSFORM ใช้ในการแปลงรูปแบบและโครงสร้างของข้อมูล เช่น จากบทความยาวเป็น Bullet Points สำหรับสไลด์",
        "score": 15,
        "source": "AI RUNNER - Level 3"
    },
    {
        "id": "L4-01",
        "level": "Level 4",
        "levelName": "Responsible AI Zone",
        "difficulty": "MEDIUM",
        "category": "Responsible AI",
        "subcategory": "RESPONSIBLE_AI",
        "question": "เอกสารที่จะนำเข้า AI มีข้อมูลส่วนบุคคล ควรทำอย่างไร?",
        "choices": [
            "Upload ทันที",
            "ตรวจสอบนโยบายและจัดการข้อมูลที่มีความเสี่ยงก่อน",
            "ขอให้ AI เก็บเป็นความลับ",
            "ใช้ AI อื่นแทน"
        ],
        "correctAnswer": 1,
        "explanation": "ตามหลัก Responsible AI และ PDPA ต้องตรวจสอบนโยบายความปลอดภัยและจัดการปกปิดข้อมูลส่วนบุคคลที่มีความเสี่ยงก่อนป้อนเข้า AI",
        "score": 15,
        "source": "AI RUNNER - Level 4"
    },
    {
        "id": "L4-02",
        "level": "Level 4",
        "levelName": "Responsible AI Zone",
        "difficulty": "MEDIUM",
        "category": "Responsible AI",
        "subcategory": "RESPONSIBLE_AI",
        "question": "AI สร้างตัวเลขในรายงาน แต่ไม่พบแหล่งที่มา",
        "choices": [
            "ใช้เลย",
            "ตรวจสอบแหล่งข้อมูล",
            "ปรับตัวเลขเอง",
            "ลบทิ้งทั้งหมด"
        ],
        "correctAnswer": 1,
        "explanation": "ตัวเลขที่ไม่มีแหล่งที่มาอาจเกิดจาก AI จำลองข้อมูลขึ้นเอง จึงต้องตรวจสอบค้นหาแหล่งอ้างอิงที่ถูกต้องก่อนนำไปรายงานเสมอ",
        "score": 15,
        "source": "AI RUNNER - Level 4"
    },
    {
        "id": "L4-03",
        "level": "Level 4",
        "levelName": "Responsible AI Zone",
        "difficulty": "MEDIUM",
        "category": "Responsible AI",
        "subcategory": "RESPONSIBLE_AI",
        "question": "AI ช่วยคัดเลือกผู้สมัครงาน คุณควรทำอย่างไร?",
        "choices": [
            "ให้ AI ตัดสินใจทั้งหมด",
            "ตรวจสอบผลและใช้ Human Judgment",
            "เลือกคนที่ AI ให้คะแนนสูงสุด",
            "ไม่ใช้ AI อีกเลย"
        ],
        "correctAnswer": 1,
        "explanation": "AI เป็นเพียงเครื่องมือช่วยคัดกรองเบื้องต้น การตัดสินใจขั้นสุดท้ายที่กระทบต่อบุคคลต้องใช้ดุลยพินิจของมนุษย์ (Human Judgment) เพื่อป้องกันอคติ",
        "score": 15,
        "source": "AI RUNNER - Level 4"
    },
    {
        "id": "BOSS-01",
        "level": "Final Boss",
        "levelName": "AI Overload",
        "difficulty": "HARD",
        "category": "Responsible AI",
        "subcategory": "FINAL_BOSS",
        "question": "AI ทำงานได้เร็วกว่า ให้ AI ทำทั้งหมดเลย!",
        "choices": [
            "ให้ AI ทำทั้งหมด",
            "Human + AI",
            "ไม่ใช้ AI",
            "ให้ AI ตัดสินใจแทน"
        ],
        "correctAnswer": 1,
        "explanation": "แนวทางที่มีประสิทธิภาพและปลอดภัยที่สุดคือ Human + AI โดยให้ AI ช่วยเพิ่มความเร็ว และมนุษย์กำกับดูแลคุณภาพและการตัดสินใจ",
        "score": 20,
        "source": "AI RUNNER - Final Boss"
    },
    {
        "id": "BOSS-02",
        "level": "Final Boss",
        "levelName": "AI Overload",
        "difficulty": "HARD",
        "category": "AI Knowledge",
        "subcategory": "FINAL_BOSS",
        "question": "AI ตอบแล้ว ไม่ต้องตรวจสอบ!",
        "choices": [
            "ใช้ทันที",
            "Verify",
            "Share",
            "Copy"
        ],
        "correctAnswer": 1,
        "explanation": "หลักการสำคัญในการใช้ AI คือต้อง Verify (ตรวจสอบความถูกต้อง) ทุกครั้งก่อนนำข้อมูลไปใช้งานหรือเผยแพร่ต่อ",
        "score": 20,
        "source": "AI RUNNER - Final Boss"
    },
    {
        "id": "BOSS-03",
        "level": "Final Boss",
        "levelName": "AI Overload",
        "difficulty": "HARD",
        "category": "Responsible AI",
        "subcategory": "FINAL_BOSS",
        "question": "ข้อมูลสำคัญ? Upload ไปก่อน!",
        "choices": [
            "Upload",
            "Protect Data",
            "Share",
            "Ignore"
        ],
        "correctAnswer": 1,
        "explanation": "ข้อมูลสำคัญและความลับขององค์กรต้อง Protect Data (ปกป้องข้อมูล) เสมอ โดยไม่ส่งเข้าโมเดลสาธารณะที่ไม่มีระบบความปลอดภัย",
        "score": 20,
        "source": "AI RUNNER - Final Boss"
    }
],
  events: [
  {
    "id": "ev_01",
    "name": "เข้าใจ AI ดีเยี่ยม",
    "type": "REWARD",
    "description": "คุณศึกษาเรื่อง Generative AI อย่างเข้าใจถ่องแท้",
    "reward": {
      "aiCoin": 300,
      "creativityPoint": 20
    },
    "effectText": "+300 AI Coin, +20 Creativity Point"
  },
  {
    "id": "ev_02",
    "name": "Creative Spark!",
    "type": "BONUS",
    "description": "เกิดประกายความคิดสร้างสรรค์อันน่าทึ่ง",
    "reward": {
      "creativeEnergy": 2
    },
    "effectText": "+2 Creative Energy"
  },
  {
    "id": "ev_03",
    "name": "Generative Power Boost",
    "type": "POWER",
    "description": "ปลดล็อกพลังประมวลผลพิเศษของ AI",
    "reward": {
      "generativePower": 1
    },
    "effectText": "+1 Generative Power"
  },
  {
    "id": "ev_04",
    "name": "พักผ่อนเติมพลัง",
    "type": "REST",
    "description": "นั่งจิบกาแฟและพักเบรกความคิด",
    "reward": {
      "creativeEnergy": 1,
      "aiCoin": 50
    },
    "effectText": "+1 Creative Energy, +50 AI Coin"
  },
  {
    "id": "ev_05",
    "name": "Prompt Tuning Challenge",
    "type": "CHALLENGE",
    "description": "ปรับแต่ง Prompt อย่างละเอียดเพื่อตอบคำถามท้าทายระดับสูง",
    "reward": {
      "creativityPoint": 50
    },
    "penalty": {
      "aiCoin": 20
    },
    "effectText": "ตอบถูก: +50 Creativity Point / ตอบผิด: -20 AI Coin"
  },
  {
    "id": "ev_06",
    "name": "AI Assistant ช่วยงาน",
    "type": "ASSIST",
    "description": "ระบบ AI ช่วยจัดระเบียบงานและข้อมูลให้เสร็จไวขึ้น",
    "reward": {
      "aiCoin": 150,
      "creativityPoint": 15
    },
    "effectText": "+150 AI Coin, +15 Creativity Point"
  },
  {
    "id": "ev_07",
    "name": "Server Maintenance",
    "type": "PENALTY",
    "description": "ระบบประมวลผลอยู่ระหว่างอัปเกรดชั่วคราว เสียค่าบำรุงรักษาเล็กน้อย",
    "penalty": {
      "aiCoin": 30
    },
    "effectText": "-30 AI Coin"
  },
  {
    "id": "ev_08",
    "name": "Innovation Grant",
    "type": "REWARD",
    "description": "ได้รับทุนสนับสนุนการสร้างสรรค์นวัตกรรม AI",
    "reward": {
      "aiCoin": 200,
      "creativeEnergy": 1
    },
    "effectText": "+200 AI Coin, +1 Creative Energy"
  }
],
  manifest: {
  "characters": [
    {
      "id": "character-01",
      "name": "AI Explorer",
      "path": "assets/characters/character-01.png",
      "approved": true
    },
    {
      "id": "character-02",
      "name": "Prompt Master",
      "path": "assets/characters/character-02.png",
      "approved": true
    },
    {
      "id": "character-03",
      "name": "Image Creator",
      "path": "assets/characters/character-03.png",
      "approved": true
    },
    {
      "id": "character-04",
      "name": "Video Creator",
      "path": "assets/characters/character-04.png",
      "approved": true
    },
    {
      "id": "character-05",
      "name": "Storyteller",
      "path": "assets/characters/character-05.png",
      "approved": true
    },
    {
      "id": "character-06",
      "name": "Creative Designer",
      "path": "assets/characters/character-06.png",
      "approved": true
    },
    {
      "id": "character-07",
      "name": "Idea Generator",
      "path": "assets/characters/character-07.png",
      "approved": true
    },
    {
      "id": "character-08",
      "name": "AI Strategist",
      "path": "assets/characters/character-08.png",
      "approved": true
    },
    {
      "id": "character-09",
      "name": "Problem Solver",
      "path": "assets/characters/character-09.png",
      "approved": true
    },
    {
      "id": "character-10",
      "name": "AI Assistant",
      "path": "assets/characters/character-10.png",
      "approved": true
    },
    {
      "id": "character-11",
      "name": "Innovation Hero",
      "path": "assets/characters/character-11.png",
      "approved": true
    },
    {
      "id": "character-12",
      "name": "Creative Master",
      "path": "assets/characters/character-12.png",
      "approved": true
    }
  ],
  "properties": [
    {
      "id": "property-01",
      "name": "AI ค้นหาข้อมูล",
      "path": "assets/cards/property-01.png",
      "approved": true
    },
    {
      "id": "property-02",
      "name": "AI เขียนอีเมล",
      "path": "assets/cards/property-02.png",
      "approved": true
    },
    {
      "id": "property-03",
      "name": "AI สรุปเนื้อหา",
      "path": "assets/cards/property-03.png",
      "approved": true
    },
    {
      "id": "property-04",
      "name": "AI วิเคราะห์ข้อมูล",
      "path": "assets/cards/property-04.png",
      "approved": true
    },
    {
      "id": "property-05",
      "name": "AI วางแผนงาน",
      "path": "assets/cards/property-05.png",
      "approved": true
    },
    {
      "id": "property-06",
      "name": "AI สร้างภาพ",
      "path": "assets/cards/property-06.png",
      "approved": true
    },
    {
      "id": "property-07",
      "name": "AI สร้างสไลด์",
      "path": "assets/cards/property-07.png",
      "approved": true
    },
    {
      "id": "property-08",
      "name": "AI สร้างคอนเทนต์",
      "path": "assets/cards/property-08.png",
      "approved": true
    },
    {
      "id": "property-09",
      "name": "AI สร้างวิดีโอ",
      "path": "assets/cards/property-09.png",
      "approved": true
    },
    {
      "id": "property-10",
      "name": "AI สร้างสรรค์ไอเดีย",
      "path": "assets/cards/property-10.png",
      "approved": true
    }
  ],
  "resources": {
    "aiCoin": "assets/resources/ai-coin.png",
    "creativityPoint": "assets/resources/creativity-point.png",
    "creativeEnergy": "assets/resources/creative-energy.png",
    "creativePower": "assets/resources/creative-power.png"
  },
  "money": {
    "banknote5": "assets/money/banknote-5.png",
    "banknote10": "assets/money/banknote-10.png"
  },
  "board": {
    "gameBoard": "assets/board/game-board.png"
  }
}
};
