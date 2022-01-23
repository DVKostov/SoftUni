function solve(order) {
    let car = {
        model: order.model, 
        engine: {}, 
        carriage: { 
            type: order.carriage,
            color: order.color },
        wheels: []
    };
    if (order.power <= 90) {
        car.engine = { power: 90, volume: 1800 }
    } else if (order.power <= 120) {
        car.engine = { power: 120, volume: 2400 }
    } else {
        car.engine = { power: 200, volume: 3500 }
    }

    let diameter = order.wheelsize;
    if (diameter % 2 === 0) {
        diameter--
    }

    for (let index = 0; index < 4; index++) {
        car.wheels.push(diameter)    
    }



    return car

}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));