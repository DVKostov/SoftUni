function info(array) {
    class Employee {
        constructor(fullName, id) {
            this.fullName = fullName;
            this.id = id
        }
    }
    let employees = [];
    for (let index = 0; index < array.length; index++) {
        let id = array[index].length;
        employees.push(new Employee(array[index], id));
    }
    for (let index = 0; index < employees.length; index++) {
        console.log(`Name: ${employees[index].fullName} -- Personal Number: ${employees[index].id}`)
        
    }
}

info([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)