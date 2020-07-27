const highScoreList = document.querySelector("#highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoreList.innerHTML = highScores
  .map((score) => {
    return `<p class="styledText">${score.name} - ${score.score}</p>`;
  })
  .join("");
