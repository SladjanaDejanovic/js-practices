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

import { cart } from './shoppingCart.js';
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

const lastPost2 = await getLastPost();
console.log(lastPost2);
