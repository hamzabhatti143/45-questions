"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Dai Vernon", "Doug Henning", "David Blaine"];
function show_magicians() {
    console.log("Magicians:");
    magicians.forEach((magician) => {
        console.log("- " + magician);
    });
}
function make_great() {
    magicians = magicians.map(magician => magician + " the Great");
}
show_magicians();
make_great();
show_magicians();
