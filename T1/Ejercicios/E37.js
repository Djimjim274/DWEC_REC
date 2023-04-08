/* 37. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
primero almacena los números pares y en el segundo los impares, pe.
miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

let array = [1,2,3,4,5,6,7];

const arrays=(array)=>{

    let arrayPar=array.filter((x)=>x%2===0);
    let arrayImpar=array.filter((x)=>x%2==0);

  return {pares:arrayPar,impares:arrayImpar} //devulve un objeto literal
}
console.log(arrays(array));