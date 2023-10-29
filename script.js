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

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer1"];
  document.getElementById("answer_2").innerHTML = question["answer2"];
  document.getElementById("answer_3").innerHTML = question["answer3"];
  document.getElementById("answer_4").innerHTML = question["answer4"];
}

function answer(id) {
  let question = questions[currentQuestion];
  let answer_number = question["right_answer"];
  if (id == answer_number) {
    console.log("richtig");
  } else {
    console.log("falsch");
  }
}
