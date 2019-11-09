"use strict";

// ---------------------------task 1

// const arr = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// const logItems = a => {
//   for (let i = 0; i < a.length; i++) {
//     console.log(`${i + 1} - ${a[i]}`);
//   }
// };

// logItems(arr);

// ---------------------------task 2

// const pricePerWorld = 20;

// let message = prompt("Введите текст");

// const calculateEngravingPrice = a => {
//   a = a.split(" ").length;
//   let price = a * pricePerWorld;
//   alert(`Цена за гравировку = ${price}`);
// };

// calculateEngravingPrice(message);

// ---------------------------task 3

// let message = prompt("Введите текст");

// const findLongestWord = a => {
//   a = a.split(" ");
//   a.sort(function(a, b) {
//     return b.length - a.length;
//   });
//   alert(`Самое длинное слово в этой строке - ${a[0]}`);
// };

// findLongestWord(message);

// ---------------------------task 4

// let message = prompt("Введите текст");

// const forCalculator = a => {
//   if (a.length > 40) {
//     console.log(`${a.slice(0, 40)}...`);
//   } else {
//     console.log(a);
//   }
// };

// forCalculator(message);

// ---------------------------task 5

// let message = prompt("Введите текст");

// const checkForSpam = a => {
//   a = a.toLowerCase();

//   if (a.includes("sale") || a.includes("spam")) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// checkForSpam(message);

// ---------------------------task 6

// let input = 0;
// const arr = [];
// let total = 0;

// do {
//   input = prompt();
//   if (!isNaN(input)) {
//     arr.push(Number(input));
//   }
// } while (input !== null);

// for (let elem of arr) {
//   total += elem;
// }

// console.log(`Сума чисел = ${total}`);

// ---------------------------task 6

// let login = prompt("Введите логин");
// const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = a => a !== null && a.length > 4 && a.length < 16;

// const isLoginUnique = (a, b) => !b.includes(a);

// const addLogin = (a, b) => {
//   let valid = isLoginValid(a);
//   let unique = isLoginUnique(a, b);

//   if (valid === false) {
//     console.log("Ошибка! Логин должен быть от 4 до 16 символов");
//   } else if (unique === false) {
//     console.log("Такой логин уже используется!");
//   } else {
//     b.push(a);
//     console.log("Логин успешно добавлен!");
//   }
// };

// addLogin(login, allLogins);
// console.log(allLogins);

