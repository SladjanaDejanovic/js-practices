// Importing module

// import { addToCart } from './shoppingCart.js'; // string with a location of the module
// or importing multiple at once:
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js'; // we can rename imports: totalPrice as price
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// importing all the exports at once:
// creating an object containg everything that is exported in another module
// import * as ShoppingCart from './shoppingCart.js';
// this module is now basically exporting a public API, just like a class (with methods and promerties)

// to use something from here we have to take it out from this object
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

//importing default export (giving it a name we want, without {} like with a named export/import)
import add from './shoppingCart.js';
add('pizza', 2);

// default and named exports can be imported together (but in practice we never mix these two):
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import shoppingCart, { cart } from './shoppingCart.js';
add('bread', 3);
add('apples', 6);
console.log(cart); // import is a live connection, not simply a copy, they point at the same place in memory (cart was empty array as export from another module, but after calling add() which pushes objects to array, now cart looks like this)

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

///// introduction to NPM
// import { default as cloneDeep } from './node_modules/lodash-es/cloneDeep.js';

// with parcel (or any other bundler) there is no need to specify the entire path to a module, instead all we need to say is we want to include lodash library:
import { default as cloneDeep } from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// creating deep copy
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// whenever we change modules, it will trigger rebuilt with parcel, and that new bundle will be injected into the browser not triggering whole page reload
if (module.hot) {
  module.hot.accept();
}
