'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

//Changing the display
const openModal = function (e) {
  e.preventDefault();
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
// console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); //returns HTML collection, if DOM changes then this collection is also updated automatically
// console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // returns HTML collection (different than querySelectorAll, which returns node list)

///////////      Creating and inserting elements
// .insertAdjacentHTML //quick and easy way of creating element

// creating el more programmatically:

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
// header.before(message);
// header.after(message);

//////////     Deleting elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

//////////////////////////////////////////////////////
// Styles, atributes, classes

//// STYLES  are inline, directly inserted in the dom

message.style.backgroundColor = '#37383d';
message.style.width = '103%';

// console.log(message.style.height);
// console.log(message.style.backgroundColor); //  we can only read inline styles we set ourselves

// to get a style which is in css file:
console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // what we get with getComputedStyle is a string (50px) and to add that to a number (30) we have to take number form that string, without px

// working with CSS custom properties (CSS variables)
// global css variables are defined in root, which in js is equivalent of documnet element
// document.documentElement.style.setProperty('--color-primary', 'orangered');

//////     ATTRIBUTES

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

// console.log(logo.src); // absolute source
// console.log(logo.getAttribute('src')); // relative

const link = document.querySelector('.nav__link--btn');
// console.log(link.href); // absolute
// console.log(link.getAttribute('href')); //relative

// Data-attributes
console.log(logo.dataset.versionNumber);

//// CLASSES
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//////////////////////////////////////////
// Scrolling

btnScrollTo.addEventListener('click', function (e) {
  // Get the coordinates of the el that we want ot scroll to
  const s1coords = section1.getBoundingClientRect(); // this method is relative to visible viewport (x and y properties change values as we scroll and change position of the element on viewport basically)

  // console.log(s1coords); //  DOMrect with positions, x and y positions, width and height of the element....
  // console.log(e.target.getBoundingClientRect()); // e.target is element that was clicked (here it's btnScrollTo)
  // current scroll position:
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // height and width of viewport (without scroll bars, just the area available for content):
  // console.log(
  //   'height/width',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // ); // current position with current scroll

  // making scroll smooth with passing in an object instead just argument:
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // more modern way of doing this:
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////
//// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href'); // bc href looks like id of section to scroll into

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation
// 1. add event listener to a common parent element of all the elements that we're interested in
// 2. in that event listener determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy (to find only links that we are interested in, bc we want event only when we click on certain parts, not the entire container of nav bar)
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

    // if (e.target.classList.contains('btn--show-modal')) {
    //   disableScroll();
    // }
  }
});

///////////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // there are span elements on the button that we can accidentally click, so we need to use closest() to find right element, to find a perent that matches a certain query

  // Guard clause
  if (!clicked) return; // if there's nothing clicked then we want to immediately finish this func

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////////////////
/// Types of Events and Events handlers

// we can add multiple event listeners to the same event

// const h1 = document.querySelector('h1');

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

//more modern  way of doing it:
// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');

// h1.addEventListener('mouseenter', alertH1);

// h1.removeEventListener('mouseenter', alertH1); // we can remove event handler if we don't need it anymore, so we can listen for event only once
// };

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

///////////////////////////////////////////////////
////// Event propagation - event bubbling in practice

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log('LINK', e.target, e.currentTarget); // event target is where event originated, where event first happened, not where event was attached
//   //currentTarget is elemetn on which event is attached

//   // Stop propagation
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log('NAV', e.target, e.currentTarget);
// });

// we attach event to target, and if we attach that same event on its parent elements, by bubbling - when we click on target event will happen on all parent elements that has the same event attached too (of course, if we click only on parent element event will also happen as ususal)

//////////////////////////////////////////////////////////
///////////// DOM traversing

const h1 = document.querySelector('h1');

// Going downwards: selecting child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // only works for direct children, returns html collection

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going upwards: selecting parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // closest() finds parent element just like how querySelector() finds children elements

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
// console.log(h1.nextSibling); //nodes

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

//////////////////////////////////////////////////
//// Passing "arguments" into handlers - menu fade animation

// (mouseenter doesn't bubble, mouseover bubbles up)

// it's impossible to pass another argument into and eventHandler function, it only has 1 parameter which is event. so if we want to pass additional values into the handler function that we need to use this kw, that becomes possible with using bind( )
const handleHover = function (e, opacity) {
  // there are no chinld elements that we could accidentally click when we click on links, so we don't need closest():
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5)); // better way - using bind()
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////
// Sticky navigation

// window.addEventListener('scroll', function () {
//   console.log(this.window.scrollY);

//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// const header = document.querySelector('.header'); // already selected above
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '-90px', //  box of certain amount of px that will be aplied outside of our target element (kinda extends or shortens the element) (in this case 90px is height of nav bar, so it appeares - becomes sticky - in the last 90px of header, in this rootMargin that we defined, but we can also caluclate the height dinamicaly:)
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

////////////////////////////////////////////
// The Intersection Observer API

const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   console.log(this.window.scrollY);

//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    // console.log(entry);
  });
};
//entries argument in this callback function are array of tresholds

// callback func will get called each time that the observed element (target element in observe()) is intersecting the root element at the treshold that we defined

const obsOptions = {
  root: null, //  root el is elemenet we want our target el to intersect (null is for intersecting entire viewport)
  treshold: [0, 0.2], //0 means that callback will be triggered each time target element moves completely out of view, callback function will be called when the threshold is passed when moving into the view and when moving out of the view,

  //treshold is percentage of intersection at which the observer callback will be called
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

///////////////////////////////////
// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]'); // seleceted only the imgs that has this property

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  //js will do this behind the scenes with loading event, so we can listen to it and do something:

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  treshold: 0,
  rootMargin: '200px', //to make imgs load before we really reach them so it's not noticable
});

imgTargets.forEach(img => imgObserver.observe(img));

////////////////////////////////////////////
////// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // Dots
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const slide = e.target.dataset.slide;
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

///////////////////////////////////////////
// DOM content loaded
// this event doeasn't wait for imgs and other externalresources to load, just html and js need to be loaded
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded');
});

// created immediatelly before user is about to leave the page
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// }); // we can use this to ask user if he really wanna exit page

/////////////////////////////////////
// defer and async

// regular:
// script tag in head of html --> parsing html, then that will stop while script is fetched then executed, and then parsing will continue. of course this is bad, that's why we dont do it
// script tag at the end of body el --> parsing html > fetch script > execute

// puting script tag with async or defer atribute in body el doesn't make sense, so it's not used

// ASYNC (scripts are fetched asynchronosly and executed immediately)
// parsing html and fetching script are simultanious, then parsing will wait while script is executed, and continue after that, DOMContentLoaded is fired as soon as html finished parsing
// DOMContentLoaded won't wait for script to be executed
// scripts not guaranteed to be executed in order

// DEFER (scripts are fetched asynchronosly and executed after html is comletely parsed)
// parsing html, meanwhile fetching script, after html is parsed script will be executed, and then DOMContentLoaded is fired
// defer forces DOMContentLoaded event to only get fired after the whole script has been downloaded and executed
// scripts are executed in order
// defer is overall the best solution (especially in working with libraries)

// async and defer are supported in modern browsers, bc this is html5 feature. if needed to support old browsers use script tag at the end of body
