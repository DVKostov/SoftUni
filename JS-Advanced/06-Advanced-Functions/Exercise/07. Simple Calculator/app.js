function calculator() {
    let num1
    let num2
    let result
    return {
        init (p1, p2, p3) {
            num1 = document.getElementById(p1.substring(1));
            num2 = document.getElementById(p2.substring(1));
            result = document.getElementById(p3.substring(1));
        },
        add () {
            result.value = Number(num1.value) + Number(num2.value)
        },
        subtract () {
            result.value = Number(num1.value) - Number(num2.value)
        } 


    }




}


const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




