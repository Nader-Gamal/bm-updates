"use strict";

const quizData = [
  {
    question:
      "يمكن استخدام بطاقات البدل فاقد المصدرة بعد تاريخ 20-12-2023 للشراء دوليا ؟",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question:
      "يمكن تقديم طلب اخر للعميل لفتح حدود بطاقته الائتمانية في حالة وجود طلب سابق لم يتم غلقه",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question:
      "يمكن للعميل تقديم مستندات سفره في خلال 30 يوم من تاريخ السفر لتاريخ العودة",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "يمكن للعميل تقديم طلب استخدام البطاقة بحد اقصي 30 يوم",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question:
      " يمكن للعميل استخدام بطاقة اساسية وبطاقة اضافيه في حالة سفره بشرط تحديد نسبه كل بطاقة في الاستخدام",
    a: "True",
    b: "False",
    correct: "a",
  },
];
const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const answerArray = Array.from(answerEl);
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_txt.innerText = currentQuizData.a;
  b_txt.innerText = currentQuizData.b;
  quizDetailEl.innerHTML = `<p>${currentQuiz + 1} / ${quizData.length}</p>`;
}

// deselect
function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// get selected
function getSelected() {
  let answer;
  answerEl.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
}

btnSubmit.addEventListener("click", function () {
  const answers = getSelected();

  if (answers) {
    if (answers === quizData[currentQuiz].correct) {
      score++;
    }
    nextQuestion();
  }
});

// next Slide
function nextQuestion() {
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly</h2>
    <button type="button" onclick="location.reload()">Reload</button>
    `;
    footerEl.style.display = "none";
  }
}
// display today data
const currentdate = new Date();
// Format each day
const optionss = { weekday: "long" };
const todayy = currentdate.toLocaleDateString("en-US", optionss);
// store month's names

const monthss = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayy = currentDate.getDate();
const monthsss = monthss[currentDate.getMonth()];
const formatMonths = `${dayy} ${monthsss}`;
let quizDay = ``;
quizDay = `
<h2 class="header-txt">امتحان يوم ${formatMonths}</h2>`;
document.querySelector(".quiz-header").innerHTML = quizDay;
