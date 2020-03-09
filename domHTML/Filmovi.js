let addMovieModal = document.querySelector('#add-modal') // prvi moguci nacin za CSS klasu obavezno treba dodati hash # !!!!!
console.log(addMovieModal)
addMovieModal = document.body.children[1]  // drugi moguci nacin!!!!!
console.log(addMovieModal)
addMovieModal = document.getElementById('add-modal')  // treci nacin, nesto bolji nacin
console.log(addMovieModal)
//*************************************************************************************
let startAddMovieButton = document.body.children[3].lastElementChild; // drugi moguci nacin!!!!!
console.log(startAddMovieButton)  
startAddMovieButton = document.querySelector('header').lastElementChild; // treci nacin, nesto bolji nacin
console.log(startAddMovieButton)
startAddMovieButton = document.querySelector('header button')
console.log(startAddMovieButton)
//*******************************************************************************************************
let confirmAddMovieButton = document.getElementById('add-modal').querySelector('.btn--passive').nextElementSibling;
console.log(confirmAddMovieButton)
confirmAddMovieButton = document.getElementById('add-modal').querySelector('.btn--success');
console.log(confirmAddMovieButton)
//**************************************************************************************************** */
let noDialogDelete = document.getElementById('noDialogDelete')
let yesDialogDelete = document.getElementById('yesDialogDelete')


const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = document.getElementById('add-modal').querySelector('.btn--passive');
let userInput = document.getElementById('title'); console.log(userInput)
userInput = document.getElementById('add-modal').querySelectorAll('input'); console.log(userInput)
const entryTeyxtSection = document.getElementById('entry-text')
const deleteDialog = document.getElementById('delete-modal');
let indexBrisi = 0,
moviesData = [];

// funkcije  *********************
const updateUI = () => {
  if (moviesData.length === 0 ) {
    entryTeyxtSection.style.display = 'block'
  } else {
    entryTeyxtSection.style.display = 'none'
  }
}


const deleteMovie = (movieId) => {
  console.log('u delete movie sam Id= ' + movieId)
  let movieIndex = 0;
  for (const data of moviesData) {
    if (data.id === movieId) {
      break;
    }
    movieIndex ++;
  }
  moviesData.splice(movieIndex,1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  if (moviesData.length === 0) {
    entryTeyxtSection.style.display = 'block'
  }
}

const deleteMovieHandler = (movieId) => {
  indexBrisi = movieId
  deleteDialog.classList.add('visible')
  updateUI();
}

const cancelDialogeDelete = () => {
  deleteDialog.classList.toggle('visible')
}

const okDialogeDelete = () => {
  console.log('*** okDialogDelete ***')
  deleteMovie(indexBrisi);
  console.log(moviesData)
  deleteDialog.classList.toggle('visible')
}

const renderNewMovieElement = (id, title, image, rating) => {
  console.log('id=' + id)
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
      <img src="${image}" alt="${title}">
  </div>

  <div class="movie-element__info">
    <h2> ${title} <h2>
    <p> ${rating} /5 stars </p>
  </div>
  `

  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null,id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
  };


const toggleBackdrop = () =>{
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () =>{
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
}

const cancelAddMovie = () => {
  toggleMovieModal();
  claerUserInputs();
}

const claerUserInputs = () => {
 for (const data of userInput) {
   data.value = ''
 }
}

const backdropClickHandler = () => {
  toggleMovieModal();
}

const addMovieHandler = ()=> {
  const titleValue = userInput[0].value;   console.log('titleValue=' + titleValue)
  const imageUrlValue = userInput[1].value; console.log(imageUrlValue)
  const ratingValue = userInput[2].value; console.log(ratingValue)

  if (titleValue.trim() === '' || 
      imageUrlValue.trim() === '' ||
      ratingValue.trim() === '' ||
      ratingValue < 1 || ratingValue >5) {
        alert('Plaese enter valid value')
        return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  }
  moviesData.push(newMovie); console.log(moviesData);
  toggleMovieModal();
  claerUserInputs();
  updateUI();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
}


startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie)
confirmAddMovieButton.addEventListener('click', addMovieHandler)
noDialogDelete.addEventListener('click', cancelDialogeDelete)
yesDialogDelete.addEventListener('click', okDialogeDelete)