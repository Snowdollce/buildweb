# Asset Bible / Visual Asset Specification
# Mastering Generative AI Creative Design

**Document Version:** 1.0  
**Status:** Visual Source of Truth  
**Usage:** Claude Code / ChatGPT Codex / AI-assisted Game Development

---

# 1. Purpose

เอกสารนี้เป็น **Visual Source of Truth** สำหรับ Asset ทั้งหมดของเกม

**Mastering Generative AI Creative Design**

มีหน้าที่ควบคุมให้ Character, Board, Card, Money, Coin, Resource และ UI Graphic มี Visual Consistency เดียวกันตลอดทั้งเกม

> **กฎสำคัญ: Existing Material ต้องถูกใช้เป็น Master Reference และห้าม AI สร้างดีไซน์ใหม่แทน Asset เดิมโดยพลการ**

---

# 2. Asset Priority

เมื่อเกิดความขัดแย้งระหว่างข้อมูล ให้ใช้ลำดับดังนี้:

```text
1. Existing Generated Material / Approved Asset
2. Character Sheet / Asset Reference
3. Asset Bible นี้
4. GAME_BRIEF.md
5. AI-generated interpretation
```

AI Coding Agent ห้ามเปลี่ยนรูปลักษณ์ของ Approved Asset เพื่อความสะดวกในการเขียนระบบ

---

# 3. Global Visual Direction

## Style

- Cute 3D Cartoon
- High-quality 3D animation aesthetic
- Chibi
- Friendly
- Bright
- Playful
- Educational
- Science + Technology Theme
- Suitable for elementary students

## Character Characteristics

- Big round eyes
- Friendly smile
- Cute facial expression
- Short chibi body
- Rounded forms
- Soft 3D shading
- Colorful clothing
- Clean silhouette

## Visual Mood

```text
Fun
+
Creative
+
Technology
+
AI
+
Learning
```

---

# 4. Color Direction

Primary colors:

- Sky Blue
- Pink
- Green
- Yellow
- Purple
- Orange

Supporting colors:

- White
- Light Gray
- Gold
- Soft Cyan

สีต้องสดใสแต่ไม่ใช้ Saturation สูงจนอ่านข้อความหรือ UI ยาก

---

# 5. Character Assets

## Total

**12 Characters**

Character ทั้งหมดเป็น Player Avatar

## Character Rules

- ต้องยึด Character Sheet รวม
- ต้องยึดภาพ Approved Character แยกรายตัว
- ต้องคงใบหน้า เสื้อผ้า สี และสัดส่วนเดิม
- ห้าม redesign
- ห้ามเปลี่ยนสีเสื้อ
- ห้ามเปลี่ยนทรงผม
- ห้ามเปลี่ยนบุคลิกภาพทางภาพ
- ห้ามเพิ่ม/ลดอุปกรณ์สำคัญ
- ต้องคงสัดส่วน Chibi ที่กำหนด

## Character List

1. AI Explorer
2. Prompt Master
3. Image Creator
4. Video Creator
5. Storyteller
6. Creative Designer
7. Idea Generator
8. AI Strategist
9. Problem Solver
10. AI Assistant
11. Innovation Hero
12. Creative Master

## Asset Format

แนะนำ:

```text
PNG
Transparent Background
High Resolution
```

Folder:

```text
/assets/characters/
```

Naming:

```text
character-01.png
character-02.png
...
character-12.png
```

---

# 6. Board Asset

## Main Board

**1 Board**

Specification:

- A3 Landscape
- 32 Tiles
- Monopoly-style board layout
- Cute 3D Cartoon
- Bright colors
- Light blue sky background
- Science amusement park atmosphere
- Thai language
- Clear tile borders

## Required Elements

- START
- AI for Work
- AI for Creativity
- AI Special
- AI Challenge
- Special Corners
- Direction Arrows
- AI Robot
- Gold Coins
- Dice
- Stars
- Sparkles
- Technology Decorations

## Board Asset

```text
/assets/board/
game-board.png
```

ต้องรักษา Layout ของ Board ที่ Approved แล้ว

---

# 7. Property Card Assets

## Total

**10 Cards**

Cards:

1. AI ค้นหาข้อมูล
2. AI เขียนอีเมล
3. AI สรุปเนื้อหา
4. AI วิเคราะห์ข้อมูล
5. AI วางแผนงาน
6. AI สร้างภาพ
7. AI สร้างสไลด์
8. AI สร้างคอนเทนต์
9. AI สร้างวิดีโอ
10. AI สร้างสรรค์ไอเดีย

## Card Visual Rules

ทุกใบต้องใช้ Template เดียวกัน:

- Card frame consistent
- Property number
- Property name
- Main 3D illustration
- Rent
- Development Cost
- AI Power
- Description
- Decorative stars
- AI / Technology elements

## Individual Card Colors

| Card | Primary Color |
|---|---|
| 01 | Blue |
| 02 | Dark Blue |
| 03 | Green |
| 04 | Purple |
| 05 | Orange |
| 06 | Pink |
| 07 | Yellow |
| 08 | Red-Pink |
| 09 | Teal |
| 10 | Gold-Purple |

