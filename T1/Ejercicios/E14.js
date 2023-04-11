/* 14. Programa una función que devuelva el monto final después de aplicar un descuento a una
cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

 let num = parseInt(prompt('Introduce un número'));
let desc = parseInt(prompt('Introduce descuento que desea aplicar')); 



const descuento=(num,desc)=>{

    let op= (num*desc/100);
    let final=num-op;
    return final;
}
console.log(descuento(num,desc));