"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`Shirt Size: ${size}, Message: ${message}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'Hello, Hamza!');
