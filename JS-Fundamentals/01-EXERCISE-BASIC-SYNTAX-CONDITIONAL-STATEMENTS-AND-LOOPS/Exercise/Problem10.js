function Problem10 (base, inc) {
    inner = 0;
    outer = 0;
    stone = 0;
    marble = 0;
    lapis = 0;
    gold = 0;
    final = 0;
    count = 0;
    while (base > 0) {
        count++;
        final += inc;
        if ((base - 2) > 0 ) {
            inner = (base - 2) * (base - 2);
            outer = (base * base) - inner;
            stone += inner * inc;
            if (count % 5 == 0) {
                lapis += outer * inc;
            } else {
                marble += outer * inc;
            }
        } else {
            gold += (base * base) * inc;
        }
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(final)}`);

}
Problem10(11, 0.75)