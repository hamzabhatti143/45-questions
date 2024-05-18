function orderSandwich(...items: string[]): void {
    console.log("Order Summary:");
    if (items.length === 0) {
        console.log("  - Plain Sandwich");
    } else {
        items.forEach((item, index) => {
            console.log(`  - ${index + 1}. ${item}`);
        });
    }
    console.log();
}

orderSandwich("Cheese", "Tomato", "Lettuce", "Mayonnaise");
orderSandwich("Ham", "Cheese", "Mustard");
orderSandwich();
