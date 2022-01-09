function Problem3 (num) {
    num = Number(num);

    let rez
    if ((num % 2) == 0){
        rez ="even"
    }else {
        rez = "odd"
    }
    console.log(rez)
}
Problem3(3)