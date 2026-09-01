import json

questions = [
  # =========================================================================
  # 8 EASY QUESTIONS (10 Points Each) - Crisp & Natural Choice Length Parity
  # =========================================================================
  {
    "id": "EASY-01",
    "difficulty": "EASY",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_BASICS",
    "question": "AI ประเภทใดที่ถูกออกแบบมาเพื่อทำงานเฉพาะเจาะจงภายในขอบเขตและเงื่อนไขที่กำหนด เช่น ระบบจดจำใบหน้า หรือระบบแปลภาษา?",
    "choices": [
      "Narrow AI",
      "General AI",
      "Conscious AI",
      "Superintelligent AI"
    ],
    "correctAnswer": 0,
    "explanation": "Narrow AI (หรือ Weak AI) คือ AI ที่ทำงานเฉพาะด้านตามเงื่อนไขที่กำหนด เช่น ระบบปลดล็อกใบหน้า หรือ Google Translate",
    "score": 10,
    "source": "AI for Work"
  },
  {
    "id": "EASY-02",
    "difficulty": "EASY",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_HISTORY",
    "question": "ในปี 1997 เหตุการณ์ประวัติศาสตร์ด้าน AI ที่สามารถเอาชนะแชมป์โลกหมากรุก Garry Kasparov ได้สำเร็จ คือระบบใด?",
    "choices": [
      "IBM Deep Blue",
      "AlphaGo Master",
      "OpenAI ChatGPT",
      "Apple Siri"
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
    "question": "การนำ AI มาใช้วิเคราะห์ข้อมูลเพื่อคาดการณ์และวางแผนซ่อมบำรุงเครื่องจักรในโรงงานล่วงหน้า เรียกว่าอะไร?",
    "choices": [
      "AI Predictive Maintenance",
      "AI Sales Forecasting",
      "AI Fraud Detection",
      "AI Robotic Automation"
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
    "question": "เครื่องมือสืบค้นข้อมูลปัญญาประดิษฐ์ใดที่โดดเด่นด้านการค้นหาข้อมูลแบบ Real-time บนอินเทอร์เน็ตพร้อมระบุแหล่งอ้างอิงเว็บไซต์ที่มา?",
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
    "question": "เครื่องมือ Generative AI ใดที่ถูกออกแบบมาเพื่อช่วยร่างเนื้อหา จัดหัวข้อ และสร้างสไลด์งานนำเสนอ (Presentation) ได้แบบอัตโนมัติ?",
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
    "question": "ในการตั้งค่าอัตราส่วนภาพสำหรับงานออกแบบ (Aspect Ratio) สัดส่วนภาพสี่เหลี่ยมจัตุรัส '--ar 1:1' นิยมกำหนดขนาดความละเอียดไว้ที่เท่าใด?",
    "choices": [
      "ขนาด 1080 x 1080 pixels",
      "ขนาด 1920 x 1080 pixels",
      "ขนาด 1080 x 1920 pixels",
      "ขนาด 1080 x 1350 pixels"
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
    "question": "หากต้องการสร้างภาพหรือวิดีโอในรูปแบบแนวตั้งเต็มหน้าจอสำหรับแพลตฟอร์ม Reels, TikTok และ Stories ควรกำหนดอัตราส่วนใด?",
    "choices": [
      "--ar 9:16 (แนวตั้งเต็มจอ)",
      "--ar 16:9 (แนวนอนมาตรฐาน)",
      "--ar 1:1 (สี่เหลี่ยมจัตุรัส)",
      "--ar 4:3 (แนวนอนดั้งเดิม)"
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
    "question": "Andrew Ng (ผู้เชี่ยวชาญด้าน AI ระดับโลก) ได้กล่าวถึงบทบาทและการปรับตัวของบุคลากรในการทำงานยุค AI ไว้อย่างไร?",
    "choices": [
      "\"AI ไม่ได้มาแทนที่คน แต่คนที่ใช้ AI ต่างหากที่จะมาแทนคนที่ไม่ใช้ AI\"",
      "\"AI จะเข้ามาทำงานแทนมนุษย์ได้ทั้งหมด 100% ในทุกตำแหน่งงานในอนาคต\"",
      "\"มนุษย์ไม่จำเป็นต้องเรียนรู้ทักษะใหม่อีกต่อไปเพราะ AI จะคิดแทนเราทั้งหมด\"",
      "\"องค์กรควรหลีกเลี่ยงการใช้ AI ในการทำงานเอกสารเพื่อป้องกันการพึ่งพาระบบ\""
    ],
    "correctAnswer": 0,
    "explanation": "Andrew Ng ชี้ว่า AI เป็นเครื่องมือเพิ่มผลิตภาพ และผู้ที่ใช้ AI ทำงานได้อย่างเชี่ยวชาญจะก้าวหน้ากว่าผู้ที่ไม่ยอมปรับตัว",
    "score": 10,
    "source": "AI for Work"
  },

  # =========================================================================
  # 7 HARD QUESTIONS (20 Points Each) - Crisp & Natural Choice Length Parity
  # =========================================================================
  {
    "id": "HARD-01",
    "difficulty": "HARD",
    "category": "AI_FOR_WORK",
    "subcategory": "PROMPT_ENGINEERING",
    "question": "องค์ประกอบของ Prompt ที่สมบูรณ์ตามหลักการ Prompt Engineering 4 เสาหลัก เพื่อให้ AI สร้างผลลัพธ์ได้ตรงเป้าหมายที่สุด ได้แก่อะไรบ้าง?",
    "choices": [
      "Context, Input Data, Instructions, Output Format",
      "Persona, Objective, Constraint, Database",
      "Username, Password, Temperature, Memory Buffer",
      "Tone of Voice, Style, Token Limit, Response Speed"
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
    "question": "เทคนิคการป้อนข้อมูลบริบทจำนวนมากให้ AI แล้วใส่ประโยค 'Reply OK, If you get it.' มีจุดประสงค์เชิงลึกเพื่อสิ่งใด?",
    "choices": [
      "เพื่อให้ AI จดจำบริบททั้งหมดก่อน โดยยังไม่สร้างผลลัพธ์จนกว่าจะได้รับคำสั่งจริง",
      "เพื่อป้องกันไม่ให้ AI ใช้โทเคนในการคำนวณและลดการใช้หน่วยความจำของเซิร์ฟเวอร์",
      "เพื่อเปลี่ยนโหมดการทำงานของ AI ให้กลายเป็นระบบแปลภาษาอัตโนมัติในทันที",
      "เพื่อทำการล้างข้อมูลประวัติการสนทนาในอดีตและรีเซ็ตค่าเริ่มต้นใหม่ทั้งหมด"
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
    "question": "เมื่อเราต้องการให้ AI ช่วยวางแผนงานขนาดใหญ่แต่เรายังขาดข้อมูลและมุมมองที่ครอบคลุม ควรใส่คำสั่งเชิงกลยุทธ์ใดเพื่อให้ AI ช่วยดึงข้อมูลจากเรา?",
    "choices": [
      "To get a better result, Ask Me (ให้ AI ถามคำถามกลับเพื่อรวบรวมข้อมูล)",
      "Always generate without questions (ให้ AI สร้างงานทันทีโดยไม่ต้องถาม)",
      "Limit output to single sentence (ให้ AI ตอบสรุปสั้นเพียงประโยคเดียว)",
      "Ignore previous instructions (ให้ AI ยกเลิกเงื่อนไขเดิมทั้งหมด)"
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
    "question": "ฟีเจอร์ Workspace พิเศษอย่าง Gemini Canvas มีสถาปัตยกรรมการทำงานแตกต่างจากหน้าต่างแชตสนทนาทั่วไปอย่างไร?",
    "choices": [
      "พื้นที่ทำงานแบบสองฝั่งที่ช่วยให้แก้ไข ปรับแต่ง และจัดรูปแบบเอกสารร่วมกับ AI เฉพาะจุดได้",
      "หน้าต่างโปรแกรมวาดภาพเวกเตอร์สำหรับงานกราฟิกที่ไม่รองรับการพิมพ์ข้อความทั่วไป",
      "ระบบสำหรับเขียนและเชื่อมต่อฐานข้อมูล SQL ผ่านคลาวด์โดยไม่เปิดให้แก้ไขไฟล์เอกสาร",
      "ระบบจัดเก็บไฟล์สำรองบนคลาวด์ที่จำกัดให้แสดงผลเฉพาะรูปแบบตารางตัวเลขทางสถิติ"
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
    "question": "ในการออกแบบสื่อดิจิทัล อัตราส่วนภาพแนวตั้งสำหรับหน้าฟีดโซเชียลมีเดีย (Feed Post) '--ar 4:5' มีขนาดความละเอียดเท่าใด?",
    "choices": [
      "ขนาด 1080 x 1350 pixels",
      "ขนาด 1080 x 1920 pixels",
      "ขนาด 1920 x 1080 pixels",
      "ขนาด 1200 x 628 pixels"
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
    "question": "ในการป้อน Prompt เพื่อควบคุมคุณภาพงานสร้างสรรค์ภาพด้วย AI การระบุคีย์เวิร์ดกลุ่ม Lighting & Camera (เช่น Volumetric lighting, 85mm f/1.4) ส่งผลอย่างไร?",
    "choices": [
      "ควบคุมทิศทางของแสง มิติเงาตกกระทบ และระยะชัดตื้น (Bokeh) ให้ดูสมจริง",
      "ลดขนาดไฟล์รูปภาพให้เล็กลงโดยอัตโนมัติเพื่อความรวดเร็วในการดาวน์โหลด",
      "เปลี่ยนการเรนเดอร์ภาพสีทั้งหมดให้กลายเป็นภาพวาดลายเส้นขาวดำสไตล์สเก็ตช์",
      "จำกัดไม่ให้ AI สร้างตัวละครมนุษย์ในฉากเพื่อเน้นความสำคัญเฉพาะวิวทิวทัศน์"
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
    "question": "หลักการสำคัญที่สุดในการนำ Generative AI ไปประยุกต์ใช้งานในองค์กรอย่างปลอดภัยด้านความลับและข้อมูลส่วนบุคคล (Data Privacy) คือข้อใด?",
    "choices": [
      "หลีกเลี่ยงการป้อนข้อมูลส่วนบุคคล (PII), ข้อมูลลับทางการค้า และตั้งค่านโยบาย Opt-out",
      "อนุญาตให้อัปโหลดฐานข้อมูลเงินเดือนและเลขบัตรประชาชนเข้าสู่แชตบอทสาธารณะได้",
      "ทำการปิดระบบไฟร์วอลล์และระบบความปลอดภัยของเครื่องคอมพิวเตอร์ขณะใช้งาน AI",
      "ตั้งค่าให้แชตบอทเผยแพร่ประวัติการสนทนาทั้งหมดสู่สาธารณะเพื่อความโปร่งใส"
    ],
    "correctAnswer": 0,
    "explanation": "การใช้ AI องค์กรต้องคำนึงถึง PDPA/Data Privacy โดยไม่ส่งข้อมูลที่เป็นความลับหรือข้อมูลส่วนบุคคลไปยังโมเดลสาธารณะที่อาจนำข้อมูลไปใช้เทรนต่อ",
    "score": 20,
    "source": "AI for Work"
  }
]

print("=== VERIFYING CHOICE LENGTH PARITY ===")
for q in questions:
    lengths = [len(c) for c in q["choices"]]
    avg_len = sum(lengths) / len(lengths)
    diff = max(lengths) - min(lengths)
    print(f"[{q['id']}] Choices: {len(q['choices'])} | Avg: {avg_len:.1f} chars | Diff: {diff} chars -> Samples: {q['choices'][0]} vs {q['choices'][1]}")

with open("data/questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print("\ndata/questions.json saved with natural balanced choice lengths!")
