function Problem4 (num) {
    num = Number(num)

    let word
    if (num < 100 ){
        word = "Less than 100"
    }else if (num >= 100 && num <= 200){
        word = "Between 100 and 200"
    }else if (num > 200){
        word = "Greater than 200"
    }

console.log(word)
}
Problem4(201)