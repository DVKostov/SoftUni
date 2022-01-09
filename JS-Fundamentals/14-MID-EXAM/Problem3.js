function loveDay(array) {
    let neighborhood = array.shift().split('@').map(Number);
    let hopping = true;
    let currentPosition = 0;
    let index = 0;
    while (hopping) {
        let [action, hop] = array.shift().split(' ');
        switch (action) {
            case 'Jump':
                if (currentPosition + Number(hop) >= neighborhood.length) {
                    currentPosition = 0;
                } else {
                    currentPosition += Number(hop);
                }
                if (neighborhood[currentPosition] === 0) {
                    console.log(`Place ${currentPosition} already had Valentine's day.`)
                } else {
                    if (neighborhood[currentPosition] - 2 < 0) {
                        neighborhood[currentPosition] = 0;
                    } else {
                        neighborhood[currentPosition] -= 2;
                    }
                    if (neighborhood[currentPosition] === 0) {
                        console.log(`Place ${currentPosition} has Valentine's day.`)
                    }
                }
                break;
            case 'Love!':
                hopping = false;
                break;
        }
    }
    console.log(`Cupid's last position was ${currentPosition}.`)
    let houseCount = neighborhood.filter(house => house > 0).length;
    if ( houseCount > 0) {
        console.log(`Cupid has failed ${houseCount} places.`)
    } else {
        console.log(`Mission was successful.`)
    }
}
loveDay(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'
    ]
)