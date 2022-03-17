`use strict`;
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

const WORK = "01";
const BREAK = "02";
const ZERO = "00";
const HIDDEN = "hidden";

function decreaseTime() {
  let min = parseInt(minute.textContent);
  let sec = parseInt(second.textContent);
  if (sec === 0) {
    min--;
    sec = 60;
  }
  sec--;
  minute.textContent = min;
  second.textContent = sec;
  if (0 <= sec && sec < 10) second.textContent = `0${sec}`;
  if (min === 0) minute.textContent = ZERO;
  return min;
}

function renderTime() {
  let min = decreaseTime();
  if (min < 0) {
    breakTimer();
  }
}

function renderBreakTime() {
  let min = decreaseTime();
  if (min < 0) {
    resetTimer();
  }
}

function breakTimer() {
  clearInterval(timer);
  removePause();
  minute.textContent = BREAK;
  second.textContent = ZERO;
}

function startTimer() {
  if (minute.textContent == WORK) {
    timer = setInterval(renderTime, 1000);
  } else if (minute.textContent == BREAK) {
    timer = setInterval(renderBreakTime, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  removePause();
  minute.textContent = WORK;
  second.textContent = ZERO;
}

function removePause() {
  pause.classList.add(HIDDEN);
  start.classList.remove(HIDDEN);
}

function removeStart() {
  start.classList.add(HIDDEN);
  pause.classList.remove(HIDDEN);
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
