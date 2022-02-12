let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

function solution (num) {
    let num1 = num
    return function add5(num2) {
        return num1 + num2
    }
}