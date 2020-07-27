// Variables
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice"));
const maxQuestions = 2;
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let acceptingAnswers = true;

let questions = [
  {
    question: "What is 2 + 2:",
    choice1: "2",
    choice2: "4",
    choice3: "6",
    choice4: "10",
    answer: 2,
  },
  {
    question: "What tag is used to add an external CSS page",
    choice1: "<link>",
    choice2: "<style>",
    choice3: "<script>",
    choice4: "<div>",
    answer: 1,
  },
];

// Functions
function startQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];

  nextQuestion();
}

function nextQuestion() {
  if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
    return window.location.assign(
      "https://zdparr.github.io/timed-code-quiz/assets/pages"
    );
  }
  acceptingAnswers = true;
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    let applyClass;

    if (selectedAnswer == currentQuestion.answer) {
      score++;
      applyClass = "correct";
      selectedChoice.classList.add(applyClass);
    } else {
      applyClass = "incorrect";
      selectedChoice.classList.add(applyClass);
    }

    setTimeout(function () {
      selectedChoice.classList.remove(applyClass);
      nextQuestion();
    }, 1000);
  });
});

startQuiz();
