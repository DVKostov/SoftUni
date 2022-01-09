function Problem(first, operator, second) {
    let string = first + ' ' + operator + ' ' + second
    result = eval(string)
    console.log(result.toFixed(2));
}
Problem(5,
    '+',
    10
    
)