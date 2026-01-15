var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Задание 1: Класс Animal и наследование
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    Animal.prototype.sound = function () {
        console.log("The animal makes a sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, species, breed) {
        var _this = _super.call(this, name, species) || this; // Вызов конструктора родителя 
        _this.breed = breed;
        return _this;
    }
    // Переопределение метода (Method Overriding)
    Dog.prototype.sound = function () {
        console.log("The dog barks");
    };
    return Dog;
}(Animal));
// Задание 2: Статические свойства
var Library = /** @class */ (function () {
    function Library() {
    }
    Library.prototype.addBook = function () {
        Library.totalBooks++;
    };
    // Статическое свойство принадлежит классу, а не объектам 
    Library.totalBooks = 0;
    return Library;
}());
// Задание 3: Переопределение конструктора 
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    return Vehicle;
}());
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, type) {
        // Обязательно вызываем super() перед использованием this 
        var _this = _super.call(this, make, model) || this;
        _this.type = type;
        return _this;
    }
    return Motorcycle;
}(Vehicle));
// Проверка 
console.log("Задание 1: Animal & Dog ");
var genericAnimal = new Animal("Some Name", "Unknown");
genericAnimal.sound();
var myDog = new Dog("Buddy", "Canine", "Golden Retriever");
console.log("\u0418\u043C\u044F: ".concat(myDog.name, ", \u041F\u043E\u0440\u043E\u0434\u0430: ").concat(myDog.breed));
myDog.sound();
console.log("\n--Задание 2: Library (Static)");
var lib1 = new Library();
var lib2 = new Library();
lib1.addBook();
lib1.addBook();
lib2.addBook();
console.log("\u0412\u0441\u0435\u0433\u043E \u043A\u043D\u0438\u0433 \u0432\u043E \u0432\u0441\u0435\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\u0445: ".concat(Library.totalBooks)); // Ожидаем 3
console.log("\n- Задание 3: Motorcycle");
var myMoto = new Motorcycle("Yamaha", "R1", "Sportbike");
console.log("\u041C\u043E\u0442\u043E\u0446\u0438\u043A\u043B: ".concat(myMoto.make, " ").concat(myMoto.model, ", \u0422\u0438\u043F: ").concat(myMoto.type));
