function carWash(array) {
     let value = 0;
     for (let index = 0; index < array.length; index++) {
          switch (array[index]) {
               case 'soap':
                    value += 10
                    break;
               case 'water':
                    value += value * 0.2
                    break;
               case 'vacuum cleaner':
                    value += value * 0.25
                    break;
               case 'mud':
                    value -= value * 0.10
                    break;
          }
     }
     console.log(`The car is ${value.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])