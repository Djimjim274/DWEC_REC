/* 13. Programa una función que calcule el factorial de un número (El factorial de un entero positivo
n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
miFuncion(5) devolverá 120. */


/*  const calculaF=(num)=>{
    let op;

for (let i = 1; i <= num; i++) {

   op=num*calculaF(num-1);

}
    console.log(op);

}
calculaF(5);  */

const calculaFactorial=(num)=> {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculaFactorial(num-1);
     
    }
  }
 console.log(calculaFactorial(5));