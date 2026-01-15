// Задание 1: Функция приветствия 
function greetUser(name: string): void {
    console.log(`Привет, ${name}!`);
}

// Задание 2: Интерфейс Person 
interface Person {
    name: string;
    age: number;
    city: string;
}

function printPersonInfo(person: Person): void {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}

// Задание 3: Квадрат числа 
function squareNumber(num: number): number {
    return num * num;
}

// Задание 4: Типизация boolean
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Задание 5: Интерфейс Student
interface Student {
    name: string;
    grade: number;
}

function printStudentInfo(student: Student): void {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

// Задание 6: Функция с типом void 
function logMessage(message: string): void {
    console.log(message);
}

// проверка
greetUser("Alex");
printPersonInfo({ name: "Mike", age: 25, city: "Berlin" });
console.log("Квадрат 5:", squareNumber(5));
console.log("Число 4 четное?", isEven(4));
printStudentInfo({ name: "Alex", grade: 1 });
logMessage("Все задания выполнены успешно!");