/**
 * Property System
 * Handles property purchase, upgrade, card visual data, and rent checks.
 */

export class PropertySystem {
  constructor(propertiesData = [], soundSystem = null) {
    this.properties = propertiesData;
    this.sound = soundSystem;
  }

  getPropertyById(id) {
    return this.properties.find(p => p.id === id) || null;
  }

  canBuy(player, resourceManager, propertyId) {
    const prop = this.getPropertyById(propertyId);
    if (!prop) return false;
    if (player.hasProperty(propertyId)) return false;
    return resourceManager.aiCoin >= prop.developmentCost;
  }

  buy(player, resourceManager, propertyId) {
    const prop = this.getPropertyById(propertyId);
    if (!prop) return { success: false, message: "ไม่พบข้อมูลการ์ด" };

    if (player.hasProperty(propertyId)) {
      return { success: false, message: "คุณเป็นเจ้าของ Property นี้แล้ว" };
    }

    if (resourceManager.spendCoin(prop.developmentCost)) {
      player.buyProperty(propertyId);
      if (this.sound) this.sound.playCoin();
      return {
        success: true,
        property: prop,
        message: `ซื้อ ${prop.name} สำเร็จ!`
      };
    }

    return { success: false, message: "AI Coin ไม่เพียงพอ" };
  }

  canUpgrade(player, resourceManager, propertyId) {
    const prop = this.getPropertyById(propertyId);
    if (!prop) return false;
    if (!player.hasProperty(propertyId)) return false;
    if (player.getPropertyLevel(propertyId) >= 2) return false;
    return resourceManager.aiCoin >= prop.aiPower;
  }

  upgrade(player, resourceManager, propertyId) {
    const prop = this.getPropertyById(propertyId);
    if (!prop) return { success: false, message: "ไม่พบข้อมูลการ์ด" };

    if (player.getPropertyLevel(propertyId) >= 2) {
      return { success: false, message: "Property นี้อัปเกรดเป็นระดับสูงสุดแล้ว" };
    }

    if (resourceManager.spendCoin(prop.aiPower)) {
      player.upgradeProperty(propertyId);
      if (this.sound) this.sound.playUpgrade();
      return {
        success: true,
        property: prop,
        newLevel: 2,
        message: `อัปเกรด ${prop.name} สู่ AI Power Level 2 สำเร็จ!`
      };
    }

    return { success: false, message: "AI Coin ไม่เพียงพอสำหรับการอัปเกรด" };
  }
}
