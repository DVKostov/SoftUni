function Problem8 (input) {
    let name = input.shift();
    let grade = input.shift();
    let counter = 0;
    let sum = 0;

    while (grade != undefined) {
        sum += Number(grade);
        counter++;
        grade = input.shift();
    }
    let avg = sum / counter;

    if (avg >= 4) {
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`)
    }

}
Problem8([
'Pesho',
'4',
'5.5',
'6',
'5.43',
'4.5',
'6',
'5.55',
'5',
'6',
'6',
'5.43',
'5'
])


