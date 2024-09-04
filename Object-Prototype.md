JavaScript mein **prototype** ek mechanism hai jiske through objects apni properties aur methods ko share kar sakte hain. Yeh JavaScript ka ek powerful feature hai jo inheritance ko enable karta hai, yani ek object apne parent object ke features ko use kar sakta hai.

### Prototype ko Simple Langvage Mein Samajhte Hain:

1. **Har Function ka Prototype Hota Hai**: 
   - Jab aap JavaScript mein ek function banate hain, to us function ka ek default property hota hai jo `prototype` hota hai. Is `prototype` property ke through aap us function ke saath naye properties ya methods jod sakte hain, jo baad mein us function ke objects inherit karenge.

2. **Objects Prototype Se Inherit Karte Hain**:
   - Jab aap ek object banate hain aur us object mein koi property ya method directly nahi milta, to JavaScript uske prototype chain mein search karti hai. Agar us object ka prototype mein wo property ya method mile, to usko access kar sakte hain.

### Example: Prototype ka Use

```javascript
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
```

**Explanation:**
- `Person` ek constructor function hai.
- `Person.prototype.greet` ke zariye humne ek method define kiya jo saare `Person` objects ke liye available hoga.
- `person1` aur `person2` dono objects apne respective `name` se `greet` method ko call kar rahe hain.
- Yeh dono objects apne constructor function ke `prototype` se `greet` method ko inherit kar rahe hain.

### Summary:
- **Prototype** JavaScript mein objects ko inherit karne ka tareeqa hai.
- Aap prototype ke through objects ke beech properties aur methods share kar sakte hain.
- Jab koi property ya method kisi object mein directly nahi milti, to JavaScript uske prototype chain mein usko search karti hai.

Prototype ka concept JavaScript mein inheritance aur reusability ko enable karta hai, jo code ko efficient aur maintainable banata hai.

### Example: Object Prototype
```javascript

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
console.log(objProto.work); // Web Devlopercal;

```