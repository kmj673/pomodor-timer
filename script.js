`use strict`;
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function renderTime() {
  let min = parseInt(minute.textContent);
  let sec = parseInt(second.textContent);
  if (sec == 0) {
    second.textContent = "00";
    min--;
    sec = 60;
  }
  sec--;
  minute.textContent = min;
  second.textContent = sec;
  if (min < 0) {
    minute.textContent = `25`;
    second.textContent = `00`;
  }
}

function setTimer() {
  timer = setInterval(renderTime, 1000);
}

function clearTimer() {
  clearInterval(timer);
  minute.textContent = `25`;
  second.textContent = `00`;
}

start.addEventListener("click", setTimer);
reset.addEventListener("click", clearTimer);
