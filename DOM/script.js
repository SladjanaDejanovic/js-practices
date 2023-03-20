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
