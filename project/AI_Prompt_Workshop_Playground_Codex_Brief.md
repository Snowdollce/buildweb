# AI Prompt Workshop Playground
## Codex Development Brief — V1

> **Source of Truth:** Existing DX Hub website + this brief  
> **Visual Reference:** `references/ai-prompt-workshop/`  
> **Primary Goal:** เพิ่มพื้นที่ Workshop สำหรับฝึก Prompt โดยไม่กระทบระบบเดิม

---

# 1. PROJECT OBJECTIVE

สร้างระบบใหม่ชื่อ:

**AI Prompt Workshop Playground**

เพิ่มเติมจากเว็บไซต์เดิม:

`https://buildweb-pi.vercel.app/`

เว็บไซต์เดิมมี Positioning เป็น **DX Hub AI Capability Development** และเน้นการเรียนรู้ผ่านการปฏิบัติจริง, Prompt Engineering, AI Workflow และ Outcome ที่นำไปใช้ได้จริง

ระบบใหม่ต้องทำหน้าที่เป็น **Interactive Workshop Playground** สำหรับให้ผู้เรียนทดลอง Prompt ด้วยตนเอง

Core Learning Loop:

```text
เลือก Role
    ↓
เขียน Prompt
    ↓
ดูผลลัพธ์
    ↓
เรียนรู้ / Reflect
    ↓
เปลี่ยน Role
    ↓
เขียน Prompt ใหม่
    ↓
ดูผลลัพธ์ใหม่
```

หัวใจของระบบคือ:

**Role Rotation**

---

# 2. CRITICAL — PROTECT EXISTING WEBSITE

ถือว่าเว็บไซต์เดิมเป็น:

**Protected Existing System**

ห้ามแก้ไข ลบ Refactor หรือเปลี่ยนแปลงระบบเดิมโดยเด็ดขาด

ห้ามเปลี่ยน:

- Existing layout
- Existing design
- Existing color palette
- Existing typography
- Existing fonts
- Existing components
- Existing pages
- Existing navigation behavior
- Existing content
- Existing courses
- Existing learning path
- Existing AI Arsenal
- Existing prompt library
- Existing APIs
- Existing backend logic
- Existing data
- Existing authentication
- Existing functionality

**ห้าม refactor code เดิมเพียงเพื่อรองรับระบบใหม่**

หากสามารถสร้างไฟล์ใหม่และ isolated route ได้ ให้สร้างไฟล์ใหม่แทนการแก้ไฟล์เดิม

---

# 3. ONLY ALLOWED CHANGE TO EXISTING SYSTEM

อนุญาตให้แก้หน้า Home / Main Navigation ของเว็บไซต์เดิมเพียงอย่างเดียว:

เพิ่ม Navigation Link:

**AI Prompt Workshop Playground**

Link ไปยัง route ใหม่ เช่น:

```text
/prompt-workshop
```

หรือ route ที่เหมาะสมกับ architecture ปัจจุบัน

ข้อกำหนด:

- ใช้ Navigation component เดิม
- ใช้ styling เดิม
- ไม่เปลี่ยนเมนูเดิม
- ไม่ลบเมนูเดิม
- ไม่เปลี่ยนลำดับเมนูเดิมโดยไม่จำเป็น
- ไม่เปลี่ยน design ของ Navigation
- เพิ่มเฉพาะ Link ใหม่เท่านั้น

**นอกเหนือจากการเพิ่ม Link นี้ ห้ามแก้ระบบเดิม**

---

# 4. DESIGN SYSTEM — CRITICAL

นี่เป็นข้อกำหนดสำคัญมาก

แม้ AI Prompt Workshop Playground จะเป็นระบบใหม่ แต่ต้องให้ผู้ใช้รู้สึกว่าเป็น:

> **อีกหนึ่งหน้าของ DX Hub เดิม**

ไม่ใช่เว็บไซต์ใหม่คนละแบรนด์

## Existing DX Hub Website = Source of Truth สำหรับ Design

ให้ Inspect เว็บไซต์เดิมก่อนออกแบบ:

`https://buildweb-pi.vercel.app/`

ต้องยึด Visual Language เดิมของเว็บไซต์เป็นหลัก:

- Color palette
- Typography
- Font
- Button style
- Card style
- Border radius
- Shadow / elevation
- Spacing
- Icon style
- Background treatment
- Section styling
- Visual hierarchy
- Hover / interaction style
- Overall UI personality

**ห้ามสร้าง Design System ใหม่**

