function Problem9 (input) {
    let user = input.shift();
    let pass = user.split("").reverse().join("");
    let i = 1;
    let tru = "";
    while (i <= 4) {
        tru = input.shift();
        if (tru == pass) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            if (i == 4) {
                console.log(`User ${user} blocked!`)
            } else {
            console.log("Incorrect password. Try again.");
            }
        }
        i++;
    }

}
Problem9(['Acer','login','go','let me in','recA'])