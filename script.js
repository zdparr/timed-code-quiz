// Variables
const startBtn = document.querySelector("#startBtn");
const nextBtn = document.querySelector("#nextBtn");
const startArea = document.querySelector("#start");
const quizArea = document.querySelector("#quizArea");

// Functions
function startQuiz() {
  startArea.classList.add("hide");
  quizArea.classList.remove("hide");
}

function nextQuestion() {}

// Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
