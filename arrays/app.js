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

console.log('************************************************************* L 192  find, findindex ')
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

console.log('************************************************************* L 193  includes()')
console.log(testResults.includes(10.99))


console.log('************************************************************* L 194  forEach')
const poljeSaPodacima = [10.99, 5.99, 3.99, 6.59, -12.3, 17, 8.88, 5.99];
const poljeString = ['N', 'i', 'z', 'S', 'l', 'o','v', 'a'];
const tax = 0.19;
let poljeA = poljeSaPodacima.slice(); 
console.log('pocetno poljeA = ' + poljeA );

let poljeB = poljeSaPodacima.slice();
let poljeC = poljeSaPodacima.slice();
console.log('pocetno poljeC = ' + poljeC  );
let poljeD = poljeSaPodacima.slice();
console.log('pocetno poljeD = ' + poljeD  );
let poljeE = poljeSaPodacima.slice();
console.log('pocetno poljeD = ' + poljeE  );

for (const data of poljeSaPodacima) {
  poljeA.push(data * (1 + tax));
}
console.log('poljeSaPodacima =   ' + poljeSaPodacima );
console.log('Rezultat nakon funkcije sa pocetnim poljem= ' + poljeA); 

poljeSaPodacima.forEach((data, indexKakoHocesNazovi, data1) => {
  const priceObj = { index: indexKakoHocesNazovi, imePolje: data * (1 + tax) };
  poljeB.push(priceObj);
});
console.log(poljeSaPodacima, poljeB);


console.log('******************************************************************* L 195  map() (isto kao i forEach, ali krace L194)')
const taxAdjustedPrices = poljeSaPodacima.map((data, xxx, prices) => {
  const priceObj = { index: xxx, objekt1: data * (1 + tax), objekt2: 'slon' };
  return priceObj;
});
console.log(poljeSaPodacima, taxAdjustedPrices);


const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const transformedArray = originalArray.map(obj => obj.price); // produces [10.99, 5.99, 29.99]
console.log(transformedArray);

console.log('******************************************************************* L 196  sort()/reverse() (isto kao i forEach, ali krace L194) ')
const sortedPoljeSapodacima = poljeC.sort((a,b) => {
  if (a>b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1
  }
});
console.log(poljeC, sortedPoljeSapodacima);
console.log(sortedPoljeSapodacima.reverse());


console.log('****************************************************************** L 197  filter() radi kopiju')
console.log('Početna vrijednost= ' + poljeD);
let filteredArray =poljeD.filter((data, opcija1, opcija2)=>{
  console.log('opcija1=' + opcija1)
  console.log('opcija2= '+ opcija2)
  return data > 6
})
console.log(poljeD, filteredArray);
console.log('ili isto rijesenje jednostavnije!!!!');
filteredArray = poljeD.filter(data => {
  data > 6
})
console.log(poljeD, filteredArray);


console.log('**************************************************************** L 199  reduce() **********')
let sum = poljeE.reduce((prevValue, curValue, opcija1, opcija2) => {
  // opcija1 je index, opciju2 se gotovo nikad koristi
  return prevValue + curValue}, 100);
console.log('Suma na prvi nacin= ' + sum);

sum = 0;
poljeSaPodacima.forEach((data) => {
  sum += data;
})
console.log('Suma na drugi nacin= '+ sum);

let text = poljeString.reduce((prevValue, curValue, opcija1, opcija2) => {
  // opcija1 je index, opciju2 se gotovo nikad koristi
  return prevValue + curValue}, 'pocetnavrijednost   ');
console.log('Suma na prvi nacin= ' + text);

const poljePrimjer = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
sum = poljePrimjer.reduce((sumVal, curVal) => sumVal + curVal.price, 0); // => 46.97
console.log('Suma iz objekta polja (originalArray)= ' + sum);


console.log('**************************************************************** L 201  split(), join() **********')
let dataLekcija201 = 'new york;10.99;2000';
let transformedData = dataLekcija201.split(';');
console.log(transformedData)
transformedData[1] = parseInt(transformedData[1]);
console.log(transformedData);

