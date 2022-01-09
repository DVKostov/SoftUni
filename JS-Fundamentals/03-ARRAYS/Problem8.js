function Problem(array) {
    
    while (array.length > 1) {
        let newArray = []
        for (let index = 0; index < array.length - 1; index++) {
            newArray.push(array[index] + array[index + 1]);
        }
        array = newArray    
        }
    console.log(array[0])
    }
Problem([5,0,4,1,2])