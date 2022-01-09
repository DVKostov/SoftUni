function Problem7(num) {
    let i1 = 1;
    let str = "";
    while (i1 <= num) {
        let i2 = 1;
        str = "";
        while (i2 <= i1) {
            str += i1 + " ";
            i2++;
        }
        console.log(str);
        i1++;
    }
}
Problem7(3)