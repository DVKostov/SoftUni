function Problem(first, second, third) {
    let biggest = first
    if (biggest < second) {
        biggest = second
    }
    if (biggest < third) {
        biggest = third
    }
    console.log(biggest)

}
Problem(-2,
    7,
    3
)