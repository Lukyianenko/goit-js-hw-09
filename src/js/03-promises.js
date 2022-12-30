import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

const formValues = {
  delay: null,
  step: null,
  amount: null,
}

formEl.addEventListener('submit', startMassage);
formEl.addEventListener('input', addFormValues);

function addFormValues(evt) {
  formValues[evt.target.name] = Number(evt.target.value);
}

function startMassage(evt) {
  evt.preventDefault();

  const firstTimeout = formValues.delay;
  let intervalTimeout = formValues.step;
  const amountStep = formValues.amount;
  

  for (let i = 0; i < amountStep; i+=1) {
    let position = i + 1;
    let delay = firstTimeout + intervalTimeout * i;
  
   
    
setTimeout(() => {
createPromise(position, delay)
.then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
.catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
     }, firstTimeout + intervalTimeout * i);
  }
}
  

function createPromise(position, delay) { 
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((res, rej) => {
      if (shouldResolve) {
      res({position, delay});
    } else {
      rej({position, delay});
    }
  });
    
    return promise;
  }