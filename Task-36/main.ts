type ShirtSize = 'small' | 'medium' | 'large';

function make_shirt(size: ShirtSize = 'large', message: string = 'I love TypeScript') {
    console.log(`Shirt Size: ${size}, Message: ${message}`);
}

make_shirt();

make_shirt('medium');

make_shirt('small', 'Hello, Hamza!');
