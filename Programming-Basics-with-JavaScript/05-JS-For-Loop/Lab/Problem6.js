function Problem6 (str) {
   
    let num = str.length
    let rez = 0

    for (let i = 0; i <= num; i++) {
        switch (str.charAt(i)) {
            case 'a':
                rez = rez + 1;
            break;
            case 'e':
                rez = rez + 2;
            break;
            case 'i':
                rez = rez + 3;
            break;
            case 'o':
                rez = rez + 4;
            break;
            case 'u':
                rez = rez + 5;
            break;
        } 
    }
        console.log(rez)
}
Problem6('bamboo')