function Problem3 (num) {
    num = Number(num);
    let speed
    if (num <= 10) {
        speed = 'slow';
    }else if (num <= 50) {
        speed = 'average'
    }else if (num <= 150) {
        speed = 'fast';
    }else if (num <= 1000) {
        speed = 'ultra fast';
    }else {
        speed = 'extremely fast'
    }
    console.log(speed)
}
Problem3(3500)