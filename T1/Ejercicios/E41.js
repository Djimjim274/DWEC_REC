/* 41. Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const numRam=(max,min)=>parseInt(Math.random()*(max-min)+min)
console.log(numRam(600,501));