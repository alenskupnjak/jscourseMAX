class AgedPerson {
  printAge() {
    console.log(this.age);
  }
  printNesto() {
    console.log('slon');
  }
}

class Person extends AgedPerson {
  name = 'Alen';
  a = 'vv';

  constructor() {
    super();
    this.age = 30;

  }

  // greet() {
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
  //   );
  // }

  // ovo rijesenje zauzima vise memorije!!!
  greet = () => {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' greet 2'
    );
  }
}

// *************************************** */
// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
//   this.printNesto = function() {
//     console.log('slon');
//   }
// }

// Person.desc = function() {
// console.log('kreiram nesto');
// }

// Person.prototype.printAge = function(){
//     console.log('alen');
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };
// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// p.printNesto();
// // console.log(p.__proto__);
// console.log(p);

// console.dir(Object.prototype);
// console.dir(p.desc);

const p = new Person();
console.log(p);
const p2 = new Person();
console.log(p.__proto__ === p2.__proto__);
console.log(p === p2);

const dugme = document.getElementById('btn');
dugme.addEventListener('click', p.greet)