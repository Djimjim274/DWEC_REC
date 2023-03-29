/* 23. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const compruebaPalindromo=(cadena)=>{

   let separaCadena= cadena.split("");
console.log(separaCadena);

   let invierteCadena=separaCadena.reverse();
   console.log(invierteCadena);




   if(invierteCadena.length===separaCadena.length){
    return true;
   }else{
    return false
   }


}

console.log(compruebaPalindromo('ojwo'));












/* const palindroma = (text="")=> {

   let longitud=text.length
   let textoA=""
   let textoS=""

   for (let i = 0; i< text.length;i++){
       if(text.charAt(i)!=' '){
           textoS += text.charAt(i)
       }


   for(longitud;longitud >= 0;longitud--){
       if(text.charAt(longitud)!=' '){
           textoA+= text.charAt(longitud)
       }
   }
 }

 if(textoS==textoA){

   document.write("La frase es políndroma")
 }else{
   document.write("La frase no es palíndroma")
 }

}
 palindroma("ojo rojo") */