const GOOGLE_API_KEY ='AIzaSyBagPT-3FoutArXJphLmgfOMQ5scf5DKxg'

export async function getAddresFromCoords(coord){
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coord.lat},${coord.lng}&key=${GOOGLE_API_KEY}`);
  if (!response.ok){
    throw new Error('Failed to fetch addres. Please try again!');
  }
  const data = await response.json();
  if (data.error_mesage) {
    throw new Error(data.error_mesage);
  }

    // definirano u google map platforma, Reverse geocoding request and response (address lookup)
    const addres = data.results[0].formatted_address;
    return addres;
}



export async function getCoordFromAddress(addres) {
  const urlAddress = encodeURI(addres);
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);
  if (!response.ok){
    throw new Error('Failed to fetch coordinates. Please try again!');
  }
  const data = await response.json();
  if (data.error_mesage) {
    throw new Error(data.error_mesage);
  }
  // definirano u google map platforma, vidi zapis
  const coordinates = data.results[0].geometry.location;
  console.log(coordinates);
  
  return coordinates;
}