const slidesElement = document.querySelectorAll(".slide");
const buttonElement = document.querySelector(".buttons");
const prevButtonElement = document.querySelector("#prev-btn");
const nextButtonElement = document.querySelector("#next-btn");
let currentSlideIndex = 0;

const displaySlide = () => {
  slidesElement.forEach((slide, index) => {
    if (index === currentSlideIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });

  if (currentSlideIndex === 0) {
    prevButtonElement.style.display = "none";
  } else {
    prevButtonElement.style.display = "block";
  }

  if (currentSlideIndex === slidesElement.length - 1) {
    nextButtonElement.style.display = "none";
  } else {
    nextButtonElement.style.display = "block";
  }
};

const handleClick = (event) => {
  if (event.target === nextButtonElement) {
    currentSlideIndex++;

    displaySlide();
  }

  if (event.target === prevButtonElement) {
    currentSlideIndex--;

    displaySlide();
  }
};

buttonElement.addEventListener("click", handleClick);
