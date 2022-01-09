function Problem1(array) {
    let neededExp = array.shift();
    let battles = array.shift();
    let battlesCount = 0;
    let currentExp = 0;
    for (let battle = 0; battle < array.length; battle++) {
        let battleExp = array[battle];
        battlesCount++;
        if (battlesCount % 3 === 0) {
            battleExp += battleExp * 0.15;
        } else if (battlesCount % 5 === 0) {
            battleExp -= battleExp * 0.1;
        } else if (battlesCount % 15 === 0) {
            battleExp += battleExp * 0.05;
        }
        currentExp += battleExp;
        if (currentExp >= neededExp) {
            break;
        }
    }
    if (currentExp >= neededExp) {
        console.log(`Player successfully collected his needed experience for ${battlesCount} battles.`);
    } else {
        let expLeft = neededExp - currentExp;
        console.log(`Player was not able to collect the needed experience, ${expLeft.toFixed(2)} more needed.`);
    }
}
Problem1([400,
    5,
    50,
    100,
    200,
    100,
    20
    
    
  ])