function Problem2 (restDays) {
    restDays = Number(restDays);
    let workDays = 365 - restDays;
    let playMnorm = 30000;
    let playMr = restDays * 127;
    let playMw = workDays * 63;
    let playMtot = playMr + playMw;
    let diff = Math.abs(playMnorm - playMtot);
    let diffM = diff % 60;
    let diffH = (diff - diffM) / 60;

    if (playMtot >= playMnorm) {
        console.log(`Tom will run away`);
        console.log(`${diffH} hours and ${diffM} minutes more for play`)
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${diffH} hours and ${diffM} minutes less for play`)
    }

}
Problem2(20);
Problem2(113);