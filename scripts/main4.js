//add bookmarked questions

const question = document.querySelector('[data-js="test"]');
let bookcheck = localStorage.getItem("bookmark");

if (bookcheck === "on") {
  question.classList.remove("quiz-card--hidden");
}

const question2 = document.querySelector('[data-js="test2"]');
let bookcheck2 = localStorage.getItem("bookmark2");

if (bookcheck2 === "on") {
  question2.classList.remove("quiz-card--hidden");
}
