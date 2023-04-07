/*  30. Programa una función para saber la edad de una persona, sabiendo la fecha de nacimiento.*/

const saberEdad=(dia,mes,ano)=>{

let fechaActual=new Date();
let year=fechaActual.getFullYear();
return year-=ano;
}

console.log(`Usted tiene ${saberEdad(21,04,1980)} años`);
