// npm init -y
// tsc --init
// "type": "module"
// tsc index.ts
// node index.js


// Задание 1: Стрелочная функция (sumEvenNumbers)
const sumEvenNumbers = (numbers: number[]): number => {
    return numbers
        .filter(num => num % 2 === 0) // Оставляем только четные
        .reduce((sum, current) => sum + current, 0); // Суммируем
};

// Задание 2: Интерфейс для функции (StringToBooleanFunction)
interface StringToBooleanFunction {
    (str: string): boolean;
}

const isNotEmpty: StringToBooleanFunction = (str) => str.length > 0;

// Задание 3: Тип для функции (CompareStrings) 
type CompareStrings = (s1: string, s2: string) => boolean;

const areStringsEqual: CompareStrings = (s1, s2) => s1 === s2;

// Задание 4: Обобщенная функция (Generics) - getLastElement 
// <T> позволяет функции работать с массивом любого типа 
function getLastElement<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[array.length - 1] : undefined;
}

// Задание 5: Обобщенная функция makeTriple 
function makeTriple<T>(a: T, b: T, c: T): T[] {
    return [a, b, c];
}

// проверка

//  1
console.log("Сумма четных [1, 2, 3, 4, 6]:", sumEvenNumbers([1, 2, 3, 4, 6])); // Ожидаем 12

//  2
console.log("Строка 'Hello' не пустая?", isNotEmpty("Hello")); // true
console.log("Пустая строка не пустая?", isNotEmpty("")); // false

//  3
console.log("Строки 'Apple' и 'Apple' равны?", areStringsEqual("Apple", "Apple")); // true

//  4 (Generics в действии)
const numbers = [10, 20, 30];
const strings = ["a", "b", "c"];
console.log("Последнее число:", getLastElement(numbers)); // 30
console.log("Последняя строка:", getLastElement(strings)); // "c"

//  5
const tripleNumbers = makeTriple(1, 2, 3);
const tripleStrings = makeTriple("High", "Mid", "Low");
console.log("Тройка чисел:", tripleNumbers);
console.log("Тройка строк:", tripleStrings);


// Стрелочные функции (Задание 1): Это современный стандарт JavaScript/TypeScript.
// Они короче и удобнее для методов вроде .filter() и .reduce().

// Интерфейс vs Тип для функций (Задания 2 и 3): можно описывать функции обоими способами.
//  Интерфейсы чаще используются для сложных объектов,
//  а type — для простых определений функций.

// Generics (<T>) (Задания 4 и 5): Это "шаблоны". 
// Вместо того чтобы писать отдельную функцию для массива чисел
//  и отдельную для массива строк, мы пишем одну с буквой T.
//  TypeScript сам поймет, какой тип подставить в момент вызова.



