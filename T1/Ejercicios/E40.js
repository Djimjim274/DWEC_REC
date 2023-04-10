/* 40. Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
este formato dd/mm/aaa. */
const validaFecha=(fecha)=>{

    //La fecha actual - la fecha que le he pasado
    const date = new Date();
    //le paso el valor en absoluto (positivo)
    return Math.abs(date.getFullYear()-fecha.getFullYear());

}
const dia =new Date ('2000-09-11');

console.log(validaFecha(dia));