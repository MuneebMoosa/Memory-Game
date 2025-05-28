//for timer

const startBtn = document.querySelector('.js-start-btn');
const timerDisplay = document.getElementById('timer');

let seconds = 0;
let initial = null;
startBtn.addEventListener('click' , () => {
      if(initial === null){
        initial = setInterval(() => {
            seconds++;
            timerDisplay.innerHTML = `${seconds} seconds`;
        }, 1000);
      }
})