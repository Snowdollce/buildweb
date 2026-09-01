/**
 * Main Game Manager
 * Orchestrates the entire game lifecycle, turn loop (15 rounds),
 * board events, quizzes, properties, and leaderboard submissions.
 */

import { Player } from "./player.js";
import { ResourceManager } from "./resource-manager.js";
import { DiceSystem } from "./dice-system.js";
import { BoardEngine } from "./board-engine.js";
import { ScoreSystem } from "./score-system.js";
import { QuizSystem } from "./quiz-system.js";
import { PropertySystem } from "./property-system.js";
import { EventSystem } from "./event-system.js";
import { SoundSystem } from "../systems/sound-system.js";
import { LeaderboardAPI } from "../api/leaderboard-api.js";
import { UIManager } from "../ui/ui-manager.js";

export class GameManager {
  constructor() {
    this.config = null;
    this.boardData = [];
    this.characters = [];
    this.properties = [];
    this.questions = [];
    this.events = [];

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
    this.selectedChar = null;

    this.isBossRushActive = false;
    this.bossRushTotal = 0;
    this.bossRushCurrentIndex = 0;
    this.bossTimerInterval = null;
  }

  async init() {
    try {
      // Load all configuration & data files
      const [configRes, boardRes, charsRes, propsRes, questsRes, eventsRes] = await Promise.all([
        fetch("data/game-config.json").then(r => r.json()),
        fetch("data/board.json").then(r => r.json()),
        fetch("data/characters.json").then(r => r.json()),
        fetch("data/properties.json").then(r => r.json()),
        fetch("data/questions.json").then(r => r.json()),
        fetch("data/events.json").then(r => r.json())
      ]);

      this.config = configRes;
      this.boardData = boardRes;
      this.characters = charsRes;
      this.properties = propsRes;
      this.questions = questsRes;
      this.events = eventsRes;
      this.totalRounds = this.config.totalRounds || 15;

      // Initialize subsystems
      this.leaderboardApi = new LeaderboardAPI(this.config.api || {});
      this.scoreSystem = new ScoreSystem(this.config, this.properties);
      this.quizSystem = new QuizSystem(this.questions, this.sound);
      this.propertySystem = new PropertySystem(this.properties, this.sound);
      this.eventSystem = new EventSystem(this.events, this.sound);
      this.boardEngine = new BoardEngine(this.boardData, this.properties);

      this.setupEventListeners();
      this.ui.showScreen("screen-start");
      console.log("Mastering Generative AI Creative Design engine initialized successfully!");
    } catch (err) {
      console.error("Failed to initialize game data:", err);
      this.ui.showToast("เกิดข้อผิดพลาดในการโหลดข้อมูลเกม", "danger");
    }
  }

