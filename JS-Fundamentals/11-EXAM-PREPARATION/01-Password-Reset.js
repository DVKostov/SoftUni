function solve(input) {
    let newPass = input.shift();
    for (const iterator of input) {
        let [command, first, second] = iterator.split(' ');
        switch (command) {
            case 'TakeOdd':
                let tmpPass = ''
                for (let index = 0; index < newPass.length; index++) {
                    if (index % 2 !== 0) {
                        tmpPass = tmpPass + newPass[index];
                    }
                }
                newPass = tmpPass;
                console.log(newPass);
                break;
            case 'Cut':
                let toReplace = newPass.substring(Number(first), Number(first) + Number(second));
                newPass = newPass.replace(toReplace, '')
                console.log(newPass);
                break;
            case 'Substitute':
                if (newPass.includes(first)) {
                    newPass = newPass.replace(new RegExp(`${first}`, 'g'), second);
                    console.log(newPass);
                } else {
                    console.log(`Nothing to replace!`)

                }
                break;
        }
        if (iterator === 'Done') {
            console.log(`Your password is: ${newPass}`);
            break;
        }
    }
}
solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'

])