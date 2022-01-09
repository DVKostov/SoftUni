function Problem8 (str, num) {
    num = Number(num);
    str = str.toLowerCase()

    if (str == 'diesel' || str == 'gasoline' || str == 'gas') {
        if (num >= 25) {
            console.log(`You have enough ${str}.`)
        } else {
            console.log(`Fill your tank with ${str}!`)
        }
    } else {
        console.log(`Invalid fuel!`)
    }

}
Problem8('Diesel', 10)