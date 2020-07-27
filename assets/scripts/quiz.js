// Variables
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice"));
const maxQuestions = 5;
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let acceptingAnswers = true;

let questions = [
  {
    question: "Strings are enclosed within?",
    choice1: "Quotes",
    choice2: "Parantheses",
    choice3: "Curly Brackets",
    choice4: "Semicolons",
    answer: 1,
  },
  {
    question: "What tag is used to add an external CSS page",
    choice1: "<link>",
    choice2: "<style>",
    choice3: "<script>",
    choice4: "<div>",
    answer: 1,
  },
  {
    question: "What tag is used to add an external Javascript page",
    choice1: "<link>",
    choice2: "<style>",
    choice3: "<script>",
    choice4: "<div>",
    answer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store?",
    choice1: "Other Arrays",
    choice2: "Numbers and Strings",
    choice3: "Booleans",
    choice4: "All the above",
    answer: 4,
  },
  {
    question: "What function creates a pop to give a user information",
    choice1: "alert()",
    choice2: "console.log()",
    choice3: "confirm()",
    choice4: "document.write()",
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
    localStorage.setItem("recentScore", score);
    return window.location.assign(
      "https://zdparr.github.io/timed-code-quiz/assets/pages/end.html"
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
