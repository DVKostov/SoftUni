function solve(array) {
    let sum1 = 0;
    let tic1 = 0;
    let sum2 = 0;
    let tic2 = array[0].length - 1

    for (let index = 0; index < array.length; index++) {
        sum1 += array[index][tic1];
        tic1++;
        sum2 += array[index][tic2];
        tic2--;
    }
    return `${sum1} ${sum2}`


}

console.log(solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
));