function solve(num = 5) {
    let print = '* ';
    for (let index = 1; index <= num; index++) {
        console.log(print.repeat(num));
    };
};

solve();