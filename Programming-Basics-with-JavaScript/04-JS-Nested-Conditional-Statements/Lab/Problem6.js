function Problem6 (goods) {
let rez = '';
if (goods == 'banana' || goods == 'apple' || goods == 'kiwi' || goods == 'cherry' || goods == 'lemon' || goods == 'grapes') {
    rez = 'fruit';
} else if (goods == 'tomato' || goods == 'cucumber' || goods == 'pepper' || goods == 'carrot') {
    rez = 'vegetable';
} else {
    rez = 'unknown'
}
console.log(rez)

}
Problem6('banana');