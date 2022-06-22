// const revolutionBox = document.getElementById('revolution-box')
// let revolutionValue = ['plan', 'design', 'framework', 'code', 'fix'];
const revolutionList = document.querySelectorAll('#revolution')
let pausedFlag = false;

revolutionList.forEach(function(e){
  e.addEventListener('click', function(){
    // console.log(e.children[0].children[0])
    let iconWrap = e.children[0];
    let iconBox = e.children[0].children[0];
      if(!pausedFlag){
        iconWrap.style.animationPlayState = 'paused';
        iconBox.style.animationPlayState = 'paused';
        pausedFlag = true;
        iconBox.children[0].classList.add('display-block')
        iconBox.children[0].classList.remove('display-none')
      }
      else{
        iconWrap.style.animationPlayState = 'running';
        iconBox.style.animationPlayState = 'running';
        pausedFlag = false;
        iconBox.children[0].classList.add('display-none')
        iconBox.children[0].classList.remove('display-block')
      }
  })
})