## Assets

```text
/assets/cards/
property-01.png
property-02.png
...
property-10.png
```

---

# 8. Banknote Assets

## Total Designs

2

### Banknote 5 บาท

- Emerald Green
- Large number 5 in four corners
- Text: 5 บาท
- Cute 3D AI-related character
- Gold coins
- Stars
- Fantasy banknote pattern
- Decorative premium frame
- Game-related top text
- White/clean background when presented as printable material

Asset:

```text
/assets/money/banknote-5.png
```

### Banknote 10 บาท

- Bright Blue
- Large number 10 in four corners
- Text: 10 บาท
- Cute smiling AI-related character
- Gold coins
- Stars
- Fantasy security pattern
- Blue decorative frame
- Game-related top text

Asset:

```text
/assets/money/banknote-10.png
```

## Important

Banknotes are **in-game currency only**.

ห้ามออกแบบให้เหมือนธนบัตรจริงของประเทศใดประเทศหนึ่ง

---

# 9. AI Coin

AI Coin เป็น Currency Token

Visual:

- Gold 3D coin
- Cute technology icon
- Shiny edge
- Friendly game aesthetic
- Clear silhouette

Asset:

```text
/assets/resources/ai-coin.png
```

---

# 10. Creativity Point

เป็น Learning Score Token / Icon

Visual:

- Bright
- Creative
- Star / Spark / Point visual language
- 3D
- Easy to recognize at small size

Asset:

```text
/assets/resources/creativity-point.png
```

---

# 11. Creative Energy

เป็น Action Resource

Visual:

- Energy / Spark / Power visual
- Bright 3D effect
- Clearly different from Creativity Point
- Easy to distinguish in HUD

Asset:

```text
/assets/resources/creative-energy.png
```

---

# 12. Creative Power / Generative Power

เป็น Special Power Resource

Visual:

- Stronger visual hierarchy than Creative Energy
- AI / Generative visual
- 3D glow
- Spark / lightning / AI core concept
- Must not visually confuse with AI Coin

Asset:

```text
/assets/resources/creative-power.png
```

---

# 13. Dice

## Style

- 3D Cartoon
- Rounded corners
- Bright colors
- High visibility
- Large readable numbers
- Matches Board and Character style

Asset:

```text
/assets/dice/dice.png
```

Optional animation:

```text
dice-roll
dice-result
```

---

# 14. AI Robot / Mascot

AI Robot เป็น supporting visual asset

ใช้สำหรับ:

- Board decoration
- Quiz feedback
- Tutorial
- Reward
- Event
- Empty state
- Loading
- Game Assistant

ต้องใช้ Visual Language เดียวกับ Character

Folder:

```text
/assets/robot/
```

---

# 15. Decorative Assets

ใช้ร่วมกับ Board, Cards และ UI

รายการ:

- Gold Coins
- Sparkles
- Stars
- 3D Light Effects
- Lightbulb
- Computer
- Keyboard
- Tablet
- AI Icons
- Technology Patterns
- Arrows
- Achievement Icons

Folder:

```text
/assets/decorations/
```

---

# 16. UI Asset Direction

UI ต้องไม่แย่งความสนใจจาก Game Board

## Buttons

- Rounded
- 3D
- Bright
- Large
- Clear Thai labels

ตัวอย่าง:

```text
เริ่มเกม
ทอยลูกเต๋า
ตอบคำถาม
ซื้อ
ไม่ซื้อ
พัฒนา
ใช้พลัง
กลับ
ส่งคะแนน
ดูอันดับ
```

## Panels

- Rounded corners
- Soft shadow
- White / light background
- Colored header
- Clear hierarchy

---

# 17. Typography

ภาษาไทยเป็นภาษาหลัก

ต้องใช้ Font ที่อ่านง่ายและรองรับภาษาไทย

แนะนำ:

**Sarabun**

หรือ Font ไทยที่มี License เหมาะสม

## Rules

- ห้ามใช้ Font ตกแต่งจนอ่านยาก
- ห้ามใช้ตัวอักษรขนาดเล็กเกินไป
- Heading ต้องแตกต่างจาก Body
- Score ต้องอ่านได้ทันที

---

# 18. Asset Background Rules

## Character

**Transparent Background**

## Game Objects

สามารถใช้:

- Transparent
- White
- Light background

ตาม Context

## Board

ใช้ Background ตาม Board Design ที่ Approved

## UI

ใช้ Light / Clean Background

---

# 19. Asset Naming Convention

ใช้รูปแบบ:

```text
[type]-[id]-[name].[extension]
```

ตัวอย่าง:

```text
character-01-ai-explorer.png
property-01-ai-search.png
banknote-5.png
resource-ai-coin.png
resource-creativity-point.png
resource-creative-energy.png
resource-generative-power.png
```

---

# 20. Resolution Guidelines

สำหรับ Print Asset:

- High Resolution
- 300 DPI เมื่อเป็นงานพิมพ์
- PNG สำหรับภาพที่มี Transparency
- SVG สำหรับ Icon ที่ต้องการ Scaling ถ้ามี

