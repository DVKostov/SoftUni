function Problem(array) {
    let newArray = [array[0]]
    let biggest = array[0]
    for (let index = 1; index < array.length; index++) {
        if (array[index] >= biggest) {
            biggest = array[index];
            newArray.push(array[index]);
        }
    }
    console.log(newArray.join(' '))

}
Problem([ 1, 3, 8, 4, 10, 12, 3, 2, 24])