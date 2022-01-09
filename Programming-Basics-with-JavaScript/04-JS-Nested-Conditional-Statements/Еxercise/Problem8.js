function Problem8 (month, nights) {
    nights = Number(nights);
    let studio = 0;
    let appartment = 0;
    
    if (month == 'May' || month == 'October') {
        studio = nights * 50;
        appartment = nights * 65;
        if (nights > 7 && nights <= 14) {
            studio = studio * 0.95;
            } else if (nights > 14){
            studio = studio * 0.7;
            }
        } else if (month == 'June' || month == 'September') {
            studio = nights * 75.2;
            appartment = nights * 68.7;
        if (nights > 14) {
            studio = studio * 0.8;
            }
        } else if (month == 'July' || month == 'August') {
            studio = nights * 76;
            appartment = nights * 77;
        }
    if (nights > 14) {
        appartment = appartment * 0.9;
    }
    console.log(`Apartment: ${appartment.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}
Problem8('May', 15);
Problem8('June', 14);
Problem8('August', 20);