'use strict';

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const flag = data.flags.png;
  const name = data.name.common;
  const region = data.region;
  const population = (data.population / 1000000).toFixed(1);
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `<article class="country ${className}">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
    <h3 class="country__name">${name}</h3>
    <h4 class="country__region">${region}</h4>
    <p class="country__row"><span>👫</span>${population}M people</p>
    <p class="country__row"><span>🗣️</span>${language}</p>
    <p class="country__row"><span>💰</span>${currency}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/////////////////////////////////////////////////////////
// Doing AJAX calls with XMLHttp request (old school way)

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();

  // on github there is a huge repository of public APIs (here we're using REST countries; any API i want to use from here should have CORS(cross origine resource sharing) set to yes/unknown)
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('serbia');
// getCountryAndNeighbour('brazil');

//////////////////////////////////////////////////
// Callback hell
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

////////////////////////////////////////////////////////
// Fetch API

// const request = fetch('https://restcountries.com/v3.1/name/serbia');
// console.log(request);

// PROMISE - an object used as a placeholder for the future result of an asynchronous operation (like a container for asynchronously delivered value, for example response from ajax call)
// by chaining promises we can avoid callback hell

/////////////////////////////////////////////////
// Consuming promise return by fetch():

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json(); // json() is also async func so it will also return a promise
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Somethign went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         //creating a error with ErrorConstructor, this becomes message of a error
//         throw new Error(`Country not found (${response.status})`); //creating our own error to reject the promise on purpose so we can handle that error down in catch method

//       return response.json();
//       // err => alert(err)
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'sadfsfghty';

//       if (!neighbour) return;

//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     }) // simulating no internet error
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders;
      console.log(neighbour);
      // const neighbour = 'asfadf';

      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message} Try again!`);
    }) // simulating no internet error
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

/////////////////////////////////////////////////////////
// PROMISE REJECTION -                        1) pass a second callback in then() whcich will be called when promise is rejected (we don't have uncaught error anymore in console, bc we did catch it this callback, and dispalyed it as alert) err => alert(err)                      2) catching error from one place, globally, no matter where they appear in the chain - by adding catch() at the end of the chain (bc erors propagate down the chain until they're caught, and if they're not we get uncaught error in console). catch() always returna a promise                    3) finally() method -callback here will always be called whatever happens with the promise. used for something that always needs to happen no matter the result of the promise (for exmple to hide loading spinner)

// any error created in js contains message property (bc it's an object, and we can create errors)

// fetch promise only rejects where there's no internet connection

///////////////////////////////////////////////////
// EVENT LOOP
// first will be executed code that it's outside of callbacks
// console.log('Test start'); //1
// setTimeout(() => console.log('0 sec timer'), 0); // 4 - in callback queue (will be executed after everything in microtasks queue)
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3 - this will be put in microtasks queue, which has priority over callback queue

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(res);
// });
// console.log('Test end'); //2

/////////////////////////////////////////////////
// Building a simple promise

// promise constructor takes 1 argument: executor function, and that func will have resoleve and reject parameters

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       // to set promise as fullfilled
//       resolve('You WIN 💰'); // this will be available in then handler later
//     } else {
//       reject(new Error('You lost your money 😓')); // passing in an error msg, that we can handle in catch()
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// ususally promises are only built to wrap up old callback based functions into promises - process called promisifying(to convert callback based asynchronous behavior to promise based)

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds passed'));

// to create fullfilled or rejected promise immediatelly
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject('abc').catch(x => console.error(x));

////
// promisifying geolocation api

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

// const whereAmI = function (lat, lng) {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=115400213181647e15870825x40399`
//       );
//     })

//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Problem with geocoding (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       if (data.error) {
//         throw new Error(`${data.error.message}`);
//       }
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//         .then(response => {
//           console.log(response);
//           if (!response.ok)
//             throw new Error(`Country not found (${response.status})`);
//           return response.json();
//         })
//         .then(data => {
//           console.log(data);
//           renderCountry(data[0]);
//           countriesContainer.style.opacity = 1;
//         });
//     })
//     .catch(err => {
//       console.error(`${err.message}`);
//       renderError(`Something went wrong 💥💥💥 ${err.message} Try again!`);
//     });
// };

// btn.addEventListener('click', whereAmI);

////////////////////////////////////////////////
// CONSUMING PROMISES WITH ASYNC/AWAIT
// making asynchronous func that will keep running in the background while performing the code that's inside of it. after this func is done it automatically returns a promise. inside async func we can have 1 or more await statements

//fetch() returns a promise
// we can await until the value of the promise is returned, and then just assign that value to a variable

// await will stop code execution at this point of the func until the promise is fulfilled

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=115400213181647e15870825x40399`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data 💥');

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country 💥');
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async func
    throw err;
  }
};

//// RETURNING VALUES FROM ASYNC FUNCTIONS
// console.log('1: Will get location');

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));
// console.log('3: Finished getting location');

// converting this to async await with IIFE (immediatelly invoked function expresion)
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();

//////////////////////////////////////////
// RUNNING PROMISES IN PARALLEL
//  when doing multiple async operations at the same time and operations that don't depend on one another, always run them in parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    /////  Promise.all() takes an array of promises and returns a new promise, running all the promises in the array at the same time. If 1 promise rejects, then all the promises reject as well
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('serbia', 'brazil', 'korea');

/////////////////////////////////////
// PROMISE COMBINATORS: race, allSetlled, any
// Promise.race receives an array of promises and it also returns a promise. this promise returned by Promise.race is settled as soon as one of the input promises settles (settled means that a value is available, but it doesn't matter if the promise got rejected or fulfilled.) In promice.race the first settled promise wins the race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
  ]);
  console.log(res[0]);
})();

// useful to prevent against never ending promises or very long running promises. for example if the user has very bad internet connection, fetch request might take too long to actually be useful, so we create a time out promise which automatically rejects after certain time has passed

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/japan`),
  timeout(0.2),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));
