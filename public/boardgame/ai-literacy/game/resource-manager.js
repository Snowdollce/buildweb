/**
 * Resource Manager
 * Manages AI Coin, Creativity Point, Creative Energy, and Generative Power
 */

export class ResourceManager {
  constructor(initialConfig = {}) {
    this.aiCoin = initialConfig.aiCoin ?? 50;
    this.creativityPoint = initialConfig.creativityPoint ?? 0;
    this.creativeEnergy = initialConfig.creativeEnergy ?? 3;
    this.generativePower = initialConfig.generativePower ?? 0;
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
    this.generativePower = config.generativePower ?? 0;
    this.notify();
  }
}
