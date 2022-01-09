function Problem7(record, distance, onemeterswimtime) {

    record = Number(record);
    distance = Number(distance);
    onemeterswimtime = Number(onemeterswimtime);

    let delaycount = Math.floor(distance / 15);
    let delaytime = delaycount * 12.5;
    let swimtime = (distance * onemeterswimtime) + delaytime;

    if (record > swimtime) {
        console.log(`Yes, he succeeded! The new world record is ${swimtime.toFixed(2)} seconds.`);
    }else {
        let diff = swimtime - record
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
Problem7(55555.67, 3017, 5.03)