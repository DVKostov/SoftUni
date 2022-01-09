function Problem7(type, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    let rez

    if (type == "square") {
        rez = num1 * num1
    }else if (type == "rectangle"){
        rez = num1 * num2
    }else if (type == "circle"){
        rez = Math.PI * (num1 * num1)
    }else if (type == "triangle"){
        rez = (num1 * num2) / 2
    }
    console.log(rez.toFixed(3))
}
Problem7('rectangle', 7, 2.5)