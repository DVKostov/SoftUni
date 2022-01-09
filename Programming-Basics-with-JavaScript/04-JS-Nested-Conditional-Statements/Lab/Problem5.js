function Problem5(num) {
num = Number(num);
let rez = ''

if (num >= -100 && num <= 100 && num != 0) {
    rez = 'Yes';
} else {
    rez = 'No';
}
console.log(rez);

}
Problem5(-25);
Problem5(0);
Problem5(25)