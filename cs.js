const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

const slidesWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slidesWidth * index + "px";
};
slides.forEach(setSlidePosition);

// Move slide at 3 sec
const moveToSlide = (track, currentSlide, tragetSlide) => {
  const amountToMove = tragetSlide.style.left;
  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  tragetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

setInterval(() => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDots = dotsNav.querySelector(".current-slide");
  const nextDots = currentSlide.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
  moveToSlide(currentDots, nextDots);
}, 300);

// Move slide on dot press
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return null;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const tragetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, tragetSlide);
  updateDots(currentDot, targetDot);
});