**ห้ามเลือก Color Palette ใหม่**

**ห้ามเปลี่ยน Typography เพื่อระบบใหม่**

**ห้ามสร้าง visual identity ที่แตกต่างจาก DX Hub**

สามารถสร้าง component ใหม่สำหรับ Workshop ได้ แต่ต้องใช้ Design Language เดิม

---

# 5. REFERENCE IMAGES

มีภาพ Reference อยู่ที่:

```text
references/ai-prompt-workshop/
```

ภาพ Reference ใช้สำหรับทำความเข้าใจ:

- Workshop layout
- UX flow
- Information hierarchy
- Challenge
- Prompt input
- AI response
- Reflection
- Role Rotation
- ตัวอย่างกรณีผู้เรียนเขียน Prompt ไม่ครบ

ภาพเหล่านี้ **ไม่ใช่ Design Source**

ห้าม copy:

- สี
- ฟอนต์
- visual identity
- branding
- component styling

จากภาพ Reference

ลำดับความสำคัญ:

```text
1. Existing DX Hub Website
   → Source of Truth สำหรับ Design

2. This Brief
   → Source of Truth สำหรับ Function และ Scope

3. Reference Images
   → UX / Layout Reference เท่านั้น
```

---

# 6. V1 SCOPE

V1 ต้องเป็นระบบ Workshop ที่เรียบง่าย

ต้องมี:

1. Workshop Selection
2. Workshop Brief / Challenge
3. Role Selection
4. Prompt Input
5. Run Prompt
6. AI Response / Mock Response
7. Reflection / Learning
8. Role Rotation
9. Finish Workshop

ไม่ต้องสร้างระบบอื่นนอกเหนือจากนี้

---

# 7. CORE WORKSHOP FLOW

```text
Workshop Home
      ↓
Select Workshop
      ↓
Workshop Brief
      ↓
Challenge
      ↓
Select Role
      ↓
Prompt Playground
      ↓
Write Prompt
      ↓
Run Prompt
      ↓
AI Response
      ↓
Reflection
      ↓
Try Another Role
      ↓
Select New Role
      ↓
Write New Prompt
      ↓
Run Again
      ↓
Reflection
      ↓
Finish Workshop
```

ผู้เรียนต้องสามารถเปลี่ยน Role ได้โดยไม่ต้องออกจาก Workshop

---

# 8. WORKSHOP SCREEN STRUCTURE

## Screen 1 — Workshop Home

Route:

```text
/prompt-workshop
```

แสดง:

### AI Prompt Workshop Playground

คำอธิบาย:

> Interactive workspace for practicing Prompt through different roles and perspectives.

แสดงรายการ Workshop

ตัวอย่าง:

- Workshop 01 — Role Makes a Difference
- Workshop 02 — Give AI Better Context
- Workshop 03 — Control the Output

---

# 9. SCREEN 2 — WORKSHOP BRIEF

แสดง:

- Workshop Title
- Challenge
- Your Mission

ตัวอย่าง:

### Challenge

บริษัทกำลังจะเปิดตัวผลิตภัณฑ์ใหม่ และต้องการวางแผนการเปิดตัวให้ประสบความสำเร็จ

### Your Mission

ลองใช้ AI จากมุมมองของ Role ที่แตกต่างกัน แล้วสังเกตว่าการเปลี่ยน Role ส่งผลต่อคำตอบอย่างไร

ปุ่ม:

**Start Workshop**

---

# 10. SCREEN 3 — ROLE SELECTION

แสดง Role ของ Workshop

ตัวอย่าง:

```text
Marketing Manager
Customer
Business Analyst
Sales Manager
CEO
```

แต่ละ Role มี:

- Name
- Short Description
- Optional Icon

เมื่อเลือก Role ให้เข้าสู่ Prompt Playground

---

# 11. SCREEN 4 — PROMPT PLAYGROUND

นี่คือ Core Screen

ต้องแสดง:

### Current Challenge

โจทย์ของ Workshop

### Current Role

Role ที่กำลังทดลอง

### Your Prompt

พื้นที่สำหรับผู้เรียนเขียน Prompt

ตัวอย่าง:

```text
YOUR PROMPT

[ Write your prompt here... ]

[ Run Prompt ]
```

AI Response ต้องอยู่ในพื้นที่ที่มองเห็นได้ชัดเจน

---

# 12. AI RESPONSE

แสดง:

### AI Response

ผลลัพธ์จาก Prompt + Role

