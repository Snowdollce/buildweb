/**
 * Quiz System
 * Contextual question selector, hint assistant, power multiplier,
 * answer validator, and explanation presenter.
 */

export class QuizSystem {
  constructor(questions = [], soundSystem = null) {
    this.questions = questions;
    this.sound = soundSystem;
    this.usedQuestionIds = new Set();
    this.currentQuestion = null;
    this.isAnswerLocked = false;
    this.powerActive = false; // Double score active
  }

  /**
   * Randomly shuffle choices while correctly tracking the correct answer index
   * @param {Object} rawQuestion 
   * @returns {Object}
   */
  shuffleQuestionChoices(rawQuestion) {
    const originalChoices = [...rawQuestion.choices];
    const correctText = originalChoices[rawQuestion.correctAnswer];
    
    const shuffled = [...originalChoices];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    const newCorrectIndex = shuffled.indexOf(correctText);
    return {
      ...rawQuestion,
      choices: shuffled,
      correctAnswer: newCorrectIndex
    };
  }

  /**
   * Select a question contextually based on tile
   * @param {Object} tile 
   * @returns {Object}
   */
  pickQuestionForTile(tile) {
    const tileSub = tile?.subcategory;
    const tileCat = tile?.category;

    // Filter available (unused) questions
    let candidates = this.questions.filter(q => !this.usedQuestionIds.has(q.id));

    // If all questions used, reset pool
    if (candidates.length === 0) {
      this.usedQuestionIds.clear();
      candidates = [...this.questions];
    }

    // Match by subcategory first
    let matched = candidates.filter(q => q.subcategory === tileSub);

    // Fallback: match by category
    if (matched.length === 0) {
      matched = candidates.filter(q => q.category === tileCat);
    }

    // Fallback: any candidate
    if (matched.length === 0) {
      matched = candidates;
    }

    const selectedRaw = matched[Math.floor(Math.random() * matched.length)] || this.questions[0];
    this.usedQuestionIds.add(selectedRaw.id);
    
    this.currentQuestion = this.shuffleQuestionChoices(selectedRaw);
    this.isAnswerLocked = false;
    this.powerActive = false;

    return this.currentQuestion;
  }

  getCurrentQuestion() {
    return this.currentQuestion;
  }

  getUsedQuestionCount() {
    return this.usedQuestionIds.size;
  }

  getTotalQuestionCount() {
    return this.questions.length;
  }

  getRemainingQuestions() {
    return this.questions.filter(q => !this.usedQuestionIds.has(q.id));
  }

  /**
   * Pick next sequential question for Final Boss Rush mode
   * @returns {Object|null}
   */
  pickNextBossQuestion() {
    const remaining = this.getRemainingQuestions();
    if (remaining.length === 0) return null;
    const selectedRaw = remaining[0];
    this.usedQuestionIds.add(selectedRaw.id);
    
    this.currentQuestion = this.shuffleQuestionChoices(selectedRaw);
    this.isAnswerLocked = false;
    this.powerActive = false;

    return this.currentQuestion;
  }

  /**
   * Apply Hint by eliminating two wrong choices
   * @returns {Array<number>} Indices of eliminated choices
   */
  getHintEliminations() {
    if (!this.currentQuestion) return [];
    const correctIdx = this.currentQuestion.correctAnswer;
    const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
    
    // Shuffle and pick 2 wrong indices
    for (let i = wrongIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
    }
    return wrongIndices.slice(0, 2);
  }

  activatePowerMultiplier() {
    this.powerActive = true;
  }

  deactivatePowerMultiplier() {
    this.powerActive = false;
  }

  isPowerActive() {
    return this.powerActive;
  }

  /**
   * Submit an answer
   * @param {number} selectedIndex 
   * @returns {Object} Result payload
   */
  evaluateAnswer(selectedIndex) {
    if (!this.currentQuestion || this.isAnswerLocked) return null;
    this.isAnswerLocked = true;

    const isCorrect = selectedIndex === this.currentQuestion.correctAnswer;
    const baseScore = this.currentQuestion.score || 10;
    let earnedScore = 0;
    
    if (this.powerActive) {
      // High-Risk, High-Reward: Correct = +2x, Wrong = -2x
      earnedScore = isCorrect ? (baseScore * 2) : -(baseScore * 2);
    } else {
      earnedScore = isCorrect ? baseScore : 0;
    }

    if (this.sound) {
      if (isCorrect) {
        this.sound.playCorrect();
      } else {
        this.sound.playWrong();
      }
    }

    const selectedText = this.currentQuestion.choices[selectedIndex] || "";
    const correctText = this.currentQuestion.choices[this.currentQuestion.correctAnswer] || "";

    return {
      isCorrect,
      selectedChoice: selectedIndex,
      correctChoice: this.currentQuestion.correctAnswer,
      selectedAnswerText: selectedText,
      correctAnswerText: correctText,
      score: earnedScore,
      isPowerBoosted: this.powerActive && isCorrect,
      isPowerPenalty: this.powerActive && !isCorrect,
      questionId: this.currentQuestion.id,
      question: this.currentQuestion.question,
      level: this.currentQuestion.level,
      levelName: this.currentQuestion.levelName,
      category: this.currentQuestion.category,
      subcategory: this.currentQuestion.subcategory,
      explanation: this.currentQuestion.explanation,
      source: this.currentQuestion.source,
      difficulty: this.currentQuestion.difficulty
    };
  }
}
