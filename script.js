document.querySelector('.uwu').addEventListener('click', () => {
  const uwuPlay = new Audio('./public/audio-uwu.mp3')
  uwuPlay.currentTime = 0;
  uwuPlay.play();
})
function getTime() {

const now = new Date();

const hourNow = now.getHours();
const minuteNow = now.getMinutes();
const secondNow = now.getSeconds();

const firstHour = document.querySelector('.first-hour')
const secondHour = document.querySelector('.second-hour')

const firstMinute = document.querySelector('.first-minute')
const secondMinute = document.querySelector('.second-minute')

const firstSecond = document.querySelector('.first-second')
const secondSecond = document.querySelector('.second-second')


  secondHour.textContent = hourNow;
  firstHour.textContent = hourNow < 10 ? '0' : '';

  secondMinute.textContent = minuteNow;
  firstMinute.textContent = minuteNow < 10 ? '0' : '';

  secondSecond.textContent = secondNow;
  firstSecond.textContent = secondNow < 10 ? '0' : '';

// Function to toggle Fullscreen
(function(){
  let isFullScreen = false
  document.documentElement.addEventListener('click', () => {
    isFullScreen ? document.exitFullscreen() : document.requestFullscreen()
    isFullScreen = !isFullScreen
  })
}())
}


getTime();

setInterval(() => {
  getTime()
}, 1000);

