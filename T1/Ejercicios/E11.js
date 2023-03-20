/* 11. Programa una función que determine si un número es par o impar, pe. miFuncion(29)
devolverá Impar. */

let num= prompt('Escribe un número');
const compruebaPar=(num)=>{
    if(num%2===0){
        console.log(`El número ${num} es un número par`);
    }else{
        console.log(`El número ${num} es un número impar`);
    }
}

compruebaPar(num);