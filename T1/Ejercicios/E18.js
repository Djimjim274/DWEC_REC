/* 18. Programa una función que te devuelva el texto recortado según el número de caracteres
indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola". */

const textoRecortado =(cadena,num)=>{
                              //inicio -fin
        return cadena.substring(0,num);
}

console.log(textoRecortado('hola mundo', 4));