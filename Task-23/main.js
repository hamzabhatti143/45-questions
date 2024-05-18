"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let equality = "Hamza";
let unequality = "Bhatti";
console.log(equality === unequality); //false
console.log(equality !== unequality); // true
let uppercase = "HAMZA";
let lowercase = "hamza";
console.log(uppercase.toLowerCase() === lowercase); // true
let num1 = 1;
let num2 = 2;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num1 >= num2); // false
let x = 2;
let y = 3;
let z = 4;
console.log(x > y && y < z); // false
console.log(x > z || y > x); //true
let vegetables = ["Onion", "Potato", "Ginger", "Lady finger"];
let vegetablesincludes = "Potato";
console.log(vegetables.includes(vegetablesincludes));
let vegetablesexcludes = "Tomato";
console.log(!vegetables.includes(vegetablesexcludes));
