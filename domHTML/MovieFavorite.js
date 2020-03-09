const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies =  [];

const renderMovies = ( filter='' ) => {
  const movieList = document.getElementById('movie-list');
  
  if (movies.length === 0) {
    // ako je visible ukljuceno , gasi ga
    movieList.classList.remove('visible')
  } else {
    movieList.classList.add('visible')
  }
  movieList.innerHTML = '';

  let filterMovies = '';
  if( filter === '') {
    filterMovies = movies;
  } else {
    filterMovies = movies.filter(data => {
      return data.info.title.includes(filter)
    })
  }

  console.log(movies)
  console.log('Filter= ispod')
  console.log(filterMovies)
  // const filteredMovies = !filter ? movies : movies.filter

  filterMovies.forEach((data) => {
    const movieEl = document.createElement('li');
    let text = data.info.title + ' - '
    for (const key in data.info) {
      if (key !== 'title') {
        text = text + `${key}: ${data.info[key]}`;
      }
    }
    console.log('text= ' +  text)
    movieEl.textContent = text;
    movieList.append(movieEl);
  })

}

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;
 
  // prolazi kroz vrijednosti i oduzima spaceve ako ih ima
  if (title.trim() === '' | extraName.trim() ==='' | extraValue.trim() ==='') {
   return;
  };

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraName
    },
    id: Math.random()
  };

  movies.push(newMovie);
  // console.log(newMovie);

  renderMovies();
};


const searchMovieFunction = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);

}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieFunction);



