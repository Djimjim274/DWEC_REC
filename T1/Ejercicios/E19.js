/* 19. Programa una función que dada una String te devuelva un Array de textos separados por
cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

const convertArray=(cadena,caracter)=>{

 return  cadena.split(caracter);
 
}
console.log(convertArray('hola que tal', ' '));