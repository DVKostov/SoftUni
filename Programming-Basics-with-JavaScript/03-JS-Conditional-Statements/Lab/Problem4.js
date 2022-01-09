function Problem4 (num) {
    num = Number(num)

    let word
    if (num == 1 ){
        word = "One"
    }else if (num == 2){
        word = "Two"
    }else if (num == 3){
       word = "Three"
    }else if (num == 4){
        word = "Four"
     }else if (num == 5){
        word = "Five"
     }else if (num == 6){
        word = "Six"
     }else if (num == 7){
        word = "Seven"
     }else if (num == 8){
        word = "Еight"
     }else if (num == 9){
        word = "Nine"
     }else {
        word = "number too big"
     }
console.log(word)
}
Problem4(5)