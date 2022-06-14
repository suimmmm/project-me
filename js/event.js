const door = document.querySelectorAll('#door');

window.addEventListener('load', function(){
  for(let i=0; i < door.length; i++){
    door[i].style.transition = '5s';
    door[i].style.width = '10%';
  }

  setTimeout(function(){
    console.log('?')
    location.href= './main.html';
  }, 7000)
})