import { Modal } from './UI/Modal';
import { Map } from './UI/Map'
class PlaceFinder {
  constructor() {
    const addresForm = document.querySelector('form');
    const locatedUserBtn = document.getElementById('locate-btn');

    locatedUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addresForm.addEventListener('click', this.findAdressHandler.bind(this));

  }

  selectPlace(coordinates) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
  }

  locateUserHandler (){
    if ( !navigator.geolocation) {
      alert('Location feature not supported!');
      return;
    }

    const modal = new Modal('loading-modal-content','Loading location, please wait' )
    modal.show();

      navigator.geolocation.getCurrentPosition( succes=> {
        modal.hide();
        const coordinates = {
          lat: succes.coords.latitude,
          lng: succes.coords.longitude
        };
       this.selectPlace(coordinates);
      }, error =>{
        modal.hide();
        alert('Ne mozemo vas locirati, molim dodajte adresu ručno?')
      });
  
  }

  findAdressHandler() {

  }


}



const placeFinder= new PlaceFinder();