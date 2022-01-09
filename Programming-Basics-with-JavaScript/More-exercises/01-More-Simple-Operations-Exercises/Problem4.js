function Problem4 (vPRC, fPRC, vQTY, fQTY) {
    vPRC = Number(vPRC);
    fPRC = Number(fPRC);
    vQTY = Number(vQTY);
    fQTY = Number(fQTY);


    let tot = ((vQTY * vPRC) + (fQTY * fPRC)) / 1.94;

    console.log(tot.toFixed(2))

}
Problem4(0.194, 19.4, 10, 10)