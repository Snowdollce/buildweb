/**
 * Google Apps Script for "Mastering Generative AI Creative Design" Board Game
 * Spreadsheet ID: 1In60iHFC52qQn4ExXHWRTvxuk2bipHfVnNdEHx7hKTA
 * 
 * Features:
 * 1. Sheet 1 - "Leaderboard": Stores overall player scores for the in-game leaderboard.
 * 2. Sheet 2 - "Quiz_Analytics": Horizontal (1 Row per Player) learning analytics log
 *    showing each player's answers for Questions 1 through 15 across the row.
 */

function doGet(e) {
  var limit = (e && e.parameter && e.parameter.limit) ? parseInt(e.parameter.limit) : 50;
  var leaderboardData = getLeaderboardData(limit);
  
  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    count: leaderboardData.length,
    data: leaderboardData
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    var timestamp = new Date();
    
    // 1. Record Summary to "Leaderboard" Sheet
    var sheet1 = getOrCreateLeaderboardSheet();
    var leaderboardRow = [
      timestamp,
      data.playerName || "ผู้เล่น AI",
      data.score || 0,
      data.characterId || "char-01",
      data.characterName || "AI Explorer",
      data.duration || 0,
      data.correctAnswers || 0,
      data.totalQuestions || 0,
      data.aiCoin || 0,
      data.creativityPoint || 0,
      data.propertyCount || 0,
      data.generativePower || 0,
      data.gameVersion || "1.0.0"
    ];
    sheet1.appendRow(leaderboardRow);

    // 2. Record Horizontal 1-Row Learning Analytics to "Quiz_Analytics" Sheet
    var sheet2 = getOrCreateAnalyticsSheet();
    var analyticsRow = [
      timestamp,
      data.playerName || "ผู้เล่น AI",
      data.characterName || "AI Explorer",
      data.score || 0,
      (data.correctAnswers || 0) + "/" + (data.totalQuestions || 15),
      data.duration || 0
    ];

    // Populate columns for Questions 1 through 15 in horizontal sequence
    var quizList = Array.isArray(data.quizAnswers) ? data.quizAnswers : [];
    for (var i = 0; i < 15; i++) {
      if (i < quizList.length) {
        var ans = quizList[i];
        analyticsRow.push(ans.isCorrect ? "ถูก" : "ผิด");
        analyticsRow.push(ans.questionId || ("Q" + (i + 1)));
        analyticsRow.push(ans.selectedAnswerText || "");
      } else {
        analyticsRow.push("-");
        analyticsRow.push("-");
        analyticsRow.push("-");
      }
    }

    sheet2.appendRow(analyticsRow);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "บันทึกผลคะแนนและ Quiz Analytics แนวนอนสำเร็จ",
      recordedRow: data.playerName
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateLeaderboardSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Leaderboard");
  if (!sheet) {
    sheet = ss.insertSheet("Leaderboard");
  }
  
  var headers = [
    "Timestamp",
    "Player Name",
    "Final Score",
    "Character ID",
    "Character Name",
    "Duration (s)",
    "Correct Answers",
    "Total Questions",
    "AI Coin",
    "Creativity Points",
    "Properties Owned",
    "Generative Power",
    "Game Version"
  ];
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#0284C7").setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getOrCreateAnalyticsSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Quiz_Analytics");
  if (!sheet) {
    sheet = ss.insertSheet("Quiz_Analytics");
  }
  
  var headers = [
    "Timestamp",
    "ชื่อผู้เล่น",
    "ตัวละคร",
    "คะแนนรวม",
    "ผลตอบถูก (ข้อ)",
    "เวลา (วินาที)"
  ];
  
  // Columns for Q1 to Q15
  for (var q = 1; q <= 15; q++) {
    headers.push("ข้อ " + q + " (ผลลัพธ์)");
    headers.push("ข้อ " + q + " (รหัสข้อสอบ)");
    headers.push("ข้อ " + q + " (คำตอบที่เลือก)");
  }
  
  // Always ensure Row 1 has the correct horizontal headers
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#7C3AED").setFontColor("#FFFFFF");
  sheet.setFrozenRows(1);
  
  return sheet;
}

/**
 * Utility function: Run this function once directly in Apps Script editor
 * if you want to reset and format the headers of all sheets immediately!
 */
function resetAllSheetHeaders() {
  getOrCreateLeaderboardSheet();
  getOrCreateAnalyticsSheet();
}

function getLeaderboardData(limit) {
  var sheet = getOrCreateLeaderboardSheet();
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return [];
  
  var range = sheet.getRange(2, 1, lastRow - 1, 13);
  var values = range.getValues();
  
  var list = [];
  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    list.push({
      timestamp: row[0],
      playerName: row[1],
      score: Number(row[2]) || 0,
      characterId: row[3],
      characterName: row[4],
      duration: Number(row[5]) || 0,
      correctAnswers: Number(row[6]) || 0,
      totalQuestions: Number(row[7]) || 0
    });
  }
  
  list.sort(function(a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return a.duration - b.duration;
  });
  
  return list.slice(0, limit);
}
