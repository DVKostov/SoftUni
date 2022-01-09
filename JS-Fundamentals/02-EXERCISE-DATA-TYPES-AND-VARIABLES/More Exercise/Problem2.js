function Problem(num) {
    let isPrime = (num != 1);
    let sqrtnum = Math.floor(Math.sqrt(num));
    for (i = 2; i < sqrtnum + 1; i++) {
        if (num % i === 0) {
            isPrime = false
            break;
        }
    }
    console.log(isPrime)
}
Problem(7)