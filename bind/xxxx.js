const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};


const showResult = (messageText, result, a, b, c) => {
  console.log(messageText + ' ' + result);
};

combine( showResult.bind(this, '1 The result after adding all numbers is:'),'ADD', 1, 5,'fdsa', -3, 6, 10);
combine( showResult.bind(this, '2 The result after adding all numbers is:'),'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
combine( showResult.bind(null, '3 The result after subtracting all numbers is:'),'SUBTRACT', 1, 10, 15, 20 );
