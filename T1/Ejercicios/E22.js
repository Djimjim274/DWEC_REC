/* 22. Programa una función para contar el número de veces que se repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const contarCadena = (cadena, palabra) => {

/*   let cont = 0;
  let posicion = 0;

  do {

    posicion = cadena.indexOf(palabra, posicion);//
    if (posicion !== -1) { //si la posición es distinta a -1 se significa que hay una palabra
      cont++;
      posicion += palabra.length; //empieza en la posición de la última palabra
    }

  } while (posicion !== -1);


  return cont;
 */
let expReg= new RegExp(palabra,"gi"); //creamos una expresión regular; g=>busca mas de una ocurrencia
return cadena.match(expReg).length  


}

/* let cadena='hola que tal hola'; */
console.log(contarCadena('hola que hola hola tal hola', 'hola'))