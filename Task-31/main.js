"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Huzaifa", "Hadi", "Hasnain", "Umair", "Aarij"];
let new_users = ["Owais", "HUZAIFA", "HADI", "Basit", "Saad"];
for (let i = 0; i < new_users.length; i++) {
    let isTaken = current_users.some(user => user.toLowerCase() === new_users[i].toLowerCase());
    if (isTaken) {
        console.log(`The username '${new_users[i]}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_users[i]}' is available.`);
    }
}
