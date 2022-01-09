function Problem9(n) {
    n = Number(n)
    isEven = n % 2 == 0
    let start = 0

    if(isEven) {
        start = 2
    } else {
        start = 1
    }
    
    for (start; start <= n; start = start + 2) {
        let cube = Math.pow(start, 3)
        console.log(`Current number: ${start}. Cube: ${cube}`)
    }
}
Problem9(6)