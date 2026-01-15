var superUser = {
    name: "Alex",
    permissions: ["create", "delete", "edit"],
    email: "admin@example.com"
};
function displayCarInfo(car) {
    console.log("\u041C\u0430\u0448\u0438\u043D\u0430: ".concat(car.make, " ").concat(car.model, ", \u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C: ").concat(car.engine.type, " (").concat(car.engine.horsepower, " hp)"));
    if (car.year) {
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(car.year));
    }
    else {
        console.log("Год выпуска не указан");
    }
}
var calculateDiscount = function (product, discount) {
    return product.price - (product.price * (discount / 100));
};
var staff = [
    { name: "Alice", salary: 3000 },
    { name: "Bob", salary: 4500 },
    { name: "Charlie", salary: 2800 }
];
function getAllSalaries(employees) {
    return employees.map(function (emp) { return emp.salary; });
}
var myStudent = {
    firstName: "Alex",
    lastName: "Alexeev",
    grade: 1
};
function printStudentFullInfo(student) {
    console.log("\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F: ".concat(student.firstName, " ").concat(student.lastName, ", \u041E\u0446\u0435\u043D\u043A\u0430: ").concat(student.grade));
}
var concatStrings = function (s1, s2) { return s1 + s2; };
// Проверка 
console.log("Задание 1 (AdminUser):", superUser);
console.log("\nЗадание 2 (Car Info):");
displayCarInfo({ make: "Tesla", model: "Model 3", engine: { type: "Electric", horsepower: 283 } });
console.log("\nЗадание 3 (Discount):");
var bread = { name: "Хлеб", price: 100 };
console.log("\u041D\u043E\u0432\u0430\u044F \u0446\u0435\u043D\u0430 ".concat(bread.name, ":"), calculateDiscount(bread, 15));
console.log("\nЗадание 4 (Salaries):", getAllSalaries(staff));
console.log("\nЗадание 5 (Student):");
printStudentFullInfo(myStudent);
console.log("\nЗадание 6 (Concat):", concatStrings("Hello, ", "World!"));
