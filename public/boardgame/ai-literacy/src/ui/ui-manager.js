/**
 * UI Manager
 * Handles screen switching, HUD updates, modals, cards, and notification toasts.
 */

export class UIManager {
  constructor(soundSystem) {
    this.sound = soundSystem;
    this.activeScreen = "screen-start";
    this.activeModal = null;
  }

  showScreen(screenId) {
    document.querySelectorAll(".game-screen").forEach(sc => sc.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active");
      this.activeScreen = screenId;
    }
  }

  showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("active");
      modal.style.display = "flex";
      modal.style.visibility = "visible";
      modal.style.opacity = "1";
      modal.style.zIndex = "99999";
      this.activeModal = modalId;
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
      this.activeModal = null;
    }
  }

  closeAllModals() {
    document.querySelectorAll(".game-modal").forEach(modal => {
      modal.classList.remove("active");
      modal.style.display = "";
      modal.style.visibility = "";
      modal.style.opacity = "";
    });
    this.activeModal = null;
  }

  showToast(message, type = "info", duration = 3000) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `game-toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">${message}</div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("toast-show");
    }, 10);

    setTimeout(() => {
      toast.classList.remove("toast-show");
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  updateHUD(resources, player, round, totalRounds) {
    // Coins
    const coinEl = document.getElementById("hud-coin-val");
    if (coinEl) coinEl.textContent = resources.aiCoin.toLocaleString();

    // Points
    const pointEl = document.getElementById("hud-point-val");
    if (pointEl) pointEl.textContent = resources.creativityPoint.toLocaleString();

    // Energy
    const energyEl = document.getElementById("hud-energy-val");
    if (energyEl) energyEl.textContent = `${resources.creativeEnergy}/10`;

    // Power
    const powerEl = document.getElementById("hud-power-val");
    if (powerEl) powerEl.textContent = resources.generativePower;

    // Rounds
    const roundEl = document.getElementById("hud-round-val");
    if (roundEl) roundEl.textContent = `${round} / ${totalRounds}`;

    // Player Info
    const pNameEl = document.getElementById("hud-player-name");
    if (pNameEl && player) pNameEl.textContent = player.name;

    const pAvatar = document.getElementById("hud-avatar-img");
    if (pAvatar && player?.character?.asset) pAvatar.src = player.character.asset;

    // Property count
    const propCountEl = document.getElementById("hud-prop-count");
    if (propCountEl && player) propCountEl.textContent = player.getPropertyCount();
  }

  renderCharacterSelection(characters, onSelect) {
    const list = document.getElementById("character-grid");
    if (!list) return;
    list.innerHTML = "";

    characters.forEach((char, idx) => {
      const card = document.createElement("div");
      card.className = `character-card ${idx === 0 ? "selected" : ""}`;
      card.dataset.id = char.id;
      card.innerHTML = `
        <div class="char-img-wrap">
          <img src="${char.asset}" alt="${char.name}" loading="lazy" />
        </div>
        <div class="char-info">
          <div class="char-name">${char.name}</div>
          <div class="char-thai-name">${char.thaiName}</div>
          <div class="char-desc">${char.description}</div>
        </div>
      `;

      card.addEventListener("click", () => {
        document.querySelectorAll(".character-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        if (this.sound) this.sound.playClick();
        onSelect(char);
      });

      list.appendChild(card);
    });
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
      const isCurrent = highlightPlayerName && entry.playerName === highlightPlayerName;
      if (isCurrent) tr.className = "current-player-row";

      const rankBadge = idx === 0 ? "🥇 1" : idx === 1 ? "🥈 2" : idx === 2 ? "🥉 3" : `${idx + 1}`;

      tr.innerHTML = `
        <td class="rank-cell">${rankBadge}</td>
        <td class="player-cell"><strong>${entry.playerName}</strong></td>
        <td class="char-cell">${entry.characterName || "-"}</td>
        <td class="score-cell highlight-score">${Number(entry.score).toLocaleString()}</td>
        <td class="correct-cell">${entry.correctAnswers}/${entry.totalQuestions}</td>
        <td class="date-cell">${new Date(entry.timestamp || Date.now()).toLocaleDateString("th-TH")}</td>
      `;
      tbody.appendChild(tr);
    });
  }
}
