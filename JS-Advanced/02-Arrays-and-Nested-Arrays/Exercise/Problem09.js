function solve(array) {
    let rowsSum = 0;
    let rowsEquals = true;
    for (let index = 0; index < array.length; index++) {
        let current = 0;
        for (let i = 0; i < array.length; i++) {
            current += array[index][i];            
        };
        if (rowsSum === 0) {
            rowsSum = current;
        } else if (rowsSum !== current) {
            rowsEquals = false;
            break;
        }
    }

    let columnsSum = 0;
    let columnsEquals = true;
    for (let index = 0; index < array.length; index++) {
        let current = 0;
        for (let i = 0; i < array.length; i++) {
            current += array[i][index];            
        };
        if (columnsSum === 0) {
            columnsSum = current;
        } else if (columnsSum !== current) {
            columnsEquals = false;
            break;
        }
    }
    
    if (rowsEquals && columnsEquals) {
        return true;
    } else {
        return false;
    }

}

console.log(solve(
    [[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]

));