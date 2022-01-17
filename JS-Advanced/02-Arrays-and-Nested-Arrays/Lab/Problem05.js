function solve(array) {
    let newArray = array.sort(function(a, b) {return a - b });
    return `${newArray[0]} ${newArray[1]}`;
}

console.log(solve([30, 15, 50, 5]));