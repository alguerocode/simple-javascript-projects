const VICTORY_POINT = 3;
const TRIES_GUESSES = 7;
let IS_RENDER =false;
class Helper {
  static randomOrder(element) {
    const randomNum = Math.random()
    if (randomNum < 0.3) {
      element.parentElement.style.order = 1;
    } else if (randomNum < 0.6) {
      element.parentElement.style.order = 2;
    } else {
      element.parentElement.style.order = 3;
    }
  }
}

class StartGame {
  constructor(button) {
    this.button = button;
  }
  renderStartGame(renderEventImages,restCoparator) {
    const arrImages = Array.from(document.querySelectorAll('img'))
    arrImages.forEach(el => {
      el.classList.add('opacity');
      Helper.randomOrder(el);
    })
    restCoparator()
    renderEventImages()
  }
}
class Comparator {
  constructor(triesGuesses) {
    this.triesGuesses = triesGuesses;
    this.arrImages = Array.from(document.querySelectorAll('img'));
    this.compared = false;
    this.truthyPick = 0;
    this.imageClass;
    this.imgId;
  }
  restCoparator() {
    this.compared = false;
    this.triesGuesses = TRIES_GUESSES;
    this.truthyPick = 0;
    this.imageClass = null;
    this.imgId = null;
    this.isRender =false;
  }
  imageClickHandler(imgElement) {
    if (this.triesGuesses === 0) {
      alert('you lose :(')
    } else if (this.compared === false) {
      imgElement.classList.remove('opacity');
      this.imageClass = imgElement.className;
      this.imgId = imgElement.id;
      this.compared =true;
    }else if(this.compared ===true && this.imgId === imgElement.id){
      
      return;
    } else if (this.compared === true && imgElement.classList.contains(this.imageClass)
      && ((parseInt(this.imgId) + 1 === parseInt(imgElement.id) || parseInt(this.imgId) - 1 === parseInt(imgElement.id)))) {
      imgElement.classList.remove('opacity')
      imgElement.removeEventListener('click',this.eventFunction)
      document.getElementById(this.imgId).removeEventListener('click',this.eventFunction)
      this.compared = false;
      this.triesGuesses--;
      this.truthyPick++
      this.imgId = null;
      this.imageClass = null;

      if (this.truthyPick === VICTORY_POINT) {
        alert('you win')
      }
    } else {
      document.getElementById(`${imgElement.id}`).classList.remove('opacity');
      setTimeout(()=>{ document.getElementById(`${this.imgId}`).classList.add('opacity');
      document.getElementById(`${imgElement.id}`).classList.add('opacity')},500)
      console.log('welcome')
      this.imageClass = null;
      this.compared = false;
      this.triesGuesses--;
      console.log(this.triesGuesses)
      console.log(this.truthyPick)
    }
    document.querySelector('span').textContent = this.triesGuesses;
  }
  renderEventImages() {
    if(!IS_RENDER){
      this.arrImages.forEach(el => {
      el.addEventListener('click',this.imageClickHandler.bind(this,el))
      IS_RENDER =true;
    })
    }
  }
}
const startGame = new StartGame(document.getElementById('start'));
const comparator = new Comparator(TRIES_GUESSES);
startGame.button.addEventListener('click', startGame.renderStartGame.bind(null,comparator.renderEventImages.bind(comparator)
,comparator.restCoparator.bind(comparator))) 
