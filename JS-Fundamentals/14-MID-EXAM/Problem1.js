function time(array) {
    let totalPPLperHour = Number(array[0]) + Number(array[1]) + Number(array[2]);
    let hours = 0;
    let ppl = Number(array[3]);
    while (ppl > 0) {
        ppl -= totalPPLperHour;
        hours++;
        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`)

}
time([ '5', '6', '4', '20' ]
    )