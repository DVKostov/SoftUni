function Problem(array) {
    let rotations = Number(array[array.length - 1]);
    array.pop();
    for (let index = 1; index <= rotations; index++) {
        array.unshift(array[array.length - 1]);
        array.pop();
    }
    console.log(array.join(' '))

}
Problem(['Banana', 'Orange', 'Coconut', 'Apple', '15'])