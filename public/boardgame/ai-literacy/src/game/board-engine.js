/**
 * Board Engine
 * Renders the 32-tile board in a 9x9 CSS Grid layout with animated pawn traversal
 */

export class BoardEngine {
  constructor(boardData = [], propertiesData = [], containerElement = null) {
    this.boardData = boardData;
    this.properties = propertiesData;
    this.container = containerElement;
    this.tileElements = [];
    this.pawnElement = null;
    this.isMoving = false;
  }

  /**
   * Map 0..31 tile index to (col, row) in a 9x9 grid (1-based index for CSS grid)
   */
  getGridCoordinate(index) {
    // 0..8: Bottom row (left to right)
    if (index >= 0 && index <= 8) {
      return { col: index + 1, row: 9 };
    }
    // 8..16: Right column (bottom to top)
    if (index > 8 && index <= 16) {
      return { col: 9, row: 9 - (index - 8) };
    }
    // 16..24: Top row (right to left)
    if (index > 16 && index <= 24) {
      return { col: 9 - (index - 16), row: 1 };
    }
    // 24..31: Left column (top to bottom)
    if (index > 24 && index <= 31) {
      return { col: 1, row: 1 + (index - 24) };
    }
    return { col: 1, row: 9 };
  }

  render(boardContainer) {
    this.container = boardContainer || this.container;
    if (!this.container) return;

    this.container.innerHTML = "";
    this.tileElements = [];

    // Center arena (spans rows 2..8, cols 2..8)
    const centerArena = document.createElement("div");
    centerArena.className = "board-center-arena";
    centerArena.id = "board-center-arena";
    this.container.appendChild(centerArena);

    // Create 32 tile elements
    this.boardData.forEach((tile, idx) => {
      const coords = this.getGridCoordinate(idx);
      const tileDiv = document.createElement("div");
      tileDiv.className = `board-tile tile-type-${tile.type.toLowerCase()} tile-cat-${tile.category.toLowerCase()}`;
      tileDiv.id = `tile-${idx}`;
      tileDiv.dataset.index = idx;
      tileDiv.style.gridColumn = coords.col;
      tileDiv.style.gridRow = coords.row;

      // Color accent bar
      const accentBar = document.createElement("div");
      accentBar.className = "tile-accent-bar";
      accentBar.style.backgroundColor = tile.color || "#38BDF8";
      tileDiv.appendChild(accentBar);

      // Tile content
      const content = document.createElement("div");
      content.className = "tile-inner-content";

      const title = document.createElement("div");
      title.className = "tile-title";
      title.textContent = tile.name;
      content.appendChild(title);

      // Property extra details
      if (tile.type === "PROPERTY" && tile.propertyId) {
        const propDef = this.properties.find(p => p.id === tile.propertyId);
        if (propDef) {
          const costBadge = document.createElement("div");
          costBadge.className = "tile-cost-badge";
          costBadge.textContent = `${propDef.developmentCost} 🪙`;
          content.appendChild(costBadge);
        }
      } else if (tile.type === "START") {
        const badge = document.createElement("div");
        badge.className = "tile-badge-corner";
        badge.textContent = "+500";
        content.appendChild(badge);
      } else if (tile.type === "CHALLENGE") {
        const badge = document.createElement("div");
        badge.className = "tile-badge-challenge";
        badge.textContent = "x2 Pts";
        content.appendChild(badge);
      }

      // Ownership badge
      const ownerBadge = document.createElement("div");
      ownerBadge.className = "tile-owner-badge hidden";
      ownerBadge.id = `owner-badge-${idx}`;
      content.appendChild(ownerBadge);

      tileDiv.appendChild(content);
      this.container.appendChild(tileDiv);
      this.tileElements.push(tileDiv);
    });

    // Create player avatar pawn
    this.pawnElement = document.createElement("div");
    this.pawnElement.className = "player-pawn";
    this.pawnElement.id = "player-pawn";
    this.pawnElement.innerHTML = `
      <div class="pawn-shadow"></div>
      <div class="pawn-body">
        <img id="pawn-avatar-img" src="assets/characters/character-01.png" alt="Avatar" />
      </div>
    `;
    this.container.appendChild(this.pawnElement);

    // Initial positioning
    this.updatePawnPosition(0, false);
  }

  updatePawnAvatar(avatarPath) {
    const img = document.getElementById("pawn-avatar-img");
    if (img && avatarPath) {
      img.src = avatarPath;
    }
  }

  updatePawnPosition(tileIndex, animate = true) {
    if (!this.pawnElement) return;
    const tileEl = this.tileElements[tileIndex];
    if (!tileEl) return;

    // Highlight current tile
    this.tileElements.forEach(t => t.classList.remove("current-player-tile"));
    tileEl.classList.add("current-player-tile");

    // Position coordinates
    const coords = this.getGridCoordinate(tileIndex);
    this.pawnElement.style.gridColumn = coords.col;
    this.pawnElement.style.gridRow = coords.row;

    if (animate) {
      this.pawnElement.classList.remove("pawn-hop");
      void this.pawnElement.offsetWidth; // trigger reflow
      this.pawnElement.classList.add("pawn-hop");
    }
  }

  /**
   * Smooth step-by-step traversal along the path
   */
  async animateMovement(fromIndex, steps, soundSystem = null) {
    this.isMoving = true;
    let current = fromIndex;

    for (let s = 1; s <= steps; s++) {
      current = (current + 1) % 32;
      this.updatePawnPosition(current, true);
      if (soundSystem) soundSystem.playClick();
      await new Promise(res => setTimeout(res, 220));
    }

    this.isMoving = false;
    return current;
  }

  updatePropertyOwnership(player) {
    this.boardData.forEach((tile, idx) => {
      if (tile.type === "PROPERTY" && tile.propertyId) {
        const badge = document.getElementById(`owner-badge-${idx}`);
        const tileEl = document.getElementById(`tile-${idx}`);
        if (badge && tileEl) {
          if (player.hasProperty(tile.propertyId)) {
            const level = player.getPropertyLevel(tile.propertyId);
            badge.textContent = level === 2 ? "★ LV.2" : "★ OWNED";
            badge.className = `tile-owner-badge ${level === 2 ? "level-2" : "level-1"}`;
            tileEl.classList.add("is-owned");
          } else {
            badge.className = "tile-owner-badge hidden";
            tileEl.classList.remove("is-owned");
          }
        }
      }
    });
  }

  getTile(index) {
    return this.boardData[index] || null;
  }
}
