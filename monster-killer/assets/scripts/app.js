const ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 14 
const STRONG_ATTACK_VALUE = 17
let choosenMaxLife = 100;

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;


adjustHealthBars(choosenMaxLife);

function attackHandler() {
 checkWinner(ATTACK_VALUE, MONSTER_ATTACK_VALUE);
}


function checkWinner ( attack, monster) {
  const monsterDamage = dealMonsterDamage(attack);
  currentMonsterHealth = currentMonsterHealth - monsterDamage
  const playerDamage = dealPlayerDamage(monster);
  currentPlayerHealth = currentPlayerHealth - playerDamage

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0 ) {
    alert('You Won!')
  } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0) {
    alert('You lost');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
   alert('Nerjeseno');
  }
}

function strongAttackHandler() {
  checkWinner(STRONG_ATTACK_VALUE, MONSTER_ATTACK_VALUE);
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler)


