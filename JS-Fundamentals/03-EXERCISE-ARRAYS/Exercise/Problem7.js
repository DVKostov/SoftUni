function Problem(array) {
    let longestArray = [];
    let currentArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] === currentArray[currentArray.length - 1] || currentArray.length === 0) {
            currentArray.push(array[index]);
        } else {
            if (currentArray.length > longestArray.length) {
                longestArray = currentArray; 
            }
            currentArray = [];
            currentArray.push(array[index]);
        }
    }
    console.log(longestArray.join(' '))



}
Problem([1, 1, 1, 2, 3, 1, 3, 3])