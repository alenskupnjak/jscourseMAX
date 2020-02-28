const ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 14 
const STRONG_ATTACK_VALUE = 17
const HEAL_VALUE = 20
let choosenMaxLife = 100;

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;


adjustHealthBars(choosenMaxLife);

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
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth = currentPlayerHealth - playerDamage
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0 ) {
    alert('You Won!')
  } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0) {
    alert('You lost');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
   alert('Nerjeseno');
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


