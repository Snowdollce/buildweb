/**
 * Event System
 * Resolves random board events, bonus tiles, and corner spaces.
 */

export class EventSystem {
  constructor(eventsData = [], soundSystem = null) {
    this.events = eventsData;
    this.sound = soundSystem;
  }

  pickRandomEvent() {
    if (!this.events || this.events.length === 0) return null;
    const idx = Math.floor(Math.random() * this.events.length);
    return this.events[idx];
  }

  /**
   * Apply event effect to player and resources
   * @param {Object} event 
   * @param {Object} player 
   * @param {Object} resourceManager 
   * @returns {Object}
   */
  resolveEvent(event, player, resourceManager) {
    if (!event) return null;

    if (event.reward) {
      if (event.reward.aiCoin) resourceManager.addCoin(event.reward.aiCoin);
      if (event.reward.creativityPoint) resourceManager.addCreativityPoint(event.reward.creativityPoint);
      if (event.reward.creativeEnergy) resourceManager.addEnergy(event.reward.creativeEnergy);
      if (event.reward.generativePower) resourceManager.addPower(event.reward.generativePower);
    }

    if (event.penalty) {
      if (event.penalty.aiCoin) {
        resourceManager.spendCoin(Math.min(resourceManager.aiCoin, event.penalty.aiCoin));
      }
    }

    if (this.sound) {
      if (event.type === "REWARD" || event.type === "BONUS" || event.type === "POWER") {
        this.sound.playCoin();
      } else if (event.type === "PENALTY") {
        this.sound.playWrong();
      }
    }

    return {
      event,
      effectText: event.effectText || event.description
    };
  }

  /**
   * Resolve Corner Tiles
   * @param {Object} tile 
   * @param {Object} player 
   * @param {Object} resourceManager 
   * @returns {Object}
   */
  resolveCorner(tile, player, resourceManager) {
    switch (tile.type) {
      case "START":
        resourceManager.addCoin(500);
        if (this.sound) this.sound.playCoin();
        return {
          title: "จุด START",
          message: "ยินดีต้อนรับสู่จุดเริ่มต้น! รับ +500 AI Coin",
          badge: "+500 AI Coin"
        };

      case "RESTROOM":
        resourceManager.addEnergy(1);
        if (this.sound) this.sound.playClick();
        return {
          title: "เข้าห้องน้ำ (จุดพักผ่อน)",
          message: "ผ่อนคลายความเหนื่อยล้า ฟื้นฟูพลังงาน +1 Creative Energy",
          badge: "+1 Energy"
        };

      case "SKIP_TURN":
        player.skipTurn = true;
        if (this.sound) this.sound.playClick();
        return {
          title: "พัก 1 รอบ",
          message: "หยุดพักสมองและวางแผนกลยุทธ์ (ข้ามเทิร์นในรอบถัดไป)",
          badge: "Skip Next Turn"
        };

      case "REWARD_CORNER":
        resourceManager.addCoin(300);
        resourceManager.addCreativityPoint(10);
        if (this.sound) this.sound.playCoin();
        return {
          title: "เข้าใจ AI ดีเยี่ยม",
          message: "คุณเข้าใจหลักการ Generative AI อย่างลึกซึ้ง! รับ +300 AI Coin และ +10 Creativity Point",
          badge: "+300 Coin / +10 Point"
        };

      default:
        return null;
    }
  }
}
