import { Modal } from './UI/Modal';
import { Map } from './UI/Map'
import { getCoordFromAddress } from './UI/Location'
class PlaceFinder {
  constructor() {
    // const addresForm = document.querySelector('form');
    const addresForm = document.getElementById('pronadi');
    console.log(addresForm)
    const locatedUserBtn = document.getElementById('locate-btn');

    locatedUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addresForm.addEventListener('click', this.findAdressHandler.bind(this));

  }

  selectPlace(coordinates) {
    if (this.map) {
      // ako smo ves posjetili stranicu ne trazimo ju opet
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

    const modal = new Modal('loading-modal-content','Loading location, please wait');
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

  async findAdressHandler(event) {
    console.log(event)
    event.preventDefault();
    // ocitaj vrijednost unesenu u sucelju  adresa
    // nije mi radilo!!!!
    // const address = event.target.querySelector('input').value;
    const address = document.getElementById('adresa').value;

    console.log(address)
    // osnovna provjera unesenih podataka
    if(!address || address.trim().length === 0) {
      alert('Invalid address entered - please try again')
    }

    const modal = new Modal('loading-modal-content','Loading location, please wait');
    modal.show();

    try {
      const coordinates = await getCoordFromAddress(address);
      this.selectPlace(coordinates);
    } catch (err) {

      // message je ugradena funkcija
      alert(err.message);
    }
    modal.hide();
  }


}



const placeFinder= new PlaceFinder();