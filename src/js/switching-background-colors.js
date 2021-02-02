const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.body;
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
let timeIntervalId = null;

start.addEventListener('click', startSwitchBackgroundColor);
stop.addEventListener('click', stopSwitchBackgroundColor);

function startSwitchBackgroundColor() {
  timeIntervalId = setInterval(() => {
    body.setAttribute(
      'bgcolor',
      `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`,
      );
      start.disabled = true},
  1000);
  }

  function stopSwitchBackgroundColor() {
    clearInterval(timeIntervalId)
    start.disabled = false
}

