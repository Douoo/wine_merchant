const navbarToggle = document.querySelector(".navbar-toggle");
const body = document.querySelector("body");
const dropdownBtn = document.querySelector(".dropdown-btn");

navbarToggle.addEventListener("click", function () {
  navbarToggle.classList.toggle("toggle");
});

body.addEventListener("click", function (event) {
  // if (!event.target.classList.contains("navbar-toggle")) {
  //   navbarToggle.classList.remove("toggle");
  // }
});

dropdownBtn.addEventListener("click", function (event) {});
