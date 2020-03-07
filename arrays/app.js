const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = Array(5, 2);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);


const personalData = [30, 'Max', {moreDetail: []}];

//*************************************** */
const analyticsData = [[1, 1.6], [-5.4, 2.1]];
for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}
//********************************** */
console.log(personalData[1]);

let polje =  ['sport', 'Cooking','slon','macka'];
console.log('Pocetno polje= ' + polje);

const hobbies = polje.slice();
hobbies.push('Reading');
console.log(hobbies);

hobbies.unshift('prvo mjesto');
console.log(hobbies);

// oduzima zadnju vrijednost polja
const poppedValue = hobbies.pop();
console.log(hobbies);

// oduzima prvu vrijednost polja
hobbies.shift();
console.log(hobbies);

//
let removeElement= hobbies.splice(0,1)
console.log(removeElement);

// brise poslije 1 indexa sve ostalo
hobbies.splice(1);
console.log(hobbies);

// minus oznacuje kretanje od kraja polja 
console.log('Polje =' + polje);
let primjer = polje.splice().splice(-2,2);
console.log(primjer);



const testResults = [1, 2, 3, 4, 5, 6, 10.99, 17];
const storedResultsPoz = testResults.slice(2);
const storedResultsneg = testResults.slice(-3,-1);

testResults.push(7);
// slice sluzi za iradu kopije polja
console.log('storedResultsPoz= ' +  storedResultsPoz);
console.log('storedResultsneg= ' + storedResultsneg);

// CONCENATE automatski radi kopiju
let storedResults_CONCAT = testResults.concat([3.99, 2]);
console.log(storedResults_CONCAT)
storedResults_CONCAT = testResults.concat(polje);
console.log(storedResults_CONCAT)

// pronalazi index vrijednosti...
console.log(polje.indexOf('slon'))


const personData = [{ name: 'Max' }, { name: 'Manuel' },{ name: 'slon' }];

// pronalzi ima li vrijednosti u nizu ako ima TRUE ako ne FALSE
console.log(testResults.includes(10.99))

// ovo ne prolazi ne moze naci objekt!
console.log(personData.indexOf({ name: 'Manuel' }));


const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});

console.log('manuel= ' + manuel);
manuel.name = 'Anna';
console.log(manuel, personData);

// pronalazi index
const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'slon';
});
console.log(maxIndex);

