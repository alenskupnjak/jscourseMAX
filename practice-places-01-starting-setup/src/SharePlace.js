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

    navigator.geolocation.getCurrentPosition( succes=>{
      const coordinates = {
        lat: succes.coords.latitude,
        lng: succes.coords.longitude
      };
      console.log(coordinates);
      
    }, error =>{
      alert('Ne mozemo vas locirati, molim dodajte adresu ručno?')
    });
  
  }

  findAdressHandler() {

  }


}



const placeFinder= new PlaceFinder();