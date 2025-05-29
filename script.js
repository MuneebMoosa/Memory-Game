//for timer

const startBtn = document.querySelector('.js-start-btn');
const timerDisplay = document.getElementById('timer');

let seconds = 0;
let initial = null;
const resetBtn = document.querySelector('.reset');

startBtn.addEventListener('click' , () => {
      if(initial === null ){
        loadImages();//image is loaded
        enableReveal();//we can perform reveal
        setTimeout(() => {
         resetBtn.style.visibility = 'visible';//make visible the reset btn
        initial = setInterval(() => {
            seconds++;
            timerDisplay.innerHTML = `${seconds} seconds`;
        }, 1000);
        }, 1500);
    }
  });
//timer ends

// swapping and puting
const img1 = 'images/img1.jpg';
const img2 = 'images/img2.jpg';
const img3 = 'images/img3.jpg';
const img4 = 'images/img4.jpg';
const img5 = 'images/img5.jpg';
const img6 = 'images/img6.jpg';

const arr = [img1 , img2 , img3 , img4 , img5 , img6 
  , img1 , img2 , img3 , img4 , img5 , img6 ];

 function shuffleImages(images){
    const copy = [...images];
    for(let i=copy.length-1 ; i > 0 ; i--){
        const j = Math.floor(Math.random() * (i + 1));
         [copy[i], copy[j]] = [copy[j],copy[i]];
    }
    return copy;
  }
  function loadImages(){
    const shuffled = shuffleImages(arr);
    for(i = 1; i < shuffled.length+1 ; i++){
      const container =  document.querySelector(`.container${i}`);
      const img = container.querySelector('img');
      img.src =  shuffled[i-1];
    }
  }
  //swapping finshes

  // reveal start
  let allowReveal = false;
  function enableReveal(){
    allowReveal = true;
  }
  
  let firstClicked = null;
  let secondClicked = null;
  let clickable = true;
  let k = 0;
  function revealImage(placeholder){
    if(!allowReveal || !clickable) return;
    const container = placeholder.closest('.image-cover');
    const img = container.querySelector('img');

    placeholder.classList.add('hidden');
    setTimeout(() => {
      placeholder.style.display = 'none';
    }, 500);

    if(!firstClicked){
    firstClicked = {placeholder , img}
    } else if(!secondClicked){
    secondClicked = {placeholder , img}
    clickable = false;

    setTimeout(() => {
      if (firstClicked.img.src === secondClicked.img.src) {
        console.log("✅ Match found!");
        k++;
        resetClicks();
        if(k === 6){
          clearInterval(initial);
          initial = null;
          timerDisplay.innerHTML = `${seconds} seconds`;

        }
      } else {
        console.log("❌ Not a match. Hiding images...");

        // Re-show placeholders
        firstClicked.placeholder.style.display = 'flex';
        firstClicked.placeholder.classList.remove('hidden');

        secondClicked.placeholder.style.display = 'flex';
        secondClicked.placeholder.classList.remove('hidden');

        resetClicks();
      }
    }, 1000); 
  }
}
function resetClicks(){
  firstClicked = null;
  secondClicked = null;
  clickable = true;
}
//reveal ends

// reset start

function resetTime(){
  const reset = document.querySelector('.js-reset-btn');
    reset.addEventListener('click' , () => {
      location.reload();
    })
}
resetTime();

//reset ends