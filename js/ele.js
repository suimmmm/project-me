const mouseBox = document.getElementById('mouse-box');
window.addEventListener('load', function(){
  setTimeout(function(){
    mouseBox.style.height = '80%';
  }, 1000);
})

const openLink = document.getElementById('open');
const menuBtn = document.getElementById('menu-btn');
const menuWrap = document.getElementById('menu-wrap');
const menuItem = document.querySelector('ul');
let menuFlag = false;
let menuItemFlag = false;
let dataList = ['me.html','golf.html','luckygame.html','plan.html'];
let colorList = ['#493457', '#2E5F42', '#102742', '#2C2C2C'];
const tongue = document.getElementById('tongue');

menuBtn.addEventListener('click', function(){
  menuBoxFlag();
})
console.log(openLink.href)

openLink.addEventListener('click', function(){
  console.log('?')
})

menuItem.addEventListener('click',function(event){
  // console.log(typeof event.target.dataset.btn);
  let btnNum = parseInt(event.target.dataset.btn);
  openLink.href='http://127.0.0.1:5500/'+ dataList[btnNum];
  console.log(openLink.href)
  openLink.style.backgroundColor = `${colorList[btnNum]}`;
  menuItemFlag = true;
  menuBoxFlag();
})

function menuBoxFlag(){
  if(!menuFlag){
    menuBtn.textContent = '>';
    menuWrap.style.left = '0';
    mouseWidth('100%');
    tongue.children[0].classList.add('display-none');
    tongue.children[0].classList.remove('display-block');
    menuItemFlag = true;
    menuFlag = true;
    openLink.style.zIndex = '1'
    tongue.style.height = '30px';
    // console.log(menuFlag)
  }
  else{
    menuBtn.textContent = '<';
    menuWrap.style.left = '300px';
    menuFlag = false;
    // console.log(menuFlag)
    // console.log(mouseBox.children)
    if(menuItemFlag){
      mouseWidth(0);
      tongue.style.height = '150px';
      setTimeout(function(){
        openLink.style.zIndex = '4';
      },1000)
      tongue.children[0].classList.add('display-block');
      tongue.children[0].classList.remove('display-none');
      menuItemFlag = false;
    }
  }
}

function tongueChild(){
  if(menuItemFlag){
    tongue.children[0].classList.add('display-block');
    tongue.children[0].classList.remove('display-none');
  }
  else{
    tongue.children[0].classList.add('display-none');
    tongue.children[0].classList.remove('display-block');
  }
}

function mouseWidth(width){
  for(let j = 0; j < 2; j++){
    // console.log(j);
    mouseBox.children[j].style.width = width;
  }
}