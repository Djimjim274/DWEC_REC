/* Realiza el juego de piedra, papel o tijera contra otro jugador o contra la máquina (con números
aleatorios) */



 
let jugar="";
do {

let jugador1=prompt('Jugador 1  \n 1.piedra \n 2.papel \n 3.tijera ');

let jugador2=prompt('Jugador 2  \n 1.piedra \n 2.papel \n 3.tijera '); 

const juego=(jugador1,jugador2)=>{

 if(jugador1==1 && jugador2==3 || jugador1==2 && jugador2==1 || jugador1==3 && jugador2==2){
    return 1;
}else if(jugador1==1 && jugador2==2 || jugador1==2 && jugador2==3 || jugador1==3 && jugador2==1){
    return 2;
}else{
    return 0;
}

}


if(juego(jugador1,jugador2)==1){
   console.log( `Ha ganado el jugador1`);
}else if(juego(jugador1,jugador2)==2){
    console.log( `Ha ganado el jugador2`);
}else{
    console.log( `Han empatado`);
    
}

jugar=prompt('¿Desea Volver a jugar? S/N') 
jugar=jugar.toUpperCase();

 } while (jugar==="S");




/* let numRamdom =parseInt((Math.random()*3)+1); */