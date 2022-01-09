function Problem4 (input) {
    let num = Number(input.shift());

    let i = 1;
    while (i <= num) {
        console.log(i);
        i = i * 2 + 1;
    }

}
Problem4(['3'])