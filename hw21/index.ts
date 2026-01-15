// Задание 1: Абстрактный класс Animal (Полиморфизм) 
abstract class Animal {
    abstract makeSound(): string; // Абстрактный метод без реализации
}

class Dog extends Animal {
    makeSound(): string { return "Bark"; }
}

class Cat extends Animal {
    makeSound(): string { return "Meow"; }
}

// Задание 2: Абстрактный класс ColoredShape 
abstract class Shape {
    abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
    abstract color: string; // Абстрактное поле
}

class ColoredCircle extends ColoredShape {
    color = "Red";
    constructor(private radius: number) { super(); }
    calculateArea(): number { return Math.PI * this.radius ** 2; }
}

class ColoredRectangle extends ColoredShape {
    color = "Blue";
    constructor(private width: number, private height: number) { super(); }
    calculateArea(): number { return this.width * this.height; }
}

// Задание 3: Абстрактный класс Appliance (Техника) 
abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

class WashingMachine extends Appliance {
    turnOn(): void { console.log("Стиральная машина включена"); }
    turnOff(): void { console.log("Стиральная машина выключена"); }
}

class Refrigerator extends Appliance {
    turnOn(): void { console.log("Холодильник работает"); }
    turnOff(): void { console.log("Холодильник отдыхает"); }
}

//  Задание 4: Абстрактный класс Account (Финансы) 
abstract class Account {
    protected balance: number = 0;
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    getBalance(): number { return this.balance; }
}

class SavingsAccount extends Account {
    deposit(amount: number): void { 
        this.balance += amount + (amount * 0.05); // +5% годовых при пополнении
    }
    withdraw(amount: number): void { this.balance -= amount; }
}

class CheckingAccount extends Account {
    deposit(amount: number): void { this.balance += amount; }
    withdraw(amount: number): void { 
        const commission = 10;
        this.balance -= (amount + commission); // Комиссия за снятие
    }
}

//  Задание 5: Абстрактный класс Media 
abstract class Media {
    abstract play(): void;
}

class Audio extends Media {
    play(): void { console.log("Playing audio..."); }
}

class Video extends Media {
    play(): void { console.log("Playing video..."); }
}

// проверка

console.log(" Задание 1: Animals");
const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(a => console.log(a.makeSound()));



console.log("\n-Задание 2: Shapes ");
const shapes: ColoredShape[] = [new ColoredCircle(10), new ColoredRectangle(5, 10)];
shapes.forEach(s => console.log(`Цвет: ${s.color}, Площадь: ${s.calculateArea().toFixed(2)}`));

console.log("\n Задание 3: Appliances ");
const devices: Appliance[] = [new WashingMachine(), new Refrigerator()];
devices.forEach(d => { d.turnOn(); d.turnOff(); });

console.log("\n Задание 4: Accounts ");
const mySavings = new SavingsAccount();
mySavings.deposit(100);
console.log("Сберегательный счет (с %):", mySavings.getBalance());

const myChecking = new CheckingAccount();
myChecking.deposit(100);
myChecking.withdraw(50);
console.log("Текущий счет (с комиссией):", myChecking.getBalance());

console.log("\n Задание 5: Media");
const playlist: Media[] = [new Audio(), new Video()];
playlist.forEach(m => m.play());