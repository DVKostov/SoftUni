function Problem7(Pwhiskey, Qbeer, Qwine, Qbrandy, Qwhiskey) {
    Pwhiskey = Number(Pwhiskey)
    Qbeer = Number(Qbeer)
    Qwine = Number(Qwine)
    Qbrandy = Number(Qbrandy)
    Qwhiskey = Number(Qwhiskey)

    let Pbrandy = Pwhiskey / 2
    let Pwine = Pbrandy - (0.4 * Pbrandy)
    let Pbeer = Pbrandy - (0.8 * Pbrandy)

    let sumbrandy = Qbrandy * Pbrandy
    let sumwine = Qwine * Pwine
    let sumbeer = Qbeer * Pbeer
    let sumwhiskey = Qwhiskey * Pwhiskey

    let totsum = sumbrandy + sumwine + sumbeer + sumwhiskey

console.log(totsum.toFixed(2))


}
Problem7(50, 10, 3.5, 6.5, 1)