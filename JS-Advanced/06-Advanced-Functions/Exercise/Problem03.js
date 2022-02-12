let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13


function getFibonator() {
    let array = [0];
    return function () {
        let next = 1;
        if (array.length > 1) {
            next = array[array.length - 1] + array[array.length - 2];
        }
        array.push(next);
        return next;
    }

}