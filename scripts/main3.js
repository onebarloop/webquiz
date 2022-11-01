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
