function Problem6 (skuPRC, cacPRC, palQTY, safQTY, midQTY) {
    skuPRC = Number(skuPRC);
    cacPRC = Number(cacPRC);
    palQTY = Number(palQTY);
    safQTY = Number(safQTY);
    midQTY = Number(midQTY);

    let palPRC = skuPRC * 1.6;
    safPRC = cacPRC * 1.8;
    midPRC = 7.5

    let tot = (palQTY * palPRC) + (safQTY * safPRC) + (midQTY * midPRC)

    console.log(tot.toFixed(2))



}
Problem6 (6.90, 4.20, 1.5, 2.5, 1)