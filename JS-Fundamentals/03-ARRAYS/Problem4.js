function Problem(strings) {
    let print = ''
    for (let index = strings.length - 1; index >= 0; index--) {
        print = print.concat(`${strings[index]} `)
    }
    console.log(print)
}
Problem(['a', 'b', 'c', 'd', 'e'])