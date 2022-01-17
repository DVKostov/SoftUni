function solve(array) {
    newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            newArray.unshift(array[index]);
        } else {
            newArray.push(array[index]);
        }
    }

    for (let index = 0; index < newArray.length; index++) {
        console.log(newArray[index]);
    }
}

solve([7, -2, 8, 9]);