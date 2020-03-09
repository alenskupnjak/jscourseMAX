const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies =  [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    // ako je visible ukljuceno , gasi ga
    movieList.classList.remove('visible')
  } else {
    movieList.classList.add('visible')
  }
  movieList.innerHTML = '';

  movies.forEach((data) => {
    const movieEl = document.createElement('li');
    movieEl.textContent = data.info.title;
    movieList.append(movieEl);
  })

}

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;
 
  // prolazi kroz vrijednosti i oduzima spaceve ako ih ima
  if (title.trim() | extraName.trim() | extraValue.trim()) {
   return
  };

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraName
    },
    id: Math.random()
  };

  movies.push(newMovie);
  console.log(newMovie)
  renderMovies();
  console.log('kaj je sada')
};

















addMovieBtn.addEventListener('click', addMovieHandler);





// const movieList = document.getElementById('movie-list')
// movieList.style.backgroundColor ='red'
// movieList.style['backgroundColor'] ='blue'
// movieList.style.display = 'block'

// let person = {
//   'first name': 'Max',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   greet: function() {
//     alert('Hi there!');
//   },
//   1.5: 'Heloo' 
// };


// delete person.age
// person.isAdmin = true;
// console.log(person['first name'])
// console.log(person.hobbies)
// console.log(person[1.5])