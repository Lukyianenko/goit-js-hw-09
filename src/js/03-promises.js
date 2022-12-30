import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

const formValues = {
  delay: null,
  step: null,
  amount: null,
}

formEl.addEventListener('submit', addingFormValues);
formEl.addEventListener('input', addgFormValues);

function addingFormValues(evt) {
  evt.preventDefault();
  console.log(formValues);
}

function addgFormValues(evt) {
  formValues[evt.target.name] = Number(evt.target.value);
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
