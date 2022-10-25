//darkmode button

const darkSwitch = document.querySelector('[data-js="darkBtn"]');

const darkStyle = document.querySelector("body");

darkSwitch.addEventListener("click", () => {
  console.log("Darkmode enable");
  darkStyle.classList.toggle("dark");
});
