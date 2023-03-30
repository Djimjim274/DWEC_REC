/* 23. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const compruebaPalindromo=(cadena)=>{
//  Primero compruebo si tiene tilde y pasarlo a min
   cadena =cadena.toLowerCase() ;

  cadena=cadena.replaceAll("á","a") 
  cadena=cadena.replaceAll("é","e")
  cadena=cadena.replaceAll("í","i")
  cadena=cadena.replaceAll("ó","o")
  cadena=cadena.replaceAll("ú","u")

// Ahora separo letra por letra
   let separaCadena= cadena.split("");

//Ahora invierto el orden
   let invierteCadena=separaCadena.reverse(); 
 
//convierto la la cadena en string
   let unirCadena = invierteCadena.join("");

//compruebo si tiene una tilde, quitarla
 unirCadena=unirCadena.replaceAll(",","")
 unirCadena= unirCadena.replaceAll(" ",""); 
  console.log(unirCadena)

//compruebo si tiene una tilde, quitarla
cadena= cadena.replaceAll(" ","")
cadena=cadena.replaceAll(",","")

   console.log(cadena)

   //compruebo si la cadena es igual que la cadena invertida que hemos unido antes
  if(unirCadena===cadena){
return true
  }
  return false; 
  


  /*  if(unirCadena===cadena){
    return true;
   }else{
    return false
   }
 */
}

console.log(compruebaPalindromo('A la gorda, drógala'));
console.log(compruebaPalindromo('A la catalana banal, atácala'));
console.log(compruebaPalindromo('A mi loca Colima'));
console.log(compruebaPalindromo('Adán no cede con Eva y Yavé no cede con nada'));
console.log(compruebaPalindromo('A la godvdvrda, drógala'));

