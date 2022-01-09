function Problem7 (mQTY, zQTY, rQty, kQTY, giftPRC) {
    mQTY = Number(mQTY);
    zQTY = Number(zQTY);
    rQty = Number(rQty);
    kQTY = Number(kQTY);
    giftPRC = Number(giftPRC);

    let mSUM = mQTY * 3.25;
    let zSUM = zQTY * 4;
    let rSUM = rQty * 3.5;
    let kSUM = kQTY * 8;
    let totSUM = (mSUM + zSUM + rSUM + kSUM) * 0.95;
    let diff = Math.abs(totSUM - giftPRC);

    if (giftPRC <= totSUM) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }

}
Problem7(15,7,5,10,100)