function solve(input) {
    let sudents = new Map();
    for (const line of input) {
        let tokens = line.split(' ');
        let student = tokens.shift();
        let grades = tokens.map(Number);
        if (!sudents.has(student)) {
            sudents.set(student, grades)
        } else {
            for (const iterator of grades) {
                newGrades = sudents.get(student).push(iterator)
            }
        }
    }
    let trueStudents = [];
    for (const iterator of sudents) {
        let sum = 0;
        for (const index of iterator[1]) {
            sum += index
        }
        trueStudents.push({ name: iterator[0], grades: iterator[1], avg: sum / iterator[1].length })
    }

    trueStudents.sort((a, b) => a.avg - b.avg)

    for (let index = 0; index < trueStudents.length; index++) {
        console.log(`${trueStudents[index].name}: ${trueStudents[index].grades.join(', ')}`)
        
    }


}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)