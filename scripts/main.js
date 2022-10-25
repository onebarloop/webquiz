//answer button

const answerBtn = document.querySelector('[data-js="answerBtn"]');

const answer = document.querySelector('[data-js="answer"]');

answerBtn.addEventListener("click", () => {
  console.log("Hello World!");
  answer.classList.toggle("answer");
});

//darkmode button

// const darkSwitch = document.querySelector('[data-js="darkBtn"]');

// const darkStyle = document.querySelector('[data-js="darkstyle"]');

//darkSwitch.addEventListener("click", () => {
//  console.log("Darkmode enable");
// });
