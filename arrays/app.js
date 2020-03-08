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

let polje =  ['sport', 'Cooking','slon','macka', 'mis'];
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

console.log('************* L 188  splice() radi kopiju *******************')
let removeElement= hobbies.splice(0,1)
console.log(removeElement);

// brise poslije 1 indexa sve ostalo
hobbies.splice(1);
console.log(hobbies);

// minus oznacuje kretanje od kraja polja 
console.log('Polje =' + polje);
let primjer = polje.splice().splice(-2,2);
console.log(primjer);

console.log('************* L 189  slice() radi kopiju *******************')
const testResults = [1, 2, 3, 4, 5, 6, 10.99, 17];
const storedResultsPoz = testResults.slice(2);
const storedResultsneg = testResults.slice(-3,-1);

testResults.push(7);
// slice sluzi za iradu kopije polja
console.log('storedResultsPoz= ' +  storedResultsPoz);
console.log('storedResultsneg= ' + storedResultsneg);

console.log('************* L 190  CONCAT radi kopiju *******************')
let storedResults_CONCAT = testResults.concat([3.99, 2]);
console.log('Početno polje= ' + testResults)
console.log('Rzultat = ' + storedResults_CONCAT)
storedResults_CONCAT = testResults.concat(polje);
console.log(storedResults_CONCAT)

console.log('************* L 191  indexOf *******************')
console.log('polje= '+ polje + '  Koji je index slon? Odpocetak krece  ' + polje.indexOf('slon'))
console.log('polje= '+ polje + '  Koji je index slon? Odkraja krece  ' + polje.lastIndexOf('slon'))

console.log('************* L 192  find, findindex *******************')
const personData = [{ name: 'Max' }, { name: 'Manuel' },{ name: 'slon' }];
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

console.log('************* L 193  includes *******************')
console.log(testResults.includes(10.99))

console.log('************* L 194  forEach *******************')
const poljeSaPodacima = [10.99, 5.99, 3.99, 6.59, -12.3, 17, 8.88];
const tax = 0.19;
let poljeA = []; 
let poljeB = [];

for (const data of poljeSaPodacima) {
  poljeA.push(data * (1 + tax));
}
console.log('pocetno polje =   ' + poljeSaPodacima );
console.log('Rezultat nakon funkcije sa pocetnim poljem= ' + poljeA); 

poljeSaPodacima.forEach((data, indexKakoHocesNazovi, data1) => {
  const priceObj = { index: indexKakoHocesNazovi, imePolje: data * (1 + tax) };
  poljeB.push(priceObj);
});
console.log(poljeSaPodacima, poljeB);

console.log('************* L 195  map() (isto kao i forEach, ali krace L194) **********')
const taxAdjustedPrices = poljeSaPodacima.map((data, xxx, prices) => {
  const priceObj = { index: xxx, yyy: data * (1 + tax) };
  return priceObj;
});
console.log(poljeSaPodacima, taxAdjustedPrices);

console.log('********** L 196  sort()/reverse() (isto kao i forEach, ali krace L194) **********')
const sortedPoljeSapodacima = poljeSaPodacima.sort((a,b) => {
  if (a>b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1
  }
});

console.log(sortedPoljeSapodacima);
console.log(sortedPoljeSapodacima.reverse());

