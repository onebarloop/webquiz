//answer button

const answerBtn = document.querySelector('[data-js="answerBtn"]');

const answer = document.querySelector('[data-js="answer"]');

answerBtn.addEventListener("click", () => {
  console.log("Show Answer");
  answer.classList.toggle("quiz-card__answer--hidden");
});

const answerBtn2 = document.querySelector('[data-js="answerBtn2"]');

const answer2 = document.querySelector('[data-js="answer2"]');

answerBtn2.addEventListener("click", () => {
  console.log("Show Answer");
  answer2.classList.toggle("quiz-card__answer--hidden");
});

//bookmark

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("quiz-card__bookmark--active");
});
