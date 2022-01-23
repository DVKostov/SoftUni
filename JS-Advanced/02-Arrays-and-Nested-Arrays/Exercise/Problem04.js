function solve(array, num) {
    for (let index = 0; index < num; index++) {
        array.unshift(array.pop());
    }
    return array.join(' ');
}

console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));