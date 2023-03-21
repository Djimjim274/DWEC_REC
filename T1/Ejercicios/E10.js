/* 10. Programa una función que determine si un número es primo (aquel que solo es divisible por
sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

let num = parseInt(prompt('Introduce un número'));
 const esPrimo=(num)=>{
    for (let index = 2; index < num; index++) {
      if (num % index == 0) {
        return false;
      }
    }
    return true;
  }

  console.log(esPrimo(num));

/* const esprimo=(num)=>{

for (let index = 2; index < num; index++) {
    if(num%index==0){ 
        return true;
        }
    else if(num%num===1){ 
        return false;
        }
   
        

    }

}

console.log(esprimo(num)); */

/*   if (esPrimo(num)) {
    alert("Numero es primo");
  } else {
    alert("No es primo");
  }
   */