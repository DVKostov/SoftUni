function Problem1 (input) {
    let str = input.shift();
    let count = 0;
    while (str != 'Stop') {
        count++;
        str = input.shift();
    }
    console.log(count);
}
Problem1([
    'Nakov',
    'SoftUni',
    'Sofia',
    'Bulgaria',
    'SomeText',
    'Stop',
    ])