function solve(input) {
    class Flight {
        constructor(code, destination) {
            this.code = code;
            this.destination = destination;
            this.status = 'Ready to fly'
        }
    }
    let flights = [];
    for (let index = 0; index < input[0].length; index++) {
        let [code, destination] = input[0][index].split(' ');
        flights.push(new Flight(code, destination));
    }
    for (let index = 0; index < input[1].length; index++) {
        let [code, status] = input[1][index].split(' ');
        if (flights.find(f => f.code === code) !== undefined) {
        flights.find(f => f.code === code).status = status;
        }
    }
    let filteredFlights = flights.filter(f => f.status === input[2][0])
    for (let index = 0; index < filteredFlights.length; index++) {
        let obj = {
            Destination: filteredFlights[index].destination,
            Status: filteredFlights[index].status,
        }
        console.log(obj);
        
    }

}
solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
)