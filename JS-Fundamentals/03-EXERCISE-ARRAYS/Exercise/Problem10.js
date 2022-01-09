function Problem(array) {
    let initialArray = [];
    for (let index = 0; index < array[0]; index++) {
        initialArray.push(0);
    }
    for (let index = 0; index < array[1].split(' ').length; index++) {
        if (Number(array[1].split(' ')[index]) >= 0 && Number(array[1].split(' ')[index]) < initialArray.length) {
        initialArray[Number(array[1].split(' ')[index])] = 1;
        }
    }
    for (let index = 2; index < array.length; index++) {
        let currentPosition = Number(array[index].split(' ')[0]);
        if (initialArray[currentPosition] === 1 && currentPosition >= 0 && currentPosition < initialArray.length) {
            initialArray[currentPosition] = 0;
            let moves = ''
            if (array[index].split(' ')[1] === 'right') {
                moves = `+ ${array[index].split(' ')[2]}`
            } else {
                moves = `- ${array[index].split(' ')[2]}`
            }
            while (true) {
                let destinationPosition = eval(currentPosition + ' ' + moves)
                if (initialArray[destinationPosition] >= 0 && initialArray[destinationPosition] < initialArray.length) {
                    if (initialArray[destinationPosition] === 0) {
                        initialArray[destinationPosition] = 1;
                        break;
                    } else {
                        currentPosition = destinationPosition
                    }
                } else {
                    break;
                }

            }
        }
    }
    console.log(initialArray.join(' '))
}
Problem([ 5, '3',
'3 left 2',
'1 left -2']
)