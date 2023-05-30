'use strict';

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////
// Doing AJAX calls with XMLHttp request (old school way)

const request = new XMLHttpRequest();

// on github there is a huge repository of public APIs (here we're using REST countries; any API i want to use from here should have CORS(cross origine resource sharing) set to yes/unknown)
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
request.send();

request.addEventListener('load', function () {
  // in case there is  abug (also change name of the country like this ${country} in url):
  // const [data] = JSON.parse(this.responseText);
  // console.log(data);

  console.log(this.responseText);
});
