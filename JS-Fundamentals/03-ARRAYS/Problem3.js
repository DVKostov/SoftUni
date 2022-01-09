function Problem(n, numbers) {
    let newNumbers = []
    for (let index = n - 1; index >= 0; index--) {
        newNumbers.push(numbers[index])
    }
    let print = ''
    for (let index = 0; index < newNumbers.length; index++) {
        print = print.concat(`${newNumbers[index]} `)
        
    }
    console.log(print)
    
}
Problem(3, [10, 20, 30, 40, 50])