
// funtion Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
};

const person1 = new Person('Mayank', 30);
const person2 = new Person('Amit', 25);

person1.greet();  // Output: Hello, Mayank
person2.greet();  // Output: Hello, Amit


// Object Prototype

let obj = {
  name: "Amit",
  lName: "Chouhan"
}
console.log(obj);

let objProto = {
    age : 21
}

obj.__proto__ = objProto;

objProto.__proto__ = {
    work : "Web Devloper"
}

console.log(obj.name);     // Amit
console.log(objProto.age); // 21
console.log(objProto.work); // Web Devloper










