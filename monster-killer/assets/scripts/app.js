const ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 14 
const STRONG_ATTACK_VALUE = 17
const HEAL_VALUE = 20
let choosenMaxLife = 100;

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;
let hasBonusLive = true;


adjustHealthBars(choosenMaxLife);

function reset() {
  currentMonsterHealth = choosenMaxLife;
  currentPlayerHealth = choosenMaxLife;
  resetGame(choosenMaxLife);
}

function attackHandler() {
 checkWinner(ATTACK_VALUE);
}

function strongAttackHandler() {
  checkWinner(STRONG_ATTACK_VALUE);
}

function checkWinner (attack) {
  const monsterDamage = dealMonsterDamage(attack);
  currentMonsterHealth = currentMonsterHealth - monsterDamage
  endRound() 
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth = currentPlayerHealth - playerDamage

 if (currentPlayerHealth <= 0 && hasBonusLive) {
   hasBonusLive = false;
   removeBonusLife();
   currentPlayerHealth = initialPlayerHealth;
   alert('Dobio novi zivot');
   setPlayerHealth(initialPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0 ) {
    alert('You Won!');
    reset();
  } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0) {
    alert('You lost');
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
   alert('Nerjeseno');
    reset();
  }
}

function healPlayerHandler () {
  let healValue;
  if( currentPlayerHealth + HEAL_VALUE > choosenMaxLife) {
    alert(" You can't heal more than your max initial health");
    healValue = choosenMaxLife - currentPlayerHealth
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth = currentPlayerHealth + healValue;
  console.log(currentPlayerHealth);
  endRound()
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler );


