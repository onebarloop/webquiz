const form = document.querySelector('[data-js="form"]');

const warning = document.querySelector('[data-js="warning"]');
const warning2 = document.querySelector('[data-js="warning2"]');

const main = document.querySelector('[data-js="main"]');

const counterQuestion = document.querySelector('[data-js="counter-question"]');

const counterAnswer = document.querySelector('[data-js="counter-answer"]');

const submitButton = document.querySelector('[data-js="submit-button"]');

//Counter & Warnings

form.elements.question.addEventListener("input", (event) => {
  let length = event.target.value.length;
  let maxLength = 120;
  counterQuestion.textContent = `${maxLength - length} Zeichen übrig`;
  if (length > 50) {
    warning.classList.remove("form__warning--exit");
    warning.classList.add("form__warning--enter");
    event.target.setAttribute("style", "color : red");
  }
  if (length < 50) {
    warning.classList.remove("form__warning--enter");
    warning.classList.add("form__warning--exit");
    event.target.setAttribute("style", "color : black");
  }
});

form.elements.answer.addEventListener("input", (event) => {
  let length = event.target.value.length;
  let maxLength = 120;
  counterAnswer.textContent = `${maxLength - length} Zeichen übrig`;
  if (length > 50) {
    warning2.classList.remove("form__warning--exit");
    warning2.classList.add("form__warning--enter");
    event.target.setAttribute("style", "color : red");
  }
  if (length < 50) {
    warning2.classList.remove("form__warning--enter");
    warning2.classList.add("form__warning--exit");
    event.target.setAttribute("style", "color : black");
  }
});

//Cardgenerator

const generateCard = (data) => {
  const box = document.createElement("section");
  box.classList.add("quiz-card", "quiz-card--animation");
  main.append(box);

  const questionBox = document.createElement("p");
  questionBox.classList.add("quiz-card__question");
  questionBox.textContent = data.question;
  box.append(questionBox);

  const answerBox = document.createElement("p");
  answerBox.classList.add("quiz-card__answer");
  answerBox.textContent = data.answer;
  box.append(answerBox);

  const tagBox = document.createElement("div");
  tagBox.classList.add(
    "quiz-card__tagbox",
    "animate__animated",
    "animate__rubberBand"
  );

  box.append(tagBox);

  const tagButton = document.createElement("button");
  tagButton.classList.add("quiz-card__tag");
  tagButton.textContent = `#${data.tag.toLowerCase()}`;
  tagBox.append(tagButton);
};

// Form Submit

let cardCount = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = {
    question: event.target.question.value,
    answer: event.target.answer.value,
    tag: event.target.tag.value,
  };
  if (cardCount >= 4) {
    submitButton.textContent = "Stop!";
    submitButton.setAttribute("style", "background-color : red");
    return;
  } else if (userInput.question === "" && userInput.answer === "") {
    event.target.question.setAttribute(
      "placeholder",
      "bitte gib eine Frage ein"
    );
    event.target.answer.setAttribute(
      "placeholder",
      "bitte gib eine Antwort ein"
    );
    return;
  } else if (userInput.question === "") {
    event.target.question.setAttribute(
      "placeholder",
      "bitte gib eine Frage ein"
    );
    return;
  } else if (userInput.answer === "") {
    event.target.answer.setAttribute(
      "placeholder",
      "bitte gib eine Antwort ein"
    );
    return;
  } else {
    generateCard(userInput);
    cardCount++;
    counterQuestion.textContent = "120 Zeichen übrig";
    counterAnswer.textContent = "120 Zeichen übrig";
    event.target.reset();
    event.target.question.focus();
  }
});
