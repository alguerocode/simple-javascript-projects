const calcUI = document.querySelector('.calc-screen')
const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.result');


calcUI.classList.contains
let calculatorARR = [];
let result;
let strNumbers ='';
let isOperation = false;
function upadatUI(selection) {
  calcUI.textContent += selection;
}
function setOperation() {
  clearUIscreen();
  calculatorARR = [];
  strNumbers = '';
  isOperation = false;
}
function clearUIscreen() {
  calcUI.textContent = '';
}
function claculator(clacArray) {
  if (clacArray.length == 1) {
   return clacArray[0];
  } else if (clacArray[1] == '+') {
    operation = '+'
    return result + claculator(clacArray.slice(2))
  } else if (clacArray[1] == '-') {
    operation = '-'
    return result - claculator(clacArray.slice(2))
  } else if (clacArray[1] == '*') {
    operation = '*'
    return result * claculator(clacArray.slice(2))
  } else if(clacArray[1]=='/'){
    operation = '/'
    return result / claculator(clacArray.slice(2))
  }
}
function eventButton() {
  buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const selection = event.target;
      if (selection.textContent === '=') {
        calculatorARR.push(parseInt(strNumbers));
        if (calculatorARR[calculatorARR.length - 1] == '*' ||
          calculatorARR[calculatorARR.length - 1] == '/' ||
          calculatorARR[calculatorARR.length - 1] == '+' ||
          calculatorARR[calculatorARR.length - 1] == '- '
        ) {
          setOperation();
          return alert('error');
        }
        strNumbers = ''
        result =calculatorARR[0];
        resultContainer.textContent = claculator(calculatorARR)
        
        setOperation()
      } else if (selection.classList.contains('operation')) {
        if (isOperation == true) {
          alert('can not use two operation notation,use number');
        } else {
          calculatorARR.push(parseInt(strNumbers));
          strNumbers = '';
          calculatorARR.push(selection.textContent);
          isOperation = true;
          upadatUI(selection.textContent);
        }

      } else {
        strNumbers += selection.textContent;
        isOperation = false;
        upadatUI(selection.textContent)
      }
      console.log(calculatorARR)
    })
  })
}

eventButton()