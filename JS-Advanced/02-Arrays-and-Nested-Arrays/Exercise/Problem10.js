function solve(array) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    function check(num1, num2) {
        let player = dashboard[num1, num2];
        let rowWIn = true;
        for (let index = 0; index < array[num1].length; index++) {
            if (array[num1][index] !== player || array[num1][index] === false) {
                rowWIn = false;
            }
        }
        let columnWin = true;
        for (let index = 0; index < array.length; index++) {
            if (array[index][num2] !== player || array[index][num2] === false) {
                columnWin = false;
            }
        }


    }




}

console.log(solve([ "0 1",
                    "0 0",
                    "0 2", 
                    "2 0",
                    "1 0",
                    "1 1",
                    "1 2",
                    "2 2",
                    "2 1",
                    "0 0"]
));