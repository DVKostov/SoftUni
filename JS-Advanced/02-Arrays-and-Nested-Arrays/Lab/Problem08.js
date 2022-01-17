function solve(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (index % 2 !== 0){
            newArray.unshift(array[index] * 2)
        }
    }
    return newArray;
}

console.log(solve([10, 15, 20, 25]));