function solve(num) {
    num = String(num);
    let first = num[0];
    let same = 'true';
    let sum = Number(first);
    for (let index = 1; index < num.length; index++) {
        if (num[index] !== first) {
            same = 'false';
        }
        sum += Number(num[index]);
    }
    console.log(same);
    console.log(sum);
};

solve(22222212);