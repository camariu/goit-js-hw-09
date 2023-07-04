import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';

const dateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const flatpickrInstance = flatpickr(dateTime, options);
 

let timerId;
let countDownDate;
countDownDate  = flatpickrInstance.selectedDates[0]
 
function countDown() {
  countDownDate  = flatpickrInstance.selectedDates[0]
  const currentDate = Date.now();
  const restTime =  countDownDate - currentDate;
  console.log(restTime)
  if (restTime <= 0) {
    clearInterval(timerId);
    Notiflix.Notify.warning("Timpul a expirat.")
  } else if ( countDownDate < currentDate) {
    Notiflix.Notify.warning("Vă rugăm să alegeți o dată în viitor.");
    clearInterval(timerId);
    btnStart.disabled = true;
  } else if(countDownDate > currentDate) {
    btnStart.disabled = false;

    const days = Math.floor(restTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((restTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((restTime / (1000 * 60)) % 60);
    const seconds = Math.floor((restTime / 1000) % 60);
  
    document.querySelector('.value[data-days]').innerHTML = days;
    document.querySelector('.value[data-hours]').innerHTML = hours;
    document.querySelector('.value[data-minutes]').innerHTML = minutes;
    document.querySelector('.value[data-seconds]').innerHTML = seconds;
  }
 console.log(countDownDate < currentDate)
 console.log(restTime <= 0)
 console.log(countDownDate > currentDate)

}

btnStart.addEventListener('click', startTime)

function startTime() {
  countDownDate  = flatpickrInstance.selectedDates[0];
  countDown();
  timerId = setInterval(countDown, 1000);
}

 