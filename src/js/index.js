const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const track = document.querySelector(".track");

let current = 1;

function updateCarousel() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[current].classList.add("active");
}

next.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateCarousel();
});

prev.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateCarousel();
});

updateCarousel();

let autoPlay = setInterval(() => {
  current = (current + 1) % slides.length;
  updateCarousel();
}, 2500);

track.addEventListener("mouseenter", () => {
  clearInterval(autoPlay);
});

track.addEventListener("mouseleave", () => {
  autoPlay = setInterval(() => {
    current = (current + 1) % slides.length;
    updateCarousel();
  }, 2500);
});