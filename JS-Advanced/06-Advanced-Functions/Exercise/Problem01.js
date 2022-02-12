function solve(array, order) {
    return array.sort((a, b) => sort(a, b, order));

    function sort (a, b, order) {
        if (order === 'asc') {
        return a - b
        } else {
            return b - a
        }
    }

}

console.log(solve([14, 7, 17, 6, 8], 'asc'));