function Problem(array, n) {
    for (let index = 0; index < n; index++) {
        array.push(array.shift())
    }
    console.log(array.join(' '))

}
Problem([51, 47, 32, 61, 21], 2)