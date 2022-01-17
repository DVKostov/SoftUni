function solve(array) {
    let biggest = array[0][0];
    for (let index = 0; index < array.length; index++) {
        let top = array[index].sort((a,b) => b - a)[0];
        if (top > biggest) {
            biggest = top;
        };  
    }
    return biggest;
}

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   
));