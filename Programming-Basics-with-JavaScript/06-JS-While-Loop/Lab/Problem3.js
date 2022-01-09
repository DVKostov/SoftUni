function Problem3 (input) {
    let num = input.shift();
    let sum = 0;
    while (num != 'Stop') {
        sum = sum + Number(num);
        num = input.shift();
    }
    console.log(sum)

}
Problem3([
'10',
'20',
'30',
'45',
'Stop',
])