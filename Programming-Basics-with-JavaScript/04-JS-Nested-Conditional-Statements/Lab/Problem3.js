function Problem3(age, sex) {
    age = Number(age);
    let appeal = '';

    switch (sex) {
        case 'm':
        if (age >= 16) {
            appeal = 'Mr.';
        }
        else { 
            appeal = 'Master';
        }
        break;
        case 'f':
            if (age >= 16) {
                appeal = 'Ms.';
            }
            else { 
                appeal = 'Miss';
            }
        break;
        
    }
console.log(appeal);

}
Problem3(12,'f')