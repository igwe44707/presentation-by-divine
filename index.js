const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
console.log("eoidy.loistd")
startBtn.onclick = () => {
  popupInfo.style.display = "block"
}

exitBtn.onclick = () => {
  popupInfo.style.display = "none"

}

continueBtn.onclick = () => {
  quizSection.classList.add('active');
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  quizBox.classList.add('active');

  showQuestion(0);
}

let questionCount = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  questionCount++;
  showQuestions(questionCount);
}

function showQuestion(index) {
  const questionText = document.querySelector('.question-text');
  questionText.textContent = '${questions[index].numb}. ${questions[index].question}';
}
