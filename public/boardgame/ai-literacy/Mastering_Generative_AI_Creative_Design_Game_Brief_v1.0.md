# Game Brief
# Mastering Generative AI Creative Design
## Solo Educational AI Board Game + Quiz + Score Attack

**Document Version:** 1.0  
**Status:** Game Design Foundation / Development Brief  
**Target Development:** AI-assisted development with Claude Code / ChatGPT Codex  
**Primary Data Source:** Training presentation and supporting lecture documents  
**Leaderboard:** Google Sheets via Google Apps Script API

---

# 1. Game Overview

## 1.1 Game Name

**Mastering Generative AI Creative Design**

## 1.2 Game Type

- Solo Educational Board Game
- Digital Board Game
- Quiz / Knowledge Challenge
- Resource Management
- Score Attack
- Randomized Replayable Gameplay

## 1.3 Core Concept

ผู้เล่นรับบทเป็นผู้เรียนด้าน Generative AI เลือกตัวละคร 1 จาก 12 ตัว แล้วเดินรอบกระดาน 32 ช่องด้วยการทอยลูกเต๋า

ระหว่างการเล่น ผู้เล่นจะพบ:

- AI Property
- Quiz
- Event
- Reward
- Penalty
- Challenge
- Resource Management
- Property Development

ผู้เล่นต้องตอบคำถามจาก **เอกสารประกอบการบรรยายของหลักสูตร** เพื่อสะสม **Creativity Point** และบริหารทรัพยากรต่าง ๆ เพื่อทำคะแนน Final Score ให้สูงที่สุด

เมื่อจบเกม คะแนนจะถูกส่งไปยัง **Google Sheet Leaderboard**

> เป้าหมายหลัก: เรียนรู้ Generative AI ผ่านการเล่น และแข่งขันทำคะแนนกับผู้เล่นคนอื่นผ่าน Leaderboard

---

# 2. Design Principles

1. **Solo First** — เล่นคนเดียวต่อหนึ่งเกม
2. **Learning First** — เนื้อหาคำถามต้องมาจากเอกสารการบรรยาย
3. **Score Attack** — เป้าหมายคือทำคะแนนให้สูงที่สุด
4. **Resource Management** — ผู้เล่นต้องบริหารทรัพยากร
5. **Decision Making** — การซื้อ/พัฒนา/ใช้ Power ต้องมีผลต่อคะแนน
6. **Replayability** — คำถามและ Event ต้องสุ่ม
7. **Fair Leaderboard** — คะแนนต้องคำนวณอย่างเป็นระบบและตรวจสอบได้
8. **Data Driven** — Content แยกออกจาก Game Engine

---

# 3. Target Users

## Primary

- นักเรียนระดับประถมศึกษา
- ผู้เข้าอบรมหลักสูตร Mastering Generative AI Creative Design
- ผู้เรียนที่เริ่มต้นเรียนรู้ Generative AI

## Experience Goal

เกมต้อง:

- เข้าใจง่าย
- สีสันสดใส
- มี Character และ Robot ที่เป็นมิตร
- อ่านภาษาไทยได้ชัดเจน
- เล่นได้โดยไม่ต้องมีผู้เล่นคนอื่น
- เล่นหนึ่งรอบได้ในเวลาที่กำหนด
- ให้ความรู้สึกเหมือนเกม ไม่ใช่แบบทดสอบออนไลน์ธรรมดา

---

# 4. Core Gameplay Loop

```text
Start Game
    ↓
Select Character
    ↓
Initialize Resources
    ↓
Roll Dice
    ↓
Move Player
    ↓
Resolve Tile
    ↓
Quiz / Property / Event / Challenge
    ↓
Answer / Decision
    ↓
Update Resources
    ↓
Update Score
    ↓
Check End Condition
    ↓
Next Round
    ↓
Final Score
    ↓
Submit Leaderboard
```

---

# 5. Game Setup

## 5.1 Player

- ผู้เล่น 1 คน
- เลือก Character 1 ตัวจาก 12 ตัว

## 5.2 Starting State

