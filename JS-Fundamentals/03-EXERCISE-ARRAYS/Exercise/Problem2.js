function Problem(firstArray, secondArray) {
    for (let index = 0; index < firstArray.length; index++) {
        for (let secondIndex = 0; secondIndex < secondArray.length; secondIndex++) {
            if (firstArray[index] === secondArray[secondIndex]) {
                console.log(firstArray[index])
            }
        }
    }

}
Problem(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)