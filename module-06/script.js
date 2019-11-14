"use sctrict";

import users from "./users.js";
// --------------------------------task 1

// console.log(users);

// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// --------------------------------task 2

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// --------------------------------task 3

// const getUsersWithGender = (users, gender) =>
//   users.filter(user => user.gender === gender).map(user1 => user1.name);

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// --------------------------------task 4

// const getInactiveUsers = users => users.filter(user => user.isActive === false);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// --------------------------------task 5

// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// --------------------------------task 6

// const getUsersWithAge = (users, min, max) =>
//   users.filter(user => user.age > min && user.age < max);
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// --------------------------------task 7

// const calculateTotalBalance = users =>
//   users.reduce((acc, user) => (acc += user.balance), 0);

// console.log(calculateTotalBalance(users)); // 20916

// --------------------------------task 8

// const getUsersWithFriend = (users, friendName) =>
//   users
//     .filter(user => user.friends.includes(friendName))
//     .map(user1 => user1.name);

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// --------------------------------task 9

// const getNamesSortedByFriendsCount = users =>
//   users
//     .sort((a, b) => (b.friends.length < a.friends.length ? 1 : -1))
//     .map(user1 => user1.name);

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// --------------------------------task 10

// const getSortedUniqueSkills = users =>
//   users.reduce((acc, user) => {
//     acc.push(...user.skills);
//     return [...new Set(acc)];
//   }, []);

// console.log(getSortedUniqueSkills(users));
// [
//   "adipisicing",
//   "amet",
//   "anim",
//   "commodo",
//   "culpa",
//   "elit",
//   "ex",
//   "ipsum",
//   "irure",
//   "laborum",
//   "lorem",
//   "mollit",
//   "non",
//   "nostrud",
//   "nulla",
//   "proident",
//   "tempor",
//   "velit",
//   "veniam"
// ];
