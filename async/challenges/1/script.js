'use strict';
/**
build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you'll use a second API to geocode coordinates

PART 1:

1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng)

2. Do 'reverse geocoding' of the provided coordinates. Reveresed geocoding means to converts coordinates to a meaningful location, like a city and a country name. Use this API to do reverse geocoding: https://geocode.xyz/api
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json
Use the fetch API and promises to get the data

3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. then using this data, log a msg like this to the console: 'You are in Berlin, Germany'

4. Chain a catch() to the end of the promise chain and log errors to the console

5. This api allows you to make only 3 requests per second. If you reload fast, you will get this error with the code 403. This is the error with the request. remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message

PART 2:

6. Use a recieved data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using

7. Render the country and catch any error

TEST COORDINATES 1: 52.508, 13.381 (lat, lng)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 3: -33.933, 18.474

 */

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
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
    <p class="country__row"><span>👫</span>${population}M people</p>
    <p class="country__row"><span>🗣️</span>${language}</p>
    <p class="country__row"><span>💰</span>${currency}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=115400213181647e15870825x40399`
  )
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Problem with geocoding (${response.status})`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data.error) {
        throw new Error(`${data.error.message}`);
      }
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        .then(response => {
          console.log(response);
          if (!response.ok)
            throw new Error(`Country not found (${response.status})`);
          return response.json();
        })
        .then(data => {
          console.log(data);
          renderCountry(data[0]);
        });
    })
    .catch(err => {
      console.error(`${err.message}`);
      renderError(`Something went wrong 💥💥💥 ${err.message} Try again!`);
    });
};

btn.addEventListener('click', function () {
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
});
