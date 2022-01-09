function Problem5 (pTime, dHave, overPeople) {
    pTime = Number(pTime);
    dHave = Number(dHave);
    overPeople = Number(overPeople);
    let hHave = Math.floor((dHave * 0.9 * 8) + (overPeople * 2 * dHave));
    let diff = Math.abs(pTime - hHave);

    if (hHave >= pTime) {
        console.log(`Yes!${Math.floor(diff)} hours left.`)
    } else {
        console.log(`Not enough time!${Math.floor(diff)} hours needed.`)
    }

}
Problem5(99, 3, 1)