ค่าเริ่มต้นต้องกำหนดไว้ใน `game-config.json`

ตัวอย่าง Prototype:

```text
AI Coin: 50
Creativity Point: 0
Creative Energy: 3
Generative Power: 0
Property Owned: 0
Round: 0
```

หมายเหตุ: ตัวเลขเริ่มต้นสามารถปรับ Balance ได้โดยไม่แก้ Game Engine

---

# 6. Characters

มีตัวเดินเกม 12 ตัว:

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

## Character Rules

- ใช้เป็น Player Avatar
- Character ไม่มีความสามารถพิเศษแตกต่างกันใน Version 1.0
- ทุก Character ต้องมีโอกาสทำคะแนนเท่ากัน
- ความแตกต่างเป็นด้าน Visual / Identity เท่านั้น
- รองรับการเพิ่ม Ability ในอนาคต แต่ไม่รวมใน MVP

---

# 7. Board

## 7.1 Board Size

- 32 ช่อง
- รูปแบบ Board Game รอบกระดาน
- มีช่องมุมพิเศษ
- ผู้เล่นเดินตามทิศทางที่กำหนด

## 7.2 Board Categories

### AI for Work

8 ช่อง

เน้นการประยุกต์ AI ในการทำงาน

### AI for Creativity

8 ช่อง

เน้นการใช้ Generative AI เพื่อสร้างสรรค์ผลงาน

### AI Special

9 ช่อง

ตัวอย่าง:

- AI Assistant
- AI Agent
- AI Work
- Bonus
- Challenge
- Special Event

### Corner / Special Spaces

4 ช่อง

ประกอบด้วย:

- START
- เข้าห้องน้ำ
- พัก 1 รอบ
- เข้าใจ AI ดี รับเงิน 300 บาท

## 7.3 Board Count Constraint

โครงสร้างต้องรวมทั้งหมด **32 ช่องพอดี**

ห้ามเพิ่มหรือลดจำนวนช่องโดยไม่อัปเดต `board.json`

---

# 8. Dice System

## 8.1 Standard Dice

- ใช้ลูกเต๋า 1 ลูก
- ผลลัพธ์ 1–6
- Animation ก่อนแสดงผล
- มีเสียง/visual feedback ที่เหมาะสม

## 8.2 Movement

```text
Current Position + Dice Result
→ Next Position
```

เมื่อเดินครบกระดานให้วนกลับที่ START

## 8.3 Passing START

เมื่อเดินผ่าน START ให้รับ Reward ตาม Game Configuration

ค่าเริ่มต้น:

```text
+500 AI Coin
```

---

# 9. AI Property System

มี Property Card 10 ใบ

## 9.1 Properties

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

## 9.2 Property Values

| Property | ค่าเช่า | ค่าพัฒนา | ค่า AI Power |
|---|---:|---:|---:|
| AI ค้นหาข้อมูล | 50 | 100 | 200 |
| AI เขียนอีเมล | 60 | 120 | 240 |
| AI สรุปเนื้อหา | 70 | 140 | 280 |
| AI วิเคราะห์ข้อมูล | 80 | 160 | 320 |
| AI วางแผนงาน | 100 | 200 | 400 |
| AI สร้างภาพ | 120 | 240 | 480 |
| AI สร้างสไลด์ | 120 | 240 | 480 |
| AI สร้างคอนเทนต์ | 150 | 300 | 600 |
| AI สร้างวิดีโอ | 180 | 360 | 720 |
| AI สร้างสรรค์ไอเดีย | 200 | 400 | 800 |

## 9.3 Property Ownership

เมื่อผู้เล่นตกช่อง Property ที่ยังไม่มีเจ้าของ:

```text
Show Property Card
    ↓
Buy?
 ┌───┴───┐
Yes     No
 ↓       ↓
Pay     Continue
 ↓
Own Property
```

## 9.4 Property Upgrade

Property สามารถพัฒนาได้เมื่อผู้เล่นมีทรัพยากรเพียงพอ

Upgrade:

```text
Property Level 1
      ↓
Pay Development Cost
      ↓
Property Level 2
      ↓
AI Power Value
```

