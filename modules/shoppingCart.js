// Exporting module
console.log('Exporting module');

// blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

// variables decalred in module are module scoped, private to this module
const shippingCost = 10;
export const cart = [];

// we make them accessable by using exports: named exportes and default exports
// exports always need to happen in top level code (it can't be inside a function or if statement for example)

// named export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// exporting multiple at once
export { totalPrice, totalQuantity as tq }; // we can also rename exports here immediatelly

// default export - used when we want to export only 1 thing per module; we are exporting the value itself, not the variable (not the name of the function). so when we're importing default we can give it any name

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
