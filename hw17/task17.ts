//  Задание 1: Параметры по умолчанию 
function calculateTotal(price: number, quantity: number, discount: number = 0): number {
    const total = price * quantity;
    return total - (total * (discount / 100));
}

// Задание 2: Union типы 
let id: string | number;

function displayId(id: string | number): void {
    if (typeof id === "string") {
        console.log(`ID в верхнем регистре: ${id.toUpperCase()}`);
    } else {
        console.log(`ID умноженный на 10: ${id * 10}`);
    }
}

// Задание 3: Массивы объектов и литеральные статусы
interface Order {
    orderId: string;
    amount: number;
    status: "pending" | "shipped" | "delivered"; // Литеральный тип
}

const orders: Order[] = [
    { orderId: "A1", amount: 500, status: "pending" },
    { orderId: "B2", amount: 1200, status: "shipped" },
    { orderId: "C3", amount: 100, status: "pending" }
];

function filterOrdersByStatus(ordersArr: Order[], status: "pending" | "shipped" | "delivered"): Order[] {
    return ordersArr.filter(order => order.status === status);
}

// Задание 4: Кортежи и Объекты (стр. 50-52 твоего конспекта) ---
type ProductTuple = [string, number, number]; // [название, цена, количество]
const productInfo: ProductTuple = ["Samsung TV", 50000, 5];

interface Inventory {
    [key: string]: number; // Динамические ключи (названия товаров)
}

let inventory: Inventory = {
    "iPhone": 10
};

function updateStock(currentInventory: Inventory, product: ProductTuple): Inventory {
    const [name, , quantity] = product; // Берем из кортежа имя и количество
    
    if (currentInventory[name]) {
        currentInventory[name] += quantity;
    } else {
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