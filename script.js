let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer1: "Robby Williams",
    answer2: "Lady Gaga",
    answer3: "Tim Berner-Lee",
    answer4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was bedeutet das HTML Tag &lt,a%gt;?",
    answer1: "Text fett",
    answer2: "Container",
    answer3: "Ein Link",
    answer4: "Kursiv",
    right_answer: 3,
  },
  {
    question: "Wie bindet man eine Website in eine Website ein?",
    answer1: "Garnicht",
    answer2: "Vielleicht",
    answer3: "Mit Links",
    answer4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer hat HTML erfunden",
    answer1: "Robby Williams",
    answer2: "Lady Gaga",
    answer3: "Tim Berner-Lee",
    answer4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer hat HTML erfunden",
    answer1: "Robby Williams",
    answer2: "Lady Gaga",
    answer3: "Tim Berner-Lee",
    answer4: "Justin Bieber",
    right_answer: 3,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }
}

function answer(id) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = id.slice(-1);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (rightAnswerSelected(selectedQuestionNumber)) {
    document.getElementById(id).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    document.getElementById(id).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");

  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");

  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");

  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}

function restartGame() {
  document.getElementById("header-img").src = "img/pencil.jpg";
  currentQuestion = 0;
  rightQuestions = 0;
  document.getElementById("question-body").style = "";
  document.getElementById("end-screen").style = "display: none";
  init();
}

function showEndScreen() {
  document.getElementById("question-body").style = "display: none";

  document.getElementById("end-screen").style = "";
  document.getElementById("amount-questions").innerHTML = questions.length;
  document.getElementById("right-questions").innerHTML = rightQuestions;
  document.getElementById("header-img").src = "img/trophy.png";
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer1"];
  document.getElementById("answer_2").innerHTML = question["answer2"];
  document.getElementById("answer_3").innerHTML = question["answer3"];
  document.getElementById("answer_4").innerHTML = question["answer4"];
}

function updateProgressBar() {
  let question = questions[currentQuestion];
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);

  document.getElementById("progress-bar").innerHTML = `${percent} %`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function rightAnswerSelected(selectedQuestionNumber) {
  let question = questions[currentQuestion];

  return selectedQuestionNumber == question["right_answer"];
}
