function Problem10(days, roomtype, feedback) {
    days = Number(days);
    let nights = days - 1;
    let total1 = 0;
    let total2 = 0;

    if (nights >= 15) {
    switch (roomtype) {
        case 'room for one person':
            total1 = nights * 18;
            break;
        case 'apartment':
            total1 = (nights * 25) * 0.5;
            break;
        case 'president apartment':
            total1 = (nights * 35) * 0.8;
            break;
    } 
} else if (nights < 15 && nights >= 10) {
    switch (roomtype) {
        case 'room for one person':
            total1 = nights * 18;
            break;
        case 'apartment':
            total1 = (nights * 25) * 0.65;
            break;
        case 'president apartment':
            total1 = (nights * 35) * 0.85;
            break;
    }
}else if (nights < 10) {
    switch (roomtype) {
        case 'room for one person':
            total1 = nights * 18;
            break;
        case 'apartment':
            total1 = (nights * 25) * 0.7;
            break;
        case 'president apartment':
            total1 = (nights * 35) * 0.9;
            break;
    }
}
switch (feedback) {
    case 'positive':
        total2 = total1 + (total1 * 0.25);
        break;
    case 'negative':
        total2 = total1 - (total1 * 0.1)
}
console.log(total2.toFixed(2))

}
Problem10(14, 'apartment', 'positive');
Problem10(30, 'president apartment', 'negative');
Problem10(12, 'room for one person', 'positive');
Problem10(2, 'apartment', 'positive');