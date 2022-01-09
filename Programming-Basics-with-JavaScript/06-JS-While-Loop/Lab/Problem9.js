function Problem9 (input) {
    let name = input.shift()
    let grade = 1
    let count = 0
    let sum = 0
    let fails = 0
    flag = true

    while (flag) {
        let num = Number(input.shift())
        if (num < 4) {
            fails ++
            if (fails = 2) {
                flag = false
                console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`)
                break
            }
        } else {
            count++
            sum += num
            if (grade = 12) {
                flag = false
                avg = sum / count
                console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`)
                break
            }
            grade++
        }
    }
}
Problem9([
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"
])