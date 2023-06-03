'use strict';

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////
// Doing AJAX calls with XMLHttp request (old school way)

const renderCountry = function (data) {
  const html = `<article class="country">
  <img class="country__img" src="${flags[0]}" />
  <div class="country__data">
    <h3 class="country__name">${name[0]}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} milion people</p>
    <p class="country__row"><span>🗣️</span>${languages[0]}</p>
    <p class="country__row"><span>💰</span>${currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();

  // on github there is a huge repository of public APIs (here we're using REST countries; any API i want to use from here should have CORS(cross origine resource sharing) set to yes/unknown)
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  renderCountry(data);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // fixed bug that appears bc code from course isn not working today
    const languages = Object.values(data.languages);
    const currencies = Object.values(data.currencies);
    const name = Object.values(data.name);
    const flags = Object.values(data.flags);
  });
};

getCountryDataAndNEighbour('serbia');
getCountryDataAndNEighbour('brazil');
getCountryDataAndNEighbour('japan');
getCountryDataAndNEighbour('korea');
