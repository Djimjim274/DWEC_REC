let num1 = parseInt(prompt("Introduce el numero 1"));


        console.log(num1);
        console.log(num2);

        while (num1 <= 0 || isNaN(num1)===true) {
            alert("tienen que ser numeros positivos");
            num1 = parseInt(prompt("Introduce el numero 1 otra vez"));
        }
        
let num2 = parseInt(prompt("Introduce el numero 2"));      
        while (num2 <= 0 || isNaN(num2)===true) {
            alert("tienen que ser numeros positivos");
            num2 = parseInt(prompt("Introduce el numero 2 otra vez"));
        }
 if (num1 > num2) {
        console.log("El numero 1 mayor que numero 2");
        } else {
            if (num1 < num2) {
                console.log("El numero 1 menor que numero 2");
            } else {

                console.log("El numero 1 igual numero 2");
            }
        }