const userName = document.querySelector("#name");
const saveBtn = document.querySelector("#saveBtn");
const finalScore = document.querySelector("#finalScore");
const recentScore = localStorage.getItem("recentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = recentScore;

function saveScore() {
  const score = {
    score: recentScore,
    name: userName.value,
  };

  highScores.push(score);

  highScores.sort(function (a, b) {
    return b - a;
  });

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
}

saveBtn.addEventListener("click", saveScore);
