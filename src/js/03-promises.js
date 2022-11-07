import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const labelsRef = document.getElementsByTagName('label');
const btnSubmitsRef = document.getElementsByTagName('button');
const inputDelayRef = document.getElementsByName('delay');
const inputStepRef = document.getElementsByName('step');
const inputAmountRef = document.getElementsByName('amount');
const {elements: { delay, step, amount },} = formRef;

const onSuccess = (position, delay) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const onReject = (position, delay) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const obj = { position, delay };
      if (shouldResolve) {
        // Fulfill
        resolve(obj);
      } else {
        // Reject
        reject(obj);
      }
    }, delay);
  });
}

formRef.addEventListener('submit', event => {
  event.preventDefault();
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  for (let position = 1; position <= amountValue; position += 1) {
    createPromise(position, delayValue)
      .then(res => onSuccess(res.position, res.delay))
      .catch(error => onReject(error.position, error.delay));
    delayValue += stepValue;
  }
});

inputDelayRef[0].addEventListener('input', () => {
  verifyAllInputs();
});

inputStepRef[0].addEventListener('input', () => {
  verifyAllInputs();
});

inputAmountRef[0].addEventListener('input', () => {
  verifyAllInputs();
});