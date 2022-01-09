function Problem6 (days, shops, cakes, gof, pala) {
    days = Number(days)
    shops = Number(shops)
    cakes = Number(cakes)
    gof = Number(gof)
    pala = Number(pala)

    let sumcakes = cakes * 45
    let sumgof = gof * 5.8
    let sumpala = pala * 3.2

    let totsumday = (sumcakes + sumgof + sumpala) * shops
    let sumbefore = totsumday * days
    let sumtot = sumbefore - ((1 / 8) * sumbefore)

    console.log(sumtot.toFixed(2))

}
Problem6(20, 8, 14, 30, 16)