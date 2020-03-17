import { Modal } from './UI/Modal';

class PlaceFinder {
  constructor() {
    const addresForm = document.querySelector('form');
    const locatedUserBtn = document.getElementById('locate-btn');

    locatedUserBtn.addEventListener('click', this.locateUserHandler);
    addresForm.addEventListener('click', this.findAdressHandler);

  }

  locateUserHandler (){
    if ( !navigator.geolocation) {
      alert('Location feature not supported!');
      return;
    }

    const modal = new Modal('loading-modal-content','Loading location, please wait' )
    modal.show();


    setTimeout(()=>{
      navigator.geolocation.getCurrentPosition( succes=> {
        modal.hide();
        const coordinates = {
          lat: succes.coords.latitude,
          lng: succes.coords.longitude
        };
        console.log(coordinates);  
      }, error =>{
        modal.hide();
        alert('Ne mozemo vas locirati, molim dodajte adresu ručno?')
      });
    },1000)

  
  }

  findAdressHandler() {

  }


}



const placeFinder= new PlaceFinder();