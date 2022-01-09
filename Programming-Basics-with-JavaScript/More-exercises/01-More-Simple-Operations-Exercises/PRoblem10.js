function Problem10 (c) {
    c = Number(c);

    if (c >= 5 && c <= 11.9) {
        console.log('Cold');
    } else if(c > 11.9 && c <= 14.9) {
        console.log('Cold');
    } else if (c >= 14.9 && c <= 20) {
        console.log('Mild');
    } else if (c >= 20 && c <= 25.9) {
        console.log('Warm');
    } else if (c >= 25.9 && c <= 35) {
        console.log('Hot');
    } else {
        console.log('unknown');
    } 
}

Problem10(0);
