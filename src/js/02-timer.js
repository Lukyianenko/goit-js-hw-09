import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const divEl = document.querySelector('.timer');

let timerDate = null;
let nowTime = null;
let timeToEnd = null;
let timeId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(dateStr) {
    timerDate = new Date(dateStr);
    nowTime = new Date();
      if (timerDate - nowTime < 0) {
        window.alert("Please choose a date in the future");
    } else {
        btnStart.disabled = false;
    }
    },
    onChange() {
        clearInterval(timeId);
        btnStart.classList.remove('is-active');
        divEl.classList.remove('is-active');
    }
  };

btnStart.disabled = true;

flatpickr('#datetime-picker', options);

btnStart.addEventListener('click', onStartTimer);

function onStartTimer() {
    nowTime = new Date();
    if (timerDate - nowTime < 0) {
        window.alert("Please choose a date in the future");
    } else {
       startingTimer();
       btnStart.classList.add('is-active');
       divEl.classList.add('is-active');
    }
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

function startingTimer() {
    nowTime = new Date();
        timeToEnd = timerDate - nowTime;
        const timeUp = convertMs(timeToEnd);
        daysEl.textContent = addLeadingZero(timeUp.days);
        hoursEl.textContent = addLeadingZero(timeUp.hours);
        minutesEl.textContent = addLeadingZero(timeUp.minutes);
        secondsEl.textContent = addLeadingZero(timeUp.seconds);
timeId = setInterval(() => {
                nowTime = new Date();
        timeToEnd = timerDate - nowTime;
        const timeUp = convertMs(timeToEnd);
        daysEl.textContent = addLeadingZero(timeUp.days);
        hoursEl.textContent = addLeadingZero(timeUp.hours);
        minutesEl.textContent = addLeadingZero(timeUp.minutes);
        secondsEl.textContent = addLeadingZero(timeUp.seconds);
        if (timeToEnd/1000 < 1) {
            clearInterval(timeId);
        }
    }, 1000);
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }