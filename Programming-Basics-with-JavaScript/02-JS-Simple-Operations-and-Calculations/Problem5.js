function Dance(L, W, A) {
    let Lsm = Number(L) * 100;
    let Wsm = Number(W) * 100;
    let Asm = Number(A) * 100;

    let RoomArea = Lsm * Wsm
    let checkroom = Asm * Asm
    let sit = RoomArea / 10
    let freespace = RoomArea - checkroom - sit
    let dancers = freespace / (40 + 7000)

console.log (Math.floor(dancers))
}

Dance(50, 25, 2)