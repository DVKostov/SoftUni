function Problem(incomingArray) {
    let firstSum = 0;
    let secondSum = 0;
    
    for (let index = 0; index < incomingArray.length; index++) {
        firstSum += Number(incomingArray[index].split(' ')[index]);
        secondSum += Number(incomingArray[index].split(' ')[incomingArray.length - 1 - index]);
    }
    if (firstSum !== secondSum) {
        for (let index = 0; index < incomingArray.length; index++) {
            console.log(incomingArray[index].split(' ').join(' '));   
        }
    } else {
        
        for (let index = 0; index < incomingArray.length; index++) {
            let outgoingArray = [];
            for (let innerIndex = 0; innerIndex < incomingArray[index].split(' ').length; innerIndex++) {
                if (innerIndex === index || innerIndex === incomingArray.length - 1 - index) {
                    outgoingArray[innerIndex] = incomingArray[index].split(' ')[innerIndex];
                } else {
                    outgoingArray[innerIndex] = firstSum;
                } 
            }
            console.log(outgoingArray.join(' '))
        }
    }


}
Problem(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)




