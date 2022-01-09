function solve(input) {
    class Array {
        constructor(array, order) {
            this.array = array;
            this.order = order;
        }
    }
    function compare(a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    }
    let order = 1;
    let arrays = [];
    for (let index = 0; index < input.length; index++) {
        let current = JSON.parse(input[index]).sort(compare);
        if (arrays.find(a => a.array.join('') === current.join('')) === undefined) {
            arrays.push(new Array(current, order));
            order++;
        }
    }
    function compareFinal(a, b) {
        if (a.array.length < b.array.length) {
            return -1;
        }
        if (a.array.length > b.array.length) {
            return 1;
        }
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return 1;
        }
        return 0;
    }
    arrays.sort(compareFinal)
    for (let index = 0; index < arrays.length; index++) {
       console.log(`[${arrays[index].array.join(', ')}]`)
        
    }

}
solve([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]
)