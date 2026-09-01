/**
 * Player Model
 * Tracks character, position, round, stats, and owned properties
 */

export class Player {
  constructor(name = "Player", character = null) {
    this.name = name;
    this.character = character || {
      id: "character-01",
      name: "AI Explorer",
      thaiName: "นักสำรวจ AI",
      asset: "assets/characters/character-01.png"
    };
    this.position = 0; // Board tile index 0-31
    this.round = 1;
    this.skipTurn = false;
    this.ownedProperties = new Map(); // propertyId -> { level: 1|2, buyRound: number }
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

  stepForward(steps = 1) {
    const oldPos = this.position;
    const newPos = (oldPos + steps) % 32;
    const passedStart = (oldPos + steps) >= 32;
    this.position = newPos;
    return {
      oldPos,
      newPos,
      passedStart
    };
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

  recordQuiz(isCorrect, isChallenge = false) {
    this.stats.totalQuestions++;
    if (isCorrect) {
      this.stats.correctAnswers++;
      if (isChallenge) {
        this.stats.challengesWon++;
      }
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
