function solve(x1, y1, x2, y2) {

    num1 = Math.sqrt(Math.pow(0-x1,2)+Math.pow(0-y1,2));
    console.log(`{${x1}, ${y1}} to {0, 0} is ${i(num1)}`);
    num2 = Math.sqrt(Math.pow(0-x2,2)+Math.pow(0-y2,2));
    console.log(`{${x2}, ${y2}} to {0, 0} is ${i(num2)}`);
    num3 = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${i(num3)}`);
    function i (num) {
        if (num - Math.floor(num) === 0) {
            return `valid`
        } else {
            return `invalid`
        }
    }
};

solve(2, 1, 1, 1);