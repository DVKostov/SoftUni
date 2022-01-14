function solve(first, second, third) {
    let distance = (first * second) / 1000;
    timeInMinutes = ((distance / third) * 60) + Math.floor(distance / 0.5);
    
    let hours = 0;
    let minutes = 0; 
    let seconds = 0;

    if (timeInMinutes >= 60) {
        hours = Math.floor(timeInMinutes / 60);
        timeInMinutes -= hours
    }
    minutes = Math.floor(timeInMinutes)
    seconds = Math.ceil((timeInMinutes - minutes) * 60)

if (String(hours).length === 1) {
    hours = `0${hours}`
}
if (String(minutes).length === 1) {
    minutes = `0${minutes}`
}
if (String(seconds).length === 1) {
    seconds = `0${seconds}`
}

console.log(`${hours}:${minutes}:${seconds}`);
};

solve(4000, 0.60, 5);