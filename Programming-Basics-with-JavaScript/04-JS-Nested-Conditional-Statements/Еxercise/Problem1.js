function Problem1 (x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x  = Number(x);
    y  = Number(y);

    let checkBorderX = x == x1 || x == x2
    let checkBorderY = y == y1 || x == y2
    let checkBorder = checkBorderX || checkBorderY
    let CheckInX = x > x1 && x < x2;
    let CheckInY = y > y1 && y < y2;
    let checkIn = CheckInX || CheckInY

    if (checkBorder) {
        console.log('Border');
    } else if (checkIn) {
            console.log('Inside / Outside');
        }
}
Problem1(2, -3, 12, 3, 8, -1);
Problem1(2, -3, 12, 3, 12, -1);