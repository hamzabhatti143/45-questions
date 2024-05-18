function createCar(manufacturer: string, model: string, ...extras: [string, any][]): { [key: string]: any } {
    let car: { [key: string]: any } = { manufacturer, model };

    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

const myCar = createCar("Toyota", "Camry", ["color", "red"], ["year", 2024]);
console.log(myCar);
