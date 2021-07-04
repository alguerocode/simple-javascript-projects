const player = document.querySelector('div');
let X = 50;
let Y = 50;
window.addEventListener('keydown', (event) => {
  console.log(event.key)
  if (event.key === 'ArrowRight') {
    X+=8;
    player.style.left=`${X}px`;
  } else if (event.key == 'ArrowLeft') {
    X-= 8;
    player.style.left =`${X}px`;
  } else if(event.key == 'ArrowDown'){
    Y+=8;
    player.style.top = `${Y}px`
  } else if(event.key == 'ArrowUp'){
    Y-= 8
    player.style.top = `${Y}px`
  }
})