function Problem7 (str, num1, budget) {

    num1 = Number(num1);
    budget = Number(budget);
    let num = str.length
    let rez = 0
    str = str.toLowerCase()

    for (let i = 0; i < num; i++) {
        char = str.charAt(i)
        if (char == 'a' || 
            char == 'e' || 
            char == 'i' || 
            char == 'o' || 
            char == 'u' || 
            char == 'y') {
                rez = rez + 3
            } else {
                rez = rez + 1
            }
    }
    rez = (rez * num1).toFixed(2)
    diff = Math.abs(budget - rez).toFixed(2)

    if (rez <= budget) {
        console.log(`${str} bought. Money left: ${diff}`);
    } else {
        console.log(`Cannot buy ${str}. Product value: ${rez}`);
    }

}
Problem7('milk', 1.4, 8)