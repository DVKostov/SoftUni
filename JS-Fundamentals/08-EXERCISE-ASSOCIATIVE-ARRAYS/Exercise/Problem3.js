function solve(input) {
    let parking = [];
    for (const iterator of input) {
        let [direction, car] = iterator.split(', ');
        switch (direction) {
            case 'IN':
                if (parking.find(element => element === car) === undefined) {
                parking.push(car);
                }
                break;
            case 'OUT':
                if (parking.find(element => element === car) !== undefined) {
                parking.splice(parking.indexOf(car), 1);
                }
                break;
        }
    }
    let sorted = parking.sort((a ,b) => a.localeCompare(b) )
    if (sorted.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        for (const iterator of sorted) {
            console.log(iterator)
        }
    }
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']


)