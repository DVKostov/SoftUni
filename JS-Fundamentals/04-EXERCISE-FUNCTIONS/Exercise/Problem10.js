function factorial(firstNum, secondNum) {
     firstFactorial = 1;
     secondFactorial = 1;
     for (let index = 1; index <= firstNum; index++) {
          firstFactorial *= index; 
     }
     for (let index = 1; index <= secondNum; index++) {
          secondFactorial *= index; 
     }
     console.log((firstFactorial / secondFactorial).toFixed(2))



}
factorial(5,
     2
     )