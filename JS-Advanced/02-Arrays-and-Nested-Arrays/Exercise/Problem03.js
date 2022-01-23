function solve(array) {

    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 'add') {
            newArray.push(index + 1);
        } else {
            newArray.pop();
        }
    }

    if (newArray.length === 0) {
        return 'Empty';
    } else {
        return newArray.join('\n');
    }
}

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));