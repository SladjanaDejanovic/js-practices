'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////
///// Selecting, Creating, and Deleting Elements

///////////   Selecting elements

// for these we don't have to write any special selectors
console.log(document.documentElement); // entire document
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); //returns node list, which won't update with changing of DOM (if we delete something, and then console.log node list, we will still see all elements, bc at the time node list was created all elements existed)
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); //returns HTML collection, if DOM changes then this collection is also updated automatically
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // returns HTML collection (different than querySelectorAll, which returns node list)

///// Creating and inserting elements
// .insertAdjacentHTML //quick and easy way of creating element

// creating el more programmatically

// creates a DOM, that we manually insert in the webpage:
const message = document.createElement('div');
// adding classes to it:
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // add as first child
header.append(message); // as last child
// only inserted once, can't be at 2 places at the same time bc dom element is unique

// to insert multiple copies of element:
// header.append(message.cloneNode(true));

// inserts as a sibling:
header.before(message);
header.after(message);

////// Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

///////////////////////////
// Styles, atributes, classes

// STYLES  are inline, directly inserted in the dom

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor); //  we can only read inline styles we set ourselves

// to get a style which is in css file:
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // what we get with getComputedStyle is a string (50px) and to add that to a number (30) we have to take number form that string, without px

// working with CSS custom properties (CSS variables)
// global css variables are defined in root, which in js is equivalent of documnet element
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATTRIBUTES

const logo = document.querySelector('.nav__logo');
// standard atributes:
console.log(logo.alt);
console.log(logo.src);

// non-standard:
console.log(logo.designer); // doesn't work
console.log(logo.getAttribute('designer'));

// setting attribute
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // absolute source
console.log(logo.getAttribute('src')); // relative

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute
console.log(link.getAttribute('href')); //relative

// Data-attributes
console.log(logo.dataset.versionNumber);

//CLASSES
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
