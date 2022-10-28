//darkmode button

const darkSwitch = document.querySelector('[data-js="darkBtn"]');

const darkStyle = document.querySelector("body");

let darkMode = localStorage.getItem("dark-mode");

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

if (darkMode === "enabled") {
  enableDarkmode(); // set state of darkMode on page load
}

darkSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});
