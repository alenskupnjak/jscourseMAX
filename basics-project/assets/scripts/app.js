let currentResult = 0;

const rezultat = 0;

let logEntries = [];

//   prvi način komentara

/*

Komentar za više linija

*/


function getUserNumberInput() {
  return userInput.value;
}

function writeToLog(operacija, prjasnjiRezultat, dodaniBroj, rezultat){
  const logUlaz= {
    operacija: operacija,
    prjasnjiRezultat: prjasnjiRezultat,
    uneseniBroj: dodaniBroj,
    rezultat: rezultat
  };
  logEntries.push(logUlaz);
  console.log(logEntries)

}


function addNumber () {
  const enteredNumber= getUserNumberInput()
  pocetnaVrijednost = currentResult
  calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult,calcDescription);
  writeToLog('ADD', pocetnaVrijednost, enteredNumber, currentResult)
}

function oduzmi () {
  const enteredNumber= getUserNumberInput();
  pocetnaVrijednost = currentResult;
  calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult,calcDescription);
  writeToLog('SUBSTRACT', pocetnaVrijednost, enteredNumber,currentResult)
}

function umnozak() {
  const enteredNumber= getUserNumberInput();
  pocetnaVrijednost = currentResult;
  calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult =  currentResult * enteredNumber;
  outputResult(currentResult,calcDescription);
  writeToLog('MULTI', pocetnaVrijednost, enteredNumber,currentResult)
}

function podjeli (){
  const enteredNumber= getUserNumberInput()
  pocetnaVrijednost = currentResult;
  calcDescription = `${currentResult} / ${enteredNumber}`;
  currentResult =   currentResult / enteredNumber;
  outputResult(currentResult,calcDescription);
  writeToLog('DIVIDE', pocetnaVrijednost, enteredNumber,currentResult)
}


addBtn.addEventListener('click', addNumber);
subtractBtn.addEventListener('click', oduzmi);
multiplyBtn.addEventListener('click', umnozak);
divideBtn.addEventListener('click', podjeli);

