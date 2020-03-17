const button = document.querySelector('button');
const buttonasc = document.getElementById('async');

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

async function trackUserHandlerAsync() {
  let data;
  let timerData;
  try   {
    data = await getPosition()
    timerData = await setTimer(2000);
  } catch (error) {
    console.log('Ne ne');
  }
  console.log(data, timerData);
  console.log('Ova operacije se izvrsava zadnja......');
}


async function trackUserHandlerPromise() {
  let positionData;
  let timerData;
  getPosition()
  .then(posData => {
    positionData = posData; console.log(posData);
    return setTimer(2000);
  }, err => {console.log(err);})
  .catch( err => { console.log(err);}) // (err=catch, to je isto!!!) catch se izvrsava prvi ako se pojavi greska, ispred svih!!!
  // bitno je gdje se catch nalazi jer se izvrsavaju then() poslije njega, izvrsava se samo jednom
  // dakle ako zelis uhvatiti gresku iz sljedeceg then, moras dodati novi catch
  .then(data => {
    console.log(data, positionData);
  });
  setTimer(1000).then(data => {
    timerData = data;
    console.log('Timer done!' + data);
  });
  console.log(timerData, positionData);
  console.log('Ova operacije se izvrsava zadnja......');
}


button.addEventListener('click', trackUserHandlerPromise);
buttonasc.addEventListener('click', trackUserHandlerAsync);

console.log('****************************')
Promise.race([getPosition(),setTimer(1000)]).
then(data => {
  console.log(data);
});

Promise.all([getPosition(),setTimer(1000)]).
then(data => {
  console.log(data);
  console.log(data[0]);
  console.log(data[1]);
}).catch(err => {
  console.log(err.message)
});



