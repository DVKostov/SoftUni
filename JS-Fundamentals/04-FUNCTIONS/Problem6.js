function negative(firstNum, secondNum, thirdNum) {
    let negatives = 0
    if (firstNum <= 0) {
        negatives++
    } 
    if (secondNum <= 0) {
        negatives++
    } 
    if (thirdNum <= 0) {
        negatives++
    } 
    if (negatives % 2 == 0) {
        return 'Positive'
    } else {
        return 'Negative'
    }


}
console.log(negative(-1,
    0,
   1
))