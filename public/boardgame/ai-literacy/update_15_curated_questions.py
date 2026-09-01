import json

# 8 EASY questions (+10 Pts) and 7 HARD questions (+20 Pts)
questions = [
  # =========================================================================
  # 8 EASY QUESTIONS (ระดับง่าย - 10 คะแนน)
  # =========================================================================
  {
    "id": "EASY-01",
    "difficulty": "EASY",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_BASICS",
    "question": "AI ประเภทใดที่ถูกออกแบบมาเพื่อทำงานเฉพาะเจาะจงภายในขอบเขตที่กำหนด เช่น การจดจำใบหน้า หรือการแปลภาษา?",
    "choices": [
      "Narrow AI (AI เฉพาะทาง)",
      "General AI (AI ทั่วไป)",
      "Superintelligent AI (AI อัจฉริยะขั้นสูง)",
      "Conscious AI (AI มีจิตสำนึก)"
    ],
    "correctAnswer": 0,
    "explanation": "Narrow AI (Weak AI) คือ AI ที่ทำงานเฉพาะด้านตามเงื่อนไขที่กำหนด เช่น ระบบปลดล็อกใบหน้า หรือ Google Translate",
    "score": 10,
    "source": "AI for Work"
  },
  {
    "id": "EASY-02",
    "difficulty": "EASY",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_HISTORY",
    "question": "ในปี 1997 เหตุการณ์สำคัญทางประวัติศาสตร์ด้าน AI ที่สามารถเอาชนะแชมป์โลกหมากรุกได้ คือระบบใด?",
    "choices": [
      "IBM Deep Blue",
      "AlphaGo",
      "ChatGPT",
      "Siri"
    ],
    "correctAnswer": 0,
    "explanation": "ในปี 1997 ซูเปอร์คอมพิวเตอร์ IBM Deep Blue เอาชนะแชมป์โลกหมากรุก Garry Kasparov ได้สำเร็จเป็นครั้งแรกของประวัติศาสตร์",
    "score": 10,
    "source": "AI for Work"
  },
  {
    "id": "EASY-03",
    "difficulty": "EASY",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_ENTERPRISE",
    "question": "การนำ AI มาใช้วิเคราะห์ข้อมูลเพื่อคาดการณ์และป้องกันเครื่องจักรในโรงงานชำรุดล่วงหน้า เรียกว่าอะไร?",
    "choices": [
      "AI Predictive Maintenance",
      "AI Sales Forecasting",
      "AI Fraud Detection",
      "AI Chatbot"
    ],
    "correctAnswer": 0,
    "explanation": "Predictive Maintenance คือการใช้ AI วิเคราะห์ประวัติและเซนเซอร์ของเครื่องจักร เพื่อวางแผนซ่อมบำรุงก่อนเกิดความเสียหาย",
    "score": 10,
    "source": "AI for Work"
  },
  {
    "id": "EASY-04",
    "difficulty": "EASY",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_SEARCH",
    "question": "เครื่องมือ AI ใดที่เน้นการค้นหาข้อมูลแบบ Real-time บนอินเทอร์เน็ตพร้อมระบุลิงก์แหล่งที่มาและอ้างอิง (Citations)?",
    "choices": [
      "Perplexity",
      "Cleanvoice",
      "Midjourney",
      "Photoshop"
    ],
    "correctAnswer": 0,
    "explanation": "Perplexity เป็น AI Search Engine ที่ค้นหาข้อมูลล่าสุดจากเว็บไซต์ต่างๆ พร้อมใส่แหล่งอ้างอิงชัดเจน",
    "score": 10,
    "source": "AI for Work"
  },
  {
    "id": "EASY-05",
    "difficulty": "EASY",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_SLIDE",
    "question": "เครื่องมือ AI ใดที่ช่วยจัดโครงสร้างหัวข้อและสร้างสไลด์งานนำเสนอ (Presentation) ได้อย่างรวดเร็ว?",
    "choices": [
      "Gamma",
      "Krisp",
      "Audacity",
      "D-ID"
    ],
    "correctAnswer": 0,
    "explanation": "Gamma เป็นเครื่องมือ Generative AI ที่ช่วยร่างเนื้อหาและจัดหน้าสไลด์งานนำเสนอให้โดยอัตโนมัติ",
    "score": 10,
    "source": "AI for Work"
  },
  {
    "id": "EASY-06",
    "difficulty": "EASY",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_IMAGE",
    "question": "อัตราส่วนภาพสี่เหลี่ยมจัตุรัส '--ar 1:1' มีขนาดความละเอียดมาตรฐานกี่พิกเซล?",
    "choices": [
      "1080 x 1080 pixels",
      "1920 x 1080 pixels",
      "1080 x 1920 pixels",
      "1080 x 1350 pixels"
    ],
    "correctAnswer": 0,
    "explanation": "อัตราส่วน 1:1 คือภาพสี่เหลี่ยมจัตุรัส ขนาด 1080 x 1080 pixels เหมาะสำหรับโพสต์มาตรฐานบน Social Media",
    "score": 10,
    "source": "Creativity AI"
  },
  {
    "id": "EASY-07",
    "difficulty": "EASY",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_IMAGE",
    "question": "หากต้องการสร้างภาพแนวตั้งเต็มหน้าจอสำหรับ Reels, TikTok หรือ Instagram Story ควรกำหนดอัตราส่วนใด?",
    "choices": [
      "--ar 9:16 (1080 x 1920 pixels)",
      "--ar 16:9 (1920 x 1080 pixels)",
      "--ar 1:1 (1080 x 1080 pixels)",
      "--ar 4:3 (1024 x 768 pixels)"
    ],
    "correctAnswer": 0,
    "explanation": "อัตราส่วน 9:16 ขนาด 1080 x 1920 pixels เป็นสัดส่วนแนวตั้งเต็มจอสำหรับ TikTok, Reels และ Stories",
    "score": 10,
    "source": "Creativity AI"
  },
  {
    "id": "EASY-08",
    "difficulty": "EASY",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_ETHICS",
    "question": "Andrew Ng (ผู้เชี่ยวชาญ AI ระดับโลก) ได้กล่าวถึงความสำคัญของการเรียนรู้ AI ในการทำงานไว้อย่างไร?",
    "choices": [
      "\"AI ไม่ได้มาแทนที่คน แต่คนที่ใช้ AI ต่างหากที่จะมาแทนคนที่ไม่ใช้ AI\"",
      "\"AI จะเข้ามาทำงานแทนมนุษย์ได้ทั้งหมด 100% ภายในไม่กี่ปี\"",
      "\"มนุษย์ไม่จำเป็นต้องฝึกฝนทักษะการทำงานใหม่อีกต่อไป\"",
      "\"ห้ามนำ AI มาประยุกต์ใช้ในการร่างเอกสารและการทำงานส่วนตัว\""
    ],
    "correctAnswer": 0,
    "explanation": "Andrew Ng ชี้ว่า AI เป็นเครื่องมือเพิ่มผลิตภาพ และผู้ที่ใช้ AI ทำงานได้อย่างเชี่ยวชาญจะก้าวหน้ากว่าผู้ที่ไม่ยอมปรับตัว",
    "score": 10,
    "source": "AI for Work"
  },

  # =========================================================================
  # 7 HARD QUESTIONS (ระดับยาก - 20 คะแนน)
  # =========================================================================
  {
    "id": "HARD-01",
    "difficulty": "HARD",
    "category": "AI_FOR_WORK",
    "subcategory": "PROMPT_ENGINEERING",
    "question": "องค์ประกอบของ Prompt ที่สมบูรณ์และทรงพลังตามหลักการ Prompt Engineering 4 เสาหลัก ได้แก่อะไรบ้าง?",
    "choices": [
      "Context (บริบทงาน), Input Data (ข้อมูลนำเข้า), Instructions (คำสั่งที่ให้ทำ), Output Format (รูปแบบผลลัพธ์)",
      "Role, Goal, Speed, Database",
      "Username, Password, Parameter, Output",
      "Token, Latency, Bandwidth, Memory"
    ],
    "correctAnswer": 0,
    "explanation": "4 องค์ประกอบสำคัญของ Prompt ที่ดีเลิศ ได้แก่ 1. Context (ปูพื้นหลัง) 2. Input Data (ข้อมูลที่ให้) 3. Instructions (งานที่ให้ทำ) 4. Output Format (กำหนดลักษณะผลลัพธ์)",
    "score": 20,
    "source": "AI for Work"
  },
  {
    "id": "HARD-02",
    "difficulty": "HARD",
    "category": "AI_FOR_WORK",
    "subcategory": "PROMPT_ENGINEERING",
    "question": "เทคนิคการสั่งให้ AI รับข้อมูลบริบทจำนวนมากโดยใส่คำสั่ง 'Reply OK, If you get it.' มีจุดประสงค์เชิงลึกเพื่อสิ่งใด?",
    "choices": [
      "เพื่อให้ AI ทำความเข้าใจและจดจำบริบททั้งหมดก่อน โดยยังไม่สร้างผลลัพธ์จนกว่าจะป้อนโจทย์จริงในคำสั่งถัดไป",
      "เพื่อป้องกันไม่ให้ AI ใช้โทเคนในการประมวลผลคำตอบ",
      "เพื่อเปลี่ยนโหมดการทำงานของ AI ให้กลายเป็น Code Interpreter",
      "เพื่อลบข้อมูลในหน่วยความจำชั่วคราวทิ้งทั้งหมด"
    ],
    "correctAnswer": 0,
    "explanation": "การใช้ 'Reply OK, If you get it.' ช่วยแยกขั้นตอนการโหลดบริบท (Context Injection) ออกจากคำสั่งสร้างงานจริง ทำให้ AI ไม่สับสนและสร้างงานได้แม่นยำขึ้นมาก",
    "score": 20,
    "source": "AI for Work"
  },
  {
    "id": "HARD-03",
    "difficulty": "HARD",
    "category": "AI_FOR_WORK",
    "subcategory": "PROMPT_ENGINEERING",
    "question": "เมื่อต้องการให้ AI ช่วยออกแบบโครงงานใหญ่แต่เรายังขาดข้อมูลและมุมมอง ควรใส่คำสั่งขั้นสูงใดเพื่อให้ AI เป็นฝ่ายสัมภาษณ์เรา?",
    "choices": [
      "To get a better result, Ask Me (ถามคำถามกลับเพื่อเก็บข้อมูลก่อนเริ่มงาน)",
      "Always agree with user without questions",
      "Generate immediately without further context",
      "Summarize in one word only"
    ],
    "correctAnswer": 0,
    "explanation": "คำสั่ง 'To get a better result, Ask Me' กระตุ้นให้ AI ถามคำถามเชิงลึกกลับมาทีละข้อเพื่อดึงบริบทที่ผู้ใช้ลืมนึกถึง ทำให้ได้ผลลัพธ์ระดับมืออาชีพ",
    "score": 20,
    "source": "AI for Work"
  },
  {
    "id": "HARD-04",
    "difficulty": "HARD",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_TOOLS",
    "question": "เครื่องมือ Gemini Canvas ในระบบ AI ของ Google มีสถาปัตยกรรมการทำงานแตกต่างจากหน้าต่างแชตทั่วไปอย่างไร?",
    "choices": [
      "เป็นพื้นที่ทำงาน Interactive สองฝั่งที่ให้แก้ไข ปรับแก้เฉพาะจุด และจัดรูปแบบเอกสารร่วมกับ AI แบบเจาะจงได้ทันที",
      "เป็นโปรแกรมวาดภาพเวกเตอร์ที่ไม่รองรับการประมวลผลข้อความ",
      "ใช้สำหรับเชื่อมต่อฐานข้อมูล SQL ผ่านระบบคลาวด์เท่านั้น",
      "จำกัดให้ตอบคำถามได้เฉพาะรูปแบบตารางตัวเลข"
    ],
    "correctAnswer": 0,
    "explanation": "Gemini Canvas สร้าง Workspace แยกข้างหน้าจอ ช่วยให้เราสามารถเลือกข้อความบางย่อหน้าแล้วสั่งให้ AI ปรับความยาว, เปลี่ยนโทน, หรือแก้ไขเฉพาะจุดได้สะดวก",
    "score": 20,
    "source": "AI for Work"
  },
  {
    "id": "HARD-05",
    "difficulty": "HARD",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_IMAGE",
    "question": "อัตราส่วนภาพแนวตั้งสำหรับโพสต์บนฟีดโซเชียลมีเดีย (Facebook / Instagram Feed) '--ar 4:5' มีขนาดความละเอียดเท่าใด?",
    "choices": [
      "1080 x 1350 pixels",
      "1080 x 1920 pixels",
      "1920 x 1080 pixels",
      "1200 x 628 pixels"
    ],
    "correctAnswer": 0,
    "explanation": "อัตราส่วน 4:5 (ขนาด 1080 x 1350 pixels) เป็นสัดส่วนภาพแนวตั้งที่ดีที่สุดบนหน้า Feed เพราะกินพื้นที่จอมากกว่าภาพสี่เหลี่ยมจัตุรัสโดยไม่ถูกตัดขอบ",
    "score": 20,
    "source": "Creativity AI"
  },
  {
    "id": "HARD-06",
    "difficulty": "HARD",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_TOOLS",
    "question": "ในการออกแบบสไตล์ภาพด้วย AI การระบุคีย์เวิร์ดประเภท Lighting & Camera (เช่น Volumetric lighting, 85mm lens f/1.4) ส่งผลโดยตรงต่อภาพอย่างไร?",
    "choices": [
      "ควบคุมมิติความลึก ระยะชัดตื้น (Bokeh) ทิศทางของลำแสง และอารมณ์ความสมจริงของภาพถ่าย",
      "ทำให้ไฟล์ภาพมีขนาดบีบอัดเล็กลงครึ่งหนึ่ง",
      "เปลี่ยนโทนสีของภาพให้กลายเป็นขาวดำอัตโนมัติ",
      "จำกัดไม่ให้ AI แสดงผลตัวละครมนุษย์ในฉาก"
    ],
    "correctAnswer": 0,
    "explanation": "การระบุเทคนิคแสงและเลนส์ช่วยให้ AI เรนเดอร์มิติแสงเงาและระยะโฟกัสได้อย่างสมจริงเหมือนถ่ายด้วยกล้องระดับโปร",
    "score": 20,
    "source": "Creativity AI"
  },
  {
    "id": "HARD-07",
    "difficulty": "HARD",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_ETHICS",
    "question": "หลักการสำคัญในการนำ Generative AI ไปใช้งานในองค์กรอย่างปลอดภัยด้านความลับของข้อมูล (Data Privacy) คือข้อใด?",
    "choices": [
      "หลีกเลี่ยงการป้อนข้อมูลส่วนบุคคล (PII), ข้อมูลลับทางการค้า และตรวจสอบนโยบายการไม่นำข้อมูลไปเทรนโมเดล (Opt-out)",
      "สามารถอัปโหลดฐานข้อมูลเงินเดือนพนักงานลงแชตสาธารณะได้ทั้งหมด",
      "ปิดระบบรักษาความปลอดภัยของคอมพิวเตอร์ขณะใช้งาน AI",
      "ตั้งค่าให้แชตบอทแชร์บทสนทนาสู่สาธารณะเพื่อความโปร่งใส"
    ],
    "correctAnswer": 0,
    "explanation": "การใช้ AI องค์กรต้องคำนึงถึง PDPA/Data Privacy โดยไม่ส่งข้อมูลที่เป็นความลับหรือข้อมูลส่วนบุคคลไปยังโมเดลสาธารณะที่อาจนำข้อมูลไปใช้เทรนต่อ",
    "score": 20,
    "source": "AI for Work"
  }
]

print(f"Total curated questions: {len(questions)}")
easy_cnt = sum(1 for q in questions if q["difficulty"] == "EASY")
hard_cnt = sum(1 for q in questions if q["difficulty"] == "HARD")
print(f" - EASY: {easy_cnt}")
print(f" - HARD: {hard_cnt}")

with open("data/questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print("data/questions.json successfully updated with exactly 8 Easy and 7 Hard questions!")
