const midWrap = document.getElementById('mid-wrap')
const doorWrap = document.getElementById('door-wrap');
const doorOpen = document.getElementById('door-mid');
const doorClose = document.getElementById('door-back');
const chattingBox = document.getElementById('chatting-wrap')
const h1Value = document.querySelector('h1')
const doorBox = document.getElementById('door-box')

let rotateValue = 0;
let chattingFlag = false;
let windowWidth = window.matchMedia('screen and (max-width: 750px)');
console.log(doorWrap)
if (windowWidth.matches) {
  doorOpen.addEventListener('click', function () {
    doorOpen.classList.toggle('toggle')
    setTimeout(function () {
      chattingBox.classList.add('display-flex')
      chattingBox.classList.remove('display-none')
      displayNoneValue(doorWrap)
      doorWrap.style.maxWidth = '0px'
      chattingBox.style.width = '100%'
    }, 1500);
  })
  doorBox.style.animationPlayState = 'paused';
} else {
  chattingBox.classList.add('display-flex')
  chattingBox.classList.remove('display-none')
  chattingFlag = true;
  midWrap.classList.add('display-flex')
  midWrap.classList.remove('display-block')
  doorWrap.style.justifyContent = 'center'
}

function displayNoneValue(i) {
  i.classList.add('display-none')
  i.classList.remove('display-block')
}

function displayBlockValue(i) {
  i.classList.add('display-block')
  i.classList.remove('display-none')
}

const upBtn = document.getElementById('up-btn')
const listBtnBox = document.getElementById('list-btn-box')
const btnBox = document.querySelector('#btn-box');
const chattingList = document.getElementById('chatting-list')

let upBtnFlag = false;
let chattingListMe = ['기획 의도', '컨셉', '이러한 이유']
let chattingListGolfOther = ['A-other', 'B-other', 'C-other']
let chattingListGameOther = ['A-other', 'B-other', 'C-other']

upBtn.addEventListener('click', function () {
  if (!upBtnFlag) {
    listBtnBox.style.height = `40%`;
    upBtnFlag = true;
  } else {
    listBtnBox.style.height = `10%`
    upBtnFlag = false;
  }
})

console.dir(chattingList)
console.log(document.querySelector('title').textContent)

if (document.querySelector('title').textContent === 'golf') {
  btnBox.addEventListener('click', event => {
    listBtnBox.style.height = `10%`;
    upBtnFlag = false;

    // console.log(parseInt(event.target.dataset.chatting))
    let chattingValue = parseInt(event.target.dataset.chatting);
    console.log(typeof chattingValue)

    const me = document.createElement('div');
    me.classList.add('pos-rela');
    me.id = 'me';
    const meIcon = document.createElement('div')
    meIcon.classList.add('pos-abso')
    meIcon.id = 'me-icon';
    me.appendChild(meIcon)

    const other = document.createElement('div');
    other.classList.add('pos-rela');
    other.id = 'other';
    const otherIcon = document.createElement('div')
    otherIcon.classList.add('pos-abso')
    otherIcon.id = 'other-icon';
    other.appendChild(otherIcon)

    me.innerHTML = chattingListMe[chattingValue]
    other.innerText = chattingListGolfOther[chattingValue]

    chattingList.appendChild(me)
    chattingList.scrollTop = chattingList.scrollHeight;
    setTimeout(function () {
      chattingList.appendChild(other)
    }, 1000)

    setTimeout(function () {
      console.log(chattingList.scrollTop)
      chattingList.scrollTop = chattingList.scrollHeight;
    }, 1000)
  })
} else if (document.querySelector('title').textContent === 'luckygame') {
  btnBox.addEventListener('click', event => {
    listBtnBox.style.height = `10%`;
    upBtnFlag = false;

    // console.log(parseInt(event.target.dataset.chatting))
    let chattingValue = parseInt(event.target.dataset.chatting);

    const me = document.createElement('div');
    me.classList.add('pos-rela');
    me.id = 'me';
    const meIcon = document.createElement('div')
    meIcon.classList.add('pos-abso')
    meIcon.id = 'me-icon';
    me.appendChild(meIcon)

    const other = document.createElement('div');
    other.classList.add('pos-rela');
    other.id = 'other';
    const otherIcon = document.createElement('div')
    otherIcon.classList.add('pos-abso')
    otherIcon.id = 'other-icon';
    other.appendChild(otherIcon)

    me.innerHTML = chattingListMe[chattingValue]
    other.innerText = chattingListGameOther[chattingValue]

    chattingList.appendChild(me)
    chattingList.scrollTop = chattingList.scrollHeight;
    setTimeout(function () {
      chattingList.appendChild(other)
    }, 1000)

    setTimeout(function () {
      chattingList.scrollTop = chattingList.scrollHeight;
    }, 1000)
  })
}