---

# 10. Resource System

เกมมีทรัพยากร 4 ประเภท

## 10.1 AI Coin

หน้าที่:

- ซื้อ Property
- จ่ายค่าใช้จ่าย
- รับ Reward
- ใช้ใน Event

AI Coin **ไม่ใช่ Final Score โดยตรง**

---

## 10.2 Creativity Point

เป็น Learning Score หลัก

ได้รับจาก:

- ตอบ Quiz ถูก
- Challenge
- Bonus
- Property Achievement

ตัวอย่าง:

```text
Easy: +10
Medium: +20
Hard: +30
Challenge: +50
```

---

## 10.3 Creative Energy

เป็น Action Resource

เริ่มต้น:

```text
3 Energy
```

สามารถใช้เพื่อ:

- ขอคำใบ้
- Reroll Dice
- Retry
- ใช้ AI Assistant

ค่าใช้จ่ายต้องกำหนดใน `game-config.json`

---

## 10.4 Generative Power

เป็น Special Resource

ใช้เพื่อ:

- เพิ่มคะแนน
- ปลดล็อก Challenge
- เพิ่ม Reward
- เปิด Special Action

ตัวอย่าง:

```text
Use 1 Generative Power
→ Double next Quiz Score
```

---

# 11. Quiz System

## 11.1 Core Rule

คำถามต้องอ้างอิงจาก:

**เอกสารประกอบการบรรยายหลักสูตร Mastering Generative AI Creative Design**

ห้ามสร้าง Question Bank จากความรู้ทั่วไปโดยไม่มีแหล่งอ้างอิงในระบบ

## 11.2 Question Structure

แต่ละคำถามควรมี:

```json
{
  "id": "Q001",
  "category": "AI_FOR_WORK",
  "subcategory": "AI_SEARCH",
  "difficulty": "EASY",
  "question": "...",
  "choices": [
    "...",
    "...",
    "...",
    "..."
  ],
  "correctAnswer": 1,
  "explanation": "...",
  "score": 10,
  "source": "Slide 12"
}
```

## 11.3 Question Categories

- AI for Work
- AI for Creativity
- AI Assistant
- AI Agent
- AI Work
- Prompt / Generative AI Fundamentals
- Creative Design
- Challenge

## 11.4 Difficulty

### Easy

10 คะแนน

### Medium

20 คะแนน

### Hard

30 คะแนน

### Challenge

50 คะแนน

---

# 12. Contextual Question Selection

คำถามต้องสัมพันธ์กับช่องที่ผู้เล่นตก

ตัวอย่าง:

```text
Player lands on:
AI สร้างภาพ
       ↓
Category:
AI_FOR_CREATIVITY
       ↓
Subcategory:
IMAGE_GENERATION
       ↓
Random Question
```

ห้ามสุ่มคำถามจากทุกหมวดโดยไม่สนใจ Tile Context ใน Version 1.0

---

# 13. Quiz Flow

```text
Player lands on Quiz Tile
        ↓
Question appears
        ↓
Player selects answer
        ↓
Lock answer
        ↓
Validate
   ┌────┴────┐
Correct    Incorrect
   ↓           ↓
Reward       Penalty
   ↓           ↓
Show Explanation
        ↓
Continue
```

## Correct Answer

แสดง:

- Correct
- คะแนนที่ได้รับ
- Explanation

## Incorrect Answer

แสดง:

- Incorrect
- คะแนนที่ได้รับ/เสีย
- Explanation
- Correct Answer

---

# 14. Event System

Event ต้องทำให้เกมมีความหลากหลายและ Replayability

ตัวอย่าง Event:

## เข้าใจ AI ดี

```text
Reward:
+300 AI Coin
```

## พัก 1 รอบ

```text
Skip next turn
```

## AI Challenge

```text
Hard Question
Correct:
+50 Creativity Point

Incorrect:
-20 AI Coin
```

## Creative Bonus

```text
+1 Creative Energy
```

## AI Power Boost

```text
+1 Generative Power
```

Event ทั้งหมดต้องอยู่ใน `events.json`

---

# 15. Game Rounds

