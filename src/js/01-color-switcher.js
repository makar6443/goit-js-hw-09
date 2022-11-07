const startBtnRef = document.querySelector('[data-start]');

const stopBtnRef = document.querySelector('[data-stop]');

const body = document.querySelector('body');


stopBtnRef.setAttribute('disabled', true);

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}; 

const onClickStartBtnRef = () => {
  startBtnRef.setAttribute('disabled', true);
  stopBtnRef.removeAttribute('disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

function onClickStopBtnRef() {
  startBtnRef.removeAttribute('disabled');
  stopBtnRef.setAttribute('disabled', true);
  clearInterval(timerId);
};

startBtnRef.addEventListener('click', onClickStartBtnRef);
stopBtnRef.addEventListener('click', onClickStopBtnRef);
