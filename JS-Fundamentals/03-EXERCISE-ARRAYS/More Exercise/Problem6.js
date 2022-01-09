function Problem(array) {
    let sum
    let magic = true
    for (let index = 0; index < array.length; index++) {
        let currentSum = 0
        for (let innerIndex = 0; innerIndex < array[index].length; innerIndex++) {
            currentSum += array[index][innerIndex]
        }
        if (sum) {
            if  (sum !== currentSum) {
                magic = false
                break;
            }
        } else {
            sum = currentSum
        } 
    }
    if (magic) {
        for (let index = 0; index < array.length; index++) {
            let currentSum = 0
            for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
                currentSum += array[innerIndex][index]
            }
            if  (sum !== currentSum) {
                magic = false
                break;
            } 
        }


    }

    console.log(magic)
}
Problem([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )
   Problem([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )