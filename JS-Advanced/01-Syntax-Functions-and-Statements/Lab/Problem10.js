function solve(array) {
    let sum1 = 0;
    let sum2 = 0;
    let concat = '';

    for (let index = 0; index < array.length; index++) {
        sum1 += array[index];
        sum2 += 1 / array[index];
        concat += String(array[index]);
    }

    console.log(sum1);
    console.log(sum2);
    console.log(concat);

};

solve([1, 2, 3]);