function solve(product, grams, price) {
    let kilo = grams / 1000;
    let sum = kilo * price;
    console.log(`I need $${sum.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${product}.`);
};

solve('apple', 1563, 2.35);