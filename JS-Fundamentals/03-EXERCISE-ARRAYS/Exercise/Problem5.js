function Problem(array) {
    let newArray = []
    for (let indexOne = 0; indexOne < array.length; indexOne++) {
        let bigger = true
        for (let indexTwo = indexOne + 1; indexTwo < array.length; indexTwo++) {
            if (array[indexOne] <= array[indexTwo]) {
                bigger = false;
                break;
            } 
        }
        if (bigger) {
            newArray.push(array[indexOne]);
        }
    }
    console.log(newArray.join(' '))

}
Problem([1, 4, 3, 2])