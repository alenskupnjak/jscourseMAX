const button = document.querySelector('button');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      data => {
        resolve(data); console.log(data);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  console.log(promise);
  return promise;  
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    let br1 = 2;
    let br2 = 3;
    setTimeout(() => { resolve('Done!= ' + br1 + br2);}, duration);
  });
  console.log(promise);
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData; console.log(posData);
      // return 'konj';
      return setTimer(2000);
    }, err => {console.log(err);})
    .catch( err => { console.log(err);}) // (err=catch, to je isto!!!) catch se izvrsava prvi ako se pojavi greska, ispred svih!!!
    // bitno je gdje se catch nalazi jer se izvrsavaju then() poslije njega, izvrsava se samo jednom
    // dakle ako zelis uhvatiti gresku iz sljedeceg then, moras dodati novi catch
    .then(data => {
      console.log(data, positionData);
    });
  setTimer(1000).then(data => {
    console.log(data);
    console.log('Timer done!');
  });
  console.log('Prvo izvrsavam ovu operaciju, teko onda  promise !!!!!...');
}

button.addEventListener('click', trackUserHandler);

