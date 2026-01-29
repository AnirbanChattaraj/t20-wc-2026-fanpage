/* =========================
   TEAM INFO INTERACTION
========================= */

function showTeam(team) {
  const info = {
    India:
      "🏆 Titles: 2 (2007, 2024) | Strength: Home advantage & batting depth | Chance: Very High",
    England: "🏆 Titles: 2 | Strength: Aggressive modern T20 | Chance: High",
    "West Indies":
      "🏆 Titles: 2 | Strength: Explosive power hitters | Chance: Medium",
    Australia: "🏆 Titles: 1 | Strength: Big-match mentality | Chance: High",
    Pakistan: "🏆 Titles: 1 | Strength: Lethal pace attack | Chance: Medium",
    "Sri Lanka":
      "🏆 Titles: 1 | Strength: Spin-friendly home pitches | Chance: Medium",
    "New Zealand":
      "🏆 Titles: 0 | Strength: Consistency & discipline | Chance: Medium",
    "South Africa":
      "🏆 Titles: 0 | Strength: Athletic fielding & pace | Chance: Medium",
    Afghanistan: "🏆 Titles: 0 | Strength: World-class spin | Chance: Medium",
    Ireland: "🏆 Titles: 0 | Strength: Giant-killers | Chance: Low",
    Scotland:
      "🏆 Titles: 0 | Strength: Structured associate cricket | Chance: Low",
    Netherlands: "🏆 Titles: 0 | Strength: Fearless approach | Chance: Low",
    Namibia: "🏆 Titles: 0 | Strength: Discipline & teamwork | Chance: Low",
    Zimbabwe: "🏆 Titles: 0 | Strength: Experience | Chance: Low",
    Nepal: "🏆 Titles: 0 | Strength: Young energetic squad | Chance: Low",
    Oman: "🏆 Titles: 0 | Strength: Tactical T20 play | Chance: Low",
    UAE: "🏆 Titles: 0 | Strength: Spin-friendly conditions | Chance: Low",
    USA: "🏆 Titles: 0 | Strength: Rapidly growing cricket base | Chance: Low",
    Canada: "🏆 Titles: 0 | Strength: Emerging cricket culture | Chance: Low",
    Italy: "🏆 Titles: 0 | Strength: Rising European associate | Chance: Low",
  };

  document.getElementById("teamInfo").innerHTML =
    `<p><strong>${team}</strong><br>${info[team]}</p>`;
}

/* =========================
   QUIZ LOGIC (FIXED)
========================= */

function checkAnswer(button, isCorrect) {
  // Target only the current question
  const questionBox = button.closest(".question");
  const buttons = questionBox.querySelectorAll("button");

  // Disable options for this question only
  buttons.forEach((btn) => {
    btn.disabled = true;
    btn.style.opacity = "0.6";
  });

  // Apply correct / wrong color
  if (isCorrect) {
    button.style.backgroundColor = "#2E7D32"; // GREEN
  } else {
    button.style.backgroundColor = "#C62828"; // RED
  }

  button.style.color = "#FFFFFF";
  button.style.opacity = "1";
}
