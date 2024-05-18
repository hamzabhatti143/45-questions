"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Huzaifa", "Hadi", "Hasnain"];
const newGuest1 = "Basit";
const newGuest2 = "Aarij";
const newGuest3 = "Muneer";
console.log("Good news! We've found a bigger dinner table!");
guests.unshift(newGuest1);
guests.splice(Math.floor(guests.length / 2), 0, newGuest2);
guests.push(newGuest3);
guests.forEach(guest => {
    console.log(`Dear ${guest}, please join us for dinner this Saturday!`);
});
