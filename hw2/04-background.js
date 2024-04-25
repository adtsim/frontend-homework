const body = document.getElementById("viewport");
const timerValue = document.getElementById("timerInput");
const timerButton = document.getElementById("button");
let interval = null;
let timerOn = false;

function generateColorPalette() {
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  const colorCode = `rgb(${r}, ${g}, ${b})`;
  return colorCode;
}

function nextBackgroundColor() {
  const colorCode = generateColorPalette();
  body.style.backgroundColor = colorCode;
}

function initiateColorChange() {
  if (!timerOn) {
    if (timerValue.value) {
      const intervalValue = timerValue.value;
      interval = setInterval(nextBackgroundColor, intervalValue * 1000);
      button.textContent = "Stop";
      button.style.backgroundColor = "red";
      timerOn = true;
    } else {
      interval = setInterval(nextBackgroundColor, 3000);
      button.textContent = "Stop";
      button.style.backgroundColor = "red";
      timerOn = true;
    }
  } else {
    clearInterval(interval);
    button.textContent = "Start";
    button.style.backgroundColor = "blue";
    timerOn = false;
  }
}

button.addEventListener("click", initiateColorChange);
