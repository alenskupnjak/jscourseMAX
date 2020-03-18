import { Map } from './UI/Map';
class LoadedPlace {
  constructor(coord,address){
    new Map(coord);
    const headerTitle = document.querySelector('header h1');
    headerTitle.textContent = address;

  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
new LoadedPlace();