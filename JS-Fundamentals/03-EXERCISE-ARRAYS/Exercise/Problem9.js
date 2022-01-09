function Problem(array) {
    let health = 100;
    let coins = 0;
    let newArray = String(array[0]).split('|');
    let items = [];
    let points = [];
    for (let index = 0; index < newArray.length; index++) {
        items.push(newArray[index].split(' ')[0])
        points.push(newArray[index].split(' ')[1])
    }
    for (let index = 0; index < items.length; index++) {
        if (items[index] === 'potion') {
            if (health + Number(points[index]) > 100) {
                console.log(`You healed for ${100 - health} hp.`)
                health = 100;
            } else {
                health += Number(points[index])
                console.log(`You healed for ${points[index]} hp.`)
            }
            console.log(`Current health: ${health} hp.`)
        } else if (items[index] === 'chest') {
            coins += Number(points[index]);
            console.log(`You found ${points[index]} coins.`)

        } else {
            if (health > Number(points[index])) {
                health -= Number(points[index]);
                console.log(`You slayed ${items[index]}.`)
            } else {
                health = 0;
                console.log(`You died! Killed by ${items[index]}.`)
                console.log(`Best room: ${index + 1}`)
                break;
            }
        } 
    }
    if (health > 0) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }

    }
Problem(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])