"use strict";
// ----------------------------------------task 1
// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// ----------------------------------------task 2

// const inventory = {
//   items: ["Монорельса", "Фильтр"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     inventory.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     inventory.items = inventory.items.filter(item => item !== itemName);
//   }
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Аптечка", inventory.add);
// // Invoking action on Аптечка
// // Adding Аптечка to inventory

// console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

// invokeInventoryAction("Фильтр", inventory.remove);
// // Invoking action on Фильтр
// // Removing Фильтр from inventory

// console.log(inventory.items); // ['Монорельса', 'Аптечка']
