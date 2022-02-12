function solve(input, filter) {
    let array = JSON.parse(input);
    let [data, criteria] = filter.split('-');
    array = array.filter(e => e[data] === criteria);
    for (let index = 0; index < array.length; index++) {
        console.log(`${index}. ${array[index].first_name} ${array[index].last_name} - ${array[index].email}`);        
    }

}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);