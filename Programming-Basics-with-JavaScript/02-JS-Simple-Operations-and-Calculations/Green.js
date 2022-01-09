function green(area) {
    let prc1 = area * 7.61
    let disc = prc1 * 0.18
    let prc2 = prc1 - disc

    console.log(`The final price is: ${prc2} lv.`)
    console.log(`The discount is: ${disc} lv.`)
}
green(540)