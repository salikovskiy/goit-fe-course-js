"use strict";
// ----------------------- task 1

const buttons = document.querySelector(".wrapperBtn");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandom = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.querySelector("body").style.backgroundColor = color;
};

let interval;

const btnFunc = e => {
  if (e.target.dataset.action === "start") {
    interval = setInterval(getRandom, 1000);
    e.target.disabled = true;
  } else if (e.target.dataset.action === "stop") {
    clearInterval(interval);
    e.target.previousElementSibling.disabled = false;
  }
};

buttons.addEventListener("click", btnFunc);

// ----------------------- task 2

//---------------part 1

// const delay = ms => {
//   return new Promise((resolve, rejected) => {
//     setInterval(() => {
//       resolve(ms);
//     }, ms);
//   });
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

//---------------part 2

// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false }
// ];

// const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   return new Promise((resolve, rejected) => {
//     resolve(updatedUsers);
//   });
// };

// const logger = updatedUsers => console.table(updatedUsers);

// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);

//---------------part 3

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = transaction => {
//   const delay = randomIntegerFromInterval(200, 500);

//   return new Promise((resolve, rejected) => {
//     const canProcess = Math.random() > 0.3;
//     setTimeout(() => {
//       if (canProcess) {
//         const id = transaction.id;
//         resolve({ id, delay });
//       } else {
//         rejected(transaction.id);
//       }
//     }, delay);
//   });
// };

// const logSuccess = ({ id, delay }) => {
//   console.log(`Transaction ${id} processed in ${delay}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);

// ----------------------- task 3

const spanDays = document.querySelector('span[data-value="days"]');
const spanHours = document.querySelector('span[data-value="hours"]');
const spanMins = document.querySelector('span[data-value="mins"]');
const spanSecond = document.querySelector('span[data-value="secs"]');

window.onload = () => {
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Dec 22, 2019")
  });

  function CountdownTimer(elem) {
    setInterval(() => {
      const time = elem.targetDate - new Date();
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      spanDays.innerText = days;
      spanHours.innerText = hours;
      spanMins.innerText = mins;
      spanSecond.innerText = secs;
    }, 1000);
  }
};
