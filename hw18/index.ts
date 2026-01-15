// Задание 1: Объединение и пересечение типов
type Admin = {
    name: string;
    permissions: string[];
};

type User = {
    name: string;
    email: string;
};

// Создаем AdminUser через пересечение (&)
type AdminUser = Admin & User;

const superUser: AdminUser = {
    name: "Alex",
    permissions: ["create", "delete", "edit"],
    email: "admin@example.com"
};

// Задание 2: Вложенные объекты и опциональные поля
interface Car {
    make: string;
    model: string;
    engine: {
        type: string;
        horsepower: number;
    };
    year?: number; // Знак ? делает поле необязательным
}

function displayCarInfo(car: Car): void {
    console.log(`Машина: ${car.make} ${car.model}, Двигатель: ${car.engine.type} (${car.engine.horsepower} hp)`);
    if (car.year) {
        console.log(`Год выпуска: ${car.year}`);
    } else {
        console.log("Год выпуска не указан");
    }
}

// Задание 3: Интерфейс для функции с объектом
interface Product {
    name: string;
    price: number;
}

// Описываем форму функции через интерфейс
interface CalculateDiscountFunc {
    (product: Product, discount: number): number;
}

const calculateDiscount: CalculateDiscountFunc = (product, discount) => {
    return product.price - (product.price * (discount / 100));
};

// Задание 4: Массив объектов и функции
interface Employee {
    name: string;
    salary: number;
}

const staff: Employee[] = [
    { name: "Alice", salary: 3000 },
    { name: "Bob", salary: 4500 },
    { name: "Charlie", salary: 2800 }
];

function getAllSalaries(employees: Employee[]): number[] {
    return employees.map(emp => emp.salary);
}

// Задание 5: Наследование интерфейсов (стр. 20-22) 
interface Person {
    firstName: string;
    lastName: string;
}

// Наследуем свойства Person и добавляем grade
interface Student extends Person {
    grade: number;
}

const myStudent: Student = {
    firstName: "Alex",
    lastName: "Alexeev",
    grade: 1
};

function printStudentFullInfo(student: Student): void {
    console.log(`Полное имя: ${student.firstName} ${student.lastName}, Оценка: ${student.grade}`);
}

// Задание 6: Интерфейс для функции с несколькими параметрами 
interface ConcatStringsFunc {
    (str1: string, str2: string): string;
}

const concatStrings: ConcatStringsFunc = (s1, s2) => s1 + s2;

// Проверка 
console.log("Задание 1 (AdminUser):", superUser);

console.log("\nЗадание 2 (Car Info):");
displayCarInfo({ make: "Tesla", model: "Model 3", engine: { type: "Electric", horsepower: 283 } });

console.log("\nЗадание 3 (Discount):");
const bread: Product = { name: "Хлеб", price: 100 };
console.log(`Новая цена ${bread.name}:`, calculateDiscount(bread, 15));

console.log("\nЗадание 4 (Salaries):", getAllSalaries(staff));

console.log("\nЗадание 5 (Student):");
printStudentFullInfo(myStudent);

console.log("\nЗадание 6 (Concat):", concatStrings("Hello, ", "World!"));



// Intersection (&): "Склеивает" несколько типов в один. 
// Объект обязан содержать поля всех этих типов.

// Optional (?): Позволяет не передавать значение, 
// если его нет (как поле year у машины).

// Extends: Позволяет интерфейсу "забрать" все поля у родителя.
//  Это основа наследования в программировании.