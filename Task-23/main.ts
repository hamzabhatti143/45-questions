let equality: string = "Hamza";
let unequality: string = "Bhatti";

console.log(equality === unequality);   //false
console.log(equality !== unequality);   // true

let uppercase: string = "HAMZA";
let lowercase: string = "hamza";

console.log(uppercase.toLowerCase() === lowercase); // true

let num1: number = 1;
let num2: number = 2;

console.log(num1 === num2);  // false
console.log(num1 !== num2);  // true
console.log(num1 > num2);  // false
console.log(num1 < num2);  // true
console.log(num1 <= num2); // true
console.log(num1 >= num2);  // false


let x: number = 2;
let y: number = 3;
let z: number = 4;

console.log(x > y && y < z);  // false
console.log(x > z || y > x);  //true


let vegetables: string [] = ["Onion", "Potato", "Ginger", "Lady finger"]

let vegetablesincludes = "Potato";

console.log(vegetables.includes(vegetablesincludes));

let vegetablesexcludes = "Tomato"

console.log(!vegetables.includes(vegetablesexcludes));