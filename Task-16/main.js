"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ['Huzaifa', 'Hadi', 'Osama', 'Mohi'];
const maxGuests = 2;
console.log("You can invite only two people for dinner.");
while (guests.length > maxGuests) {
    const removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}
for (const guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}
guests.splice(0);
console.log(guests);
