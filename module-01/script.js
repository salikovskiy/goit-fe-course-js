"use strict";

// ---------------------- task 1

// let name = '"Генератор защитного поля"';
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// ---------------------- task 2

// const total = 100;
// const ordered = prompt("Введите количество заказоного товара");

// if(ordered > total){
//     console.log("На складе недостаточно товаров!");
// } else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// ---------------------- task 3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const logIn = prompt("Введите пароль");

// if(!logIn){
//     message = 'Отменено пользователем!';
//     console.log(message);
// } else if(logIn === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//     console.log(message);
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
//     console.log(message);
// }

// ---------------------- task 4

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;

// let orderNumber = prompt("Введите количество дроидов");

// if(!orderNumber){
//     console.log('Отменено пользователем!');
// } else {
//     if(!isNaN(orderNumber)){
//         totalPrice = orderNumber*pricePerDroid;
//         console.log(totalPrice);
//         if(totalPrice <= credits){
//                 credits = credits - totalPrice;
//                 console.log(`Вы купили ${orderNumber} дроидов, на счету осталось ${credits} кредитов.`)
//             } else {
//                 console.log('Недостаточно средств на счету!')
//             }
//     } else {
//         console.log("Not a number")
//     }
// }

// ---------------------- task 5

// const countryChina = "китай";
// const countryChili = "чили";
// const countryAustralia = "австралия";
// const countryIndia = "индия";
// const countryYamayka = "ямайка";

// let deliveryChina = 100;
// let deliveryChili = 250;
// let deliveryAustralia = 170;
// let deliveryIndia = 80;
// let deliveryYamayka = 120;

// const userCountry = prompt("Введите свою страну");

// switch(userCountry.toLowerCase()) {
//     case countryChina:
//         alert(`Доставка в ${countryChina} будет стоить ${deliveryChina} кредитов`);
//         break;
//     case countryChili:
//         alert(`Доставка в ${countryChili} будет стоить ${deliveryChili} кредитов`);
//         break;
//     case countryAustralia:
//         alert(`Доставка в ${countryAustralia} будет стоить ${deliveryAustralia} кредитов`);
//         break;
//     case countryIndia:
//         alert(`Доставка в ${countryIndia} будет стоить ${deliveryIndia} кредитов`);
//         break;
//     case countryYamayka:
//         alert(`Доставка в ${countryYamayka} будет стоить ${deliveryYamayka} кредитов`);
//         break;
//     case userCountry === null: 
//         alert(`Обнови страницу`)
//         break;
//     default: alert('В вашей стране доставка не доступна');
// }

// ---------------------- task 6

// let input;
// let total = 0;

// do {
//   input = prompt("введите число");

//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//     continue;
//   } 
//   else if (input === null) {
//     break;
//   }

//   total += Number(input);
// } while (input !== 0);

// if(total > 0) {
//     alert(`Сума = ${total}`);
// }

