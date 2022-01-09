function Problem(firstArray, secondArray) {
    let thirdArray = [];
    for (let index = 0; index < firstArray.length; index++) {
        if (index % 2 === 0) {
            thirdArray.push(Number(firstArray[index]) + Number(secondArray[index]))
        } else {
            thirdArray.push(firstArray[index] + secondArray[index])
        }   
    }
    console.log(thirdArray.join(' - '))

}
Problem(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)