หากยังไม่มี AI API ที่พร้อมใช้งาน:

สามารถใช้ Mock Response เพื่อแสดง UX ได้

แต่ไม่ต้องสร้าง AI infrastructure ขนาดใหญ่ใน V1

ต้องมี:

- Try Again
- Try Another Role

---

# 13. ROLE ROTATION

Role Rotation เป็น Feature หลัก

ตัวอย่าง:

```text
YOUR ROLE

✓ Marketing Manager
○ Customer
○ Business Analyst
○ Sales Manager
○ CEO
```

เมื่อเปลี่ยน Role:

- Current Role เปลี่ยน
- Prompt input พร้อมสำหรับ Prompt ใหม่
- ผู้เรียนยังอยู่ใน Workshop เดิม
- Challenge เดิมยังคงอยู่
- ระบบควรทำให้เห็นชัดว่ากำลังทดลอง Role ใหม่

ไม่ต้องสร้าง Compare Mode

---

# 14. REFLECTION / LEARNING

หลังจากทดลอง Prompt ให้มีพื้นที่ Reflection

ตัวอย่าง:

### What did you notice?

- AI มองปัญหาแตกต่างกันหรือไม่?
- แต่ละ Role ให้ความสำคัญกับเรื่องใด?
- คำตอบเปลี่ยนไปอย่างไร?
- Role มีผลต่อมุมมองของ AI อย่างไร?

ให้ผู้เรียนสามารถเขียน Reflection ของตัวเองได้

```text
What did you learn?

[.................................]
[.................................]
```

ปุ่ม:

**Finish Workshop**

---

# 15. INCOMPLETE PROMPT EXPERIENCE

Workshop ควรสามารถแสดงให้ผู้เรียนเห็นว่า:

> Prompt ที่ให้ข้อมูลไม่ครบ อาจทำให้ AI ตอบแบบกว้างหรือไม่ตรงความต้องการ

ตัวอย่าง:

ผู้เรียนเขียน:

```text
ช่วยวางแผนเปิดตัวสินค้าใหม่
```

โดยไม่ได้ระบุ:

- Context
- Target audience
- Objective
- Desired output format
- Constraints

AI อาจตอบเป็นแผนทั่วไป

สิ่งนี้ควรใช้เป็น **Learning Moment**

ไม่ต้องสร้าง Prompt Score

ไม่ต้องให้คะแนน

ไม่ต้องตัดสิน Prompt ว่าถูกหรือผิด

ให้ผู้เรียนสังเกตผลลัพธ์และเรียนรู้ด้วยตัวเอง

---

# 16. NO UNNECESSARY FEATURES

ห้ามสร้าง Feature เหล่านี้ใน V1:

- Compare Mode
- Prompt Score
- Prompt Evaluation
- Prompt Coach
- Leaderboard
- Login
- User Account
- Participant Management
- Trainer Dashboard
- Analytics
- Prompt Library ใหม่
- AI Arsenal ใหม่
- Save Prompt
- Favorite Prompt
- Progress Dashboard
- Multiple AI Model Selector
- Payment
- Subscription
- Notification

เว็บไซต์เดิมมี AI Arsenal / Prompt Library อยู่แล้ว

**ห้ามสร้างซ้ำ**

**ยังไม่ต้องเชื่อมกับ AI Arsenal**

---

# 17. AI / API SCOPE

ยังไม่ต้องออกแบบหรือเชื่อมต่อ AI Provider หลายตัว

อย่าสร้าง OpenAI / Gemini / Claude integration ใหม่โดยพลการ

ก่อนพิจารณา API ให้ inspect architecture ปัจจุบันก่อน

หากยังไม่มี API ที่เหมาะสม:

ใช้ Mock Response / placeholder เพื่อพัฒนา UX และ Workshop Flow

เป้าหมายของ V1 คือ:

> **Workshop Experience ก่อน AI Infrastructure**

---

# 18. DATA MODEL

ออกแบบข้อมูลแบบ Data-driven เพื่อให้เพิ่ม Workshop ได้ง่าย

อย่างน้อย:

```text
Workshop
 ├── id
 ├── title
 ├── description
 ├── challenge
 ├── mission
 └── roles[]

Role
 ├── id
 ├── name
 ├── description
 └── instruction
```

ตัวอย่าง:

