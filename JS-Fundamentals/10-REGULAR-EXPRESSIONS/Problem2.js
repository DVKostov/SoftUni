function solve(name) {
    let pattern = /\+359[ -][1-9][ -][1-9]{3}[ -][1-9]{4}\b/g
    let okArray = [];
    while ((ok = pattern.exec(name)) !== null) {
        okArray.push(ok[0]);
    }
    console.log(okArray.join(', '))

}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")