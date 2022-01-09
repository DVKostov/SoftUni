function Problem(numbers) {
    let newArray = [];
    let sumArray = 0;
    let sumNewArray = 0;

    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 2 == 0) {
            newArray.push(numbers[index] + index);
        } else {
            newArray.push(numbers[index] - index);
        }
        sumArray += numbers[index]
        sumNewArray += newArray[index]
        
    }

    console.log(newArray);
    console.log(sumArray);
    console.log(sumNewArray);

    }
Problem([5, 15, 23, 56, 35])