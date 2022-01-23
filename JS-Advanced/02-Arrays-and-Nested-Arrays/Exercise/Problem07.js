function solve(array) {
    array = array.sort(function (a, b) {
        return a - b; 
    });
    let newArray = [];
    let length = array.length / 2;
    for (let index = 0; index < length; index++) {
        newArray.push(array.shift());
        newArray.push(array.pop());
    }
    
    return newArray;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));