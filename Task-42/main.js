"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeGreat(magicians) {
    return magicians.map(magician => `Great ${magician}`);
}
function showMagicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
const magicians = ["Dai Vernon", "Doug Henning", "David Blaine"];
const greatMagicians = makeGreat([...magicians]);
console.log("Original Magicians:");
showMagicians(magicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
