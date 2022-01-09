function Problem4 (NumberOfTables, Length, Width) {
    NumberOfTables = Number(NumberOfTables);
    Length = Number(Length);
    Width = Number(Width);

    let TotalArea = NumberOfTables * (Length + 2 * 0.30) * (Width + 2 * 0.30);
    let KareArea = NumberOfTables * (Length / 2) * (Length / 2)
    let Dolars = (TotalArea * 7) + (KareArea * 9)
    let leva = Dolars * 1.85 

    console.log(Dolars.toFixed(2));
    console.log(leva.toFixed(2))


}
Problem4(10, 1.2, 0.65)