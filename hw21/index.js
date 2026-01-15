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
// Задание 1: Абстрактный класс Animal (Полиморфизм) 
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () { return "Bark"; };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () { return "Meow"; };
    return Cat;
}(Animal));
// Задание 2: Абстрактный класс ColoredShape 
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var ColoredShape = /** @class */ (function (_super) {
    __extends(ColoredShape, _super);
    function ColoredShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ColoredShape;
}(Shape));
var ColoredCircle = /** @class */ (function (_super) {
    __extends(ColoredCircle, _super);
    function ColoredCircle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.color = "Red";
        return _this;
    }
    ColoredCircle.prototype.calculateArea = function () { return Math.PI * Math.pow(this.radius, 2); };
    return ColoredCircle;
}(ColoredShape));
var ColoredRectangle = /** @class */ (function (_super) {
    __extends(ColoredRectangle, _super);
    function ColoredRectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.color = "Blue";
        return _this;
    }
    ColoredRectangle.prototype.calculateArea = function () { return this.width * this.height; };
    return ColoredRectangle;
}(ColoredShape));
// Задание 3: Абстрактный класс Appliance (Техника) 
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    return Appliance;
}());
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WashingMachine.prototype.turnOn = function () { console.log("Стиральная машина включена"); };
    WashingMachine.prototype.turnOff = function () { console.log("Стиральная машина выключена"); };
    return WashingMachine;
}(Appliance));
var Refrigerator = /** @class */ (function (_super) {
    __extends(Refrigerator, _super);
    function Refrigerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Refrigerator.prototype.turnOn = function () { console.log("Холодильник работает"); };
    Refrigerator.prototype.turnOff = function () { console.log("Холодильник отдыхает"); };
    return Refrigerator;
}(Appliance));
//  Задание 4: Абстрактный класс Account (Финансы) 
var Account = /** @class */ (function () {
    function Account() {
        this.balance = 0;
    }
    Account.prototype.getBalance = function () { return this.balance; };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance += amount + (amount * 0.05); // +5% годовых при пополнении
    };
    SavingsAccount.prototype.withdraw = function (amount) { this.balance -= amount; };
    return SavingsAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckingAccount.prototype.deposit = function (amount) { this.balance += amount; };
    CheckingAccount.prototype.withdraw = function (amount) {
        var commission = 10;
        this.balance -= (amount + commission); // Комиссия за снятие
    };
    return CheckingAccount;
}(Account));
//  Задание 5: Абстрактный класс Media 
var Media = /** @class */ (function () {
    function Media() {
    }
    return Media;
}());
var Audio = /** @class */ (function (_super) {
    __extends(Audio, _super);
    function Audio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audio.prototype.play = function () { console.log("Playing audio..."); };
    return Audio;
}(Media));
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Video.prototype.play = function () { console.log("Playing video..."); };
    return Video;
}(Media));
// проверка
console.log(" Задание 1: Animals");
var animals = [new Dog(), new Cat()];
animals.forEach(function (a) { return console.log(a.makeSound()); });
console.log("\n-Задание 2: Shapes ");
var shapes = [new ColoredCircle(10), new ColoredRectangle(5, 10)];
shapes.forEach(function (s) { return console.log("\u0426\u0432\u0435\u0442: ".concat(s.color, ", \u041F\u043B\u043E\u0449\u0430\u0434\u044C: ").concat(s.calculateArea().toFixed(2))); });
console.log("\n Задание 3: Appliances ");
var devices = [new WashingMachine(), new Refrigerator()];
devices.forEach(function (d) { d.turnOn(); d.turnOff(); });
console.log("\n Задание 4: Accounts ");
var mySavings = new SavingsAccount();
mySavings.deposit(100);
console.log("Сберегательный счет (с %):", mySavings.getBalance());
var myChecking = new CheckingAccount();
myChecking.deposit(100);
myChecking.withdraw(50);
console.log("Текущий счет (с комиссией):", myChecking.getBalance());
console.log("\n Задание 5: Media");
var playlist = [new Audio(), new Video()];
playlist.forEach(function (m) { return m.play(); });
