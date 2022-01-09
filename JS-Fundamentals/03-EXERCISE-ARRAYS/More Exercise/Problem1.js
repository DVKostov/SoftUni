function Problem(array) {
    let newArray = [];
    let step = Number(array[array.length - 1]);
    for (let index = 0; index < array.length - 1; index += step) {
        newArray.push(array[index])
        
    }
    console.log(newArray.join(' '))



}
Problem(['5', '20', '31', '4', '20', '2'])