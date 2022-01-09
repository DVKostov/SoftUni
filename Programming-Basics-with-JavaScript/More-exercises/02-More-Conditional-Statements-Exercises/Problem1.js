function Problem1 (v, p1, p2, h) {
    v = Number(v);
    p1 = Number(p1);
    p2 = Number(p2);
    h = Number(h);

    let p1Do = p1 * h;
    let p2Do = p2 * h;
    let pTot = p1Do + p2Do;
    let p1P = p1Do / pTot * 100;
    let p2P = p2Do/ pTot * 100;
    let totP = pTot / v * 100;
    let diff = Math.abs(v - pTot)

    if (v >= pTot) {
        console.log(`The pool is ${totP.toFixed(2)}% 
        full. Pipe 1: ${p1P.toFixed(2)}%. 
        Pipe 2: ${p2P.toFixed(2)}%.`)
    } else {
        console.log(`For ${h} 
        hours the pool overflows with ${diff.toFixed(2)} liters.`)
    }





}
Problem1(1000, 100, 120, 3)