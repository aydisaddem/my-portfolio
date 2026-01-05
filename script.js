const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const thumbs = document.querySelectorAll(".thumbnails img");
const thumbContainer = document.querySelector(".thumbnails");
const thumbPrev = document.querySelector(".thumb-prev");
const thumbNext = document.querySelector(".thumb-next");
let index = 0;
let thumbOffset = 0;
const visibleThumbs = 6;
const thumbWidth = 88;
function showSlide(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;
  slides.style.transform = `translateX(${-index * 100}%)`;
  updateThumbs();
}
function updateThumbs() {
  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}
prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));
thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => showSlide(i));
});
function moveThumbs(direction) {
  thumbOffset += direction;
  if (thumbOffset < 0) thumbOffset = 0;
  if (thumbOffset > thumbs.length - visibleThumbs) {
    thumbOffset = thumbs.length - visibleThumbs;
  }
  thumbContainer.style.transform = `translateX(${-thumbOffset * thumbWidth}px)`;
}
thumbPrev.addEventListener("click", () => moveThumbs(-1));
thumbNext.addEventListener("click", () => moveThumbs(1));

showSlide(0);
