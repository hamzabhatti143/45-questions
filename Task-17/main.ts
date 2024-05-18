let placesToVisit: string[] = [
    "Tokyo",
    "Paris",
    "New York",
    "Sydney",
    "Rome"
];

// Print original order
console.log("Original Order:");
console.log(placesToVisit.join(", "));

// Print alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort().join(", "));

// Original order remains
console.log("\nOriginal Order:");
console.log(placesToVisit.join(", "));

// Print reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse().join(", "));

// Original order remains
console.log("\nOriginal Order:");
console.log(placesToVisit.join(", "));

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit.join(", "));

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal Order:");
console.log(placesToVisit.join(", "));

// Sort in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit.join(", "));

// Sort in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.join(", "));
