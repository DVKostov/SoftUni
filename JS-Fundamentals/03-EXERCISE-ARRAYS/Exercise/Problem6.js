function Problem(array) {
    let output

    for (let index = 0; index < array.length; index++) {
        let leftSum = 0;
        let rightSum = 0;
        if (array[index - 1]) {
            for (let indexLeft = 0; indexLeft < index; indexLeft++) {
                leftSum += array[indexLeft]
            }
        } else {
            leftSum = 0;
        }
        if (array[index + 1]) {
            for (let indexRight = index + 1; indexRight < array.length; indexRight++) {
                rightSum += array[indexRight]
            }
        } else {
            rightSum = 0;
        }
        if (leftSum === rightSum) {
            output = index
            break;
        }

    }
    if (output || output === 0) {
        console.log(output)
    } else {
        console.log('no')
    }
}
Problem([1])