Version 1.0 ใช้ Fixed Round

ค่าเริ่มต้น:

```text
15 Rounds
```

หนึ่ง Round =

```text
Roll
→ Move
→ Resolve Tile
→ Complete Action
```

เมื่อครบ 15 รอบ:

```text
Game Over
→ Final Score
```

จำนวนรอบต้องแก้ได้จาก `game-config.json`

---

# 16. Final Score

Final Score ต้องแยกออกจาก AI Coin

สูตร Prototype:

```text
Final Score =
Creativity Point
+ Property Score
+ AI Power Bonus
+ Challenge Bonus
+ AI Coin Bonus
- Penalty
```

## ตัวอย่าง

```text
Creativity Point: 420
Property Score: 180
AI Power Bonus: 100
Challenge Bonus: 50
AI Coin Bonus: 30
Penalty: -20

Final Score = 760
```

## AI Coin Conversion

ต้องมี Conversion Rule ใน Config

ตัวอย่าง:

```text
Every 10 AI Coin = 1 Score
```

ห้าม Hard-code ค่าใน UI หรือ Game Logic

---

# 17. Property Score

Property Score ควรคำนวณจาก:

```text
Base Property Value
+
Development Bonus
+
AI Power Bonus
```

ตัวเลขจริงต้องกำหนดใน `game-config.json`

---

# 18. Leaderboard

## 18.1 Objective

Leaderboard เป็น Global Scoreboard สำหรับผู้เล่นหลายคนที่เล่นเกมคนละรอบ

## 18.2 Required Fields

```text
Player Name
Final Score
Character
Game Duration
Correct Answers
Total Questions
AI Coin
Creativity Point
Property Count
Generative Power
Game Version
Timestamp
```

## 18.3 Ranking

เรียงจาก:

```text
Final Score DESC
```

ถ้าคะแนนเท่ากัน:

1. เวลาที่ใช้ต่ำกว่า
2. Correct Answer สูงกว่า
3. Timestamp ก่อน

---

# 19. Google Sheet Architecture

เกมไม่ควรเขียน Google Sheet โดยตรง

ใช้:

```text
Game Client
    ↓
Google Apps Script Web API
    ↓
Validation
    ↓
Google Sheet
    ↓
Leaderboard
```

## 19.1 Submit Endpoint

ตัวอย่าง:

```text
POST /submit-score
```

Payload:

```json
{
  "playerName": "Player 01",
  "characterId": "creative_master",
  "score": 760,
  "duration": 512,
  "correctAnswers": 12,
  "totalQuestions": 15,
  "aiCoin": 300,
  "creativityPoint": 420,
  "propertyCount": 3,
  "generativePower": 1,
  "gameVersion": "1.0.0"
}
```

## 19.2 Security

MVP ต้องมีอย่างน้อย:

- Input validation
- Numeric range validation
- Game Version validation
- Required field validation
- Timestamp generated server-side
- Reject malformed payload
- ไม่รับ Final Score จาก Client เป็นค่าที่เชื่อถือได้เพียงอย่างเดียวใน Production

---

# 20. Anti-Cheat Strategy

## MVP

ใช้ Client-side validation + server-side validation ขั้นพื้นฐาน

## Recommended

Server ควรตรวจสอบ:

- คะแนนอยู่ในช่วงที่เป็นไปได้
- จำนวนคำถามสมเหตุสมผล
- จำนวน Correct Answer ไม่เกิน Total Questions
- Character ID ถูกต้อง
- Game Version ถูกต้อง
- Duration ไม่ผิดปกติ
- Resource values ไม่ติดลบโดยผิดกฎ

## Future

สามารถเพิ่ม:

- Game Session ID
- Question Result Log
- Signed Score Payload
- Server-side Score Reconstruction

---

# 21. Data Architecture

Game Content ต้องแยกจาก Game Engine

โครงสร้างแนะนำ:

```text
/game
  /assets
    /characters
    /board
    /cards
    /icons
    /audio

  /data
    game-config.json
    board.json
    characters.json
    properties.json
    questions.json
    events.json

  /src
    /game
    /ui
    /systems
    /api
    /utils

  /docs
    GAME_BRIEF.md
    DATA_SCHEMA.md
    API_SPEC.md
```

