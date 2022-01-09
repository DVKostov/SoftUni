function Problem10 (year, holydays, weekendsVilige ) {
    holydays = Number(holydays);
    weekendsVilige = Number(weekendsVilige);
    let weekendsSofia = 48 - weekendsVilige;
    let sofiaGames = weekendsSofia * (3 / 4);
    let viligeGames = weekendsVilige;
    let holydaysGames = holydays * (2 / 3);
    let games = sofiaGames + viligeGames + holydaysGames;
    let totalGames = games;
    if (year == 'leap') {
        totalGames = games * 1.15;
    }
    console.log(Math.floor(totalGames));
}
Problem10('leap', 5, 2);