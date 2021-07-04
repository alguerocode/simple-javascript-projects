const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK ='STRONG_ATTACK';
const LOG_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_OVER ="GAME_OVER";
const LOG_HEAL = "HEAL_PLAYER"

const inputVale =prompt("Enter the Health of there");
let chosenMaxLife = parseInt(inputVale);
let battleLog =[];

if(isNaN(inputVale) || chosenMaxLife <=0){
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event) {

}

function reset(){
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialplayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
   
  if(currentPlayerHealth <=0 && hasBonusLife){
    hasBonusLife =false;
    removeBonusLife();
    currentPlayerHealth = initialplayerHealth;
    setPlayerHealth(initialplayerHealth);
    alert('the bonus are saved you! you are lucky')
  } 
  else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('you won!');
    reset();
  }
  else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('you lose!');
    reset();
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('you draw!');
    reset();
  }
}

function attackMonster(attackType) {
  let maxDamage;
  if (attackType === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;

  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);

}
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);

}

function healPlayerhandler() {
  let healValue;
  if(currentPlayerHealth >=chosenMaxLife-HEAL_VALUE){
    alert("you can't heal more than max health!");
    healValue = chosenMaxLife - currentPlayerHealth ;
  }else{
    healValue  = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerhandler);