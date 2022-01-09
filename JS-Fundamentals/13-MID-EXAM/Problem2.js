function Problem2(array) {
    let friendList = array.shift().split(', ');

    for (let index = 0; index < array.length; index++) {
        let [action, firstParam, secondParam] = array[index].split(' ');
        switch (action) {
            case 'Blacklist':
                if (friendList.indexOf(firstParam) < 0) {
                    console.log(`${firstParam} was not found.`);
                } else {
                    friendList[friendList.indexOf(firstParam)] = 'Blacklisted';
                    console.log(`${firstParam} was blacklisted.`);
                }
                break;
            case 'Error':
                if (friendList[Number(firstParam)] !== 'Blacklisted' && friendList[Number(firstParam)] !== 'Lost') {
                    console.log(`${friendList[Number(firstParam)]} was lost due to an error.`)
                    friendList[Number(firstParam)] = 'Lost';
                }
                break;
            case 'Change':
                if (Number(firstParam) > -1 && Number(firstParam) < friendList.length) {
                    console.log(`${friendList[Number(firstParam)]} changed his username to ${secondParam}.`);
                    friendList[Number(firstParam)] = secondParam;
                }
                break;
        }
        if (action === 'Report') {
            break;
        }
    }
    let blacklisted = friendList.filter(name => name === `Blacklisted`);
    let lost = friendList.filter(name => name === `Lost`);
    console.log(`Blacklisted names: ${blacklisted.length}`);
    console.log(`Lost names: ${lost.length}`);
    console.log(friendList.join(' '))
}
Problem2([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
]
)