function Problem7 (x, y, h) {
    x = Number(x);
    y = Number(y);
    h = Number(h);

    let fWall = (x * x) - (1.2 * 2);
    let bWall = x * x ;
    let sWalls = ((x * y) - (1.5 * 1.5)) * 2;
    let fRoofs = (x * h / 2) * 2;
    let sRoofs = (x * y) * 2;

    let green = (fWall + bWall + sWalls) / 3.4;
    let red = (fRoofs + sRoofs) / 4.3;

console.log(green.toFixed(2));
console.log(red.toFixed(2));

}
Problem7(6, 10, 5.2)