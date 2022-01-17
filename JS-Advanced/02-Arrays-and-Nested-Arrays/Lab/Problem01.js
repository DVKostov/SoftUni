function solve(array) {

    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (index % 2 === 0) {
            newArray.push(array[index]);
        };
    };
    console.log(newArray.join(' '));
}

solve(['20', '30', '40', '50', '60']);