function Problem(firstArray, secondArray) {
    let sum = 0;
    let neIndex
    for (let index in firstArray) {
        if (firstArray[index] === secondArray[index]) {
            sum += parseInt(firstArray[index]);
        } else {
            neIndex = index;
            break;
        }
    }
    if (neIndex) {
        console.log(`Arrays are not identical. Found difference at ${neIndex} index`)
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }



}
Problem(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])