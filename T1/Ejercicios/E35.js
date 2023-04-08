/* 35. Programa una función que dado un array numérico devuelve otro array con los números
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

let array = [1,4,5];
const numCuadrado=(array)=>{

     array=array.map((x)=>x**2)
    return {array}
}
console.log(numCuadrado(array));