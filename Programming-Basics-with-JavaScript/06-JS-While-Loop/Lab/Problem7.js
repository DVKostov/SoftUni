function Problem7 (input) {
    let counter = Number(input.shift());
    let num = Number(input.shift());
    let biggest = num;
    let counter1 = 1;
    while (counter1 <= counter) {
        if (num < biggest) {
            biggest = num;
        }
    counter1++
    num = Number(input.shift());
    }
    console.log(biggest)
    
    

}
Problem7([
'3',
'-10',
'20',
'-30',

])