function solve(input) {
    class Company {
        constructor (company) {
            this.company = company;
            this.employees = [];
        }
    }
    let companies = [];
    for (const iterator of input) {
        let [company, employee] = iterator.split(' -> ');
        let currentCompany = companies.find(c => c.company === company);
        if (currentCompany === undefined) {
            companies.push(new Company(company));
        }
        currentCompany = companies.find(c => c.company === company);
        if (currentCompany.employees.find(e => e === employee) === undefined) {
            currentCompany.employees.push(employee);
        }
    }
    let sorted = companies.sort((a, b) => a.company.localeCompare(b.company))
    for (const iterator of sorted) {
        console.log(iterator.company);
        for (const i of iterator.employees) {
            console.log(`-- ${i}`)
        }
    }



}
solve(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
)