/* 23. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const compruebaPalindromo=(cadena)=>{

   let separaCadena= cadena.split("");
console.log(separaCadena);
   let invierteCadena=separaCadena.reverse();
   console.log(invierteCadena);
   if(invierteCadena===separaCadena){
    return true;
   }else{
    return false
   }


}

console.log(compruebaPalindromo('ojo'));