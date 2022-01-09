function result(num) {
    let oddSum = 0;
    let evenSum = 0;
    for (let index = 0; index < String(num).length; index++) {
        if (Number(String(num)[index]) % 2 == 0 ) {
            evenSum += Number(String(num)[index])
        } else {
            oddSum += Number(String(num)[index])
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`



}
console.log(result(1000435

))