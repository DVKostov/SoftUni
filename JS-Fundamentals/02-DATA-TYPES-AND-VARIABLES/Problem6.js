function Problem6 (distance, passangers, price) {

    let needFuel = (distance / 100) * 7;
    needFuel += passangers * 0.100;
    let money = needFuel * price;
    console.log(`Needed money for that trip is ${money}lv.`)

}
Problem6 (260, 9, 2.49)