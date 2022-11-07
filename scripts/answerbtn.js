//answer button

const answerBtn = document.querySelectorAll('[data-js="answerBtn"]');

const answer = document.querySelectorAll('[data-js="answer"]');

const showAnswer = (num) => {
  for (let i = 0; i < answer.length; i++) {
    if (i === num) {
      answer[num].classList.toggle("quiz-card__answer--hidden");
    }
  }
};

for (let i = 0; i < answerBtn.length; i++) {
  answerBtn[i].addEventListener("click", () => {
    showAnswer(i);
  });
}
