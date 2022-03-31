`use strict`;
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const timer = document.querySelector("#timer");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function decreaseTime(time) {
  time--;
  let min = parseInt(time / 60);
  let sec = time % 60;
  minute.textContent = min;
  second.textContent = sec;
  // to show it as 00:00 format
  if (0 <= min && min < 10) minute.textContent = `0${min}`;
  if (0 <= sec && sec < 10) second.textContent = `0${sec}`;
  if (time <= 0 && timer.classList[0] === "focusTimer") {
    removePause();
    clearInterval(focusTimer);
    minute.textContent = `05`;
    second.textContent = `00`;
    timer.classList.remove("focusTimer");
    timer.classList.add("breakTimer");
  } else if (time <= 0 && timer.classList[0] === "breakTimer") {
    removePause();
    clearInterval(breakTimer);
    minute.textContent = `25`;
    second.textContent = `00`;
    timer.classList.remove("breakTimer");
    timer.classList.add("focusTimer");
  }
}

// case of focus time 25mins
function renderFocusTime() {
  let time = parseInt(minute.textContent) * 60 + parseInt(second.textContent);
  decreaseTime(time);
}

// case of break time 5mins
function renderBreakTime() {
  let time = parseInt(minute.textContent) * 60 + parseInt(second.textContent);
  decreaseTime(time);
}

function pauseTimer() {
  console.log(timer.classList[0] + " pause");
  if (timer.classList[0] === "focusTimer") clearInterval(focusTimer);
  if (timer.classList[0] === "breakTimer") clearInterval(breakTimer);
}

function resetTimer() {
  console.log(`reset timer`);
  removePause();
  if (timer.classList[0] === "focusTimer") clearInterval(focusTimer);
  if (timer.classList[0] === "breakTimer") clearInterval(breakTimer);
  minute.textContent = `25`;
  second.textContent = `00`;
  timer.className = "";
  timer.classList.add("focusTimer");
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
  if (timer.classList[0] === "breakTimer") {
    console.log("breaktimer start");
    breakTimer = setInterval(renderBreakTime, 1000);
  } else if (timer.classList[0] === "focusTimer") {
    console.log("focustimer start");
    focusTimer = setInterval(renderFocusTime, 1000);
  }
});

pause.addEventListener("click", () => {
  removePause();
  pauseTimer();
});
reset.addEventListener("click", resetTimer);
