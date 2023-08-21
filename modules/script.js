//// Importing module

// import { addToCart } from './shoppingCart.js'; // string with a location of the module
// or importing multiple at once:
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js'; // we can rename imports: totalPrice as price
// addToCart('bread', 5);
// console.log(price, tq);

//console.log('Importing module');

// importing all the exports at once:
// creating an object containg everything that is exported in another module
// import * as ShoppingCart from './shoppingCart.js';
// this module is now basically exporting a public API, just like a class (with methods and promerties)

// to use something from here we have to take it out from this object
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// importing default export (giving it a name we want, without {} like with a named export/import)
import add from './shoppingCart.js';
add('pizza', 2);

// default and named exports can be imported together (but in practice we never mix these two):
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import shoppingCart, { cart } from './shoppingCart.js';
add('bread', 3);
add('apples', 6);
console.log(cart); // import is a live connection, not simply a copy, they point at the same place in memory (cart was empty array as export from another module, but after calling add() which pushes objects to array, now cart looks like this)

/////////////////////////////
//// Top level await
// in modules await keyword works outside of async function, but it's blocking execution of entire module, and of the module that is imported to (blocking code)
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

// not very clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

////////////////////
//// Module patern (way of using modules before) - making IIFE (immediatelly invoked function expression)
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

//// CommonJS modules - in Node.js
// export
// export.function(product, quantity){
//   cart.push({product, quantity})
//   console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
// }
// // import
// const {addToCart} = require("./shoppingCart.js")

//////////////////////////
///// Introduction to NPM

// lodash library for deep copy
// import { default as cloneDeep } from './node_modules/lodash-es/cloneDeep.js';

// Bundling - Parcel
// with parcel (or any other bundler) there is no need to specify the entire path to a module, instead all we need to say is we want to include lodash library:
// import { default as cloneDeep } from 'lodash-es';

// or we can just type lodash and parcel will know what package to install:
import { default as cloneDeep } from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// Creating deep copy
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);

// whenever we change modules, it will trigger rebuilt with parcel, and that new bundle will be injected into the browser not triggering whole page reload
if (module.hot) {
  module.hot.accept();
}

// npx parcel index.html in a folder of a project (in this case it was my folder of modules)
///// another way is to use npm scripts, this way is actually used in practice. this is another way of running locally installed packages in the command line. they also allows us to automate repetative tasks so we don't have to write npx parcel .... every time we want to use it : writing this in package.json in "script" part "start": "parcel index.html", and then in command line type npm run start
// (before this in "script" there was   "test": "echo \"Error: no test specified\" && exit 1","dev": "parcel index.html")

// so now we have simple command whenever we want to start developing, just typing npm run start , which is the name of the script
// whenever we are done developing it is time to make a final bundle, bundle that's compressed and has dead code elemination etc. so we need another parcel command, which we are adding in "script" again: "build": "parcel build index.html", in command line- npm run build

// Parcel automatically uses babel to transpile our code

// New additions to the language (like Promise, find() and other array methods...) are not converted to ES5 in bundled script, bc Babel can only transpile ES6 syntax (like classes, arrow funcitons etc)
// console.log(cart.find(el => el.quantity >= 2));
// console.log(cart.filter(el => el.quantity >= 2));
// Promise.resolve('TEST').then(x => console.log(x));

///// Polyfilling
// These new features we have to polyfill them (using some library):
import 'core-js/stable';

///// Polyfilling recreate defined function and make it available in this bundle so that the code can use it. It's gonna polyfill everything, even tho we don't need it
// if we want to reduce bundle size, if that really is a concern, we can pick what will be polyfilled, but it's a lot of work. for example:
// import 'core-js/stable/array/find';

//core-js is still not polyfilling all the features, so we have to install one more package for this    npm i regenerator-runtime

// polyfilling async functions
import 'regenerator-runtime/runtime';

// usually we put all these imports at the top of the file
