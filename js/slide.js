const cirBox = document.getElementById('cir-box');
const slideBtnBox = document.querySelector('#slide-btn-box')
const slideBtn = document.querySelectorAll('#btn')

let angleValue = 90;
let count = 0;
let basicTransform = 'translate(-50%, 60%)';

const rotateFunction = setInterval(intervalFunction, 3000);

function intervalFunction() {
  count++;
  cirBox.style.transform = `${basicTransform} rotate(${angleValue * count}deg)`
  cirBox.style.transition = 'transform 1s';

  clickBackColor();

  if (count === 4) {
    countChange();
    count = 0;
    slideBtn[count].style.backgroundColor = '#8A62A3';
  }
}

function countChange() {
  setTimeout(function () {
    cirBox.style.transform = `${basicTransform} rotate(-360)deg`;
    cirBox.style.transition = 'none';
    cirBox.style.transform = `${basicTransform} rotate(0deg)`;
  }, 1000)
}

function clickBackColor() {
  for (let j = 0; j < slideBtn.length; j++) {
    // console.log(j)
    if (count === j) {
      slideBtn[j].style.backgroundColor = '#8A62A3';
    } else {
      slideBtn[j].style.backgroundColor = '#D2B9E0';
    }
  }
}

slideBtnBox.addEventListener('click', event => {
  console.log(event.target.dataset.btn)
  let btnNum = parseInt(event.target.dataset.btn);
  console.log(btnNum);
  cirBox.style.transform = `${basicTransform} rotate(${angleValue * btnNum}deg)`
  slideBtn[btnNum].style.backgroundColor = '#8A62A3';
  slideBtn[count].style.backgroundColor = '#D2B9E0';

  count = btnNum - 1;

  setTimeout(function () {
    clearInterval(rotateFunction);
  }, 100)

  const rotateFunction = setInterval(intervalFunction, 3000);
})