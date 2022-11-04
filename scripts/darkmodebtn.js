//darkmode button

//button
const darkSwitch = document.querySelector('[data-js="darkBtn"]');

//style
const darkStyle = document.querySelector("body");

//local storage
let darkMode = localStorage.getItem("dark-mode");

//enable/disable darkmode
const enableDarkmode = () => {
  console.log("Darkmode enable");
  darkStyle.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkmode = () => {
  console.log("Darkmode disable");
  darkStyle.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

//check local storage on page load
if (darkMode === "enabled") {
  enableDarkmode();
}

//eventlistener button
darkSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});
