/**
 * Mastering Generative AI Creative Design - Standalone Application Bundle
 * Exact 32 Waypoints on Design Board Game.png with Full-Screen Viewport Fit,
 * Dynamic Choice Shuffling, 12 Character Roulette & Dice Roll, and Google Sheets sync.
 */

(function() {
  'use strict';

  // --- 1. SOUND SYSTEM (Web Audio API) ---
  class SoundSystem {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem("genai_game_muted") === "true";
      this.volume = 0.6;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.muted = !this.muted;
      localStorage.setItem("genai_game_muted", this.muted ? "true" : "false");
      return this.muted;
    }

    isMuted() {
      return this.muted;
    }

    playClick() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(this.volume * 0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }

    playDiceRoll() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          if (!this.ctx) return;
          try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(300 + Math.random() * 400, this.ctx.currentTime);
            gain.gain.setValueAtTime(this.volume * 0.25, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.04);
          } catch (e) {}
        }, i * 70);
      }
    }

    playRouletteTick() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(550, this.ctx.currentTime);
        gain.gain.setValueAtTime(this.volume * 0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.03);
      } catch (e) {}
    }

    playCoin() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc1.type = "sine";
        osc2.type = "sine";
        osc1.frequency.setValueAtTime(987.77, now);
        osc2.frequency.setValueAtTime(1318.51, now + 0.08);
        gain.gain.setValueAtTime(this.volume * 0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.08);
        osc2.start(now + 0.08);
        osc2.stop(now + 0.35);
      } catch (e) {}
    }

    playCorrect() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.09);
          gain.gain.setValueAtTime(this.volume * 0.35, now + idx * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.09);
          osc.stop(now + idx * 0.09 + 0.25);
        });
      } catch (e) {}
    }

    playWrong() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(150, now + 0.3);
        gain.gain.setValueAtTime(this.volume * 0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } catch (e) {}
    }

    playUpgrade() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.4);
        gain.gain.setValueAtTime(this.volume * 0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.45);
      } catch (e) {}
    }

    playVictory() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const playChord = (chord, time, dur) => {
          chord.forEach(freq => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, time);
            gain.gain.setValueAtTime(this.volume * 0.25, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + dur);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(time);
            osc.stop(time + dur);
          });
        };
        playChord([523.25, 659.25, 783.99], now, 0.2);
        playChord([587.33, 739.99, 880.00], now + 0.25, 0.2);
        playChord([1046.50, 1318.51, 1567.98], now + 0.5, 0.8);
      } catch (e) {}
    }
  }

  // --- 2. LEADERBOARD API CLIENT ---
  class LeaderboardAPI {
    constructor(config) {
      this.config = config || {};
      this.spreadsheetId = "1In60iHFC52qQn4ExXHWRTvxuk2bipHfVnNdEHx7hKTA";
      this.scriptUrl = localStorage.getItem("genai_custom_script_url") || this.config.defaultScriptUrl || "https://script.google.com/macros/s/AKfycbxGhaaGwZYMsTOxGdQ73r_k8rXICxhz8I5RI1Q1yGk2d9XWI3KhELYlIwtMuURGgYdTXA/exec";
      this.storageKey = "genai_boardgame_local_leaderboard";
      this.queueKey = "genai_boardgame_pending_submissions";
    }

    setScriptUrl(url) {
      this.scriptUrl = (url || "").trim();
      if (this.scriptUrl) {
        localStorage.setItem("genai_custom_script_url", this.scriptUrl);
      } else {
        localStorage.removeItem("genai_custom_script_url");
      }
    }

    getScriptUrl() {
      return this.scriptUrl;
    }

    async submitScore(scorePayload) {
      this.saveScoreLocally(scorePayload);
      if (this.scriptUrl) {
        try {
          const response = await fetch(this.scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(scorePayload)
          });
          if (response.ok) {
            const resJson = await response.json();
            this.flushQueue();
            return { success: true, source: "google_sheet", data: resJson };
          }
        } catch (err) {
          console.warn("Google Apps Script submit offline, saved locally", err);
          this.queueSubmission(scorePayload);
          return { success: true, source: "local_storage", warning: "บันทึกคะแนนในเครื่องเรียบร้อยแล้ว (จะส่งขึ้น Google Sheets เมื่อออนไลน์)" };
        }
      }
      return { success: true, source: "local_storage", message: "บันทึกผลการเล่นเรียบร้อยแล้ว" };
    }

    async getLeaderboard(limit = 50) {
      if (this.scriptUrl) {
        try {
          const url = `${this.scriptUrl}?limit=${limit}&_t=${Date.now()}`;
          const response = await fetch(url);
          if (response.ok) {
            const res = await response.json();
            if (res.status === "success" && Array.isArray(res.data)) {
              return res.data;
            }
          }
        } catch (err) {
          console.warn("Failed to fetch Google Sheet leaderboard, using local records", err);
        }
      }
      return this.getLocalLeaderboard(limit);
    }

    saveScoreLocally(payload) {
      const scores = this.getLocalLeaderboard(100);
      const newEntry = {
        rank: 0,
        timestamp: new Date().toISOString(),
        playerName: payload.playerName || "ผู้เล่น AI",
        score: payload.score || 0,
        characterId: payload.characterId || "char-01",
        characterName: payload.characterName || "AI Explorer",
        duration: payload.duration || 0,
        correctAnswers: payload.correctAnswers || 0,
        totalQuestions: payload.totalQuestions || 0,
        aiCoin: payload.aiCoin || 0,
        creativityPoint: payload.creativityPoint || 0,
        propertyCount: payload.propertyCount || 0,
        generativePower: payload.generativePower || 0,
        gameVersion: payload.gameVersion || "1.0.0"
      };
      scores.push(newEntry);
      scores.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (a.duration !== b.duration) return a.duration - b.duration;
        return b.correctAnswers - a.correctAnswers;
      });
      const ranked = scores.slice(0, 50).map((item, idx) => ({ ...item, rank: idx + 1 }));
      localStorage.setItem(this.storageKey, JSON.stringify(ranked));
    }

    getLocalLeaderboard(limit = 50) {
      try {
        const raw = localStorage.getItem(this.storageKey);
        if (!raw) {
          const sample = [
            { rank: 1, playerName: "Praew", score: 850, characterName: "AI Explorer", duration: 420, correctAnswers: 14, totalQuestions: 15, timestamp: new Date().toISOString() },
            { rank: 2, playerName: "Nut", score: 760, characterName: "Prompt Master", duration: 480, correctAnswers: 12, totalQuestions: 14, timestamp: new Date().toISOString() },
            { rank: 3, playerName: "Bank", score: 690, characterName: "Creative Master", duration: 510, correctAnswers: 11, totalQuestions: 13, timestamp: new Date().toISOString() }
          ];
          localStorage.setItem(this.storageKey, JSON.stringify(sample));
          return sample.slice(0, limit);
        }
        const data = JSON.parse(raw);
        return Array.isArray(data) ? data.slice(0, limit) : [];
      } catch {
        return [];
      }
    }

    queueSubmission(payload) {
      try {
        const raw = localStorage.getItem(this.queueKey);
        const queue = raw ? JSON.parse(raw) : [];
        queue.push(payload);
        localStorage.setItem(this.queueKey, JSON.stringify(queue));
      } catch (e) {}
    }

    async flushQueue() {
      try {
        const raw = localStorage.getItem(this.queueKey);
        if (!raw || !this.scriptUrl) return;
        const queue = JSON.parse(raw);
        if (!Array.isArray(queue) || queue.length === 0) return;
        while (queue.length > 0) {
          const item = queue.shift();
          await fetch(this.scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(item)
          });
        }
        localStorage.removeItem(this.queueKey);
      } catch (e) {}
    }
  }

  // --- 3. RESOURCE MANAGER ---
  class ResourceManager {
    constructor(initialConfig = {}) {
      this.aiCoin = initialConfig.aiCoin ?? 50;
      this.creativityPoint = initialConfig.creativityPoint ?? 0;
      this.creativeEnergy = initialConfig.creativeEnergy ?? 3;
      this.generativePower = initialConfig.generativePower ?? 1;
      this.listeners = [];
    }

    onChange(callback) {
      this.listeners.push(callback);
    }

    notify() {
      const state = this.getState();
      this.listeners.forEach(cb => cb(state));
    }

    getState() {
      return {
        aiCoin: this.aiCoin,
        creativityPoint: this.creativityPoint,
        creativeEnergy: this.creativeEnergy,
        generativePower: this.generativePower
      };
    }

    addCoin(amount) {
      this.aiCoin += Math.max(0, amount);
      this.notify();
      return this.aiCoin;
    }

    spendCoin(amount) {
      if (this.aiCoin >= amount) {
        this.aiCoin -= amount;
        this.notify();
        return true;
      }
      return false;
    }

    addCreativityPoint(amount) {
      this.creativityPoint += Math.max(0, amount);
      this.notify();
      return this.creativityPoint;
    }

    spendCreativityPoint(amount) {
      this.creativityPoint = Math.max(0, this.creativityPoint - Math.max(0, amount));
      this.notify();
      return this.creativityPoint;
    }

    addEnergy(amount) {
      this.creativeEnergy = Math.min(3, this.creativeEnergy + amount);
      this.notify();
      return this.creativeEnergy;
    }

    spendEnergy(amount = 1) {
      if (this.creativeEnergy >= amount) {
        this.creativeEnergy -= amount;
        this.notify();
        return true;
      }
      return false;
    }

    addPower(amount = 1) {
      this.generativePower += amount;
      this.notify();
      return this.generativePower;
    }

    spendPower(amount = 1) {
      if (this.generativePower >= amount) {
        this.generativePower -= amount;
        this.notify();
        return true;
      }
      return false;
    }

    reset(config = {}) {
      this.aiCoin = config.aiCoin ?? 50;
      this.creativityPoint = config.creativityPoint ?? 0;
      this.creativeEnergy = config.creativeEnergy ?? 3;
      this.generativePower = config.generativePower ?? 1;
      this.notify();
    }
  }

  // --- 4. PLAYER MODEL ---
  class Player {
    constructor(name = "ผู้เล่น AI", character = null) {
      this.name = name;
      this.character = character || {
        id: "char-01",
        name: "AI Explorer",
        thaiName: "นักสำรวจ AI",
        avatarAsset: "assets/characters/char-01.png"
      };
      this.position = 0;
      this.round = 1;
      this.skipTurn = false;
      this.ownedProperties = new Map();
      this.quizHistory = []; // Learning Analytics log
      this.stats = {
        correctAnswers: 0,
        totalQuestions: 0,
        challengesWon: 0,
        startTime: Date.now(),
        endTime: null
      };
    }

    moveTo(tileIndex) {
      this.position = tileIndex % 32;
      return this.position;
    }

    buyProperty(propertyId) {
      if (!this.ownedProperties.has(propertyId)) {
        this.ownedProperties.set(propertyId, { level: 1, buyRound: this.round });
        return true;
      }
      return false;
    }

    upgradeProperty(propertyId) {
      if (this.ownedProperties.has(propertyId)) {
        const prop = this.ownedProperties.get(propertyId);
        if (prop.level < 2) {
          prop.level = 2;
          return true;
        }
      }
      return false;
    }

    hasProperty(propertyId) {
      return this.ownedProperties.has(propertyId);
    }

    getPropertyLevel(propertyId) {
      const prop = this.ownedProperties.get(propertyId);
      return prop ? prop.level : 0;
    }

    getPropertyCount() {
      return this.ownedProperties.size;
    }

    recordQuiz(isCorrect, isChallenge = false, logEntry = null) {
      this.stats.totalQuestions++;
      if (isCorrect) {
        this.stats.correctAnswers++;
        if (isChallenge) {
          this.stats.challengesWon++;
        }
      }
      if (logEntry) {
        this.quizHistory.push(logEntry);
      }
    }

    getDurationSeconds() {
      const end = this.stats.endTime || Date.now();
      return Math.max(1, Math.round((end - this.stats.startTime) / 1000));
    }

    finishGame() {
      this.stats.endTime = Date.now();
    }
  }

  // --- 5. DICE SYSTEM ---
  class DiceSystem {
    constructor(soundSystem) {
      this.sound = soundSystem;
      this.isRolling = false;
      this.lastResult = 1;
    }

    async roll(diceElement) {
      if (this.isRolling) return this.lastResult;
      this.isRolling = true;
      if (this.sound) this.sound.playDiceRoll();

      const finalValue = Math.floor(Math.random() * 6) + 1;
      this.lastResult = finalValue;

      if (diceElement) {
        diceElement.classList.add("rolling");
        const rotations = [
          { x: 0, y: 0 },
          { x: 0, y: 180 },
          { x: 0, y: -90 },
          { x: 0, y: 90 },
          { x: -90, y: 0 },
          { x: 90, y: 0 }
        ];
        const targetRot = rotations[finalValue - 1] || { x: 0, y: 0 };
        const extraX = 720 + targetRot.x;
        const extraY = 720 + targetRot.y;

        diceElement.style.transform = `rotateX(${extraX}deg) rotateY(${extraY}deg)`;
        await new Promise(resolve => setTimeout(resolve, 800));
        diceElement.classList.remove("rolling");
      }

      this.isRolling = false;
      return finalValue;
    }

    getLastResult() {
      return this.lastResult;
    }
  }

  // --- 6. SCORE SYSTEM ---
  class ScoreSystem {
    constructor(config = {}, propertiesData = []) {
      this.config = config;
      this.properties = propertiesData;
      this.coinRatio = this.config.scoreCalculation?.coinToScoreRatio || 10;
      this.powerMultiplier = this.config.scoreCalculation?.powerBonusMultiplier || 20;
    }

    calculateScore(player, resources) {
      const creativityPoint = resources.creativityPoint || 0;
      let propertyScore = 0;
      if (player.ownedProperties && player.ownedProperties.size > 0) {
        player.ownedProperties.forEach((propState, propId) => {
          const propDef = this.properties.find(p => p.id === propId);
          const base = propDef ? (propDef.rent || 50) : 50;
          const level = propState.level || 1;
          propertyScore += level === 2 ? Math.round(base * 2.2) : base;
        });
      }
      const powerBonus = (resources.generativePower || 0) * this.powerMultiplier;
      const challengeBonus = (player.stats?.challengesWon || 0) * 30;
      const coinBonus = Math.floor((resources.aiCoin || 0) / this.coinRatio);
      const totalScore = creativityPoint + propertyScore + powerBonus + challengeBonus + coinBonus;

      return {
        totalScore: Math.max(0, totalScore),
        breakdown: {
          creativityPoint,
          propertyScore,
          powerBonus,
          challengeBonus,
          coinBonus
        }
      };
    }
  }

  // --- 7. QUIZ SYSTEM (With Random A, B, C, D Choice Shuffling) ---
  class QuizSystem {
    constructor(questions = [], soundSystem = null) {
      this.questions = questions;
      this.sound = soundSystem;
      this.usedQuestionIds = new Set();
      this.currentQuestion = null;
      this.isAnswerLocked = false;
      this.powerActive = false;
    }

    shuffleQuestionChoices(rawQuestion) {
      const originalChoices = [...rawQuestion.choices];
      const correctText = originalChoices[rawQuestion.correctAnswer];
      
      const shuffled = [...originalChoices];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      const newCorrectIndex = shuffled.indexOf(correctText);
      return {
        ...rawQuestion,
        choices: shuffled,
        correctAnswer: newCorrectIndex
      };
    }

    pickQuestionForTile(tile) {
      const tileSub = tile.subcategory;
      const tileCat = tile.category;
      let candidates = this.questions.filter(q => !this.usedQuestionIds.has(q.id));
      if (candidates.length === 0) {
        this.usedQuestionIds.clear();
        candidates = [...this.questions];
      }

      let matched = candidates.filter(q => q.subcategory === tileSub);
      if (matched.length === 0) {
        matched = candidates.filter(q => q.category === tileCat);
      }
      if (matched.length === 0) {
        matched = candidates;
      }

      const selectedRaw = matched[Math.floor(Math.random() * matched.length)] || this.questions[0];
      this.usedQuestionIds.add(selectedRaw.id);
      
      this.currentQuestion = this.shuffleQuestionChoices(selectedRaw);
      this.isAnswerLocked = false;
      this.powerActive = false;
      return this.currentQuestion;
    }

    getUsedQuestionCount() {
      return this.usedQuestionIds.size;
    }

    getTotalQuestionCount() {
      return this.questions.length;
    }

    getRemainingQuestions() {
      return this.questions.filter(q => !this.usedQuestionIds.has(q.id));
    }

    pickNextBossQuestion() {
      const remaining = this.getRemainingQuestions();
      if (remaining.length === 0) return null;
      const selectedRaw = remaining[0];
      this.usedQuestionIds.add(selectedRaw.id);
      
      this.currentQuestion = this.shuffleQuestionChoices(selectedRaw);
      this.isAnswerLocked = false;
      this.powerActive = false;
      return this.currentQuestion;
    }

    getHintEliminations() {
      if (!this.currentQuestion) return [];
      this.hintUsed = true;
      const correctIdx = this.currentQuestion.correctAnswer;
      const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
      for (let i = wrongIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
      }
      return wrongIndices.slice(0, 2);
    }

    activatePowerMultiplier() {
      this.powerActive = true;
    }

    deactivatePowerMultiplier() {
      this.powerActive = false;
    }

    isPowerActive() {
      return this.powerActive;
    }

    evaluateAnswer(selectedIndex) {
      if (!this.currentQuestion || this.isAnswerLocked) return null;
      this.isAnswerLocked = true;
      const isCorrect = selectedIndex === this.currentQuestion.correctAnswer;
      const baseScore = this.currentQuestion.score || 10;
      let earnedScore = 0;
      if (this.powerActive) {
        earnedScore = isCorrect ? (baseScore * 2) : -(baseScore * 2);
      } else {
        earnedScore = isCorrect ? baseScore : 0;
      }
      if (this.sound) {
        if (isCorrect) this.sound.playCorrect();
        else this.sound.playWrong();
      }
      
      const selectedText = this.currentQuestion.choices[selectedIndex] || "";
      const correctText = this.currentQuestion.choices[this.currentQuestion.correctAnswer] || "";

      return {
        isCorrect,
        selectedChoice: selectedIndex,
        correctChoice: this.currentQuestion.correctAnswer,
        selectedAnswerText: selectedText,
        correctAnswerText: correctText,
        score: earnedScore,
        isPowerBoosted: this.powerActive && isCorrect,
        isPowerPenalty: this.powerActive && !isCorrect,
        usedHint: !!this.hintUsed,
        usedPower: !!this.powerActive,
        questionId: this.currentQuestion.id,
        question: this.currentQuestion.question,
        level: this.currentQuestion.level,
        levelName: this.currentQuestion.levelName,
        category: this.currentQuestion.category,
        subcategory: this.currentQuestion.subcategory,
        explanation: this.currentQuestion.explanation,
        source: this.currentQuestion.source,
        difficulty: this.currentQuestion.difficulty
      };
    }
  }

  // --- 8. PROPERTY SYSTEM ---
  class PropertySystem {
    constructor(propertiesData = [], soundSystem = null) {
      this.properties = propertiesData;
      this.sound = soundSystem;
    }

    getPropertyById(id) {
      return this.properties.find(p => p.id === id) || null;
    }

    buy(player, resourceManager, propertyId) {
      const prop = this.getPropertyById(propertyId);
      if (!prop) return { success: false, message: "ไม่พบข้อมูลการ์ด" };
      if (player.hasProperty(propertyId)) return { success: false, message: "คุณเป็นเจ้าของ Property นี้แล้ว" };
      if (resourceManager.spendCoin(prop.developmentCost)) {
        player.buyProperty(propertyId);
        if (this.sound) this.sound.playCoin();
        return { success: true, property: prop, message: `ซื้อ ${prop.name} สำเร็จ!` };
      }
      return { success: false, message: "AI Coin ไม่เพียงพอ" };
    }

    upgrade(player, resourceManager, propertyId) {
      const prop = this.getPropertyById(propertyId);
      if (!prop) return { success: false, message: "ไม่พบข้อมูลการ์ด" };
      if (player.getPropertyLevel(propertyId) >= 2) return { success: false, message: "Property นี้อัปเกรดเป็นระดับสูงสุดแล้ว" };
      if (resourceManager.spendCoin(prop.aiPower)) {
        player.upgradeProperty(propertyId);
        if (this.sound) this.sound.playUpgrade();
        return { success: true, property: prop, newLevel: 2, message: `อัปเกรด ${prop.name} สู่ AI Power Level 2 สำเร็จ!` };
      }
      return { success: false, message: "AI Coin ไม่เพียงพอสำหรับการอัปเกรด" };
    }
  }

  // --- 9. EVENT SYSTEM ---
  class EventSystem {
    constructor(eventsData = [], soundSystem = null) {
      this.events = eventsData;
      this.sound = soundSystem;
    }

    pickRandomEvent() {
      if (!this.events || this.events.length === 0) return null;
      const idx = Math.floor(Math.random() * this.events.length);
      return this.events[idx];
    }

    resolveEvent(event, player, resourceManager) {
      if (!event) return null;
      if (event.reward) {
        if (event.reward.aiCoin) resourceManager.addCoin(event.reward.aiCoin);
        if (event.reward.creativityPoint) resourceManager.addCreativityPoint(event.reward.creativityPoint);
        if (event.reward.creativeEnergy) resourceManager.addEnergy(event.reward.creativeEnergy);
        if (event.reward.generativePower) resourceManager.addPower(event.reward.generativePower);
      }
      if (event.penalty && event.penalty.aiCoin) {
        resourceManager.spendCoin(Math.min(resourceManager.aiCoin, event.penalty.aiCoin));
      }
      if (this.sound) {
        if (event.type === "REWARD" || event.type === "BONUS" || event.type === "POWER") this.sound.playCoin();
        else if (event.type === "PENALTY") this.sound.playWrong();
      }
      return { event, effectText: event.effectText || event.description };
    }

    resolveCorner(tile, player, resourceManager) {
      switch (tile.type) {
        case "START":
          resourceManager.addCoin(500);
          if (this.sound) this.sound.playCoin();
          return { title: "จุด START", message: "ยินดีต้อนรับสู่จุดเริ่มต้น! รับ +500 AI Coin", badge: "+500 AI Coin" };
        case "RESTROOM":
          resourceManager.addEnergy(1);
          if (this.sound) this.sound.playClick();
          return { title: "เข้าห้องน้ำ (จุดพักผ่อน)", message: "ผ่อนคลายความเหนื่อยล้า ฟื้นฟูพลังงาน +1 Creative Energy", badge: "+1 Energy" };
        case "SKIP_TURN":
          player.skipTurn = true;
          if (this.sound) this.sound.playClick();
          return { title: "พัก 1 รอบ", message: "หยุดพักสมองและวางแผนกลยุทธ์ (ข้ามเทิร์นในรอบถัดไป)", badge: "Skip Next Turn" };
        case "REWARD_CORNER":
          resourceManager.addCoin(300);
          resourceManager.addCreativityPoint(10);
          if (this.sound) this.sound.playCoin();
          return { title: "เข้าใจ AI ดีเยี่ยม", message: "คุณเข้าใจหลักการ Generative AI อย่างลึกซึ้ง! รับ +300 AI Coin และ +10 Creativity Point", badge: "+300 Coin / +10 Point" };
        default:
          return null;
      }
    }
  }

  // --- 10. DIRECT BOARD ENGINE ON Design Board Game.png ---
  class BoardEngine {
    constructor(boardData = [], propertiesData = []) {
      this.boardData = boardData;
      this.properties = propertiesData;
      this.container = null;
      this.pawnElement = null;
    }

    render(boardContainer, characterAvatar = "assets/characters/char-01.png") {
      this.container = boardContainer;
      if (!this.container) return;
      this.container.innerHTML = "";

      this.boardData.forEach((tile, idx) => {
        const marker = document.createElement("div");
        marker.className = "board-waypoint-marker";
        marker.id = `waypoint-${idx}`;
        marker.dataset.index = idx;
        marker.style.left = `${tile.x}%`;
        marker.style.top = `${tile.y}%`;
        marker.title = tile.name;

        const star = document.createElement("span");
        star.className = "waypoint-owner-star hidden";
        star.id = `waypoint-star-${idx}`;
        marker.appendChild(star);

        this.container.appendChild(marker);
      });

      this.pawnElement = document.createElement("div");
      this.pawnElement.className = "board-player-pawn";
      this.pawnElement.id = "board-player-pawn";
      this.pawnElement.innerHTML = `
        <div class="pawn-avatar-circle">
          <img id="board-pawn-avatar-img" src="${characterAvatar}" alt="Pawn Avatar" />
        </div>
      `;
      this.container.appendChild(this.pawnElement);

      this.updatePawnPosition(0, false);
    }

    updatePawnPosition(tileIndex, animate = true) {
      if (!this.pawnElement) return;
      const tile = this.boardData[tileIndex];
      if (!tile) return;

      document.querySelectorAll(".board-waypoint-marker").forEach(m => m.classList.remove("active-tile"));
      const currentMarker = document.getElementById(`waypoint-${tileIndex}`);
      if (currentMarker) currentMarker.classList.add("active-tile");

      this.pawnElement.style.left = `${tile.x}%`;
      this.pawnElement.style.top = `${tile.y}%`;

      if (animate) {
        this.pawnElement.classList.remove("pawn-hop-anim");
        void this.pawnElement.offsetWidth;
        this.pawnElement.classList.add("pawn-hop-anim");
      }
    }

    async animateMovement(fromIndex, steps, soundSystem = null) {
      let current = fromIndex;
      for (let s = 1; s <= steps; s++) {
        current = (current + 1) % 32;
        this.updatePawnPosition(current, true);
        if (soundSystem) soundSystem.playClick();
        await new Promise(res => setTimeout(res, 220));
      }
      return current;
    }

    updatePropertyOwnership(player) {
      this.boardData.forEach((tile, idx) => {
        if (tile.type === "PROPERTY" && tile.propertyId) {
          const star = document.getElementById(`waypoint-star-${idx}`);
          if (star) {
            if (player.hasProperty(tile.propertyId)) {
              const level = player.getPropertyLevel(tile.propertyId);
              star.textContent = level === 2 ? "🌟" : "⭐";
              star.classList.remove("hidden");
            } else {
              star.classList.add("hidden");
            }
          }
        }
      });
    }

    getTile(index) {
      return this.boardData[index] || null;
    }
  }

  // --- 11. UI MANAGER ---
  class UIManager {
    constructor(soundSystem) {
      this.sound = soundSystem;
    }

    showScreen(screenId) {
      document.querySelectorAll(".game-screen").forEach(sc => sc.classList.remove("active"));
      const target = document.getElementById(screenId);
      if (target) target.classList.add("active");
    }

    showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("active");
        modal.style.display = "flex";
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
        modal.style.zIndex = "99999";
        if (this.sound) this.sound.playClick();
      }
    }

    closeModal(modalId) {
      const target = modalId ? document.getElementById(modalId) : document.querySelector(".game-modal.active");
      if (target) {
        target.classList.remove("active");
        target.style.display = "";
        target.style.visibility = "";
        target.style.opacity = "";
      }
    }

    closeAllModals() {
      document.querySelectorAll(".game-modal").forEach(modal => {
        modal.classList.remove("active");
        modal.style.display = "";
        modal.style.visibility = "";
        modal.style.opacity = "";
      });
    }

    showToast(message, type = "info", duration = 3000) {
      const container = document.getElementById("toast-container");
      if (!container) return;
      const toast = document.createElement("div");
      toast.className = `game-toast toast-${type}`;
      toast.innerHTML = `<div class="toast-content">${message}</div>`;
      container.appendChild(toast);
      setTimeout(() => toast.classList.add("toast-show"), 10);
      setTimeout(() => {
        toast.classList.remove("toast-show");
        setTimeout(() => toast.remove(), 300);
      }, duration);
    }

    updateHUD(resources, player, round, totalRounds) {
      const coinEl = document.getElementById("hud-coin-val");
      if (coinEl) coinEl.textContent = resources.aiCoin.toLocaleString();
      const pointEl = document.getElementById("hud-point-val");
      if (pointEl) pointEl.textContent = resources.creativityPoint.toLocaleString();
      const energyEl = document.getElementById("hud-energy-val");
      if (energyEl) energyEl.textContent = `${resources.creativeEnergy}/3`;
      const powerEl = document.getElementById("hud-power-val");
      if (powerEl) powerEl.textContent = resources.generativePower;
      const roundEl = document.getElementById("hud-round-val");
      if (roundEl) roundEl.textContent = `รอบ ${round} / ${totalRounds}`;
      
      const cardsEl = document.getElementById("hud-cards-val");
      if (cardsEl && player) {
        const answered = player.stats ? player.stats.totalQuestions : 0;
        cardsEl.textContent = `🃏 การ์ด: ${answered} / 15`;
      }
      
      const pNameEl = document.getElementById("hud-player-name");
      if (pNameEl && player) pNameEl.textContent = player.name;

      const pCharEl = document.getElementById("hud-character-name");
      if (pCharEl && player?.character) pCharEl.textContent = player.character.name;

      const pAvatarEl = document.getElementById("hud-avatar-img");
      if (pAvatarEl && player?.character) pAvatarEl.src = player.character.avatarAsset;
    }

    renderLeaderboard(data, highlightPlayerName = "") {
      const tbody = document.getElementById("leaderboard-body");
      if (!tbody) return;
      tbody.innerHTML = "";
      if (!data || data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-gray-500">ยังไม่มีข้อมูลคะแนน</td></tr>`;
        return;
      }
      data.forEach((entry, idx) => {
        const tr = document.createElement("tr");
        if (highlightPlayerName && entry.playerName === highlightPlayerName) {
          tr.className = "current-player-row";
        }
        const rankBadge = idx === 0 ? "🥇 1" : idx === 1 ? "🥈 2" : idx === 2 ? "🥉 3" : `${idx + 1}`;
        tr.innerHTML = `
          <td class="rank-cell">${rankBadge}</td>
          <td class="player-cell"><strong>${entry.playerName}</strong></td>
          <td class="char-cell"><strong>${entry.characterName || "AI Explorer"}</strong></td>
          <td class="score-cell highlight-score">${Number(entry.score).toLocaleString()}</td>
          <td class="correct-cell">${entry.correctAnswers}/${entry.totalQuestions}</td>
          <td class="date-cell">${new Date(entry.timestamp || Date.now()).toLocaleDateString("th-TH")}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  }

  // --- 12. MAIN GAME CONTROLLER ---
  class GameManager {
    constructor() {
      this.sound = new SoundSystem();
      this.ui = new UIManager(this.sound);
      this.dice = new DiceSystem(this.sound);
      this.leaderboardApi = null;

      this.player = null;
      this.resources = null;
      this.boardEngine = null;
      this.scoreSystem = null;
      this.quizSystem = null;
      this.propertySystem = null;
      this.eventSystem = null;

      this.currentRound = 1;
      this.totalRounds = 15;
      this.isTurnProcessing = false;
      this.pendingPropertyTile = null;

      this.isBossRushActive = false;
      this.bossRushTotal = 0;
      this.bossRushCurrentIndex = 0;
      this.bossTimerInterval = null;

      this.tempPlayerName = "ผู้เล่น AI";
      this.selectedCharacter = null;
      this.isRouletteSpinning = false;
    }

    async init() {
      let data = window.GENAI_GAME_DATA;
      if (!data) {
        try {
          const [configRes, boardRes, charsRes, propsRes, questsRes, eventsRes] = await Promise.all([
            fetch("data/game-config.json").then(r => r.json()),
            fetch("data/board.json").then(r => r.json()),
            fetch("data/characters.json").then(r => r.json()),
            fetch("data/properties.json").then(r => r.json()),
            fetch("data/questions.json").then(r => r.json()),
            fetch("data/events.json").then(r => r.json())
          ]);
          data = {
            config: configRes,
            board: boardRes,
            characters: charsRes,
            properties: propsRes,
            questions: questsRes,
            events: eventsRes
          };
        } catch (e) {
          data = window.GENAI_GAME_DATA || {};
        }
      }

      this.config = data.config || {};
      this.boardData = data.board || [];
      this.characters = data.characters || [];
      this.properties = data.properties || [];
      this.questions = data.questions || [];
      this.events = data.events || [];
      this.totalRounds = this.config.totalRounds || 15;

      this.selectedCharacter = this.characters[0] || {
        id: "char-01",
        name: "AI Explorer",
        thaiName: "นักสำรวจ AI",
        avatarAsset: "assets/characters/char-01.png"
      };

      this.leaderboardApi = new LeaderboardAPI(this.config.api || {});
      this.scoreSystem = new ScoreSystem(this.config, this.properties);
      this.quizSystem = new QuizSystem(this.questions, this.sound);
      this.propertySystem = new PropertySystem(this.properties, this.sound);
      this.eventSystem = new EventSystem(this.events, this.sound);
      this.boardEngine = new BoardEngine(this.boardData, this.properties);

      this.setupEventListeners();
      this.ui.showScreen("screen-start");
    }

    setupEventListeners() {
      // Start Game Button -> Opens Player Name Modal
      document.getElementById("btn-start-game")?.addEventListener("click", () => {
        this.sound.playClick();
        this.ui.showModal("modal-name-prompt");
      });

      // Confirm Player Name -> Step 2: Open Character Roulette
      document.getElementById("btn-next-to-roulette")?.addEventListener("click", () => {
        const input = document.getElementById("player-name-modal-input");
        this.tempPlayerName = (input?.value || "").trim() || "ผู้เล่น AI";
        this.ui.closeModal("modal-name-prompt");
        this.openCharacterRouletteModal();
      });

      // Spin / Roll Character Roulette (1 to 12)
      document.getElementById("btn-spin-character")?.addEventListener("click", () => {
        this.spinCharacterRoulette();
      });

      // Launch Game with Final Name & Character
      document.getElementById("btn-start-with-character")?.addEventListener("click", () => {
        this.ui.closeModal("modal-character-roulette");
        this.startGameWithPlayerNameAndCharacter(this.tempPlayerName, this.selectedCharacter);
      });

      // View Leaderboard Button
      document.getElementById("btn-view-leaderboard")?.addEventListener("click", () => {
        this.sound.playClick();
        this.openLeaderboardScreen();
      });

      // How to Play Button
      document.getElementById("btn-how-to-play")?.addEventListener("click", () => {
        this.sound.playClick();
        this.ui.showModal("modal-how-to-play");
      });

      // Sound Toggles
      document.getElementById("btn-toggle-sound")?.addEventListener("click", (e) => {
        const isMuted = this.sound.toggleMute();
        const label = isMuted ? "🔇 เสียง: ปิด" : "🔊 เสียง: เปิด";
        document.querySelectorAll(".btn-sound-toggle").forEach(btn => btn.textContent = label);
        if (e.currentTarget) e.currentTarget.textContent = label;
      });

      document.getElementById("btn-board-sound")?.addEventListener("click", (e) => {
        const isMuted = this.sound.toggleMute();
        const label = isMuted ? "🔇 เสียง: ปิด" : "🔊 เสียง: เปิด";
        e.currentTarget.textContent = label;
      });

      // Modal Close Buttons
      document.querySelectorAll(".modal-close-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const modal = e.target.closest(".game-modal");
          if (modal) this.ui.closeModal(modal.id);
        });
      });

      // Back to Menu Buttons
      document.querySelectorAll(".btn-back-to-menu").forEach(btn => {
        btn.addEventListener("click", () => {
          this.sound.playClick();
          this.ui.showScreen("screen-start");
        });
      });

      // Roll Dice Button
      document.getElementById("btn-roll-dice")?.addEventListener("click", () => {
        this.handlePlayerRoll();
      });

      // Reroll with Energy
      document.getElementById("btn-reroll-dice")?.addEventListener("click", () => {
        if (this.resources.spendEnergy(1)) {
          this.ui.showToast("ใช้ 1 Energy ทอยลูกเต๋าใหม่!", "info");
          this.handlePlayerRoll();
        } else {
          this.ui.showToast("Creative Energy ไม่เพียงพอ (ต้องการ 1)", "warning");
        }
      });

      // Board Rules Button
      document.getElementById("btn-board-rules")?.addEventListener("click", () => {
        this.sound.playClick();
        this.ui.showModal("modal-how-to-play");
      });

      // Boss Rush & Quiz Actions
      document.getElementById("btn-start-boss-rush")?.addEventListener("click", () => {
        this.sound.playClick();
        document.getElementById("board-boss-takeover")?.classList.add("hidden");
        this.ui.closeModal("modal-boss-rush-intro");
        this.startBossRush();
      });

      document.getElementById("btn-board-start-boss")?.addEventListener("click", () => {
        this.sound.playClick();
        document.getElementById("board-boss-takeover")?.classList.add("hidden");
        this.ui.closeAllModals();
        this.startBossRush();
      });

      document.getElementById("btn-quiz-hint")?.addEventListener("click", () => {
        this.handleQuizHint();
      });

      document.getElementById("btn-quiz-power")?.addEventListener("click", () => {
        this.handleQuizPower();
      });

      document.getElementById("btn-quiz-next")?.addEventListener("click", () => {
        this.ui.closeModal("modal-quiz-result");
        if (this.isBossRushActive) {
          this.continueBossRush();
        } else if (this.pendingPropertyTile) {
          const propTile = this.pendingPropertyTile;
          this.pendingPropertyTile = null;
          this.showPropertyModal(propTile);
        } else {
          this.endTurn();
        }
      });

      // Property Modal Actions
      document.getElementById("btn-property-buy")?.addEventListener("click", () => {
        this.handlePropertyBuy();
      });

      document.getElementById("btn-property-upgrade")?.addEventListener("click", () => {
        this.handlePropertyUpgrade();
      });

      document.getElementById("btn-property-skip")?.addEventListener("click", () => {
        this.ui.closeModal("modal-property");
        this.endTurn();
      });

      // Event Modal Continue
      document.getElementById("btn-event-continue")?.addEventListener("click", () => {
        this.ui.closeModal("modal-event");
        this.endTurn();
      });

      // Game Over: Submit Score
      document.getElementById("btn-submit-score")?.addEventListener("click", () => {
        this.submitFinalScore();
      });

      // Game Over: Play Again
      document.getElementById("btn-play-again")?.addEventListener("click", () => {
        this.sound.playClick();
        this.ui.showModal("modal-name-prompt");
      });

      // Settings Modal
      document.getElementById("btn-settings")?.addEventListener("click", () => {
        const input = document.getElementById("setting-script-url");
        if (input) input.value = this.leaderboardApi.getScriptUrl();
        this.ui.showModal("modal-settings");
      });

      document.getElementById("btn-save-settings")?.addEventListener("click", () => {
        const input = document.getElementById("setting-script-url");
        if (input) {
          this.leaderboardApi.setScriptUrl(input.value);
          this.ui.showToast("บันทึกการตั้งค่าเรียบร้อย", "success");
        }
        this.ui.closeModal("modal-settings");
      });
    }

    openCharacterRouletteModal() {
      const initialChar = this.characters[Math.floor(Math.random() * this.characters.length)] || this.characters[0];
      this.selectedCharacter = initialChar;
      this.updateRouletteDisplay(initialChar);
      this.ui.showModal("modal-character-roulette");
    }

    updateRouletteDisplay(char) {
      const img = document.getElementById("roulette-img");
      const nameEl = document.getElementById("roulette-char-name");
      const thaiEl = document.getElementById("roulette-char-thai");
      const descEl = document.getElementById("roulette-char-desc");
      const startBtn = document.getElementById("btn-start-with-character");

      if (img) img.src = char.avatarAsset;
      if (nameEl) nameEl.textContent = char.name;
      if (thaiEl) thaiEl.textContent = char.thaiName;
      if (descEl) descEl.textContent = char.description || "";
      if (startBtn) startBtn.textContent = `🚀 เริ่มเล่นด้วย ${char.name} ➔`;
    }

    async spinCharacterRoulette() {
      if (this.isRouletteSpinning) return;
      this.isRouletteSpinning = true;

      const spinBtn = document.getElementById("btn-spin-character");
      const startBtn = document.getElementById("btn-start-with-character");
      const img = document.getElementById("roulette-img");

      if (spinBtn) spinBtn.disabled = true;
      if (startBtn) startBtn.disabled = true;
      if (img) img.classList.add("roulette-spinning-img");

      const totalSpins = 20 + Math.floor(Math.random() * 8);
      const targetIndex = Math.floor(Math.random() * this.characters.length);

      for (let i = 0; i < totalSpins; i++) {
        const charIdx = (i) % this.characters.length;
        this.updateRouletteDisplay(this.characters[charIdx]);
        this.sound.playRouletteTick();
        const delay = 50 + (i > totalSpins - 8 ? (i - (totalSpins - 8)) * 45 : 0);
        await new Promise(r => setTimeout(r, delay));
      }

      this.selectedCharacter = this.characters[targetIndex];
      this.updateRouletteDisplay(this.selectedCharacter);

      if (img) img.classList.remove("roulette-spinning-img");
      this.sound.playUpgrade();
      this.ui.showToast(`🎉 คุณได้ตัวละคร: ${this.selectedCharacter.name} (${this.selectedCharacter.thaiName})!`, "success", 3500);

      if (spinBtn) spinBtn.disabled = false;
      if (startBtn) {
        startBtn.disabled = false;
        startBtn.textContent = `🚀 เริ่มเล่นด้วย ${this.selectedCharacter.name} ➔`;
      }
      this.isRouletteSpinning = false;
    }

    startGameWithPlayerNameAndCharacter(playerName, character) {
      this.player = new Player(playerName, character);
      this.resources = new ResourceManager(this.config.startingResources);
      this.currentRound = 1;
      this.isBossRushActive = false;
      this.bossRushTotal = 0;
      this.bossRushCurrentIndex = 0;
      if (this.quizSystem) this.quizSystem.usedQuestionIds.clear();

      const rollBtn = document.getElementById("btn-roll-dice");
      if (rollBtn) {
        rollBtn.disabled = false;
        rollBtn.className = "btn-3d btn-primary";
        rollBtn.innerHTML = "🎲 ทอยลูกเต๋า";
        rollBtn.onclick = () => this.handlePlayerRoll();
      }

      this.resources.onChange((res) => {
        this.ui.updateHUD(res, this.player, this.currentRound, this.totalRounds);
      });

      const boardContainer = document.getElementById("game-board-grid");
      this.boardEngine.render(boardContainer, character.avatarAsset);
      this.boardEngine.updatePropertyOwnership(this.player);

      this.ui.updateHUD(this.resources.getState(), this.player, this.currentRound, this.totalRounds);
      this.ui.showScreen("screen-board");
      this.sound.playClick();
      this.ui.showToast(`ยินดีต้อนรับ ${this.player.name}! สวมบทบาท ${character.name}`, "info");
    }

    async handlePlayerRoll() {
      if (this.isTurnProcessing) return;
      this.isTurnProcessing = true;
      this.setRollButtonsEnabled(false);

      if (this.player.skipTurn) {
        this.player.skipTurn = false;
        this.ui.showToast("คุณต้องพัก 1 รอบในเทิร์นนี้!", "warning");
        await new Promise(r => setTimeout(r, 1200));
        this.endTurn();
        return;
      }

      const diceEl = document.getElementById("board-dice-cube");
      const rollResult = await this.dice.roll(diceEl);
      this.ui.showToast(`ทอยได้แต้ม ${rollResult}!`, "info", 1500);

      const fromPos = this.player.position;
      const toPos = await this.boardEngine.animateMovement(fromPos, rollResult, this.sound);
      
      const passedStart = (fromPos + rollResult) >= 32;
      if (passedStart && toPos !== 16) {
        const startReward = this.config.passStartReward?.aiCoin || 500;
        this.resources.addCoin(startReward);
        this.sound.playCoin();
        this.ui.showToast(`เดินผ่านจุด START! รับ +${startReward} AI Coin`, "success");
      }

      this.player.moveTo(toPos);
      await new Promise(r => setTimeout(r, 300));
      await this.resolveLandedTile(toPos);
    }

    async resolveLandedTile(tileIndex) {
      const tile = this.boardEngine.getTile(tileIndex);
      if (!tile) {
        this.endTurn();
        return;
      }

      // Handle Corner tiles
      if (tile.type === "START" || tile.type === "RESTROOM" || tile.type === "SKIP_TURN" || tile.type === "REWARD_CORNER") {
        const result = this.eventSystem.resolveCorner(tile, this.player, this.resources);
        if (result) {
          this.showEventModal(result.title, result.message, result.badge);
        } else {
          this.endTurn();
        }
        return;
      }

      // If it's a Property tile, queue it for buying after answering the quiz!
      if (tile.type === "PROPERTY" && tile.propertyId) {
        this.pendingPropertyTile = tile;
      } else {
        this.pendingPropertyTile = null;
      }

      // ALWAYS present a Quiz question on all board tiles for earning points!
      this.showQuizModal(tile);
    }

    showPropertyModal(tile) {
      const prop = this.propertySystem.getPropertyById(tile.propertyId);
      if (!prop) {
        this.endTurn();
        return;
      }

      const isOwnedByMe = this.player.hasProperty(prop.id);
      const level = this.player.getPropertyLevel(prop.id);

      document.getElementById("property-modal-title").textContent = prop.name;
      document.getElementById("property-modal-desc").textContent = prop.description;
      document.getElementById("property-modal-img").src = prop.cardAsset;
      document.getElementById("property-cost-val").textContent = `${prop.developmentCost} AI Coin`;
      document.getElementById("property-rent-val").textContent = `${prop.rent} Pts`;
      document.getElementById("property-power-val").textContent = `${prop.aiPower} AI Power`;

      const buyBtn = document.getElementById("btn-property-buy");
      const upgradeBtn = document.getElementById("btn-property-upgrade");

      if (!isOwnedByMe) {
        buyBtn.classList.remove("hidden");
        upgradeBtn.classList.add("hidden");
        buyBtn.disabled = this.resources.aiCoin < prop.developmentCost;
        buyBtn.textContent = `ซื้อ (${prop.developmentCost} 🪙)`;
      } else if (level < 2) {
        buyBtn.classList.add("hidden");
        upgradeBtn.classList.remove("hidden");
        upgradeBtn.disabled = this.resources.aiCoin < prop.aiPower;
        upgradeBtn.textContent = `อัปเกรดเป็น Lv.2 (${prop.aiPower} 🪙)`;
      } else {
        buyBtn.classList.add("hidden");
        upgradeBtn.classList.add("hidden");
      }

      this.currentPendingPropertyTile = tile;
      this.ui.showModal("modal-property");
    }

    handlePropertyBuy() {
      if (!this.currentPendingPropertyTile) return;
      const propId = this.currentPendingPropertyTile.propertyId;
      const res = this.propertySystem.buy(this.player, this.resources, propId);
      if (res.success) {
        this.ui.showToast(res.message, "success");
        this.boardEngine.updatePropertyOwnership(this.player);
        this.ui.closeModal("modal-property");
        this.endTurn();
      } else {
        this.ui.showToast(res.message, "danger");
      }
    }

    handlePropertyUpgrade() {
      if (!this.currentPendingPropertyTile) return;
      const propId = this.currentPendingPropertyTile.propertyId;
      const res = this.propertySystem.upgrade(this.player, this.resources, propId);
      if (res.success) {
        this.ui.showToast(res.message, "success");
        this.boardEngine.updatePropertyOwnership(this.player);
        this.ui.closeModal("modal-property");
        this.endTurn();
      } else {
        this.ui.showToast(res.message, "danger");
      }
    }

    showQuizModal(tile) {
      const question = this.quizSystem.pickQuestionForTile(tile);
      const isHard = question.difficulty === "HARD" || question.level === "Final Boss";
      const isChallenge = tile.type === "CHALLENGE" || question.difficulty === "CHALLENGE" || isHard;

      const modalTitle = document.getElementById("quiz-modal-title");
      if (modalTitle) modalTitle.textContent = "🧠 คำถามประลองความรู้ AI";

      const bossBadge = document.getElementById("quiz-boss-progress");
      if (bossBadge) bossBadge.classList.add("hidden");

      const catBadge = document.getElementById("quiz-category-badge");
      if (catBadge) {
        const prefix = question.level ? `${question.level}: ` : "หมวด: ";
        catBadge.textContent = `${prefix}${question.category || tile.name}`;
      }
      
      const diffBadge = document.getElementById("quiz-diff-badge");
      if (diffBadge) {
        if (isHard) {
          diffBadge.textContent = `🔥 BOSS (+${question.score} Pts)`;
          diffBadge.className = "quiz-badge badge-diff-hard";
        } else if (question.difficulty === "MEDIUM") {
          diffBadge.textContent = `⚡ MEDIUM (+${question.score} Pts)`;
          diffBadge.className = "quiz-badge badge-diff-medium";
        } else {
          diffBadge.textContent = `⭐ EASY (+${question.score} Pts)`;
          diffBadge.className = "quiz-badge badge-diff-easy";
        }
      }

      this.stopBossTimer();
      const timerWrap = document.getElementById("quiz-boss-timer-wrap");
      if (timerWrap) timerWrap.classList.add("hidden");

      document.getElementById("quiz-question-text").textContent = question.question;

      const choicesContainer = document.getElementById("quiz-choices-container");
      choicesContainer.innerHTML = "";

      const choiceLabels = ["A", "B", "C", "D"];
      question.choices.forEach((choiceText, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-choice-btn";
        btn.id = `choice-btn-${idx}`;
        btn.innerHTML = `
          <span class="choice-letter">${choiceLabels[idx]}</span>
          <span class="choice-text">${choiceText}</span>
        `;
        btn.addEventListener("click", () => this.handleAnswerSelected(idx, isChallenge));
        choicesContainer.appendChild(btn);
      });

      const powerBtn = document.getElementById("btn-quiz-power");
      if (powerBtn) {
        powerBtn.classList.remove("active");
        const isBossLevel = question.level === "Final Boss" || question.difficulty === "HARD";
        const isPowerEligible = isBossLevel || this.resources.generativePower > 0 || Math.random() < 0.45;
        if (isPowerEligible) {
          powerBtn.disabled = false;
          powerBtn.innerHTML = "⚡ เสี่ยงดวง x2 (ถูก x2 / ผิด -x2)";
          powerBtn.title = "กดเปิดใช้งานก่อนเลือกคำตอบ: ตอบถูกได้คะแนน x2 แต่ถ้าตอบผิดจะถูกหักคะแนน x2!";
        } else {
          powerBtn.disabled = true;
          powerBtn.innerHTML = "⚡ คะแนน x2 (ต้องการ 1 Power)";
          powerBtn.title = "ต้องมี Generative Power อย่างน้อย 1 แต้ม";
        }
      }

      const hintBtn = document.getElementById("btn-quiz-hint");
      if (hintBtn) {
        hintBtn.disabled = this.resources.creativeEnergy < 1;
      }

      this.ui.updateHUD(this.resources.getState(), this.player, this.currentRound, this.totalRounds);
      this.ui.showModal("modal-quiz");
    }

    promptBossRushIntro(remainingCount) {
      this.isTurnProcessing = false;
      this.stopBossTimer();
      this.ui.closeAllModals();

      const countEl = document.getElementById("boss-remaining-count");
      if (countEl) countEl.textContent = remainingCount;

      // Set right sidebar action button to trigger Boss Rush
      const rollBtn = document.getElementById("btn-roll-dice");
      if (rollBtn) {
        rollBtn.disabled = false;
        rollBtn.className = "btn-3d btn-danger";
        rollBtn.innerHTML = "⚔️ ลุย Final Boss Rush ➔";
        rollBtn.onclick = () => {
          this.sound.playClick();
          document.getElementById("board-boss-takeover")?.classList.add("hidden");
          this.ui.closeAllModals();
          this.startBossRush();
        };
      }

      const rerollBtn = document.getElementById("btn-reroll-dice");
      if (rerollBtn) rerollBtn.disabled = true;

      // Show In-Board Center Takeover
      const takeover = document.getElementById("board-boss-takeover");
      if (takeover) takeover.classList.remove("hidden");

      // Prominently show the Boss Rush Modal right in the center immediately
      this.ui.showModal("modal-boss-rush-intro");
      setTimeout(() => {
        const m = document.getElementById("modal-boss-rush-intro");
        if (m) {
          m.classList.add("active");
          m.style.display = "flex";
          m.style.visibility = "visible";
          m.style.opacity = "1";
          m.style.zIndex = "99999";
        }
      }, 100);
    }

    startBossRush() {
      this.isBossRushActive = true;
      this.bossRushTotal = this.quizSystem.getRemainingQuestions().length;
      this.bossRushCurrentIndex = 0;
      const takeover = document.getElementById("board-boss-takeover");
      if (takeover) takeover.classList.add("hidden");
      this.ui.closeAllModals();
      this.ui.showToast("⚔️ เข้าสู่โหมด FINAL BOSS RUSH (จับเวลา 6 วิ)!", "danger", 3000);
      this.continueBossRush();
    }

    continueBossRush() {
      this.stopBossTimer();
      const question = this.quizSystem.pickNextBossQuestion();
      if (!question) {
        this.isBossRushActive = false;
        this.finishGame();
        return;
      }

      this.bossRushCurrentIndex++;
      this.ui.closeAllModals();
      setTimeout(() => {
        this.showBossRushQuestionModal(question, this.bossRushCurrentIndex, this.bossRushTotal);
      }, 150);
    }

    startBossTimer(durationMs = 6000) {
      this.stopBossTimer();
      const timerWrap = document.getElementById("quiz-boss-timer-wrap");
      if (timerWrap) timerWrap.classList.remove("hidden");
      const timerVal = document.getElementById("quiz-boss-timer-val");
      const timerBar = document.getElementById("quiz-boss-timer-bar");
      if (timerVal) {
        timerVal.textContent = (durationMs / 1000).toFixed(1) + "s";
        timerVal.classList.remove("critical");
      }
      if (timerBar) {
        timerBar.style.width = "100%";
      }

      const startTime = Date.now();
      this.bossTimerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remainingMs = Math.max(0, durationMs - elapsed);
        if (timerVal) {
          timerVal.textContent = (remainingMs / 1000).toFixed(1) + "s";
          if (remainingMs <= 2000) {
            timerVal.classList.add("critical");
          } else {
            timerVal.classList.remove("critical");
          }
        }
        if (timerBar) {
          timerBar.style.width = ((remainingMs / durationMs) * 100) + "%";
        }
        if (remainingMs <= 0) {
          this.stopBossTimer();
          this.handleBossTimeout();
        }
      }, 50);
    }

    stopBossTimer() {
      if (this.bossTimerInterval) {
        clearInterval(this.bossTimerInterval);
        this.bossTimerInterval = null;
      }
    }

    handleBossTimeout() {
      this.sound.playWrong?.();
      this.ui.showToast("⏱️ หมดเวลา 6 วินาที!", "danger", 2500);
      this.handleAnswerSelected(-1, true);
    }

    showBossRushQuestionModal(question, currentIdx, total) {
      const modalTitle = document.getElementById("quiz-modal-title");
      if (modalTitle) modalTitle.textContent = "👾 FINAL BOSS RUSH: AI OVERLOAD";

      const bossBadge = document.getElementById("quiz-boss-progress");
      if (bossBadge) {
        bossBadge.textContent = `⚔️ FINAL BOSS RUSH: ด่านที่ ${currentIdx} / ${total}`;
        bossBadge.classList.remove("hidden");
      }

      const catBadge = document.getElementById("quiz-category-badge");
      if (catBadge) {
        const prefix = question.level ? `${question.level}: ` : "";
        catBadge.textContent = `${prefix}${question.category}`;
      }

      const diffBadge = document.getElementById("quiz-diff-badge");
      if (diffBadge) {
        if (question.difficulty === "HARD" || question.level === "Final Boss") {
          diffBadge.textContent = `🔥 BOSS (+${question.score} Pts)`;
          diffBadge.className = "quiz-badge badge-diff-hard";
        } else if (question.difficulty === "MEDIUM") {
          diffBadge.textContent = `⚡ MEDIUM (+${question.score} Pts)`;
          diffBadge.className = "quiz-badge badge-diff-medium";
        } else {
          diffBadge.textContent = `⭐ EASY (+${question.score} Pts)`;
          diffBadge.className = "quiz-badge badge-diff-easy";
        }
      }

      document.getElementById("quiz-question-text").textContent = question.question;

      const choicesContainer = document.getElementById("quiz-choices-container");
      choicesContainer.innerHTML = "";

      const choiceLabels = ["A", "B", "C", "D"];
      question.choices.forEach((choiceText, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-choice-btn";
        btn.id = `choice-btn-${idx}`;
        btn.innerHTML = `
          <span class="choice-letter">${choiceLabels[idx]}</span>
          <span class="choice-text">${choiceText}</span>
        `;
        btn.addEventListener("click", () => this.handleAnswerSelected(idx, true));
        choicesContainer.appendChild(btn);
      });

      const powerBtn = document.getElementById("btn-quiz-power");
      if (powerBtn) {
        powerBtn.classList.remove("active");
        // Always allow Power toggle in Boss Rush Mode!
        powerBtn.disabled = false;
        powerBtn.innerHTML = "⚡ เสี่ยงดวง x2 (ถูก x2 / ผิด -x2)";
        powerBtn.title = "กดเปิดใช้งานก่อนเลือกคำตอบ: ตอบถูกได้คะแนน x2 แต่ถ้าตอบผิดจะถูกหักคะแนน x2!";
      }

      const hintBtn = document.getElementById("btn-quiz-hint");
      if (hintBtn) {
        hintBtn.disabled = this.resources.creativeEnergy < 1;
      }

      this.ui.updateHUD(this.resources.getState(), this.player, this.currentRound, this.totalRounds);
      this.ui.showModal("modal-quiz");

      // Start 6-Second Countdown Timer for Boss Rush
      this.startBossTimer(6000);
    }

    handleQuizHint() {
      if (this.resources.spendEnergy(1)) {
        const elims = this.quizSystem.getHintEliminations();
        elims.forEach(idx => {
          const btn = document.getElementById(`choice-btn-${idx}`);
          if (btn) {
            btn.classList.add("eliminated");
            btn.disabled = true;
          }
        });
        const hintBtn = document.getElementById("btn-quiz-hint");
        if (hintBtn) hintBtn.disabled = true;
        this.ui.showToast("ตัด 2 ช้อยส์ที่ไม่ถูกต้องออกแล้ว!", "info");
      } else {
        this.ui.showToast("Creative Energy ไม่เพียงพอ (ต้องการ 1)", "warning");
      }
    }

    handleQuizPower() {
      const powerBtn = document.getElementById("btn-quiz-power");
      if (this.quizSystem.isPowerActive()) {
        // Toggle OFF
        this.quizSystem.deactivatePowerMultiplier();
        if (powerBtn) powerBtn.classList.remove("active");
        this.ui.showToast("ยกเลิกโหมดเสี่ยงดวง x2 แล้ว", "info", 2000);
      } else {
        // Toggle ON
        this.quizSystem.activatePowerMultiplier();
        if (powerBtn) powerBtn.classList.add("active");
        this.ui.showToast("⚡ เปิดใช้งานโหมดเสี่ยง x2! (ตอบถูกได้ x2 / ตอบผิดโดนหัก x2)", "danger", 3500);
      }
    }

    handleAnswerSelected(selectedIndex, isChallenge) {
      this.stopBossTimer();
      const result = this.quizSystem.evaluateAnswer(selectedIndex);
      if (!result) return;

      const logEntry = {
        questionId: result.questionId,
        difficulty: result.difficulty,
        category: result.category,
        subcategory: result.subcategory,
        question: result.question,
        selectedAnswerText: result.selectedAnswerText,
        correctAnswerText: result.correctAnswerText,
        isCorrect: result.isCorrect,
        usedHint: result.usedHint,
        usedPower: result.usedPower,
        score: result.score
      };

      this.player.recordQuiz(result.isCorrect, isChallenge, logEntry);
      if (result.score > 0) {
        this.resources.addCreativityPoint(result.score);
        // Reward +1 Power when winning with Power Boost, or answering Boss/Challenge correctly!
        if (result.isPowerBoosted || result.level === "Final Boss" || result.difficulty === "HARD" || isChallenge) {
          this.resources.addPower(1);
          result.gainedPower = 1;
        }
      } else if (result.score < 0) {
        this.resources.spendCreativityPoint(Math.abs(result.score));
      }

      this.ui.updateHUD(this.resources.getState(), this.player, this.currentRound, this.totalRounds);

      document.querySelectorAll(".quiz-choice-btn").forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === result.correctChoice) {
          btn.classList.add("correct");
        } else if (idx === result.selectedChoice) {
          btn.classList.add("wrong");
        }
      });

      setTimeout(() => {
        this.ui.closeModal("modal-quiz");
        this.showQuizResultModal(result);
      }, 600);
    }

    showQuizResultModal(result) {
      const titleEl = document.getElementById("quiz-result-title");
      const scoreBadge = document.getElementById("quiz-result-score");
      const expEl = document.getElementById("quiz-result-explanation");
      const srcEl = document.getElementById("quiz-result-source");

      if (result.isCorrect) {
        titleEl.innerHTML = "🎉 ถูกต้องยอดเยี่ยม!";
        titleEl.className = "result-title correct-title";
        const powerBadgeText = result.gainedPower ? " ⚡ (+1 Power!)" : "";
        const boostText = result.isPowerBoosted ? " (x2 Boost)" : "";
        scoreBadge.textContent = `+${result.score} Creativity Point${boostText}${powerBadgeText}`;
        scoreBadge.className = "result-score-badge score-up";
      } else {
        if (result.isPowerPenalty) {
          titleEl.innerHTML = "💥 ตอบผิดพลาด! (โดนหักคะแนน x2)";
          titleEl.className = "result-title wrong-title";
          scoreBadge.textContent = `${result.score} Creativity Point (⚡ Power Penalty x2)`;
          scoreBadge.className = "result-score-badge score-down";
        } else {
          titleEl.innerHTML = "❌ ยังไม่ถูกต้อง";
          titleEl.className = "result-title wrong-title";
          scoreBadge.textContent = "+0 Creativity Point";
          scoreBadge.className = "result-score-badge score-zero";
        }
      }

      expEl.textContent = result.explanation || "ไม่มีคำอธิบายเพิ่มเติม";
      srcEl.textContent = result.source ? `อ้างอิง: ${result.source}` : "";
      this.ui.showModal("modal-quiz-result");
    }

    showEventModal(title, desc, effectText) {
      document.getElementById("event-modal-title").textContent = title;
      document.getElementById("event-modal-desc").textContent = desc;
      document.getElementById("event-modal-effect").textContent = effectText || "";
      this.ui.showModal("modal-event");
    }

    endTurn() {
      this.currentRound++;
      if (this.currentRound > this.totalRounds) {
        const remaining = this.quizSystem.getRemainingQuestions();
        if (remaining.length > 0) {
          this.promptBossRushIntro(remaining.length);
        } else {
          this.finishGame();
        }
      } else {
        this.isTurnProcessing = false;
        this.setRollButtonsEnabled(true);
        this.ui.updateHUD(this.resources.getState(), this.player, this.currentRound, this.totalRounds);
        this.ui.showToast(`เริ่มรอบที่ ${this.currentRound} / ${this.totalRounds}`, "info", 1800);
      }
    }

    setRollButtonsEnabled(enabled) {
      const rollBtn = document.getElementById("btn-roll-dice");
      const rerollBtn = document.getElementById("btn-reroll-dice");
      if (rollBtn) rollBtn.disabled = !enabled;
      if (rerollBtn) rerollBtn.disabled = !enabled || (this.resources?.creativeEnergy < 1);
    }

    finishGame() {
      this.stopBossTimer();
      this.player.finishGame();
      this.sound.playVictory();

      const scoreData = this.scoreSystem.calculateScore(this.player, this.resources.getState());
      
      document.getElementById("gameover-final-score").textContent = scoreData.totalScore.toLocaleString();
      document.getElementById("gameover-creativity-pts").textContent = `+${scoreData.breakdown.creativityPoint}`;
      document.getElementById("gameover-property-pts").textContent = `+${scoreData.breakdown.propertyScore}`;
      document.getElementById("gameover-power-pts").textContent = `+${scoreData.breakdown.powerBonus}`;
      document.getElementById("gameover-challenge-pts").textContent = `+${scoreData.breakdown.challengeBonus}`;
      document.getElementById("gameover-coin-pts").textContent = `+${scoreData.breakdown.coinBonus}`;

      document.getElementById("gameover-player-name").textContent = this.player.name;
      document.getElementById("gameover-char-tag").textContent = this.player.character.name;
      document.getElementById("gameover-avatar-img").src = this.player.character.avatarAsset;
      document.getElementById("gameover-correct-answers").textContent = `${this.player.stats.correctAnswers} / ${this.player.stats.totalQuestions}`;
      document.getElementById("gameover-properties-owned").textContent = this.player.getPropertyCount();
      document.getElementById("gameover-duration").textContent = `${this.player.getDurationSeconds()} วินาที`;

      // Render Owned Properties List
      const propListEl = document.getElementById("gameover-properties-list");
      if (propListEl) {
        if (this.player.ownedProperties && this.player.ownedProperties.size > 0) {
          const names = [];
          this.player.ownedProperties.forEach((propState, propId) => {
            const def = this.properties.find(p => p.id === propId);
            const name = def ? def.name : propId;
            const lvl = propState.level === 2 ? "Lv.2 ⭐⭐" : "Lv.1 ⭐";
            names.push(`${name} (${lvl})`);
          });
          propListEl.textContent = `📍 ถือครอง: ${names.join(", ")}`;
          propListEl.style.color = "#0369A1";
          propListEl.style.fontStyle = "normal";
        } else {
          propListEl.textContent = "(ไม่มีการถือครอง Property - ไม่ได้รับโบนัส Property Score)";
          propListEl.style.color = "#94A3B8";
          propListEl.style.fontStyle = "italic";
        }
      }

      this.latestScoreData = scoreData;
      this.ui.showScreen("screen-game-over");
    }

    async submitFinalScore() {
      const submitBtn = document.getElementById("btn-submit-score");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "กำลังบันทึกคะแนนลงระบบ...";
      }

      const payload = {
        playerName: this.player.name,
        characterId: this.player.character.id,
        characterName: this.player.character.name,
        score: this.latestScoreData.totalScore,
        duration: this.player.getDurationSeconds(),
        correctAnswers: this.player.stats.correctAnswers,
        totalQuestions: this.player.stats.totalQuestions,
        aiCoin: this.resources.aiCoin,
        creativityPoint: this.resources.creativityPoint,
        propertyCount: this.player.getPropertyCount(),
        generativePower: this.resources.generativePower,
        gameVersion: this.config.version || "1.0.0",
        quizAnswers: this.player.quizHistory || []
      };

      const res = await this.leaderboardApi.submitScore(payload);
      if (submitBtn) {
        submitBtn.textContent = "บันทึกคะแนนเรียบร้อยแล้ว ✓";
      }

      if (res.warning) {
        this.ui.showToast(res.warning, "warning", 4000);
      } else {
        this.ui.showToast(`บันทึกคะแนนของคุณ "${this.player.name}" (${this.player.character.name}) สำเร็จ!`, "success");
      }

      setTimeout(() => {
        this.openLeaderboardScreen();
      }, 1200);
    }

    async openLeaderboardScreen() {
      this.ui.showScreen("screen-leaderboard");
      const tbody = document.getElementById("leaderboard-body");
      if (tbody) tbody.innerHTML = `<tr><td colspan="6" class="text-center py-6 text-blue-600">กำลังโหลดอันดับคะแนน...</td></tr>`;
      const data = await this.leaderboardApi.getLeaderboard(50);
      this.ui.renderLeaderboard(data, this.player?.name);
    }
  }

  // --- BOOTSTRAP ---
  function initGame() {
    const game = new GameManager();
    game.init();
    window.gameInstance = game;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGame);
  } else {
    initGame();
  }
})();
