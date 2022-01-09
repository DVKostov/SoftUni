function Problem11(n) {
    let i = 1;
    let sum = 0;
    let count = 0;
    while (count < n) {
        if (i % 2 != 0) {
            console.log(i);
            sum += i;
            count ++;
        }
        i++;
    }
    console.log(`Sum: ${sum}`)
}
Problem11(5)