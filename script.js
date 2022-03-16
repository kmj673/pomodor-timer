`use strict`;
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function renderTime() {
  let min = parseInt(minute.textContent);
  let sec = parseInt(second.textContent);
  if (sec === 0) {
    second.textContent = "00";
    min--;
    sec = 60;
  }
  sec--;
  minute.textContent = min;
  second.textContent = sec;
  if (0 < sec && sec < 10) {
    second.textContent = `0${sec}`;
  }
  if (min === 0) {
    minute.textContent = "00";
  }
  if (min < 0) {
    clearInterval(timer);
    removePause();
    minute.textContent = `05`;
    second.textContent = `00`;
  }
}

function startTimer() {
  timer = setInterval(renderTime, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  minute.textContent = `25`;
  second.textContent = `00`;
}

function removePause() {
  pause.classList.add("hidden");
  start.classList.remove("hidden");
}

function removeStart() {
  start.classList.add("hidden");
  pause.classList.remove("hidden");
}

start.addEventListener("click", () => {
  removeStart();
  startTimer();
});
pause.addEventListener("click", () => {
  removePause();
  pauseTimer();
});
reset.addEventListener("click", resetTimer);