```text
Workshop:
  id: role-makes-a-difference
  title: Role Makes a Difference

  challenge:
    บริษัทกำลังจะเปิดตัวผลิตภัณฑ์ใหม่...

  mission:
    ทดลองใช้ AI จากหลายมุมมอง...

  roles:
    - Marketing Manager
    - Customer
    - Business Analyst
    - Sales Manager
    - CEO
```

ควรสามารถเพิ่ม Workshop ใหม่โดยไม่ต้องสร้างระบบใหม่

---

# 19. RESPONSIVE DESIGN

ต้องรองรับ:

- Desktop
- Tablet
- Mobile

Desktop สามารถใช้โครงสร้าง:

```text
Challenge / Role
        ↓
Prompt              AI Response
        ↓
Reflection
```

Mobile:

```text
Challenge
↓
Role
↓
Prompt
↓
Run
↓
AI Response
↓
Reflection
↓
Try Another Role
```

---

# 20. TECHNICAL SAFETY

ก่อนเขียนโค้ด:

1. Inspect repository
2. Inspect existing architecture
3. Inspect routing
4. Inspect components
5. Inspect styling system
6. Inspect Home / Navigation
7. Determine safest isolated route

จากนั้นสร้างระบบใหม่แบบ isolated

ก่อนแก้ไฟล์เดิมทุกไฟล์ ต้องตรวจสอบว่าจำเป็นจริงหรือไม่

**เป้าหมายคือสร้างไฟล์ใหม่ให้มากที่สุด**

ไฟล์เดิมที่อนุญาตให้แก้โดยตรงมีเพียงไฟล์ที่จำเป็นสำหรับ:

> **เพิ่ม Navigation Link ไปยัง `/prompt-workshop`**

เท่านั้น

---

# 21. ACCEPTANCE CRITERIA

## Existing DX Hub

ต้องยังเหมือนเดิมและทำงานเหมือนเดิมทั้งหมด

ยกเว้น:

มี Navigation Link ใหม่:

**AI Prompt Workshop Playground**

---

## New Workshop

ผู้ใช้สามารถ:

- เข้า Workshop
- เลือก Workshop
- อ่าน Challenge
- เลือก Role
- เขียน Prompt
- Run Prompt
- เห็น AI Response / Mock Response
- Reflection
- เปลี่ยน Role
- เขียน Prompt ใหม่
- Run อีกครั้ง
- เรียนรู้จากมุมมองใหม่
- Finish Workshop

---

# 22. PRODUCT PRINCIPLE

อย่าสร้างระบบให้ใหญ่เกินโจทย์

AI Prompt Workshop Playground V1 มีหน้าที่:

> **เป็นพื้นที่ให้ผู้เรียนทดลอง Prompt ด้วยตัวเอง และเห็นด้วยตนเองว่าการเปลี่ยน Role สามารถเปลี่ยนมุมมองและผลลัพธ์ของ AI ได้อย่างไร**

Core Loop:

```text
ROLE
  ↓
PROMPT
  ↓
RESULT
  ↓
LEARN
  ↓
CHANGE ROLE
  ↓
PROMPT AGAIN
```

ทุก Feature ที่ไม่สนับสนุน Core Loop นี้ให้ถือว่า:

**OUT OF SCOPE**

---

# 23. FINAL DEVELOPMENT INSTRUCTION

เริ่มด้วยการตรวจสอบ Repository ปัจจุบันก่อน

**ห้าม Rewrite**
**ห้าม Refactor Existing System**
**ห้ามเปลี่ยน Design System เดิม**

จากนั้น:

1. สร้าง isolated route `/prompt-workshop`
2. สร้าง Workshop data structure
3. สร้างตัวอย่าง Workshop
4. สร้าง Workshop Home
5. สร้าง Workshop Brief
6. สร้าง Role Selection
7. สร้าง Prompt Playground
8. สร้าง AI Response / Mock Response
9. สร้าง Reflection
10. สร้าง Role Rotation
11. ทำ Responsive UI
12. เพิ่ม Navigation Link เพียงจุดเดียวในระบบเดิม
13. ทดสอบ Regression ของระบบเดิม

ก่อนจบงานให้รายงาน:

- Files ที่สร้างใหม่
- Files เดิมที่แก้ไข
- เหตุผลของการแก้แต่ละไฟล์เดิม
- Route ของ AI Prompt Workshop Playground
- วิธีเพิ่ม Workshop ใหม่
- สิ่งที่ยังไม่ได้ทำเพราะอยู่นอก Scope V1

**ห้ามแก้ไขระบบเดิมนอกเหนือจากการเพิ่ม Navigation Link**
