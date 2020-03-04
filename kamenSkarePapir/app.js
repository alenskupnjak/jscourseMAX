const startGameBtn = document.getElementById('start-game-btn');

let vrijednostPC
let vrijednostCovjek
let rezultatIgre


const getPC = () => {
  let PC = Math.random();
  if ( PC < 0.34)  {
    return 'KAMEN';
    } else if ( PC < 0.67) {
    return 'SKARE';
    } else {
    return'PAPIR';
   }
}

const getCovjek = ()=> {
  const covjek = prompt('Odabri izmedu Skare, kamena i papira','').toUpperCase();
 if ( covjek !== 'KAMEN' &&
      covjek !== 'SKARE' &&
      covjek !== 'PAPIR') {
        return 'KAMEN';
    } else {
      return covjek;
    }
}

const rezultat = (PC, covjek) => {
  if (PC  == covjek) {
    return 'Neriješeno'
} else if ( PC  == 'KAMEN' && covjek == 'SKARE' || 
            PC  == 'SKARE' && covjek == 'PAPIR' ||
            PC  == 'PAPIR' && covjek == 'KAMEN') 
{       return 'Pobjeda PC'
} else {
        return 'Pobjeda Covjek'
}
}

const start = () => {

 const izborPC = getPC();
 const izborCovjek = getCovjek();
 const rez = rezultat(izborPC, izborCovjek);

 let poruke =` Ti si odabrao ${izborCovjek}, PC je odabrao ${izborPC}, stoga je rezultat igre: ${rez}`;

 alert(poruke);


}


startGameBtn.addEventListener('click', start);
