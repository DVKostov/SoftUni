function Problem11 (input) {
    let flag = true;
    let count = 1;
    let totDays = input.length
    let totalBit = 0;
    let firstDay = 0;
    let money = 0;
    let moneyLeft = 0;
    let goldDay = 0;

    while (count <= totDays) {
        goldDay = input.shift()
        if (count % 3 == 0) {
            goldDay = goldDay * 0.7
        } 
        money += goldDay * 67.51;
        if (money >= 11949.16 && firstDay == 0) {
            firstDay = count;
        }
        count++;
    }
    totalBit = Math.floor(money / 11949.16)
    moneyLeft = money - (totalBit * 11949.16)
    console.log(`Bought bitcoins: ${totalBit}`)
    if (totalBit > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`)

}
Problem11 ([100,200,300])