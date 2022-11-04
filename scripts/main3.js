//bookmark

const bookmark = document.querySelector('[data-js="bookmark"]');

let bookcheck = localStorage.getItem("bookmark");

const bookmarkOn = () => {
  bookmark.classList.add("quiz-card__bookmark--active");
  localStorage.setItem("bookmark", "on");
};

const bookmarkOff = () => {
  bookmark.classList.remove("quiz-card__bookmark--active");
  localStorage.setItem("bookmark", "off");
};

if (bookcheck === "on") {
  bookmarkOn();
}

bookmark.addEventListener("click", () => {
  bookcheck = localStorage.getItem("bookmark");
  if (bookcheck === "on") {
    bookmarkOff();
  } else {
    bookmarkOn();
  }
});

const bookmark2 = document.querySelector('[data-js="bookmark2"]');

let bookcheck2 = localStorage.getItem("bookmark2");

const bookmark2On = () => {
  bookmark2.classList.add("quiz-card__bookmark--active");
  localStorage.setItem("bookmark2", "on");
};

const bookmark2Off = () => {
  bookmark2.classList.remove("quiz-card__bookmark--active");
  localStorage.setItem("bookmark2", "off");
};

if (bookcheck2 === "on") {
  bookmark2On();
}

bookmark2.addEventListener("click", () => {
  bookcheck2 = localStorage.getItem("bookmark2");
  if (bookcheck2 === "on") {
    bookmark2Off();
  } else {
    bookmark2On();
  }
});
