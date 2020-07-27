const highScoreList = document.querySelector("#highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoreList.innerHTML = highScores
  .map((score) => {
    return `<p>${score.name} - ${score.score}</p>`;
  })
  .join("");
