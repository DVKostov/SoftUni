function Problem(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        let num = parseInt(array[index])
        if (num % 2 === 0) {
            sum += num
        }
    }
    console.log(sum)

}
Problem(['1', '2', '3', '4', '5', '6'])