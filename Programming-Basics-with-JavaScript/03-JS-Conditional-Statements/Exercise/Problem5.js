function Problem5 (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    let min = 0;
    let hour = 0;
    let overmin = num2 + 15 >= 60;
    let overhour = num1 + 1 < 24;

    if (overmin) {
        min = num2 + 15 - 60;
        if (overhour) {
        hour = num1 + 1;
        }
    }else {
        min = num2 + 15;
        hour = num1;
    }  
    if(min < 10 ) {
        min = `0${min}`;
    }
    
    console.log(`${hour}:${min}`)
}
Problem5(0, 1)