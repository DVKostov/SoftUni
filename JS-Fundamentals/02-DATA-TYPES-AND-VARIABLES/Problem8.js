function Problem8(n) {

    let toTest = '';
    for (let index = 1; index <= n; index++) {
        toTest = index.toString();
        let sum = 0;
        for (let i = 0; i < toTest.length; i++) {
            sum += Number(toTest[i]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${index} -> True`)
        } else {
            console.log(`${index} -> False`)
        }
    }

}
Problem8(15)