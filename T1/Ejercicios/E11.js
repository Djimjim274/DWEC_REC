/* 11. Programa una función que determine si un número es par o impar, pe. miFuncion(29)
devolverá Impar. */

let num= prompt('Escribe un número');
const esPar=(num)=>{
    if(num%2===0){
       return true;
    }else{
        return false;
    }
}

//condición ternaria
//condición sin if                       true                                       false   
(esPar(num))? console.log(`El número ${num} es un número par`): console.log(`El número ${num} es un número impar`);
esPar(num);