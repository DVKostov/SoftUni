class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || Number(salary) < 0) {
            throw new Error('Invalid input!');
        }
        let newEmploee = { name, salary, position };
        let currentDepartment = this.departments[department];

        if (!currentDepartment) {
            this.departments[department] = {};
            this.departments[department].emp = [];
            this.departments[department].avg = 0;
            currentDepartment = this.departments[department];
        }
        currentDepartment.emp.push(newEmploee);
        this.avgSort(currentDepartment);
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    avgSort(currentDepartment) {
        currentDepartment.emp = currentDepartment.emp.sort((a, b) => {
            if (b.salary > a.salary) return 1;
            if (b.salary < a.salary) return -1;
            return a.name.localeCompare(b.name);
        })
        let avg = 0;
        for (const emploee of currentDepartment.emp) {
            avg += emploee.salary;
        }
        avg = avg / currentDepartment.emp.length
        currentDepartment.avg = avg;
    }
    bestDepartment() {
        let best = {};
        let bestAvg = 0;
        let entries = Object.entries(this.departments);
        for (const entrie of entries) {
            if (entrie[1].avg > bestAvg) {
                bestAvg = entrie[1].avg;
                best = entrie;
            }
        }

        let employees = '';
        entries = best[1].emp
        for (const entrie of entries) {
            employees += `\n${entrie.name} ${entrie.salary} ${entrie.position}`
        }



        return `Best Department is: ${best[0]}\nAverage salary: ${best[1].avg.toFixed(2)}${employees}`
        

    }
}

let c = new Company();
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment())