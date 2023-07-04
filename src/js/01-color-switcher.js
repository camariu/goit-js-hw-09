const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.getElementsByTagName('body')[0];

let automaticColor = 0;

btnStart.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  automaticColor= setInterval(() => {
  const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
  btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
    clearInterval(automaticColor);
    btnStart.disabled = false;
  });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 

