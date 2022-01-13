function solve(param) {

    let type = typeof (param);
    switch (type) {

        case 'number':
            let area = Math.PI * Math.pow(param, 2);
            console.log(area.toFixed(2));
            break;

        default:
            console.log(`We can not calculate the circle area, because we receive a ${type}.`);
            break;
    }
};

solve(5);