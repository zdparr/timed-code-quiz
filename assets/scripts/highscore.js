const highScoreList = document.querySelector("#highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const resetBtn = document.querySelector("#resetBtn");

highScoreList.innerHTML = highScores
  .map((score) => {
    return `<p class="styledText">${score.name} - ${score.score}</p>`;
  })
  .join("");

function resetScores() {
  console.log("reset button clicked");
}

resetBtn.addEventListener("click", resetScores);
