/**
 * Main Entry Point
 * Instantiates and boots GameManager
 */

import { GameManager } from "./game/game-manager.js";

document.addEventListener("DOMContentLoaded", () => {
  const game = new GameManager();
  game.init();
  window.gameInstance = game; // Exposed for debugging or testing
});
