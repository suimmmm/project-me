const midWrap = document.getElementById('mid-wrap')
const doorWrap = document.getElementById('door-wrap');
const doorOpen = document.getElementById('door-mid');
const chattingBox = document.getElementById('chatting-wrap')
const h1Value = document.querySelector('h1')
const doorBox = document.getElementById('door-box')

let rotateValue = 0;
let chattingFlag = false;
let windowWidth = window.matchMedia('screen and (max-width: 800px)');

if(windowWidth.matches){
  doorOpen.addEventListener('click', function(){
    doorOpen.classList.toggle('toggle')
    setTimeout(function(){
      if (!chattingFlag) {
        displayNoneValue(doorWrap);
        displayBlockValue(chattingBox);
        chattingFlag = true;
      } else {
        displayNoneValue(chattingBox);
        displayBlockValue(doorWrap);
        chattingFlag = false;
      }
    }, 2000);
  })
  midWrap.classList.add('display-block')
  midWrap.classList.remove('display-flex')
  doorBox.style.animationPlayState = 'paused';
}
else{
  chattingFlag = true;
  midWrap.classList.add('display-flex')
  midWrap.classList.remove('display-block')
  displayBlockValue(chattingBox);
  doorWrap.style.justifyContent = 'center'
}

function displayNoneValue(i){
  i.classList.add('display-none')
  i.classList.remove('display-block')
}
function displayBlockValue(i){
  i.classList.add('display-block')
  i.classList.remove('display-none')
}
