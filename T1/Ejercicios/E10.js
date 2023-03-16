/* 10. Programa una función que determine si un número es primo (aquel que solo es divisible por
sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

let num = parseInt(prompt('Introduce un número'));

const esprimo=(num)=>{

for (let index = 1; index <= num; index++) {
    if(num%index===0){ 
        return true;
        }
    if(num%num===1){ 
        return true;
        }
   
        

    }


}
/* function esPrimo(num) {
    for (let index = 2; index < num; index++) {
      if (num % index == 0) {
        return false;
      }
    }
    return true;
  }
  
  if (esPrimo(num)) {
    alert("Numero es primo");
  } else {
    alert("No es primo");
  }
   */