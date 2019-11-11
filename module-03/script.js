"use strict";
// ----------------------task 1
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user.hobby = "javascript";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   const entry = key;
//   console.log(`${entry}: ${user[key]}`);
// }

// ----------------------task 2

// const countProps = a => Object.keys(a).length;

// function countProps(a) {
//   return Object.keys(a).length;
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// ----------------------task 3

// const employee = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38
// };

// const findBestEmployee = a => {
//   let num = Object.values(a);
//   const max = num.indexOf(Math.max(...num));
//   let people = Object.keys(a);
//   console.log(people[max]);
// };

// findBestEmployee(employee);

// ----------------------task 4

// let total = 0;

// const countTotalSalary = a => {
//   let numbers = Object.values(a);
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// };

// ----------------------task 5

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = (a, b) => {
//   const arr = [];
//   for (let product of a) {
//     if (b in product) {
//       arr.push(product[b]);
//     }
//   }
//   return arr;
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// ----------------------task 6

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const calculateTotalPrice = (a, b) => {
//   let total = 0;
//   for (let product of a) {
//     if (product.name === b) {
//       total = product.price * product.quantity;
//     }
//   }
//   return total;
// };

// console.log(calculateTotalPrice(products, "Радар"));
// console.log(calculateTotalPrice(products, "Дроид"));
