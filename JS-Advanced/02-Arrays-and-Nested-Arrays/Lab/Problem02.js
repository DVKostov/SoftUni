function solve(n, k) {
    let array = [];
    array.push(1);

    while (true) {
        if (array.length === n) {
            break;
        } else {
            let sum = 0;
            let loops = 0;
            let start = array.length - 1;
            while (true) {
                if (start < 0 || loops === k) {
                    break;
                } else {
                    sum += array[start];
                    start--;
                    loops++;
                }
            }
            array.push(sum);
        }
    }


    return array;
}

console.log(solve(8, 2));