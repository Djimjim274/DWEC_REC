/* 20. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
Hola Mundo Hola Mundo Hola Mundo. */

const repiteText=(cadena,veces)=>{
    
   let mostrar="";

    for (let e = 1; e <= veces; e++) {
         mostrar+=cadena+' '; // es lo mismo que mostrar=mostrar+cadena+' ';
    }
   return mostrar

}
console.log(repiteText('hola Mundo',3));