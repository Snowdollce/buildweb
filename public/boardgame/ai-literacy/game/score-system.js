/**
 * Score System
 * Calculates Final Score based on Creativity Points, Property Score,
 * AI Power Bonus, Challenge Bonus, and Coin Conversion.
 */

export class ScoreSystem {
  constructor(config = {}, propertiesData = []) {
    this.config = config;
    this.properties = propertiesData;
    this.coinRatio = this.config.scoreCalculation?.coinToScoreRatio || 10;
    this.powerMultiplier = this.config.scoreCalculation?.powerBonusMultiplier || 20;
  }

  /**
   * Compute comprehensive score breakdown
   * @param {Object} player 
   * @param {Object} resources 
   * @returns {Object}
   */
  calculateScore(player, resources) {
    const creativityPoint = resources.creativityPoint || 0;
    
    // Property score
    let propertyScore = 0;
    if (player.ownedProperties && player.ownedProperties.size > 0) {
      player.ownedProperties.forEach((propState, propId) => {
        const propDef = this.properties.find(p => p.id === propId);
        const base = propDef ? (propDef.rent || 50) : 50;
        const level = propState.level || 1;
        propertyScore += level === 2 ? Math.round(base * 2.2) : base;
      });
    }

    // AI Power Bonus
    const powerBonus = (resources.generativePower || 0) * this.powerMultiplier;

    // Challenge Bonus
    const challengeBonus = (player.stats?.challengesWon || 0) * 30;

    // Coin Bonus (10 coins = 1 point)
    const coinBonus = Math.floor((resources.aiCoin || 0) / this.coinRatio);

    // Total Final Score
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
