/**
 * Leaderboard API Client
 * Connects to Google Apps Script Web App for Google Sheet Leaderboard
 * Includes LocalStorage fallback and offline queue
 */

export class LeaderboardAPI {
  constructor(config) {
    this.config = config || {};
    this.spreadsheetId = this.config.spreadsheetId || "1In60iHFC52qQn4ExXHWRTvxuk2bipHfVnNdEHx7hKTA";
    this.scriptUrl = localStorage.getItem("genai_custom_script_url") || this.config.defaultScriptUrl || "https://script.google.com/macros/s/AKfycbxGhaaGwZYMsTOxGdQ73r_k8rXICxhz8I5RI1Q1yGk2d9XWI3KhELYlIwtMuURGgYdTXA/exec";
    this.storageKey = "genai_boardgame_local_leaderboard";
    this.queueKey = "genai_boardgame_pending_submissions";
  }

  setScriptUrl(url) {
    this.scriptUrl = url.trim();
    if (this.scriptUrl) {
      localStorage.setItem("genai_custom_script_url", this.scriptUrl);
    } else {
      localStorage.removeItem("genai_custom_script_url");
    }
  }

  getScriptUrl() {
    return this.scriptUrl;
  }

  /**
   * Submit score to Leaderboard
   * @param {Object} scorePayload 
   * @returns {Promise<Object>}
   */
  async submitScore(scorePayload) {
    // 1. Save to local storage first (Safety & Offline Guarantee)
    this.saveScoreLocally(scorePayload);

    // 2. If Script URL is configured, attempt sending to Google Apps Script
    if (this.scriptUrl) {
      try {
        const response = await fetch(this.scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8" // Avoid CORS preflight in Google Apps Script
          },
          body: JSON.stringify(scorePayload)
        });

        if (response.ok) {
          const resJson = await response.json();
          // Flush any pending submissions in queue
          this.flushQueue();
          return {
            success: true,
            source: "google_sheet",
            data: resJson
          };
        } else {
          throw new Error(`Server returned ${response.status}`);
        }
      } catch (err) {
        console.warn("Google Sheet API submission failed. Queuing for retry...", err);
        this.queueSubmission(scorePayload);
        return {
          success: true,
          source: "local_storage",
          warning: "บันทึกคะแนนในเครื่องเรียบร้อยแล้ว (จะส่งขึ้น Google Sheet อัตโนมัติเมื่อออนไลน์)",
          error: err.message
        };
      }
    }

    return {
      success: true,
      source: "local_storage",
      message: "บันทึกคะแนนในเครื่องสำเร็จ"
    };
  }

  /**
   * Fetch Top Leaderboard Rankings
   * @param {number} limit 
   * @returns {Promise<Array>}
   */
  async getLeaderboard(limit = 50) {
    if (this.scriptUrl) {
      try {
        const url = `${this.scriptUrl}?limit=${limit}&_t=${Date.now()}`;
        const response = await fetch(url);
        if (response.ok) {
          const res = await response.json();
          if (res.status === "success" && Array.isArray(res.data)) {
            return res.data;
          }
        }
      } catch (err) {
        console.warn("Failed to fetch Google Sheet leaderboard, using local records", err);
      }
    }

    // Fallback: Local Storage records
    return this.getLocalLeaderboard(limit);
  }

  saveScoreLocally(payload) {
    const scores = this.getLocalLeaderboard(100);
    const newEntry = {
      rank: 0,
      timestamp: new Date().toISOString(),
      playerName: payload.playerName || "Anonymous",
      score: payload.score || 0,
      characterId: payload.characterId || "character-01",
      characterName: payload.characterName || "AI Explorer",
      duration: payload.duration || 0,
      correctAnswers: payload.correctAnswers || 0,
      totalQuestions: payload.totalQuestions || 0,
      aiCoin: payload.aiCoin || 0,
      creativityPoint: payload.creativityPoint || 0,
      propertyCount: payload.propertyCount || 0,
      generativePower: payload.generativePower || 0,
      gameVersion: payload.gameVersion || "1.0.0"
    };

    scores.push(newEntry);
    scores.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (a.duration !== b.duration) return a.duration - b.duration;
      return b.correctAnswers - a.correctAnswers;
    });

    const ranked = scores.slice(0, 50).map((item, idx) => ({ ...item, rank: idx + 1 }));
    localStorage.setItem(this.storageKey, JSON.stringify(ranked));
  }

  getLocalLeaderboard(limit = 50) {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) {
        // Initial sample data if completely empty
        const sample = [
          { rank: 1, playerName: "AI Master Pro", score: 850, characterName: "Creative Master", duration: 420, correctAnswers: 14, totalQuestions: 15, timestamp: new Date().toISOString() },
          { rank: 2, playerName: "Prompt Engineer 99", score: 760, characterName: "Prompt Master", duration: 480, correctAnswers: 12, totalQuestions: 14, timestamp: new Date().toISOString() },
          { rank: 3, playerName: "Design Champion", score: 690, characterName: "Creative Designer", duration: 510, correctAnswers: 11, totalQuestions: 13, timestamp: new Date().toISOString() }
        ];
        localStorage.setItem(this.storageKey, JSON.stringify(sample));
        return sample.slice(0, limit);
      }
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data.slice(0, limit) : [];
    } catch {
      return [];
    }
  }

  queueSubmission(payload) {
    try {
      const raw = localStorage.getItem(this.queueKey);
      const queue = raw ? JSON.parse(raw) : [];
      queue.push(payload);
      localStorage.setItem(this.queueKey, JSON.stringify(queue));
    } catch (e) {
      console.error("Queue error", e);
    }
  }

  async flushQueue() {
    try {
      const raw = localStorage.getItem(this.queueKey);
      if (!raw || !this.scriptUrl) return;
      const queue = JSON.parse(raw);
      if (!Array.isArray(queue) || queue.length === 0) return;

      while (queue.length > 0) {
        const item = queue.shift();
        await fetch(this.scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(item)
        });
      }
      localStorage.removeItem(this.queueKey);
    } catch (e) {
      console.warn("Error flushing queue", e);
    }
  }
}
