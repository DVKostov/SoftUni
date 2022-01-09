function Problem4(ppl, type, day) {
    let total = 0
    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    total = ppl * 8.45
                    break;
                case "Saturday":
                    total = ppl * 9.80
                    break;
                case "Sunday":
                    total = ppl * 10.46
                    break;
            }
            if (ppl >= 30) {
                total = total * 0.85
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    total = ppl * 10.90
                    break;
                case "Saturday":
                    total = ppl * 15.60
                    break;
                case "Sunday":
                    total = ppl * 16
                    break;
            }
            if (ppl >= 100) {
                total = total - ((total / ppl) * 10)
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    total = ppl * 15
                    break;
                case "Saturday":
                    total = ppl * 20
                    break;
                case "Sunday":
                    total = ppl * 22.50
                    break;
            }
            if (ppl >= 10 && ppl <= 20) {
                total = total * 0.95
            }
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}
Problem4(40,
    "Regular",
    "Saturday"
    
)