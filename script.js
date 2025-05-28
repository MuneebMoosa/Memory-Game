//for timer

const startBtn = document.querySelector('.js-start-btn');
const timerDisplay = document.getElementById('timer');

let seconds = 0;
let initial = null;
startBtn.addEventListener('click' , () => {
      if(initial === null){
        loadImages();//image is loaded
        enableReveal();//we can perform reveal
        setTimeout(() => {
        initial = setInterval(() => {
            seconds++;
            timerDisplay.innerHTML = `${seconds} seconds`;
        }, 1000);
        }, 2000);
      }
})
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
  // reavel start
  let allowReveal = false;
  function enableReveal(){
    allowReveal = true;
  }
function revealImage(placeholder){
  if(!allowReveal) return;
  placeholder.classList.add('hidden');
  setTimeout(() => {
    placeholder.style.display = 'none';
  }, 500);
}