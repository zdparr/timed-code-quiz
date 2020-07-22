// Variables
const startBtn = document.querySelector("#startBtn");
const nextBtn = document.querySelector("#nextBtn");
const startArea = document.querySelector("#start");
const quizArea = document.querySelector("#quizArea");
const questionArea = document.querySelector("#questionArea");
const answerArea = document.querySelector("#answerArea");
const submitBtn = document.querySelector("#submitBtn");
let correctNum;

// Functions
function startQuiz() {
  startArea.classList.add("hide");
  quizArea.classList.remove("hide");
  buildQuiz();
}

function buildQuiz() {
  let questionCount = 5;
  for (let i = 0; i < questionCount; i++) {
    let question = quizQuestions[i].question;
    let answers = quizQuestions[i].answers;
    console.log(answers.a);
    questionArea.textContent = question;

    return;
  }
}

// Event Listeners
startBtn.addEventListener("click", startQuiz);
//nextBtn.addEventListener("click", buildQuiz);

// Question area
const quizQuestions = [
  {
    question: "What HTML tag does JavScript go in?",
    answers: {
      a: "<javascript>",
      b: "<link>",
      c: "<script>",
      d: "<scripting>",
    },
    correctAnswer: "c",
  },
  {
    question: "An external JavaScript file mus contain the <script> tag?",
    answers: {
      a: "True",
      b: "False",
    },
    correctAnswer: "a",
  },
];
