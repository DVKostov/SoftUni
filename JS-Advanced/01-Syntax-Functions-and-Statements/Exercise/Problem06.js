function solve(speed, zone) {

let limit = 0;

    switch (zone) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
        default:
            break;
    }

    let diff = (limit - speed);
    let status = '';
    if (diff >= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        diff *= -1
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }




        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }

};

solve(120, 'interstate');