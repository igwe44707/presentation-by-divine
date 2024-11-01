// let quesNo = document.querySelector(".que-no");
// const each = document.querySelector(".each");
// const next = document.querySelector(".next-btn");
// const queTotal = document.querySelector(".question-total");
// const questions = [
//   {
//     q: 1,
//     question: "what  is the theory of relativity",
//     options: ["bla", "blabla", "blablabla", "blablablabla"],
//     answer: 2,
//   },
//   {
//     q: 1,
//     question: "what  is the theory of relativity again",
//     options: ["bla", "blablaijfo;ibdo", "blablabla", "blablablabla"],
//   },
//   {
//     q: 1,
//     question: "what's my name'",
//     options: ["bop daddy", "Tolu", "divine", "sijuade"],
//   },
//   {
//     q: 1,
//     question: "who is the design god'",
//     options: ["erioluwa", "Tolu", "divine", "sijuade"],
//   },
//   {
//     q: 1,
//     question: "who is the design godjglahsvlayjcslysflay'",
//     options: ["rohim", "Tolu", "divine", "sijuade"],
//   },
// ];

// let currenrtQues = 0;
// let questionno = 1;
// next.addEventListener("click", () => {
//   questionno++;
//   if (questionno == questions.length) {
//     queTotal.textContent = "quiz over";
//     return;
//   }
//   quesNo.textContent = questionno;
//   currenrtQues += 1;
//   if (currenrtQues == questions.length) {
//     currenrtQues = 0;
//   }
//   console.log(currenrtQues);
//   fillQuiz();
// });
// function fillQuiz() {
//   let quiz = `
//   <h2 class="question-text">${questions[currenrtQues].question}</h2>
//   <div class="option-list">
//   <div class="option" data-place="0">
//   <span>A. ${questions[currenrtQues].options[0]}</span>
//   </div>
//   <div class="option" data-place="1">
//   <span>B. ${questions[currenrtQues].options[1]}</span>
//   </div>
//   <div class="option" data-place="2">
//   <span onclick="aa">C. ${questions[currenrtQues].options[2]}</span>
//   </div>
//   <div class="option" data-place="3">
//   <span>D. ${questions[currenrtQues].options[3]}</span>
//   </div>
//   `;
//   const allOption = document.querySelectorAll(".option span");
//   each.innerHTML = quiz;
// }
// fillQuiz();
// const d = document.querySelectorAll(".option");
// for (const element of d) {
//   element.addEventListener("click", function (event) {
//     event.target.style.backgroundColor = "red";
//     console.log(event.target.dataset.place);
//     return;
//   });
// }


let question = [
  {
    numb: 1,
    question: "what does HTML stand for",
    answer: "C. Hyper Text Markup Language",
    options: [
      "A. Hyper Type Multi Languages",
      "B. Hyper Text Multiple Language",
      "C. Hyper Text Markup Language",
      "D. Home Text Multi Language",
    ]
  },


  {
    numb: 2,
    question: "What does CSS stand for",
    answer: "A. Cascading Style Sheet",
    options: [
      "A. Cascading Style Sheet",
      "B. Cute Style Sheet",
      "C. Computer Style Sheet",
      "D. Codehal Style Sheet",
    ]
  },


  {
    numb: 3,
    question: "What does PHP stands for?",
    answer: "A. Hypertext Preprocessor",
    options: [
      "A. Hypertext Preprocessor",
      "B. Hometext Preprocessor",
      "C. Hypertext programming",
      "D. Programming Hypertext Processor",
    ]
  },


  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "D. Structured Query Language",
    options: [
      "A. Strength Query Language",
      "B. Stylesheet Query Language",
      "C. Science Question Language",
      "D. Structured Query Language",
    ]
  },


  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "D. Extensible Markup Language",
    options: [
      "A. Excellent multiple Language",
      "B. Explore Multiple Languages",
      "C. Extra Markup Language",
      "D. Extensible Markup Language",
    ]
  },


  {
    numb: 6,
    question: "What is the full meaning of SRC in Html?",
    answer: "B. SOURCE",
    options: [
      "A. SCARCE",
      "B. SOURCE",
      "C. SACRIFICE",
      "D. SCORES",
    ]
  },
];
