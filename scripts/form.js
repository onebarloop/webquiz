const form = document.querySelector('[data-js="form"]');

const counterQuestion = document.querySelector('[data-js="counter-question"]');

const counterAnswer = document.querySelector('[data-js="counter-answer"]');

//Counter

form.elements.question.addEventListener("input", (event) => {
  let length = event.target.value.length;
  let maxLength = 160;

  counterQuestion.textContent = `${maxLength - length} Zeichen übrig`;
});

form.elements.answer.addEventListener("input", (event) => {
  let length = event.target.value.length;
  let maxLength = 160;
  counterAnswer.textContent = `${maxLength - length} Zeichen übrig`;
});

//Cardgenerator

const generateCard = (data) => {};
