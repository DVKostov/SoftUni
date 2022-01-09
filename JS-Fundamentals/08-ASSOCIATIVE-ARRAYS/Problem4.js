function solve(input) {
    let items = new Map();
    for (const line of input) {
        let [item, qty] = line.split(' ');
        if (!items.has(item)) {
            items.set(item, Number(qty))
        } else {
            items.set(item, Number(qty) + items.get(item))
        }
    }

    for (const item of items) {
        console.log(`${item[0]} -> ${item[1]}`)
    }

    
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])