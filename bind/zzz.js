let Button = function(content) { 
  this.content = content;
  // this.var2 = var2
};

Button.prototype.click = function() {
  console.log(this.content + ' clicked');
}

var myButton = new Button('OK');
myButton.click();


var looseClick = myButton.click;
looseClick();

var boundClick = myButton.click.bind(myButton, 'slon');
boundClick();



// Example showing binding some parameters
let sum = function(a, b, c) {
  return a + b + c;
};

var add5 = sum.bind(null, 4, 1);
console.log('Primjer= ' + add5(9));

