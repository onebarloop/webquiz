//darkmode button

//button
const darkSwitch = document.querySelector('[data-js="darkBtn"]');

//style
const darkStyle = document.querySelector("body");

//local storage
let darkMode = localStorage.getItem("dark-mode");

//enable/disable darkmode
const enableDarkmode = () => {
  darkStyle.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkmode = () => {
  darkStyle.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

//check local storage on page load
if (darkMode === "enabled") {
  enableDarkmode();
}

//eventlistener button

if (darkSwitch === null) {
} else {
  darkSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
      darkStyle.classList.add("dark--switch");
      enableDarkmode();
    } else {
      darkStyle.classList.add("dark--switch");
      disableDarkmode();
    }
  });
}
