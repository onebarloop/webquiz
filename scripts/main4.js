//add bookmarked questions

const question = document.querySelector('[data-js="test"]');
let bookcheck = localStorage.getItem("bookmark");

if (bookcheck === "on") {
  question.classList.remove("quiz-card--hidden");
}
