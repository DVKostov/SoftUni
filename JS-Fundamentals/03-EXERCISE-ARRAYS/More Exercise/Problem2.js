function Problem(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 'add') {
            newArray.push(index + 1)
        } else if (newArray.length > 0) {
            newArray.pop()
        }
    }
    if (newArray.length > 0) {
        console.log(newArray.join(' '))
    } else {
        console.log('Empty')
    }


}
Problem(['remove', 'remove', 'remove'])