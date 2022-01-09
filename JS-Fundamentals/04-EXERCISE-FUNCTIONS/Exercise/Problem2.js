function result(firstNum, secondNum, thirdNum) {
    return sub(sum(firstNum, secondNum), thirdNum)
    function sum (first, second) {
        return first + second;
    }
    function sub (first, second) {
        return first - second;
    }
    
    

}
console.log(result(23,
    6,
    10
    ))