สำหรับ Game Asset:

- ใช้ Resolution สูงกว่าขนาดแสดงจริง
- รองรับ Retina / High-DPI Display
- Optimize file size ก่อน Production

---

# 21. Approved Asset Workflow

เมื่อเพิ่ม Asset ใหม่:

```text
Generate
   ↓
Review
   ↓
Approve
   ↓
Add to /assets
   ↓
Register in Asset Manifest
   ↓
Use in Game
```

ห้ามนำ AI-generated Asset ที่ยังไม่ได้ Approve ไปใช้เป็น Production Asset

---

# 22. Asset Manifest

ควรมีไฟล์:

```text
/assets/asset-manifest.json
```

ตัวอย่าง:

```json
{
  "characters": [
    {
      "id": "character-01",
      "name": "AI Explorer",
      "path": "/assets/characters/character-01.png",
      "approved": true
    }
  ],
  "properties": [
    {
      "id": "property-01",
      "name": "AI ค้นหาข้อมูล",
      "path": "/assets/cards/property-01.png",
      "approved": true
    }
  ]
}
```

---

# 23. AI Coding Agent Rules

Claude Code / ChatGPT Codex ต้อง:

1. อ่าน Asset Bible ก่อนแก้ไข Visual Code
2. ใช้ Approved Asset ก่อนสร้าง Placeholder
3. ห้ามสร้าง Character ใหม่ถ้ามี Approved Character
4. ห้ามเปลี่ยนสีหรือสัดส่วน Character
5. ห้ามสร้าง Property Card ใหม่ถ้ามี Approved Card
6. ห้ามเปลี่ยน Board Layout
7. ห้ามเปลี่ยน Banknote Design
8. ห้ามเปลี่ยน Resource Icon โดยไม่ได้รับอนุมัติ
9. ต้องอ้างอิง Asset Path จาก Asset Manifest
10. ห้าม Hard-code Asset Path กระจายอยู่หลายไฟล์
11. หาก Asset ขาด ให้ใช้ Placeholder ชั่วคราวและระบุ `TODO`
12. ห้ามแทน Approved Asset ด้วย AI-generated image ใหม่โดยอัตโนมัติ

---

# 24. Placeholder Policy

ถ้ายังไม่มี Asset จริง:

```text
Use Placeholder
+
Mark TODO
+
Do not finalize as production asset
```

ตัวอย่าง:

```text
TODO: Replace placeholder with approved character-07.png
```

---

# 25. Visual Consistency Checklist

ก่อน Release ต้องตรวจ:

- [ ] Character 12 ตัวตรงกับ Approved Material
- [ ] Character มีสัดส่วน Chibi เดียวกัน
- [ ] Property Card 10 ใบใช้ Template เดียวกัน
- [ ] Board ใช้ Layout ที่ Approved
- [ ] Banknote 5 บาทตรงกับ Approved Material
- [ ] Banknote 10 บาทตรงกับ Approved Material
- [ ] AI Coin ตรงกับ Approved Material
- [ ] Creativity Point ตรงกับ Approved Material
- [ ] Creative Energy ตรงกับ Approved Material
- [ ] Creative Power ตรงกับ Approved Material
- [ ] Dice มี Style เดียวกัน
- [ ] AI Robot มี Style เดียวกัน
- [ ] สีโดยรวมเป็น Bright / Cute / Technology
- [ ] ภาษาไทยถูกต้อง
- [ ] ไม่มี Asset ที่ AI สร้างขึ้นใหม่โดยไม่ได้รับอนุมัติ

---

# 26. Master Asset Principle

> **เกมต้องดูเหมือนเกมเดียวกันตั้งแต่ Character, Board, Card, Money, Coin, Resource, UI จนถึง Leaderboard**

หลักการสำคัญ:

```text
Same Character Language
+
Same 3D Style
+
Same Color Language
+
Same Lighting
+
Same Proportion
+
Same UI Language
=
One Cohesive Game
```

---

# 27. Relationship with GAME_BRIEF.md

`GAME_BRIEF.md` = **Game Logic / Gameplay Source of Truth**

`ASSET_BIBLE.md` = **Visual / Asset Source of Truth**

ทั้งสองไฟล์ต้องถูกอ่านร่วมกันก่อนเริ่มพัฒนา

```text
GAME_BRIEF.md
        +
ASSET_BIBLE.md
        ↓
Game Implementation
```

หาก Game Rule และ Visual Asset ขัดแย้งกัน:

- Game Rule → ใช้ `GAME_BRIEF.md`
- Visual Design → ใช้ `ASSET_BIBLE.md`

---

# 28. Final Rule

**ห้าม AI Coding Agent ตีความ Material ใหม่โดยไม่จำเป็น**

เมื่อมี Approved Asset:

> **Use the approved asset. Do not redesign it.**

เมื่อไม่มี Asset:

> **Use placeholder and mark TODO.**

เมื่อจำเป็นต้องสร้าง Asset ใหม่:

> **Follow the Asset Bible and request approval before replacing the placeholder.**
