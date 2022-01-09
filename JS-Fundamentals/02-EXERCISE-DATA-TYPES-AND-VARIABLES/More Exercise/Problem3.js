function Problem(r, h) {
    let volume = Math.PI * Math.pow(r, 2) * h / 3
    let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))
    let area = (Math.PI * r * s) + (Math.PI * r * r)
    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`) 

}
Problem(3,
    5
)