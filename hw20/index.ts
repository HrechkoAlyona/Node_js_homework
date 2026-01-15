// Задание 1: Класс Animal и наследование
class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    sound(): void {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, species: string, breed: string) {
        super(name, species); // Вызов конструктора родителя 
        this.breed = breed;
    }

    // Переопределение метода (Method Overriding)
    sound(): void {
        console.log("The dog barks");
    }
}

// Задание 2: Статические свойства
class Library {
    // Статическое свойство принадлежит классу, а не объектам 
    static totalBooks: number = 0;

    addBook(): void {
        Library.totalBooks++;
    }
}

// Задание 3: Переопределение конструктора 
class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

class Motorcycle extends Vehicle {
    type: string;

    constructor(make: string, model: string, type: string) {
        // Обязательно вызываем super() перед использованием this 
        super(make, model);
        this.type = type;
    }
}

// Проверка 

console.log("Задание 1: Animal & Dog ");
const genericAnimal = new Animal("Some Name", "Unknown");
genericAnimal.sound();

const myDog = new Dog("Buddy", "Canine", "Golden Retriever");
console.log(`Имя: ${myDog.name}, Порода: ${myDog.breed}`);
myDog.sound();

console.log("\n--Задание 2: Library (Static)");
const lib1 = new Library();
const lib2 = new Library();

lib1.addBook();
lib1.addBook();
lib2.addBook();

console.log(`Всего книг во всех библиотеках: ${Library.totalBooks}`); // Ожидаем 3

console.log("\n- Задание 3: Motorcycle");
const myMoto = new Motorcycle("Yamaha", "R1", "Sportbike");
console.log(`Мотоцикл: ${myMoto.make} ${myMoto.model}, Тип: ${myMoto.type}`);