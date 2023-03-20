/* 12. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F */

let num = prompt('Introduzca el número que desea convertir');
let tipo =prompt('Introduzca el tipo que desea convertir \n 1.Fahrenheit a Celsius \n 2.Celsius a Fahrenheit');

const convertirFaC=(num,tipo)=>{


    switch (tipo) {
        case 1:      
    let  op=(num-32)*5/9;
   return  console.log(`${num} Fahrenheit son ${op} Celsius`);
      
        case 2:
        let  op2=(num*9/5)+32;
   return   console.log(`${num} Celsius son ${op2} Fahrenheit`);
        default:    
       
    }


}



/* Pregunta si yo tenmgo que poner más console log, y no puedo meterlos en la función como lo hago */
convertirFaC(num, tipo);

