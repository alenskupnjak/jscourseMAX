const h1 = document.querySelector('h1');
const ul = document.querySelector('ul');
let li = document.querySelector('li');
console.log(h1)

h1text = h1.textContent;
h1class = h1.className;

console.log('******')
console.log(h1.lastChild)
console.log(ul.lastChild)

console.log('****** ---------- **********')

console.log(document.querySelector('li:last-of-type'))



//-------------------------------------------------------------------
li= document.querySelector('li:last-of-type')
console.log(li);
// li= document.querySelector('li')

console.log("document.querySelector('li:last-of-type').parentElement")
console.log(li.parentElement)

console.log("document.querySelector('li:last-of-type').nextSibling")
console.log(li.parentElement.nextSibling)

console.log("document.querySelector('li:last-of-type').parentElement.previousElementSibling")
console.log(li.parentElement.previousElementSibling)

console.log("document.querySelector('li:last-of-type').parentElement.nextElementSibling")
console.log(li.parentElement.nextElementSibling)

// ********************************************

console.log('**********************')

h1.textContent = 'Neki novi text 1'
console.log(h1)
h1.textContent = 'Neki novi text 2'
h1.style.color = 'red'
h1.style.backgroundColor = 'Blue'

console.log(h1)
console.log(h1text)
console.log(h1class)
console.dir(h1)

const  lista = document.querySelectorAll('li')

for ( const data of lista) {
  console.log( data)
}

console.log('---------')
const nadiChild = document.querySelector('ul')
let a = nadiChild.children
console.log(nadiChild.children[1])
console.log(nadiChild.children)
console.log(nadiChild.childNodes)


let ulDrugi = document.body
console.log(ulDrugi)
ulDrugi = document.body.firstElementChild
console.log(ulDrugi)
ulDrugi = document.body.firstElementChild.nextElementSibling
console.log(ulDrugi)




console.log('*******************************   styling   ******')

let sectionHTML = document.querySelector('section');
let button = document.querySelector('button');



button.addEventListener('click', () => {
  if ( sectionHTML.className === 'red-bg visible') {
    sectionHTML.className = 'red-bg invisible'
  } else {
    sectionHTML.className = 'red-bg visible'
  }
})

// section.style.backgroundColor = 'green'


console.log('********************   styling  DOM elements  ******')

let sectionDOMstyle = document.querySelectorAll('section')
let prviSection = sectionDOMstyle.item
console.log(sectionDOMstyle)
console.log(prviSection)

let div = document.querySelector('div')
div.insertAdjacentHTML('beforeend', '<p>ubacio prije <p>')
div.insertAdjacentHTML('afterend', '<p>ubacio poslije <p>')



let list = document.querySelector('ul')
let newLine = document.createElement('li')
let drugi = list.children[1]
console.log(drugi)

console.log(document.createElement('li'))

list.appendChild(newLine)
newLine.textContent = 'Evo me'

let newLine2 = newLine.cloneNode(true)
list.append(newLine, newLine2 )


let section = document.querySelector('section')
let section2 = section.children[1]
console.log(section2)


let vidi = document.querySelectorAll('li')
console.log(vidi)
console.log(vidi[3])






