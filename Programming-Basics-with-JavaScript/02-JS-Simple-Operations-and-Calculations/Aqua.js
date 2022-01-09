function aqua(Length, Width, Height, Percentage){
    let volume = (Length * Width * Height) * 0.001
    let pro = Percentage * 0.01
    let final = volume * (1 - pro)

    console.log(final)

}
aqua(85,75,47,17)