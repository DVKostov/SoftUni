function Problem(array) {
    let gamesArray = array[0].split(' ')
    for (let index = 1; index < array.length; index++) {
        if (array[index] === 'Play!') {
            break;
        }
        let action = array[index].split(' ')[0]
        let game
        let expansion
        if (action === 'Expansion') {
            game = array[index].split(' ')[1].split('-')[0]
            expansion = array[index].split(' ')[1].split('-')[1]
        } else {
            game = array[index].split(' ')[1]
        }
        let gameIndex = gamesArray.indexOf(game)
        switch (action) {
            case 'Install':
                if (gameIndex < 0) {
                    gamesArray.push(game)
                }
                break;
            case 'Uninstall':
                if (gameIndex > -1) {
                    gamesArray.splice(gameIndex, 1)
                }
                break;
            case 'Update':
                if (gameIndex > -1) {
                    gamesArray.splice(gameIndex, 1)
                    gamesArray.push(game)
                }
                break;
            case 'Expansion':
                if (gameIndex > -1) {
                    gamesArray.splice(gameIndex + 1, 0, `${game}:${expansion}`)
                }
                break;

        }
    }
    console.log(gamesArray.join(' '))


}
Problem(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']

)