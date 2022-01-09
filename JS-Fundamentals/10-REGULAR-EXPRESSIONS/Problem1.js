function solve(name) {
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g
    let validNames = [];
    while ((validName = pattern.exec(name)) !== null) {
        validNames.push(validName[0])
    }
    console.log(validNames.join(' '))
    

}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)