---

# 22. Data Files

## game-config.json

เก็บ:

- Starting AI Coin
- Starting Energy
- Starting Power
- Round Count
- Dice Rules
- Score Rules
- Conversion Rules

## characters.json

เก็บ:

- Character ID
- Name
- Asset Path
- Display Name

## board.json

เก็บ:

- Tile ID
- Position
- Category
- Action
- Linked Property
- Linked Question Category

## properties.json

เก็บ:

- Property ID
- Name
- Color
- Rent
- Development Cost
- AI Power
- Description

## questions.json

เก็บ:

- Question ID
- Category
- Difficulty
- Question
- Choices
- Correct Answer
- Explanation
- Score
- Source

## events.json

เก็บ:

- Event ID
- Name
- Type
- Description
- Effect
- Conditions

---

# 23. Suggested JSON Model

## Character

```json
{
  "id": "ai_explorer",
  "name": "AI Explorer",
  "asset": "/assets/characters/01-ai-explorer.png"
}
```

## Property

```json
{
  "id": "ai_image",
  "name": "AI สร้างภาพ",
  "category": "AI_FOR_CREATIVITY",
  "rent": 120,
  "developmentCost": 240,
  "aiPower": 480,
  "description": "เปลี่ยนคำอธิบายและจินตนาการให้เป็นภาพสร้างสรรค์"
}
```

---

# 24. UI Screens

เกมควรมีอย่างน้อย:

## Screen 1 — Start

- Logo / Game Title
- Start Game
- Leaderboard
- How to Play

## Screen 2 — Player Setup

- Enter Player Name
- Select Character
- Confirm

## Screen 3 — Main Board

แสดง:

- Board
- Player
- Dice
- AI Coin
- Creativity Point
- Creative Energy
- Generative Power
- Round Counter

## Screen 4 — Quiz

- Question
- 4 Choices
- Timer (ถ้าเปิดใช้)
- Submit

## Screen 5 — Result

- Correct / Incorrect
- Score
- Explanation
- Resource Changes

## Screen 6 — Property

- Property Image
- Name
- Rent
- Development Cost
- AI Power
- Buy / Cancel
- Upgrade

## Screen 7 — Event

- Event Animation
- Event Description
- Reward / Penalty

## Screen 8 — Game Over

แสดง:

- Final Score
- Correct Answers
- Property Owned
- AI Coin
- Creativity Point
- Character
- Game Duration

## Screen 9 — Leaderboard

- Top Scores
- Player Rank
- Current Score
- Character
- Date

---

# 25. Visual Direction

## Overall Style

**Cute 3D Cartoon / Pixar-inspired quality**

ไม่ใช้ภาพถ่ายจริง

## Color Palette

ใช้สีสดใส:

- Pink
- Sky Blue
- Green
- Yellow
- Purple
- Orange

## Background

- Light Sky Blue
- Clean
- Playful
- Science Theme
- Technology Theme

## Visual Elements

- AI Robot
- AI Coin
- Stars
- Sparkles
- 3D Icons
- Computer
- Keyboard
- Tablet
- Lightbulb
- Technology Patterns

## Character

- Chibi proportions
- Head slightly larger
- Short body
- Big round eyes
- Friendly smile
- Colorful clothing

---

# 26. Audio Direction

MVP:

- Dice Roll
- Button Click
- Correct Answer
- Incorrect Answer
- Reward
- Penalty
- Property Purchase
- Game Start
- Game End

ไม่จำเป็นต้องมี Background Music ใน MVP

---

# 27. Game Feedback

ทุก Action สำคัญต้องมี Visual Feedback

ตัวอย่าง:

```text
+20 Creativity Point
+300 AI Coin
-20 AI Coin
+1 Energy
+1 Generative Power
Property Purchased
Property Upgraded
Correct!
Try Again!
```

Feedback ต้องอ่านง่ายและไม่บัง Board มากเกินไป

---

# 28. Accessibility / Usability

