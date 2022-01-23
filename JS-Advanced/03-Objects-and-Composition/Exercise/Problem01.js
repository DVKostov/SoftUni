function solve(array) {
    let obj = {};
    for (let index = 1; index < array.length; index += 2) {
        obj[array[index-1]] = Number(array[index]);
    }
    return obj;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));