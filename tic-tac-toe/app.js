const StartBtn = document.querySelector('button');
const XScoreScreen =document.querySelector('.X')
const OScoreScreen =document.querySelector('.O')
let X_positions = [];
let O_positions = [];
let playerTurn;
let XScore =0;
let OScore =0;
let gameRound = 0;
let winner;
let isGameStart = false;
function gameSet() {
  playerTurn = null
  gameRound = 0;
  O_positions = [];
  X_positions = [];
  document.querySelectorAll('div').forEach(el => {
    el.remove()
  })
}
function renderClickEventElement(type) {
  const playerEl = document.createElement('div')
  playerEl.textContent = type;
  playerEl.classList.add(`${type}`);
  return playerEl;

}
function checkIsSamePlace(elementId) { //change
  if (X_positions.includes(elementId) || O_positions.includes(elementId)) {
    return false;
  } else {

    return true;
  }
}

function checkGameWinner(type) {
  const typeArr = type == 'X' ? X_positions : O_positions;
  if((typeArr.includes('1') && typeArr.includes('2') && typeArr.includes('3'))||
    (typeArr.includes('4') && typeArr.includes('5') && typeArr.includes('6')) ||
    (typeArr.includes('7') && typeArr.includes('8') && typeArr.includes('9')) ||
    (typeArr.includes('1') && typeArr.includes('4') && typeArr.includes('7')) ||
    (typeArr.includes('2') && typeArr.includes('5') && typeArr.includes('8')) ||
    (typeArr.includes('3') && typeArr.includes('6') && typeArr.includes('9')) ||
    (typeArr.includes('1') && typeArr.includes('5') && typeArr.includes('9')) ||
    (typeArr.includes('3') && typeArr.includes('5') && typeArr.includes('7'))) {
    winner = type;
    return true;
  }
}

function renderEventClick() {
  if (!isGameStart) {
    const tableData = document.querySelectorAll('td');
    tableData.forEach(el => {
      el.addEventListener('click', event => {
        event.preventDefault();
        if (checkIsSamePlace(el.id)) {
          gameRound++;
          const playerArr = playerTurn == "X" ? X_positions : O_positions;
          playerArr.push(el.id);
          const element = renderClickEventElement(playerTurn);
          el.append(element);
          if (checkGameWinner(playerTurn)) {
            alert(`the winner is ${playerTurn}`)
            if(playerTurn =='X'){
              XScore++
              XScoreScreen.textContent =XScore;
            }else{
              OScore++;
              OScoreScreen.textContent =OScore;
            }
            gameSet()
          };
          if (gameRound === 9) {
            alert(`there are no winner`);
            gameSet()
          }
          playerTurn = playerTurn == "X" ? 'O' : "X";
        }
      })
    })
  }
  isGameStart =true;
}

function startGameHandler() {
  gameSet()
  playerTurn = prompt('who is the first X OR O');
  renderEventClick()
}
StartBtn.addEventListener('click', startGameHandler);