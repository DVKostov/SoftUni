function Problem(array, num) {
    let newArray = [];
    for (let indexOne = 0; indexOne < array.length; indexOne++) {
        for (let indexTwo = indexOne + 1; indexTwo < array.length; indexTwo++) {
            if (array[indexOne] + array[indexTwo] === num) {
                newArray.push(array[indexOne]);
                newArray.push(array[indexTwo]);
            }
        }
    }
    let print = String(newArray[0])
    for (let index = 1; index < newArray.length; index++) {
        if (index % 2 === 0) {
            print = print.concat(`\n${newArray[index]}`)
        } else {
            print = print.concat(` ${newArray[index]}`)
        }
        
    }
    console.log(print)
}
Problem([1, 7, 6, 2, 19, 23], 8)