"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Huzaifa", "Usama", "Moiz", "Kamaal"];
const unableToAttend = guestList[2];
const newInvitee = "Owais";
console.log(`${unableToAttend} can't make it to the dinner.`);
guestList[2] = newInvitee;
console.log("Updated guest list:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, please join us for dinner on Saturday night.`);
});
