// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build functions
function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime/video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Attach Event Listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
// document.addEventListener('keydown', e => {if (e.keyCode === 32) togglePlay()});

video.addEventListener('play', e => toggle.textContent = '❚ ❚');
video.addEventListener('pause', e => toggle.textContent = '►');

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousedown', e => mousedown = true);
progress.addEventListener('mouseup', e => mousedown = false);
progress.addEventListener('mousemove', e => mousedown && scrub(e));


const fullscreen = player.querySelector('.fullscreen');

function handleFullscreen(e) {
  video.requestFullscreen();
}
// let fullscreen = video.wid
fullscreen.addEventListener('click', handleFullscreen)