/* 21. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
Mundo") devolverá "odnuM aloH". */

const invertirCad = (cadena) => {

//  SPLIT se separaría letra por letra['h','o','l','a']
    let separarCad = cadena.split("");

//utilizamos el método reverse que sirve para invertir el array creado con el split
    let invierteCadena = separarCad.reverse();

//ahora usamos el método join() para unir todos los elementos del arreglo en una cadena
    let unirCadena = invierteCadena.join("");

    return unirCadena;

}

console.log(invertirCad('Hola Mundo'));