dataLekcija201 = 'new york_10.99_2000';
transformedData = dataLekcija201.split('_');
console.log(transformedData)

dataLekcija201 = 'new york+10.99+2000';
transformedData = dataLekcija201.split('+');
console.log(transformedData)

dataLekcija201 = 'new york*10.99*2000';
transformedData = dataLekcija201.split('*');
console.log(transformedData)


const nameFragements = ['Max', 'Schwarz', 'Slon', 'Kokos'];
let name = nameFragements.join('+++');
console.log(name);
name = nameFragements.join('*');
console.log(name);

console.log('**************************************************************** L 202  spread(), *********')
console.log('tri točkice (...) zovemo spread operator. kod kopiranja polja ili niza radi  novu kopiju koje nema vise veze sa orginalom. Kod objekata NE!')

let kopijanameFragements = [...nameFragements];
kopijanameFragements.push(100);

console.log(nameFragements, kopijanameFragements);

console.log(Math.min(...poljeSaPodacima));


const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 },{ name: 'Mirela', age: 45 }];
console.log('Kod objekta kopira se referenca adrese u memoriji, a ne vrijednost!') 
console.log('Zato se kod promjene podataka u kopiji mijenja vrijednost orginala!!!!') 

let copiedPersons = [...persons]
console.log(copiedPersons) 

persons.push({ name: 'Anna', age: 100 });
persons[1].age = 49;
console.log('Ne valja, ostala su objekti povezani!!', persons, copiedPersons);

console.log('Rijesenje za kopiranje objekta u novo polje bez medusobnih veza');
copiedPersons = persons.map(data => ({
  name: data.name,
  age: data.age,
 // dataNesto: Math.random()
}));

console.log(copiedPersons)
persons[1].age = 201;
console.log('Riješenje kako izraditi kopiju polja objekata', persons, copiedPersons);


console.log('**************************************************************** L 203 *********')
let nameData = ['Max', 'Schwarz', 'Mr', 30];
let firstName = nameData[0];
let lastName = nameData[1];

// druga opcija
let [ firstName1, lastName1, ...sveOstaluUPolju ] = nameData;
console.log(firstName1, lastName1, sveOstaluUPolju);

console.log('**************************************************************** L 205 sets - garantira unique Value *********')
const ids = new Set(['Hi', 'from', 'set!', 16, -2, 'kokos']);
ids.add(2);
console.log(ids)

if (ids.has('Hi')) {
  ids.delete('Hi');
}
console.log(ids.entries());
console.log(ids.values());

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
for (const data of ids.values()) {
  console.log(data);
}


console.log('**************************************************************** L 206 Maps - *********')
const person1 = { name: 'Ema' };
const person2 = { name: 'Manuel' };

const mapData = new Map([[person1, [{ datum: 'yesterday', price: 10 }]]]);
console.log(mapData);


mapData.set(person2, [{ datum: 'two weeks ago', price: 100 }]);
console.log(mapData);

console.log(mapData.get(person1));

for(const data of mapData) {
  console.log(data)
}
console.log(mapData.get(person1));


let daj = mapData.get(person1).map(data=>{
  console.log(data.datum)
})

for (const [key, value] of mapData.entries()) {
  console.log(key, value);
}

for (const key of mapData.keys()) {
  console.log(key);
}

for (const value of mapData.values()) {
  console.log(value);
  value.map(data => {
    console.log(data.datum, '+', data.price)
  })
}

mapData.forEach(data=>{
  data.map(d=>{
    console.log(d.datum, ' = ajmooo ',  d.price)
  })
})

//*********************************zaratak  *********************************************/

const brojke = [1, -22, 100, 4, 5, 6];

const numsGreater5 = brojke.filter(data => {
  return data > 5});
console.log(numsGreater5);


const mappedNumbers = brojke.map(data => {
  return ({ num: data })}
);
console.log(mappedNumbers);


const multiplication = brojke.reduce(
  (curResult, curValue) => {
    return curResult * curValue}, 1);
console.log(multiplication);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}
console.log(findMax(...brojke));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}
const [min, max] = findMinMax(...brojke);
console.log(min, max);


const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);
console.log(userIds);




