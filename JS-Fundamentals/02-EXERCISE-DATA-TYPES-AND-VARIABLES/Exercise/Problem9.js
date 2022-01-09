function Problem(losts, helmetPRC, swordPRC, shieldPRC, armorPRC) {
    let sum = 0;
    let helmetCount = 2;
    let swordCount = 3;
    let shieldCount = 2;

    for (let index = 0; index < losts; index++) {
        helmetCount -= 1;
        swordCount -= 1;
        if (helmetCount === 0 && swordCount === 0) {
            shieldCount -= 1
            sum += shieldPRC
            if (shieldCount === 0) {
                sum += armorPRC;
                shieldCount = 2;
            }
        }
        if (helmetCount === 0) {
            sum += helmetPRC;
            helmetCount = 2;
        }
        if (swordCount === 0) {
            sum += swordPRC;
            swordCount = 3;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}
Problem(23,
    12.50,
    21.50,
    40,
    200
)