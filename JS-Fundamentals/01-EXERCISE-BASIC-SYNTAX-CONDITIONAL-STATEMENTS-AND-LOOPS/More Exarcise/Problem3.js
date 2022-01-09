function Problem3 (year, month, day) {
    let date = new Date(year,month - 1,day);
    date = date.setDate(date.getDate() + 1);
    date = new Date(date);
    y = date.getYear() + 1900;
    m = date.getMonth() + 1;
    d = date.getDate();
    console.log(`${y}-${m}-${d}`);
}
Problem3 (2016, 2, 28)