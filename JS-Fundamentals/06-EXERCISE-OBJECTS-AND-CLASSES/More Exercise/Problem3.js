function solve(input) {
    class Student {
        constructor(name, grade, avgGrade) {
            this.name = name;
            this.grade = grade;
            this.avgGrade = avgGrade
        }
    }
    class Grade {
        constructor(grade) {
            this.grade = grade;
            this.students = [];
            this.avgGrade = 0;
            this.calcAvgGrade = () => {
                let avg = 0;
                let count = 0;
                for (let index = 0; index < this.students.length; index++) {
                    avg += this.students[index].avgGrade;
                    count++
                }
                this.avgGrade = (avg / count).toFixed(2)
            }
        }
    }
    let classes = [];
    for (let index = 0; index < input.length; index++) {
        let [name, grade, avgGrade] = input[index].split(', ');
        name = name.split(': ')[1];
        grade = Number(grade.split(': ')[1]) + 1;
        avgGrade = Number(avgGrade.split(': ')[1]);
        if (avgGrade >= 3) {
            if (classes.find(c => c.grade === grade) === undefined) {
                classes.push(new Grade(grade));
            }
            let gradeObj = classes.find(c => c.grade === grade);
            gradeObj.students.push(new Student(name, grade, avgGrade));
            gradeObj.calcAvgGrade()
        }
    }
    function compareGrade(a, b) {
        if (a.grade < b.grade) {
            return -1;
        }
        if (a.grade > b.grade) {
            return 1;
        }
        return 0;
    }
    classes.sort(compareGrade);
    for (let index = 0; index < classes.length; index++) {
        console.log(`${classes[index].grade} Grade`)
        let studentsList = [];
        for (let innerIndex = 0; innerIndex < classes[index].students.length; innerIndex++) {
            studentsList.push(classes[index].students[innerIndex].name)
        }
        console.log(`List of students: ${studentsList.join(', ')}`)
        console.log(`Average annual grade from last year: ${classes[index].avgGrade} \n`)
    }

    
}
solve(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)