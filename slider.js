"use strict";
const slider = document.querySelector(".slider");
const slideRight = document.querySelector(".slide-right");
const slideLeft = document.querySelector(".slide-left");
const allSlides = document.querySelectorAll(".slide");

const maxSlideLength = allSlides.length - 1;

let currSlide = 0;

const moveSlideTo = function (slideNumber) {
  allSlides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - slideNumber)}%)`)
  );
};

const nextSlide = () => {
  if (currSlide == maxSlideLength) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  moveSlideTo(currSlide);
};

const prevSlide = () => {
  if (currSlide == 0) {
    currSlide = maxSlideLength;
  } else {
    currSlide--;
  }
  moveSlideTo(currSlide);
};

moveSlideTo(0);
slideRight.addEventListener("click", nextSlide);
slideLeft.addEventListener("click", prevSlide);

//The following code is for the slider to work on gesture detection
let startX, startY;

slider.addEventListener("touchstart", function (event) {
  console.log("Started");
  startX = event.touches[0].clientX;
});

slider.addEventListener("touchmove", function (event) {
  const currentX = event.touches[0].clientX;
  const deltaX = currentX - startX;
  const threshold = 50; // Adjust this value to define minimum swipe distance

  if (deltaX > threshold) {
    prevSlide();
  } else if (deltaX < -threshold) {
    nextSlide();
  }
});
