"use strict";

//----------------------------task 1

// const ulCategories = document.querySelector("#categories");
// console.log(`В списке ${ulCategories.children.length} категории`);

// const liItem = document.querySelectorAll(".item");
// liItem.forEach(elem =>
//   console.log(
//     elem.firstElementChild.innerText,
//     elem.lastElementChild.children.length
//   )
// );

//----------------------------task 2

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы"
// ];

// const ul = document.querySelector("#ingredients");

// ingredients.forEach(elem => {
//   let li = document.createElement("LI");
//   li.innerText = elem;
//   ul.appendChild(li);
// });

//----------------------------task 3

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   }
// ];

// let ulGallery = document.querySelector("#gallery");

// -------------variant 1

// images.forEach(elem => {
//   ulGallery.innerHTML += `<li><img width = '400px' src = ${elem.url}  alt = ${elem.alt}></li>`;
// });

// -------------variant 2

// images.forEach(elem => {
//   ulGallery.insertAdjacentHTML(
//     "afterbegin",
//     `<li><img width = '400px' src = ${elem.url}  alt = ${elem.alt}></li>`
//   );
// });

//----------------------------task 4

// let counterValue = 0;

// const div = document.querySelector("#counter");
// const value = document.querySelector("#value");
// const btnMinus = div.firstElementChild;
// const btnPlus = div.lastElementChild;

// btnPlus.addEventListener("click", () => {
//   value.innerText++;
// });

// btnMinus.addEventListener("click", () => {
//   value.innerText--;
// });

//----------------------------task 5

// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// input.addEventListener("input", () => {
//   if (input.value !== "") {
//     output.innerText = input.value;
//   } else {
//     output.innerText = "незнакомец";
//   }
// });

//----------------------------task 6

// const input = document.querySelector("#validation-input");
// const pattern = /^[a-zA-Z0-9]{6,}$/;

// input.addEventListener("blur", () => {
//   if (input.value === "") {
//     input.setAttribute("class", "validation-input");
//   } else if (pattern.test(input.value)) {
//     input.setAttribute("class", "valid");
//   } else {
//     input.setAttribute("class", "invalid");
//   }
// });

//----------------------------task 7

// const slider = document.querySelector("#font-size-control");
// const value = document.querySelector("#text");

// slider.oninput = () => {
//   console.log(slider.value);
//   value.style.fontSize = `${slider.value}px`;
// };

//----------------------------task 8

// const input = document.querySelector("#input8");
// const btnCreate = document.querySelector("[data-action=render]");
// const btnDelete = document.querySelector("[data-action=destroy]");
// const boxes = document.querySelector("#boxes");
// let x = 30;

// const createBoxes = () => {
//   let div = document.createElement("DIV");
//   div.style.height += `${x}` + "px";
//   div.style.width += `${x}` + "px";
//   const r = Math.round(Math.random() * 255);
//   const g = Math.round(Math.random() * 255);
//   const b = Math.round(Math.random() * 255);
//   div.style.backgroundColor = `rgba(${r},${g},${b})`;
//   boxes.appendChild(div);
//   x += 10;
// };

// btnCreate.addEventListener("click", () => {
//   for (let index = 0; index < input.value; index++) {
//     createBoxes(input.value);
//   }
// });

