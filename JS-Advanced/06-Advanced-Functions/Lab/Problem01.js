function solve(area, vol, input) {
    let result = [];
    let figures = JSON.parse(input);
    for (figure of figures) {
        x = Number(figure.x);
        y = Number(figure.y);
        z = Number(figure.z);
        result.push({ area: area(), volume: vol() })
    } 
    return result
}


function vol() {
        return Math.abs(this.x * this.y * this.z);
    };
    function area() {
        return Math.abs(this.x * this.y);
    };


solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    );
