const userName = document.querySelector("#name");
const saveBtn = document.querySelector("#saveBtn");
const finalScore = document.querySelector("#finalScore");
const recentScore = localStorage.getItem("recentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = recentScore;

function saveScore(e) {
  e.preventDefault();
  const score = {
    score: recentScore,
    name: userName.value,
  };

  highScores.push(score);

  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign(
    "https://zdparr.github.io/timed-code-quiz/assets/pages/end.html"
  );
}

saveBtn.addEventListener("click", saveScore);
