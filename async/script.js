'use strict';

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const flag = data.flags.svg;
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
    <p class="country__row"><span>👫</span>${population} milion people</p>
    <p class="country__row"><span>🗣️</span>${language}</p>
    <p class="country__row"><span>💰</span>${currency}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
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

/////////////////////////////////
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

////////////////////////////
// Fetch API

// const request = fetch('https://restcountries.com/v3.1/name/serbia');
// console.log(request);

// PROMISE - an object used as a placeholder for the future result of an asynchronous operation (like a container for asynchronously delivered value, for example response from ajax call)
// by chaining promises we can avoid callback hell

////////////
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

const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json()
      // err => alert(err)
    )
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    }) // simulating no internet error
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('serbia');
});

// PROMISE REJECTION -                        1) pass a second callback in then() whcich will be called when promise is rejected (we don't have uncaught error anymore in console, bc we did catch it this callback, and dispalyed it as alert) err => alert(err)                      2) catching error from one place, globally, no matter where they appear in the chain - by adding catch() at the end of the chain (bc erors propagate down the chain until they're caught, and if they're not we get uncaught error in console). catch() always returna a promise                    3) finally() method -callback here will always be called whatever happens with the promise. used for something that always needs to happen no matter the result of the promise (for exmple to hide loading spinner)

// any error created in js contains message property (bc it's an object, and we can create errors)

// fetch promise only rejects where there's no internet connection
