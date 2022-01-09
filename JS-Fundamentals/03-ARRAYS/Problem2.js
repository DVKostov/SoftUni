function Problem(number) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let day = weekDays[number - 1]
    if (day) {
        console.log(day)
    } else {
        console.log('Invalid day!')
    }
}
Problem(11)