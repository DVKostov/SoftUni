function Problem8 (num) {
    let i = 1;
    product = 0;
    while (i <= 10) {
        product = num * i;
        console.log(`${num} X ${i} = ${product}`)
        i++;
    }
}
Problem8(5)