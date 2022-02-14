function solve(input, criteria) {

class Ticket {
    constructor (destination, price, status) {
        this.destination = destination; 
        this.price = Number(price);
        this.status = status;
    }

    static sort (a, b, criteria) {
        if (typeof a[criteria] === 'number') { 
            return a[criteria] - b[criteria];
        } else {
            return a[criteria].localeCompare(b[criteria]);
        }
    }
}

let data = [];
for (let index = 0; index < input.length; index++) {
    let [destination, price, status]= input[index].split('|')
    data.push(new Ticket(destination, price, status))
}

return data.sort((a, b) => Ticket.sort(a, b, criteria))


}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
));