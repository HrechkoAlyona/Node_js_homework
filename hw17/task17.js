//  Задание 1: Параметры по умолчанию 
function calculateTotal(price, quantity, discount) {
    if (discount === void 0) { discount = 0; }
    var total = price * quantity;
    return total - (total * (discount / 100));
}
// Задание 2: Union типы 
var id;
function displayId(id) {
    if (typeof id === "string") {
        console.log("ID \u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435: ".concat(id.toUpperCase()));
    }
    else {
        console.log("ID \u0443\u043C\u043D\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 10: ".concat(id * 10));
    }
}
var orders = [
    { orderId: "A1", amount: 500, status: "pending" },
    { orderId: "B2", amount: 1200, status: "shipped" },
    { orderId: "C3", amount: 100, status: "pending" }
];
function filterOrdersByStatus(ordersArr, status) {
    return ordersArr.filter(function (order) { return order.status === status; });
}
var productInfo = ["Samsung TV", 50000, 5];
var inventory = {
    "iPhone": 10
};
function updateStock(currentInventory, product) {
    var name = product[0], quantity = product[2]; // Берем из кортежа имя и количество
    if (currentInventory[name]) {
        currentInventory[name] += quantity;
    }
    else {
        currentInventory[name] = quantity;
    }
    return currentInventory;
}
// проверка
console.log("Задание 1 (Total):", calculateTotal(100, 5, 10));
displayId("user_admin");
displayId(7);
console.log("Задание 3 (Filter):", filterOrdersByStatus(orders, "pending"));
console.log("Задание 4 (Inventory):", updateStock(inventory, productInfo));
