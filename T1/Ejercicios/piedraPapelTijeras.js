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


const comprobarGanador = base => {
       
    // horizontales de X
if (base[0][0] == 'X' && base[0][1] == 'X' && base[0][2] == 'X' ||
    base[1][0] == 'X' && base[1][1] == 'X' && base[1][2] == 'X' ||
    base[2][0] == 'X' && base[2][1] == 'X' && base[2][2] == 'X' ||
    // verticales de X
    base[0][0] == 'X' && base[1][0] == 'X' && base[2][0] == 'X' ||
    base[0][1] == 'X' && base[1][1] == 'X' && base[2][1] == 'X' ||
    base[0][2] == 'X' && base[1][2] == 'X' && base[2][2] == 'X' ||
    // izq abajo - der arriba X
    base[0][2] == 'X' && base[1][1] == 'X' && base[2][0] == 'X' ||
    // izq arriba - der abajo X
    base[0][0] == 'X' && base[1][1] == 'X' && base[2][2] == 'X') {
   
    return 0;
   
            // horizontales de O
} else if (base[0][0] == 'O' && base[0][1] == 'O' && base[0][2] == 'O' ||
        base[1][0] == 'O' && base[1][1] == 'O' && base[1][2] == 'O' ||
        base[2][0] == 'O' && base[2][1] == 'O' && base[2][2] == 'O' ||
        // verticales de O
        base[0][0] == 'O' && base[1][0] == 'O' && base[2][0] == 'O' ||
        base[0][1] == 'O' && base[1][1] == 'O' && base[2][1] == 'O' ||
        base[0][2] == 'O' && base[1][2] == 'O' && base[2][2] == 'O' ||
        // izq abajo - der arriba O
        base[0][2] == 'O' && base[1][1] == 'O' && base[2][0] == 'O' ||
        // izq arriba - der abajo O
        base[0][0] == 'O' && base[1][1] == 'O' && base[2][2] == 'O') {
   
    return 1;
   
} else {
    return 2;
}
}
