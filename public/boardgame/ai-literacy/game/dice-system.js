/**
 * Dice System
 * Handles 3D animated dice rolling, physics visual, and result generation (1-6)
 */

export class DiceSystem {
  constructor(soundSystem) {
    this.sound = soundSystem;
    this.isRolling = false;
    this.lastResult = 1;
  }

  /**
   * Roll the dice
   * @param {HTMLElement} diceElement
   * @returns {Promise<number>}
   */
  async roll(diceElement) {
    if (this.isRolling) return this.lastResult;
    this.isRolling = true;

    if (this.sound) {
      this.sound.playDiceRoll();
    }

    const finalValue = Math.floor(Math.random() * 6) + 1;
    this.lastResult = finalValue;

    if (diceElement) {
      diceElement.classList.add("rolling");
      
      // Animate face turns
      const rotations = [
        { x: 0, y: 0 },       // 1
        { x: 0, y: 180 },     // 2
        { x: 0, y: -90 },     // 3
        { x: 0, y: 90 },      // 4
        { x: -90, y: 0 },     // 5
        { x: 90, y: 0 }       // 6
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
