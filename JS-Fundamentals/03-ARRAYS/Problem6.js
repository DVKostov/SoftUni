function Problem(array) {
    let evenSum = 0;
    let oddSum = 0;
    for (const iterator of array) {
        if (iterator % 2 === 0) {
            evenSum += iterator
        } else {
            oddSum += iterator
        }
    }
    console.log(evenSum - oddSum)

}
Problem([1,2,3,4,5,6])