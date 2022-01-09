function solve(input) {
    let regularList = [];
    let vipList = [];
    let party = false;
    for (let index = 0; index < input.length; index++) {
        if (input[index] === 'PARTY') {
            party = true;
        }
        if (party) {
            if (regularList.find(guest => guest.name === input[index]) !== undefined) {
                regularList.find(guest => guest.name === input[index]).comes = true;
            } else if (vipList.find(guest => guest.name === input[index]) !== undefined) {
                vipList.find(guest => guest.name === input[index]).comes = true;
            }

        } else {
            if (typeof (Number(input[index][0])) === Number) {
                vipList.push({ name: input[index], comes: false });
            } else {
                regularList.push({ name: input[index], comes: false });
            }
        }
    }
    let notComesRegular = regularList.filter(guest => guest.comes === false);
    let notComesVip = vipList.filter(guest => guest.comes === false);
    console.log(notComesRegular.length + notComesVip.length);
    for (const iterator of notComesVip) {
        console.log(iterator.name);
    }
    for (const iterator of notComesRegular) {
        console.log(iterator.name);
    }

}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]




)