- ภาษาไทยเป็นหลัก
- Font ต้องอ่านง่าย
- ปุ่มใหญ่
- สีต้องแยกหมวดหมู่ชัด
- ไม่ใช้สีเป็นข้อมูลเพียงอย่างเดียว
- มี Icon ประกอบ
- มี Confirm ก่อนการใช้ Resource สำคัญ
- มี How to Play
- มี Tutorial แบบสั้นก่อนเกมแรก

---

# 29. Tutorial

ก่อนเกมจริงควรมี Tutorial 3–5 ขั้นตอน:

```text
1. เลือก Character
2. กดทอยลูกเต๋า
3. เดินตามจำนวนช่อง
4. ตอบคำถาม / ทำ Event
5. สะสมคะแนนให้มากที่สุด
```

สามารถ Skip Tutorial ได้หลังจากเล่นครั้งแรก

---

# 30. MVP Scope

Version 1.0 ต้องมี:

### Core

- [x] Solo Player
- [x] Character Selection
- [x] 32-Tile Board
- [x] Dice
- [x] Player Movement
- [x] Quiz
- [x] Property
- [x] Event
- [x] Resource System
- [x] 15-Round Game
- [x] Final Score
- [x] Leaderboard

### Content

- [x] 12 Characters
- [x] 10 Properties
- [x] Question Bank
- [x] Event Bank
- [x] Board Data

### Backend

- [x] Google Apps Script
- [x] Google Sheet
- [x] Submit Score
- [x] Leaderboard Query

---

# 31. Out of Scope for MVP

ไม่ทำใน Version 1.0:

- Multiplayer Real-time
- Online Matchmaking
- Character Abilities
- Inventory Complex System
- User Account System
- Login
- Chat
- AI-generated Questions During Gameplay
- AI-generated Score
- Complex Economy
- Full 3D Game Engine

---

# 32. Replayability

แต่ละเกมควรมีความแตกต่างจาก:

- Question Randomization
- Event Randomization
- Property Availability
- Dice Results
- Player Decisions

ไม่ควรทำให้ทุกเกมมี Sequence เดิม

---

# 33. Game State

ตัวอย่าง:

```json
{
  "playerName": "Player 01",
  "characterId": "creative_master",
  "position": 7,
  "round": 6,
  "aiCoin": 180,
  "creativityPoint": 120,
  "creativeEnergy": 2,
  "generativePower": 1,
  "properties": [
    "ai_image",
    "ai_content"
  ],
  "correctAnswers": 5,
  "totalQuestions": 6
}
```

Game State ต้องสามารถ Save / Restore ได้ในอนาคต

MVP อาจใช้ LocalStorage

---

# 34. Error Handling

ระบบต้องรองรับ:

- Google Sheet API ไม่ตอบสนอง
- Internet หลุด
- Submit Score ล้มเหลว
- Question Data โหลดไม่ได้
- Asset โหลดไม่ได้
- Invalid Game State

## Leaderboard Failure

ถ้าส่งคะแนนไม่สำเร็จ:

```text
Game Finished
    ↓
Save Result Locally
    ↓
Show:
"ไม่สามารถส่งคะแนนได้ในขณะนี้"
    ↓
Retry Submit
```

ห้ามทำให้ผู้เล่นเสียคะแนนเพราะ Network Error

---

# 35. Development Architecture

แนะนำแบ่งระบบเป็น Modules:

```text
Game Core
├── Game Manager
├── Turn Manager
├── Dice System
├── Movement System
├── Tile System
├── Quiz System
├── Property System
├── Event System
├── Resource System
├── Score System
├── Save System
└── Leaderboard API

UI
├── Main Menu
├── Character Select
├── Board UI
├── Quiz UI
├── Property UI
├── Event UI
├── Result UI
└── Leaderboard UI

Data
├── Config
├── Board
├── Characters
├── Properties
├── Questions
└── Events
```

---

# 36. Development Priority

## Phase 1 — Core Prototype

1. Board
2. Player
3. Dice
4. Movement
5. Tile
6. Round System

## Phase 2 — Learning System

