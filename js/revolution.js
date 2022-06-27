const revolutionList = document.querySelectorAll('#revolution')
let pausedFlag = false;

revolutionList.forEach(function (e) {
  e.addEventListener('click', function () {
    // console.log(e.children[0].children[0])
    let iconWrap = e.children[0];
    let iconBox = e.children[0].children[0];
    console.log(iconBox)
    if (!pausedFlag) {
      iconWrap.style.animationPlayState = 'paused';
      iconBox.style.animationPlayState = 'paused';
      pausedFlag = true;
      iconBox.children[1].classList.add('display-block')
      iconBox.children[1].classList.remove('display-none')
    } else {
      iconWrap.style.animationPlayState = 'running';
      iconBox.style.animationPlayState = 'running';
      pausedFlag = false;
      iconBox.children[1].classList.add('display-none')
      iconBox.children[1].classList.remove('display-block')
    }
  })
})