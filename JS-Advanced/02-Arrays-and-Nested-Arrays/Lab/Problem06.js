function solve(array) {
    let newArray = array.sort(function(a, b) {return a - b });
    newArray = newArray.slice(newArray.length / 2);


    return newArray;
}

console.log(solve([4, 7, 2, 5]));