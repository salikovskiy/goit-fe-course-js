"use sctrict";

// --------------------task 1

// const Account = function(login, email) {
//   {
//     this._login = login;
//     this._email = email;
//   }
//   Account.prototype.getInfo = function() {
//     console.log(`Login: ${this._login}, Email: ${this._email}`);
//   };
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account("Mangozedog", "mango@dog.woof");
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account("Poly", "poly@mail.com");
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// --------------------task 2

// class User {
//   constructor({ name, age, followers }) {
//     this._name = name;
//     this._age = age;
//     this._followers = followers;
//   }
//   getInfo = function() {
//     console.log(
//       `User ${this._name} is ${this._age} years old and has ${this._followers} followers`
//     );
//   };
// }

// const mango = new User({ name: "Mango", age: 2, followers: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({ name: "Poly", age: 3, followers: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// --------------------task 3

// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }
//   getItems = function() {
//     return this.items;
//   };
//   addItem = function(a) {
//     this.items.push(a);
//   };
//   removeItem = function(b) {
//     let index = items.indexOf(b);
//     console.log(index);
//     this.items.splice(index, 1);
//   };
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор"
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// --------------------task 4

// class StringBuilder {
//   constructor(_value) {
//     this.value = _value;
//   }

//   get values() {
//     return console.log("this.value:", this.value);
//   }

//   set values(str) {
//     return (this.value = str);
//   }

//   append(a) {
//     this.value = `${this.value}${a}`;
//   }

//   prepend(b) {
//     this.value = `${b}${this.value}`;
//   }

//   pad(c) {
//     this.value = `${c}${this.value}${c}`;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.value);
// builder.values = "new";

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// --------------------task 5

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */

//   static getSpecs(car) {
//     console.log(`maxSpeed: ${car._maxSpeed},
//     speed: ${car._speed},
//     isOn: ${car._isOn},
//     distance: ${car._distance},
//     price: ${car._price}`);
//   }
//   constructor({ maxSpeed, price, speed = 0, isOn = false, distance = 0 }) {
//     this._maxSpeed = maxSpeed;
//     this._price = price;
//     this._speed = speed;
//     this._isOn = isOn;
//     this._distance = distance;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(price) {
//     return (this._price = price);
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this._isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff(x) {
//     this._isOn = false;
//     this._speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (this._maxSpeed >= value) {
//       this._speed += value;
//     }
//     return this._speed;
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (value > 0) {
//       this._speed -= value;
//     }
//     return this._speed;
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this._isOn) {
//       this._distance = hours * this._speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);

// // maxSpeed: 200, speed: 30, isOn: false, distance: 30, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

