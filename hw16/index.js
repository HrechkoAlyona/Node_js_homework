// Задание 1: Функция приветствия 
function greetUser(name) {
    console.log("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "!"));
}
function printPersonInfo(person) {
    console.log("\u0418\u043C\u044F: ".concat(person.name, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(person.age, ", \u0413\u043E\u0440\u043E\u0434: ").concat(person.city));
}
// Задание 3: Квадрат числа 
function squareNumber(num) {
    return num * num;
}
// Задание 4: Типизация boolean
function isEven(num) {
    return num % 2 === 0;
}
function printStudentInfo(student) {
    console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442: ".concat(student.name, ", \u041E\u0446\u0435\u043D\u043A\u0430: ").concat(student.grade));
}
// Задание 6: Функция с типом void 
function logMessage(message) {
    console.log(message);
}
// проверка
greetUser("Alex");
printPersonInfo({ name: "Mike", age: 25, city: "Berlin" });
console.log("Квадрат 5:", squareNumber(5));
console.log("Число 4 четное?", isEven(4));
printStudentInfo({ name: "Alex", grade: 1 });
logMessage("Все задания выполнены успешно!");
