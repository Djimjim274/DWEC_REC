/* 31. Programa una función que dada una fecha válida determine cuantos años han pasado hasta
el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) */

const validaFecha=(fecha)=>{

    //La fecha actual - la fecha que le he pasado
    const date = new Date();
    //le paso el valor en absoluto (positivo)
    return Math.abs(date.getFullYear()-fecha.getFullYear());

}
const diaMalo =new Date ('2000-09-11');

console.log(validaFecha(diaMalo));