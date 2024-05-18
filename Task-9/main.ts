// This is a simple TypeScript program that calculates the area of a rectangle.

// Define a function to calculate the area of a rectangle
function calculateRectangleArea(length: number, width: number): number {
    return length * width;
}

// Main code
const length = 5;
const width = 10;
const area = calculateRectangleArea(length, width);

// Output the result
console.log(`The area of the rectangle with length ${length} and width ${width} is ${area}`);
