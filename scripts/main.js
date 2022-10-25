const answerBtn = document.querySelector('[data-js="answerBtn"]');

const answer = document.querySelector('[data-js="answer"]');

answerBtn.addEventListener("click", () => {
  console.log("Hello World!");
  answer.classList.toggle("answer");
});
