setTimeout(() => console.log("Executed immediately"),1000)


function Person(name) {
   this.name = name; // Свойство экземпляра
}

// Добавляем метод в прототип
Person.prototype.sayHello = function() {
   return `Hello, my name is ${this.name}`;
};

// Создаём объект через конструктор
const alice = new Person("Alice");

console.log(alice.sayHello()); // "Hello, my name is Alice"

// Цепочка прототипов
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Object.prototype); // true
