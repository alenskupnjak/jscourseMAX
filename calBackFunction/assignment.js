const sayHello = name => console.log('Hi ' + name);

const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Hard-coded!');
const sayHello4 = name => 'Hi ' + name;

sayHello('Max');
sayHello2('Max', 'Hello');
sayHello3();
console.log(sayHello4('Max'));

const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello5('Manuel');
sayHello5('Manuel', 'Hello');



/// calback function

function checkInput(cb, ...strings) {
  console.log('calback');
  console.log(strings);
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  // ovo se izvrsava samo ako je pronasao prazan zapis
  if (!hasEmptyText) {
    cb();
  }
}

checkInput( () => {console.log('All not empty!');},'Bok ','','adsfa','Not  xxx empty');
