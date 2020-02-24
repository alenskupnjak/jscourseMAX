let currentResult = 0;

const rezultat = 0;

//   prvi način komentara

/*

Komentar za više linija

*/


function getUserNumberInput() {
  return parseInt(userInput.value);
}


function addNumber () {
  const enteredNumber= getUserNumberInput()
  calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult += enteredNumber;
  outputResult(currentResult,calcDescription);
}

function oduzmi () {
  const enteredNumber= getUserNumberInput()
  calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult -= enteredNumber;
  outputResult(currentResult,calcDescription);
}

function umnozak() {
  const enteredNumber= getUserNumberInput()
  calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult *= enteredNumber;
  outputResult(currentResult,calcDescription);
}

function podjeli (){
  const enteredNumber= getUserNumberInput()
  calcDescription = `${currentResult} / ${enteredNumber}`;
  currentResult /= enteredNumber;
  outputResult(currentResult,calcDescription);
}


addBtn.addEventListener('click', addNumber);
subtractBtn.addEventListener('click', oduzmi);
multiplyBtn.addEventListener('click', umnozak);
divideBtn.addEventListener('click', podjeli);