"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usernames = ['admin', 'Hamza', 'Huzaifa', 'Hadi', 'Mohi'];
for (const username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
