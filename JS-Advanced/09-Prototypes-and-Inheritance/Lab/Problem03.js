function personAndTeacher() {

    class Person {
        constructor (name, email) {
            this.name = name;
            this.email = email;
        }
        toString () {
            let e = Object.entries(this);
            let array = [];
            for (let index = 0; index < e.length; index++) {
                array.push(`${e[index][0]}: ${e[index][1]}`)                
            }
            return `${this.constructor.name} (${array.join(', ')})`
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
            
        }
    }
    class Student extends Person {
        constructor(name, email, course){
            super(name, email);
            this.course = course;
            
        }
    } 


    return {
        Person,
        Teacher,
        Student
    }

}

personAndTeacher()