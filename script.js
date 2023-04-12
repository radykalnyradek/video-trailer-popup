const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");

btn.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  trailerContainer.style.visibility = "visible";
});

closeIcon.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
  trailerContainer.style.visibility = "hidden";
  video.pause();
  video.currentTime = 0;
});