7. Quiz
8. Question Bank
9. Score
10. Explanation

## Phase 3 — Economy

11. AI Coin
12. Property
13. Development
14. Energy
15. Generative Power

## Phase 4 — Events

16. Event System
17. Challenge
18. Bonus
19. Penalty

## Phase 5 — Presentation

20. Character Assets
21. Board Art
22. Card Art
23. Animation
24. Sound

## Phase 6 — Leaderboard

25. Google Apps Script
26. Google Sheet
27. Submit Score
28. Ranking
29. Error Recovery

## Phase 7 — QA / Balance

30. Test Game Flow
31. Test Score
32. Test Question Randomization
33. Test Leaderboard
34. Balance Economy
35. Playtest

---

# 37. AI Coding Rules for Claude Code / ChatGPT Codex

AI Coding Agent ต้องปฏิบัติตาม:

1. อ่าน `GAME_BRIEF.md` ก่อนเริ่มแก้ไข Code
2. ห้ามเปลี่ยน Game Rule โดยไม่ได้รับอนุมัติ
3. ห้าม Hard-code Question
4. ห้าม Hard-code Character
5. ห้าม Hard-code Property Values
6. ห้าม Hard-code Score Rules
7. Content ต้องอยู่ใน Data Files
8. Game Logic ต้องแยกจาก UI
9. API Logic ต้องแยกจาก Game Logic
10. ทุก Module ต้องสามารถทดสอบแยกได้
11. ห้ามลบระบบเดิมเพื่อแก้ปัญหาโดยไม่ตรวจ Dependency
12. ก่อนแก้ Architecture ต้องสรุปผลกระทบ
13. ใช้ Type-safe Data Model ถ้า Framework รองรับ
14. Error ต้องมี User Feedback
15. ห้ามทำให้ Leaderboard Score สามารถแก้จาก UI โดยตรง

---

# 38. Definition of Done — MVP

MVP ถือว่าเสร็จเมื่อ:

- ผู้เล่นเปิดเกมได้
- เลือก Character ได้
- เริ่มเกมได้
- ทอยลูกเต๋าได้
- ตัวละครเดินได้
- ระบบ Tile ทำงานถูกต้อง
- Quiz ทำงาน
- Question Randomization ทำงาน
- Answer Validation ทำงาน
- Creativity Point ทำงาน
- AI Coin ทำงาน
- Creative Energy ทำงาน
- Generative Power ทำงาน
- Property ทำงาน
- Event ทำงาน
- ครบ 15 รอบแล้วจบเกม
- Final Score ถูกคำนวณ
- ผลลัพธ์ถูกส่ง Google Sheet
- Leaderboard แสดงอันดับ
- Network Error ไม่ทำให้ผลเกมสูญหาย
- Game สามารถเล่นซ้ำได้
- ไม่มี Critical Bug ใน Core Gameplay

---

# 39. Future Version

หลัง MVP สามารถเพิ่ม:

## Version 1.1

- Daily Challenge
- Question Difficulty Balancing
- Achievement
- Player Statistics

## Version 1.2

- Character Ability
- Special Power
- More Property Cards
- More Event Cards

## Version 2.0

- Multiplayer
- Classroom Mode
- Instructor Dashboard
- Tournament Mode
- Team Mode
- Advanced Analytics

---

# 40. Final Game Vision

เกมนี้ควรทำให้ผู้เล่นรู้สึกว่า:

> **“ฉันไม่ได้กำลังทำข้อสอบ แต่กำลังเล่นเกม และความรู้เรื่อง Generative AI คือสิ่งที่ช่วยให้ฉันชนะ”**

Core Experience:

```text
PLAY
  ↓
LEARN
  ↓
DECIDE
  ↓
CREATE
  ↓
SCORE
  ↓
COMPETE
```

และระบบทั้งหมดต้องสนับสนุนเป้าหมายเดียว:

> **เรียนรู้ Generative AI → ใช้ความรู้ตัดสินใจในเกม → สะสม Creativity Point → ทำ Final Score ให้สูงที่สุด → แข่งขันบน Leaderboard**