  setupEventListeners() {
    // Start Menu Buttons
    document.getElementById("btn-start-game")?.addEventListener("click", () => {
      this.sound.playClick();
      this.openPlayerSetup();
    });

    document.getElementById("btn-view-leaderboard")?.addEventListener("click", () => {
      this.sound.playClick();
      this.openLeaderboardScreen();
    });

    document.getElementById("btn-how-to-play")?.addEventListener("click", () => {
      this.sound.playClick();
      this.ui.showModal("modal-how-to-play");
    });

    // Sound toggle
    document.getElementById("btn-toggle-sound")?.addEventListener("click", (e) => {
      const isMuted = this.sound.toggleMute();
      e.currentTarget.textContent = isMuted ? "🔇 เสียง: ปิด" : "🔊 เสียง: เปิด";
    });

    // Modal Close buttons
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const modal = e.target.closest(".game-modal");
        if (modal) this.ui.closeModal(modal.id);
      });
    });

    // Player Setup Confirm
    document.getElementById("btn-confirm-player")?.addEventListener("click", () => {
      this.startGame();
    });

    // Back to Menu buttons
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

    // Reroll Dice with Energy
    document.getElementById("btn-reroll-dice")?.addEventListener("click", () => {
      if (this.resources.spendEnergy(1)) {
        this.ui.showToast("ใช้ 1 Energy เพื่อทอยลูกเต๋าใหม่!", "info");
        this.handlePlayerRoll();
      } else {
        this.ui.showToast("Creative Energy ไม่เพียงพอ (ต้องการ 1)", "warning");
      }
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
      this.openPlayerSetup();
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
        this.ui.showToast("บันทึกการตั้งค่า Google Apps Script เรียบร้อย", "success");
      }
      this.ui.closeModal("modal-settings");
    });
  }

  openPlayerSetup() {
    this.selectedChar = this.characters[0];
    this.ui.renderCharacterSelection(this.characters, (char) => {
      this.selectedChar = char;
    });
    this.ui.showScreen("screen-setup");
  }

  startGame() {
    const nameInput = document.getElementById("player-name-input");
    const playerName = (nameInput?.value || "").trim() || "ผู้เล่น AI 01";

    this.player = new Player(playerName, this.selectedChar);
    this.resources = new ResourceManager(this.config.startingResources);
    this.currentRound = 1;
    this.isTurnProcessing = false;

    // Listen for resource changes to auto-update HUD
    this.resources.onChange((res) => {
      this.ui.updateHUD(res, this.player, this.currentRound, this.totalRounds);
    });

    // Render Board
    const boardContainer = document.getElementById("game-board-grid");
    this.boardEngine.render(boardContainer);
    this.boardEngine.updatePawnAvatar(this.player.character.asset);
    this.boardEngine.updatePropertyOwnership(this.player);

    this.ui.updateHUD(this.resources.getState(), this.player, this.currentRound, this.totalRounds);
    this.ui.showScreen("screen-board");
    this.sound.playClick();
    this.ui.showToast(`ยินดีต้อนรับ ${this.player.name}! เริ่มรอบที่ 1`, "info");
  }

  async handlePlayerRoll() {
    if (this.isTurnProcessing) return;
    this.isTurnProcessing = true;

    // Disable roll buttons during turn
    this.setRollButtonsEnabled(false);

    // Check if player has skip turn penalty
    if (this.player.skipTurn) {
      this.player.skipTurn = false;
      this.ui.showToast("คุณต้องพัก 1 รอบในเทิร์นนี้!", "warning");
      await new Promise(r => setTimeout(r, 1200));
      this.endTurn();
      return;
    }

    // Roll dice
    const diceEl = document.getElementById("board-dice-cube");
    const rollResult = await this.dice.roll(diceEl);
    this.ui.showToast(`ทอยได้แต้ม ${rollResult}!`, "info", 1500);

    // Animate Pawn Movement
    const fromPos = this.player.position;
    const toPos = await this.boardEngine.animateMovement(fromPos, rollResult, this.sound);
    
    // Check if passed or stopped on START
    const passedStart = (fromPos + rollResult) >= 32;
    if (passedStart && toPos !== 0) {
      const startReward = this.config.passStartReward?.aiCoin || 500;
      this.resources.addCoin(startReward);
      this.sound.playCoin();
      this.ui.showToast(`เดินผ่านจุด START! รับ +${startReward} AI Coin`, "success");
    }

    this.player.moveTo(toPos);
    await new Promise(r => setTimeout(r, 300));

    // Resolve landed tile
    await this.resolveLandedTile(toPos);
  }

  async resolveLandedTile(tileIndex) {
    const tile = this.boardEngine.getTile(tileIndex);
    if (!tile) {
      this.endTurn();
      return;
    }

    switch (tile.type) {
      case "START":
      case "RESTROOM":
      case "SKIP_TURN":
      case "REWARD_CORNER": {
        const result = this.eventSystem.resolveCorner(tile, this.player, this.resources);
        if (result) {
          this.showEventModal(result.title, result.message, result.badge);
        } else {
          this.endTurn();
        }
        break;
      }

      case "PROPERTY": {
        this.showPropertyModal(tile);
        break;
      }

      case "QUIZ":
      case "CHALLENGE": {
        this.showQuizModal(tile);
        break;
      }

      case "SPECIAL":
      case "BONUS":
      case "EVENT": {
        const ev = this.eventSystem.pickRandomEvent();
        const res = this.eventSystem.resolveEvent(ev, this.player, this.resources);
        this.showEventModal(ev ? ev.name : "AI Event", ev ? ev.description : "", res ? res.effectText : "");
        break;
      }

      default:
        this.endTurn();
    }
  }

  showPropertyModal(tile) {
    const prop = this.propertySystem.getPropertyById(tile.propertyId);
    if (!prop) {
      this.endTurn();
      return;
    }

    const isOwnedByMe = this.player.hasProperty(prop.id);
    const level = this.player.getPropertyLevel(prop.id);

    // Modal elements
    document.getElementById("property-modal-title").textContent = prop.name;
    document.getElementById("property-modal-desc").textContent = prop.description;
    document.getElementById("property-modal-img").src = prop.cardAsset;
    document.getElementById("property-cost-val").textContent = `${prop.developmentCost} AI Coin`;
    document.getElementById("property-rent-val").textContent = `${prop.rent} AI Coin`;
    document.getElementById("property-power-val").textContent = `${prop.aiPower} AI Power`;

    const buyBtn = document.getElementById("btn-property-buy");
    const upgradeBtn = document.getElementById("btn-property-upgrade");
    const skipBtn = document.getElementById("btn-property-skip");

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

    // Reset power status
    const powerBtn = document.getElementById("btn-quiz-power");
    if (powerBtn) {
      powerBtn.classList.remove("active");
      powerBtn.disabled = this.resources.generativePower < 1;
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
      powerBtn.disabled = this.resources.generativePower < 1;
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
    if (!this.quizSystem.isPowerActive()) {
      if (this.resources.spendPower(1)) {
        this.quizSystem.activatePowerMultiplier();
        const powerBtn = document.getElementById("btn-quiz-power");
        if (powerBtn) powerBtn.classList.add("active");
        this.ui.showToast("เปิดใช้งานพลังคะแนน x2 สำหรับข้อนี้แล้ว!", "success");
      } else {
        this.ui.showToast("Generative Power ไม่เพียงพอ (ต้องการ 1)", "warning");
      }
    }
  }

  handleAnswerSelected(selectedIndex, isChallenge) {
    this.stopBossTimer();
    const result = this.quizSystem.evaluateAnswer(selectedIndex);
    if (!result) return;

    this.player.recordQuiz(result.isCorrect, isChallenge);
    if (result.isCorrect) {
      this.resources.addCreativityPoint(result.score);
    }

    this.ui.updateHUD(this.resources.getState(), this.player, this.currentRound, this.totalRounds);

    // Highlight choices
    document.querySelectorAll(".quiz-choice-btn").forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === result.correctChoice) {
        btn.classList.add("correct");
      } else if (idx === result.selectedChoice) {
        btn.classList.add("wrong");
      }
    });

    // Close quiz modal and open result dialog
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
      scoreBadge.textContent = `+${result.score} Creativity Point ${result.isPowerBoosted ? "(x2 Power Boost!)" : ""}`;
      scoreBadge.className = "result-score-badge score-up";
    } else {
      titleEl.innerHTML = "❌ ยังไม่ถูกต้อง";
      titleEl.className = "result-title wrong-title";
      scoreBadge.textContent = "+0 Creativity Point";
      scoreBadge.className = "result-score-badge score-zero";
    }

    expEl.textContent = result.explanation || "ไม่มีคำอธิบายเพิ่มเติม";
    srcEl.textContent = result.source ? `อ้างอิงจาก: ${result.source}` : "";

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
      this.ui.showToast(`เริ่มรอบที่ ${this.currentRound} / ${this.totalRounds}`, "info", 2000);
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
    
    // Fill Game Over UI
    document.getElementById("gameover-final-score").textContent = scoreData.totalScore.toLocaleString();
    document.getElementById("gameover-creativity-pts").textContent = `+${scoreData.breakdown.creativityPoint}`;
    document.getElementById("gameover-property-pts").textContent = `+${scoreData.breakdown.propertyScore}`;
    document.getElementById("gameover-power-pts").textContent = `+${scoreData.breakdown.powerBonus}`;
    document.getElementById("gameover-challenge-pts").textContent = `+${scoreData.breakdown.challengeBonus}`;
    document.getElementById("gameover-coin-pts").textContent = `+${scoreData.breakdown.coinBonus}`;

    const pNameEl = document.getElementById("gameover-player-name");
    if (pNameEl) pNameEl.textContent = this.player.name;
    const charTagEl = document.getElementById("gameover-char-tag") || document.getElementById("gameover-char-name");
    if (charTagEl) charTagEl.textContent = this.player.character.name;
    const avatarEl = document.getElementById("gameover-avatar-img") || document.getElementById("gameover-char-img");
    if (avatarEl) avatarEl.src = this.player.character.avatarAsset || this.player.character.asset;

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
      submitBtn.textContent = "กำลังส่งคะแนน...";
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
      gameVersion: this.config.version || "1.0.0"
    };

    const res = await this.leaderboardApi.submitScore(payload);
    if (submitBtn) {
      submitBtn.textContent = "ส่งคะแนนเรียบร้อยแล้ว ✓";
    }

    if (res.warning) {
      this.ui.showToast(res.warning, "warning", 4000);
    } else {
      this.ui.showToast("บันทึกคะแนนขึ้นระบบเรียบร้อยแล้ว!", "success");
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
