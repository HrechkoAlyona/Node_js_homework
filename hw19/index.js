// Задание 1: Стрелочная функция (sumEvenNumbers)
var sumEvenNumbers = function (numbers) {
    return numbers
        .filter(function (num) { return num % 2 === 0; }) // Оставляем только четные
        .reduce(function (sum, current) { return sum + current; }, 0); // Суммируем
};
var isNotEmpty = function (str) { return str.length > 0; };
var areStringsEqual = function (s1, s2) { return s1 === s2; };
// Задание 4: Обобщенная функция (Generics) - getLastElement 
// <T> позволяет функции работать с массивом любого типа 
function getLastElement(array) {
    return array.length > 0 ? array[array.length - 1] : undefined;
}
// Задание 5: Обобщенная функция makeTriple 
function makeTriple(a, b, c) {
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
var numbers = [10, 20, 30];
var strings = ["a", "b", "c"];
console.log("Последнее число:", getLastElement(numbers)); // 30
console.log("Последняя строка:", getLastElement(strings)); // "c"
//  5
var tripleNumbers = makeTriple(1, 2, 3);
var tripleStrings = makeTriple("High", "Mid", "Low");
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
