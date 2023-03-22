/* 22. Programa una función para contar el número de veces que se repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const contarCadena=(cadena,palabra)=>{

    let cont=0;
    let posicion=0;
  while ((posicion = cadena.indexOf(palabra,posicion) !== -1)) { //si es distinto a -1 significa que encontró una ocurrencia en la cadena
    ++cont;
    posicion+= palabra.length;   //le sumamos la cantidad de caracteres que tiene la palabra

  }
   
return cont;

}

let cadena='hola que tal hola';
console.log(contarCadena(cadena,'hola'))