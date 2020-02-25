let currentResult = 0;

const rezultat = 0;

let logEntries = [];


function getUserNumberInput() {
  return  parseInt(userInput.value);
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

function ispisiRezultat(mathOperator, pocetnaVrijednost, enteredNumber) {
  calcDescription = `${pocetnaVrijednost} ${mathOperator} ${enteredNumber}`;
  outputResult(currentResult,calcDescription);
}

function calculateResult(calculationType) {
  const enteredNumber= getUserNumberInput()
  const pocetnaVrijednost = currentResult
  let mathOperator;
  // calcDescription = `${currentResult} + ${enteredNumber}`;
  // outputResult(currentResult,calcDescription);

  if (calculationType === 'DODAJ') {
    currentResult += enteredNumber;
    mathOperator = '+'
  } else if (calculationType === 'ODUZMI') {
    currentResult -= enteredNumber;
    mathOperator = '-'
  } else if (calculationType === 'MNOZI') {
    currentResult *= enteredNumber;
    mathOperator = '*'
  } else if (calculationType === 'DIJELI') {
    currentResult /= enteredNumber;
    mathOperator = '/'
  }

  ispisiRezultat (mathOperator, pocetnaVrijednost, enteredNumber);
  writeToLog(calculationType, pocetnaVrijednost, enteredNumber, currentResult)
}

function addNumber () {
  calculateResult('DODAJ');
  // const enteredNumber= getUserNumberInput()
  // pocetnaVrijednost = currentResult
  // calcDescription = `${currentResult} + ${enteredNumber}`;
  // currentResult = currentResult + enteredNumber;
  // // outputResult(currentResult,calcDescription);
  // ispisiRezultat (mathOperator, pocetnaVrijednost, enteredNumber);
  // writeToLog('ADD', pocetnaVrijednost, enteredNumber, currentResult)
}

function oduzmi () {
  calculateResult('ODUZMI');
  // const enteredNumber= getUserNumberInput();
  // pocetnaVrijednost = currentResult;
  // calcDescription = `${currentResult} - ${enteredNumber}`;
  // currentResult -= enteredNumber;
  // outputResult(currentResult,calcDescription);
  // writeToLog('SUBSTRACT', pocetnaVrijednost, enteredNumber,currentResult)
}

function umnozak() {
  calculateResult('MNOZI');
  // const enteredNumber= getUserNumberInput();
  // pocetnaVrijednost = currentResult;
  // calcDescription = `${currentResult} * ${enteredNumber}`;
  // currentResult =  currentResult * enteredNumber;
  // outputResult(currentResult,calcDescription);
  // writeToLog('MNOZI', pocetnaVrijednost, enteredNumber,currentResult)
}

function podjeli (){
  calculateResult('DIJELI');
  // const enteredNumber= getUserNumberInput()
  // pocetnaVrijednost = currentResult;
  // calcDescription = `${currentResult} / ${enteredNumber}`;
  // currentResult =   currentResult / enteredNumber;
  // outputResult(currentResult,calcDescription);
  // writeToLog('DIJELI', pocetnaVrijednost, enteredNumber,currentResult)
}


addBtn.addEventListener('click', addNumber);
subtractBtn.addEventListener('click', oduzmi);
multiplyBtn.addEventListener('click', umnozak);
divideBtn.addEventListener('click', podjeli);

