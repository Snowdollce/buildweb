import json

questions = [
  # --- AI for Work (Basics) ---
  {
    "id": "Q001",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_BASICS",
    "difficulty": "EASY",
    "question": "AI ประเภทใดที่ถูกออกแบบมาเพื่อทำงานเฉพาะเจาะจงภายในเงื่อนไขและขอบเขตที่กำหนด เช่น การจดจำใบหน้า หรือการแปลภาษา?",
    "choices": [
      "Narrow AI (AI เฉพาะทาง)",
      "General AI (AI ทั่วไป)",
      "Superintelligent AI (AI อัจฉริยะขั้นสูง)",
      "Conscious AI (AI มีจิตสำนึก)"
    ],
    "correctAnswer": 0,
    "explanation": "Narrow AI (หรือ Weak AI) ถูกออกแบบมาเพื่อทำงานเฉพาะด้านตามเงื่อนไขที่กำหนด เช่น ระบบจดจำใบหน้า หรือ Google Translate",
    "score": 10,
    "source": "AI for Work - หน้า 6"
  },
  {
    "id": "Q002",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_BASICS",
    "difficulty": "EASY",
    "question": "ปัญญาประดิษฐ์ที่มีความสามารถเทียบเท่าสมองมนุษย์ สามารถเรียนรู้ ปรับตัว และทำงานที่ซับซ้อนได้ เรียกว่าอะไร?",
    "choices": [
      "Narrow AI",
      "General AI",
      "Superintelligent AI",
      "Specialized AI"
    ],
    "correctAnswer": 1,
    "explanation": "General AI คือ AI ที่มีความสามารถในการเรียนรู้และแก้ปัญหาเทียบเท่าสมองมนุษย์ ซึ่งปัจจุบันอยู่ระหว่างการวิจัยและพัฒนา",
    "score": 10,
    "source": "AI for Work - หน้า 6"
  },
  {
    "id": "Q003",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_BASICS",
    "difficulty": "EASY",
    "question": "Generative AI คือปัญญาประดิษฐ์ที่มีความสามารถหลักในเรื่องใด?",
    "choices": [
      "สร้างข้อมูลและคอนเทนต์ใหม่ๆ เช่น ข้อความ รูปภาพ เสียง และวิดีโอ",
      "จัดเก็บข้อมูลสถิติในรูปแบบตารางอย่างเดียว",
      "ทำหน้าที่เป็นฮาร์ดแวร์ชิ้นส่วนคอมพิวเตอร์",
      "คำนวณตัวเลขทางบัญชีโดยไม่ใช้การเรียนรู้เชิงลึก"
    ],
    "correctAnswer": 0,
    "explanation": "Generative AI ใช้ Deep Learning เพื่อสร้างสรรค์เนื้อหาใหม่ๆ ได้หลากหลายรูปแบบ ทั้งข้อความ รูปภาพ เสียง และวิดีโอ",
    "score": 10,
    "source": "AI for Work - หน้า 8"
  },
  {
    "id": "Q004",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_HISTORY",
    "difficulty": "EASY",
    "question": "ในปี 1997 เหตุการณ์ประวัติศาสตร์ด้าน AI ที่สำคัญและโด่งดังไปทั่วโลกคือข้อใด?",
    "choices": [
      "เปิดตัว ChatGPT สู่สาธารณะ",
      "IBM Deep Blue เอาชนะแชมป์โลกหมากรุก",
      "Google เริ่มใช้ Machine Learning กรอง Spam",
      "Apple เปิดตัวระบบ Face ID บนสมาร์ตโฟน"
    ],
    "correctAnswer": 1,
    "explanation": "ในปี 1997 ซูเปอร์คอมพิวเตอร์ IBM Deep Blue สามารถเอาชนะแชมป์โลกหมากรุก Garry Kasparov ได้สำเร็จ",
    "score": 10,
    "source": "AI for Work - หน้า 7"
  },
  {
    "id": "Q005",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_ENTERPRISE",
    "difficulty": "EASY",
    "question": "การนำ AI มาใช้คาดการณ์ความเสียหายของเครื่องจักรและอุปกรณ์ล่วงหน้าในโรงงาน เรียกว่าอะไร?",
    "choices": [
      "AI Predictive Maintenance",
      "AI Sales Forecasting",
      "AI Virtual Assistants",
      "AI Fraud Detection"
    ],
    "correctAnswer": 0,
    "explanation": "AI Predictive Maintenance วิเคราะห์ข้อมูลการทำงานย้อนหลังของเครื่องจักรเพื่อคาดการณ์และวางแผนซ่อมบำรุงก่อนเกิดความเสียหาย",
    "score": 10,
    "source": "AI for Work - หน้า 15"
  },
  {
    "id": "Q006",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_ENTERPRISE",
    "difficulty": "EASY",
    "question": "AI สำหรับตรวจจับธุรกรรมที่ผิดปกติและป้องกันการฉ้อโกง เรียกว่าอะไร?",
    "choices": [
      "AI Fraud Detection",
      "AI Predictive Maintenance",
      "AI Sales Forecasting",
      "Everyday AI"
    ],
    "correctAnswer": 0,
    "explanation": "AI Fraud Detection ทำหน้าที่วิเคราะห์รูปแบบการทำธุรกรรมและตรวจจับพฤติกรรมที่น่าสงสัยเพื่อป้องกันการทุจริต",
    "score": 10,
    "source": "AI for Work - หน้า 15"
  },
  {
    "id": "Q007",
    "category": "AI_FOR_WORK",
    "subcategory": "PROMPT_ENGINEERING",
    "difficulty": "EASY",
    "question": "องค์ประกอบของ Prompt ที่ดีและมีประสิทธิภาพมี 4 ส่วนสำคัญ ได้แก่อะไรบ้าง?",
    "choices": [
      "Context (บริบท), Input Data (ข้อมูลนำเข้า), Instructions (คำสั่ง), Output Format (ลักษณะผลลัพธ์)",
      "Username, Password, Database, Server",
      "ความเร็ว, ฮาร์ดแวร์, สายแลน, อินเทอร์เน็ต",
      "Question, Answer, Score, Feedback"
    ],
    "correctAnswer": 0,
    "explanation": "4 องค์ประกอบสำคัญของ Prompt ที่ดี ได้แก่ 1. Context (บริบทงาน) 2. Input Data (ข้อมูลเบื้องต้น) 3. Instructions (คำสั่งที่ให้ทำ) 4. Output Format (รูปแบบผลลัพธ์)",
    "score": 10,
    "source": "AI for Work - หน้า 30"
  },
  {
    "id": "Q008",
    "category": "AI_FOR_WORK",
    "subcategory": "PROMPT_ENGINEERING",
    "difficulty": "EASY",
    "question": "การใส่คำสั่ง 'Act as...' (เช่น Act as CEO หรือ Act as HR Manager) ใน Prompt มีประโยชน์อย่างไร?",
    "choices": [
      "กำหนดบทบาทและมุมมองความเชี่ยวชาญเฉพาะทางให้ AI ตอบคำถามได้ตรงสายงาน",
      "เปลี่ยนภาษาของระบบคอมพิวเตอร์",
      "เพิ่มความเร็วในการเชื่อมต่ออินเทอร์เน็ต",
      "จำกัดไม่ให้ AI ตอบข้อความ"
    ],
    "correctAnswer": 0,
    "explanation": "การใช้ 'Act as...' ช่วยกำหนด Role และความเชี่ยวชาญ ทำให้ AI ปรับโทนภาษาและมุมมองในการตอบให้ตรงตามตำแหน่งงานนั้นๆ",
    "score": 10,
    "source": "AI for Work - หน้า 23, 36"
  },
  {
    "id": "Q009",
    "category": "AI_FOR_WORK",
    "subcategory": "PROMPT_ENGINEERING",
    "difficulty": "EASY",
    "question": "เทคนิคการใส่ประโยค 'Reply OK, If you get it.' ในขั้นตอนป้อนบริบทข้อมูลให้ AI มีประโยชน์หลักอย่างไร?",
    "choices": [
      "เพื่อให้ AI รับทราบและจดจำบริบทก่อน โดยยังไม่ต้องรีบสร้างผลลัพธ์จนกว่าจะได้รับโจทย์จริง",
      "เพื่อทดสอบว่าระบบอินเทอร์เน็ตยังเชื่อมต่ออยู่หรือไม่",
      "เพื่อบังคับให้ AI ตอบสั้นเพียงคำเดียวตลอดการใช้งาน",
      "เพื่อรีเซ็ตระบบการทำงานทั้งหมด"
    ],
    "correctAnswer": 0,
    "explanation": "เทคนิคนี้ใช้ส่งข้อมูล Background หรือบริบทเยอะๆ ให้ AI ทำความเข้าใจและตอบรับก่อน แล้วค่อยส่งคำสั่งจริงตามไปในข้อความถัดไป",
    "score": 10,
    "source": "AI for Work - หน้า 34-36"
  },
  {
    "id": "Q010",
    "category": "AI_FOR_WORK",
    "subcategory": "PROMPT_ENGINEERING",
    "difficulty": "EASY",
    "question": "หากผลลัพธ์ที่ได้จาก AI ยังกว้างเกินไป หรือเราไม่แน่ใจว่าจะใส่บริบทอะไรเพิ่ม ควรใช้คำสั่งใดแนะนำให้ AI ถามข้อมูลเพิ่ม?",
    "choices": [
      "To get a better result, Ask Me",
      "Stop Generation",
      "Delete All Chat",
      "Close Window"
    ],
    "correctAnswer": 0,
    "explanation": "คำสั่ง 'To get a better result, Ask Me' สั่งให้ AI ถามคำถามกลับ เพื่อรวบรวมข้อมูลและบริบทที่จำเป็นเพิ่มเติมก่อนเริ่มสร้างงาน",
    "score": 10,
    "source": "AI for Work - หน้า 72"
  },
  {
    "id": "Q011",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_SEARCH",
    "difficulty": "EASY",
    "question": "เครื่องมือ AI ใดที่โดดเด่นด้านการค้นหาข้อมูลแบบ Real-time บนอินเทอร์เน็ตพร้อมระบุแหล่งอ้างอิงเว็บไซต์ (Citations)?",
    "choices": [
      "Perplexity",
      "Cleanvoice.Ai",
      "Midjourney",
      "Runway Gen-2"
    ],
    "correctAnswer": 0,
    "explanation": "Perplexity เป็น AI Search Engine ที่เน้นการค้นหาข้อมูลเรียลไทม์ และแสดงลิงก์แหล่งอ้างอิงที่เชื่อถือได้",
    "score": 10,
    "source": "AI for Work - หน้า 13, 103"
  },
  {
    "id": "Q012",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_TOOLS",
    "difficulty": "EASY",
    "question": "ฟีเจอร์ Canvas ในระบบ AI ของ Google (Gemini Canvas) มีจุดเด่นในเรื่องใด?",
    "choices": [
      "เป็นพื้นที่ทำงาน Interactive สำหรับเขียน ตรวจแก้ และจัดโครงสร้างเอกสารร่วมกับ AI",
      "ใช้สำหรับสร้างเพลงและเสียงพากย์",
      "ใช้ตัดต่อสัญญาณเสียงรบกวน",
      "ใช้ตั้งเวลาเปิด-ปิดเครื่องคอมพิวเตอร์"
    ],
    "correctAnswer": 0,
    "explanation": "Gemini Canvas เป็นพื้นที่ทำงานแบบ Workspace ช่วยให้ผู้ใช้เขียน แก้ไข และปรับแต่งเนื้อหาร่วมกับ AI ได้อย่างสะดวก",
    "score": 10,
    "source": "AI for Work - หน้า 61"
  },
  {
    "id": "Q013",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_SLIDE",
    "difficulty": "EASY",
    "question": "เครื่องมือ AI ใดที่ออกแบบมาเพื่อช่วยจัดโครงสร้างและสร้างสไลด์งานนำเสนอ (Presentation) โดยเฉพาะ?",
    "choices": [
      "Gamma และ SlideAI.io",
      "Krisp และ Cleanvoice",
      "Midjourney และ DALL-E 3",
      "MySQL และ PostgreSQL"
    ],
    "correctAnswer": 0,
    "explanation": "Gamma และ SlideAI.io เป็นเครื่องมือเฉพาะทางสำหรับการสร้างสไลด์และ Presentation ด้วย AI อย่างรวดเร็ว",
    "score": 10,
    "source": "AI for Work - หน้า 13, 81"
  },
  {
    "id": "Q014",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_ETHICS",
    "difficulty": "EASY",
    "question": "Andrew Ng (ผู้เชี่ยวชาญด้าน AI และผู้ก่อตั้ง Coursera) ได้กล่าวถึง AI และการทำงานในอนาคตไว้อย่างไร?",
    "choices": [
      "\"AI ไม่ได้มาแทนที่คน แต่คนที่ใช้ AI ต่างหากที่จะมาแทนคนที่ไม่ใช้ AI\"",
      "\"AI จะทำงานแทนมนุษย์ได้ทั้งหมด 100% ในเวลาอันสั้น\"",
      "\"ห้ามนำ AI มาใช้ในงานเอกสารทุกชนิด\"",
      "\"มนุษย์ไม่จำเป็นต้องเรียนรู้ทักษะใหม่ๆ อีกต่อไป\""
    ],
    "correctAnswer": 0,
    "explanation": "Andrew Ng เน้นย้ำว่า AI ไม่ได้มาแย่งงานคน แต่คนที่ใช้ AI เพิ่มผลผลิตจะเข้ามาแทนที่คนที่ไม่ปรับตัวใช้เทคโนโลยี",
    "score": 10,
    "source": "AI for Work - หน้า 110"
  },
  {
    "id": "Q015",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_IMAGE",
    "difficulty": "EASY",
    "question": "อัตราส่วนภาพ (Aspect Ratio) สี่เหลี่ยมจัตุรัส '--ar 1:1' นิยมตั้งขนาดความละเอียดไว้ที่กี่พิกเซล?",
    "choices": [
      "1080 x 1080 pixels",
      "1080 x 1350 pixels",
      "1080 x 1920 pixels",
      "1920 x 1080 pixels"
    ],
    "correctAnswer": 0,
    "explanation": "อัตราส่วน '--ar 1:1' คือสี่เหลี่ยมจัตุรัส มีขนาดมาตรฐาน 1080 x 1080 pixels นิยมใช้สำหรับโพสต์ทั่วไปบน Social Media",
    "score": 10,
    "source": "Creativity AI - หน้า 20"
  },
  {
    "id": "Q016",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_IMAGE",
    "difficulty": "EASY",
    "question": "หากต้องการสร้างภาพแนวตั้งเต็มจอสำหรับ Instagram Story, Reels หรือ TikTok ควรกำหนดอัตราส่วนใด?",
    "choices": [
      "--ar 9:16 (1080 x 1920 pixels)",
      "--ar 16:9 (1920 x 1080 pixels)",
      "--ar 1:1 (1080 x 1080 pixels)",
      "--ar 4:5 (1080 x 1350 pixels)"
    ],
    "correctAnswer": 0,
    "explanation": "อัตราส่วน '--ar 9:16' (ขนาด 1080 x 1920 pixels) เป็นแนวตั้งเต็มหน้าจอ เหมาะสำหรับ Reels, Story และ TikTok",
    "score": 10,
    "source": "Creativity AI - หน้า 20"
  },
  {
    "id": "Q017",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_IMAGE",
    "difficulty": "EASY",
    "question": "อัตราส่วนภาพแนวนอน Widescreen '--ar 16:9' นิยมตั้งขนาดความละเอียดไว้ที่กี่พิกเซล?",
    "choices": [
      "1920 x 1080 pixels",
      "1080 x 1920 pixels",
      "1080 x 1350 pixels",
      "1080 x 1080 pixels"
    ],
    "correctAnswer": 0,
    "explanation": "อัตราส่วน '--ar 16:9' มีขนาด 1920 x 1080 pixels เป็นแนวนอน เหมาะสำหรับสไลด์งานนำเสนอ วิดีโอ และ YouTube",
    "score": 10,
    "source": "Creativity AI - หน้า 20"
  },
  {
    "id": "Q018",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_IMAGE",
    "difficulty": "EASY",
    "question": "อัตราส่วนภาพแนวตั้งสำหรับโพสต์บนฟีดโซเชียลมีเดีย '--ar 4:5' มีขนาดกี่พิกเซล?",
    "choices": [
      "1080 x 1350 pixels",
      "1080 x 1080 pixels",
      "1920 x 1080 pixels",
      "500 x 400 pixels"
    ],
    "correctAnswer": 0,
    "explanation": "อัตราส่วน '--ar 4:5' มีขนาด 1080 x 1350 pixels เป็นสัดส่วนภาพแนวตั้งยอดนิยมบนหน้าฟีด Instagram และ Facebook",
    "score": 10,
    "source": "Creativity AI - หน้า 20"
  },
  {
    "id": "Q019",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_ART",
    "difficulty": "EASY",
    "question": "ข้อใดเป็นตัวอย่างการนำ AI Art ไปประยุกต์ใช้งานจริงในเชิงสร้างสรรค์?",
    "choices": [
      "ทำ Artwork, รูปโปรโมทสินค้า, ออกแบบ Character และงานสถาปัตยกรรม",
      "ใช้เติมหมึกพิมพ์เครื่องปรินเตอร์",
      "ใช้ซ่อมสายไฟในบ้าน",
      "ใช้เช็ดทำความสะอาดหน้าจอ"
    ],
    "correctAnswer": 0,
    "explanation": "AI Art สามารถนำไปต่อยอดได้หลากหลาย เช่น การทำภาพโปรโมทสินค้า การออกแบบตัวละคร โลโก้ และงานภาพจำลองสถาปัตยกรรม",
    "score": 10,
    "source": "Creativity AI - หน้า 7"
  },
  {
    "id": "Q020",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_TOOLS",
    "difficulty": "EASY",
    "question": "เครื่องมือ Generative AI ชั้นนำที่นิยมใช้ในการสร้างภาพศิลปะและงานกราฟิก ได้แก่อะไรบ้าง?",
    "choices": [
      "Midjourney, DALL-E 3, Adobe Firefly",
      "Cleanvoice, Krisp, Podcastle",
      "Perplexity, Google Translate, Calculator",
      "Windows, macOS, Android"
    ],
    "correctAnswer": 0,
    "explanation": "Midjourney, DALL-E 3 และ Adobe Firefly เป็น Generative AI ชั้นนำด้านการสร้างภาพศิลปะและกราฟิกจากข้อความ",
    "score": 10,
    "source": "AI for Work - หน้า 13 และ Creativity AI"
  },
  {
    "id": "Q021",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_EMAIL",
    "difficulty": "EASY",
    "question": "เมื่อสั่งให้ AI ร่างอีเมลติดต่อธุรกิจ การระบุ Tone เป็น Formal หรือ Business tone มีผลอย่างไร?",
    "choices": [
      "ทำให้ภาษาและคำศัพท์มีความสุภาพ เป็นทางการ และน่าเชื่อถือ",
      "ทำให้ข้อความกลายเป็นตลกขบขัน",
      "ทำให้ AI ปฏิเสธการส่งข้อความ",
      "ทำให้ตัวอักษรเปลี่ยนเป็นสีแดงทั้งหมด"
    ],
    "correctAnswer": 0,
    "explanation": "การระบุ Tone & Emotion ช่วยให้ AI เลือกใช้ระดับภาษาและโครงสร้างประโยคที่เหมาะสมกับบริบทการติดต่อทางการ",
    "score": 10,
    "source": "AI for Work - หน้า 23"
  },
  {
    "id": "Q022",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_PLANNING",
    "difficulty": "EASY",
    "question": "การใช้ AI ช่วยวางแผนงานหรือจัดทริปท่องเที่ยว ควรระบุสิ่งใดใน Input Data เพื่อให้ได้แผนงานที่แม่นยำ?",
    "choices": [
      "ระยะเวลา, งบประมาณ, จุดหมายปลายทาง และความต้องการเฉพาะของกิจกรรม",
      "ชื่อเบราว์เซอร์ที่เปิดใช้งาน",
      "ยี่ห้อของแป้นพิมพ์คอมพิวเตอร์",
      "รหัสผ่านอีเมลส่วนตัว"
    ],
    "correctAnswer": 0,
    "explanation": "การระบุข้อมูลนำเข้าที่ชัดเจน เช่น ระยะเวลา สถานที่ และงบประมาณ จะช่วยให้ AI วางแผนขั้นตอนได้อย่างเป็นระบบและตรงใจ",
    "score": 10,
    "source": "AI for Work - หน้า 30, 70"
  },
  {
    "id": "Q023",
    "category": "AI_FOR_WORK",
    "subcategory": "AI_SUMMARY",
    "difficulty": "EASY",
    "question": "การกำหนด Output Format ให้ AI สรุปเนื้อหาเป็น Bullet points หรือ Step-by-step มีข้อดีอย่างไร?",
    "choices": [
      "ช่วยให้เนื้อหาอ่านง่าย จับใจความสำคัญได้อย่างรวดเร็วและเป็นระเบียบ",
      "ทำให้ไฟล์คอมพิวเตอร์มีขนาดเล็กลงทันที",
      "ทำให้ AI ทำงานช้าลง",
      "ลบข้อมูลสำคัญทิ้งทั้งหมด"
    ],
    "correctAnswer": 0,
    "explanation": "การกำหนดให้แสดงผลเป็นหัวข้อย่อยหรือขั้นตอน ช่วยให้อ่านจับประเด็นสำคัญได้ง่ายและนำไปใช้ต่อได้ทันที",
    "score": 10,
    "source": "AI for Work - หน้า 23, 76"
  },
  {
    "id": "Q024",
    "category": "AI_FOR_CREATIVITY",
    "subcategory": "AI_CONTENT",
    "difficulty": "EASY",
    "question": "ในการสร้างคอนเทนต์สำหรับ Social Media การกำหนด Audience (กลุ่มเป้าหมายผู้อ่าน) สำคัญอย่างไร?",
    "choices": [
      "ช่วยให้ AI ปรับภาษา สไตล์ และเนื้อหาให้ตรงใจกลุ่มผู้อ่านเป้าหมาย",
      "เปลี่ยนความเร็วของอินเทอร์เน็ต",
      "ช่วยประหยัดแบตเตอรี่โทรศัพท์",
      "ทำให้ภาพถ่ายมีความสว่างขึ้นโดยอัตโนมัติ"
    ],
    "correctAnswer": 0,
    "explanation": "การระบุกลุ่มเป้าหมาย (Audience) เช่น นักเรียน หรือคนทำงาน ช่วยให้ AI สื่อสารด้วยภาษาและอารมณ์ที่โดนใจผู้รับสาร",
    "score": 10,
    "source": "AI for Work - หน้า 23"
  }
]

with open("data/questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print(f"data/questions.json updated with {len(questions)} clean basic questions.")
