function Problem2(movieType, rows, columns) {
    rows = Number(rows);
    columns = Number(columns);
    let sits = rows * columns;
    let total = 0;

    switch (movieType) {
        case 'Premiere':
            total = sits * 12;
            break;
        case 'Normal':
            total = sits * 7.5;
            break;
        case 'Discount':
            total = sits * 5;
    } 
    console.log(`${total.toFixed(2)} leva`)
}
Problem2('Premiere', 10, 12);