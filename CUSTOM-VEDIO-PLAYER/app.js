//Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");

const toggle = player.querySelector(".toggle");
const skibButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player_slider");

//Build our function.
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skipButton() {
  const skip = parseFloat(this.dataset.skip);
  video.currentTime += skip;
}

function handleRangeButton() {
  video[this.name] = this.value;
}

function handleProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//Event listener
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgressBar);

skibButtons.forEach((skip) => skip.addEventListener("click", skipButton));
ranges.forEach((range) => range.addEventListener("change", handleRangeButton));

toggle.addEventListener("click", togglePlay);

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
