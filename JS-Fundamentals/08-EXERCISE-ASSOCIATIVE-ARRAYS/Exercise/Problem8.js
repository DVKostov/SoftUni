function solve(input) {
    class Item {
        constructor (item, qty) {
            this.item = item;
            this.qty = qty;
        }
    }
    let items = [];
    for (let index = 0; index < input.length; index += 2) {
        let item = input[index];
        let qty = input[index + 1];
        let current = items.find(i => i.item === item);
        if (current === undefined) {
            items.push(new Item(item, Number(qty)))
        } else {
            current.qty += Number(qty)
        }
    }
    for (const iterator of items) {
        console.log(`${iterator.item} -> ${iterator.qty}`)
    }
}
solve(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
)