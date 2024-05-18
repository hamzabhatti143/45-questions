"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
const magicians = ["Dai Vernon", "Doug Henning", "David Blaine"];
show_magicians(magicians);
