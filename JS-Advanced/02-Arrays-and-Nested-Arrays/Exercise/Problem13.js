function solve(num1, num2) {
    let total = num1 * num2;
    let direction = ['right', 'down', 'left', 'up'];
    let d = 0;
    let array = [];
    let x = 0;
    let y = -1;
    
    for (let index = 0; index < num1; index++) {
        array[index] = [];
        for (let i = 0; i < num2; i++) {
            array[index][i] = 0;
        }
    }
    console.log(array);


    for (let index = 1; index <= total; index++) {

        let nextX = 0;
        let nextY = 0;
        switch (direction[d]) {
            case 'right':
                nextX = x;
                nextY = y + 1;
                break;
            case 'down':
                nextX = x + 1;
                nextY = y;
                break;
            case 'left':
                nextX = x;
                nextY = y - 1;
                break;
            case 'up':
                nextX = x - 1;
                nextY = y;
                break;
        }
        if (array[nextX][nextY] !== 0 || nextX < 0 || nextX > num1 - 1 || nextY < 0 || nextY > num2 - 1) {
            d++;
            if (d === 5) {
                d = 0;
            };
        } else {
            array[nextX][nextY] = index;
            x = nextX;
            y = nextY;
        }
    }
    return array;
}

console.log(solve(5, 5));