function solve(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (newArray.length === 0 || array[index] >= newArray[newArray.length - 1]) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));