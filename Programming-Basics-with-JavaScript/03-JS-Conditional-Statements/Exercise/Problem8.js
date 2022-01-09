function Problem8 (income, grade, minsalary) {
    income = Number(income);
    grade = Number(grade);
    minsalary = Number(minsalary);

    let req1 = 4.5;
    let req2 = 5.5;

    let scholarship = 0;
    let exelent = 0;

    if (income < minsalary && grade > req1) {
        scholarship = minsalary * 0.35;
    }

    if (grade >= req2) {
        exelent = grade * 25;

    }

    if (scholarship + exelent == 0) {
        console.log(`You cannot get a scholarship!`);
    } else if (scholarship > exelent) {
        console.log(`You get a Social scholarship ${Math.floor(scholarship)} BGN`);
    } else {
        console.log(`You get a scholarship for excellent results ${Math.floor(exelent)} BGN`);
    }
}
Problem8 (300, 5.65, 420)