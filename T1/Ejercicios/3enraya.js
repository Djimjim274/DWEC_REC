/*Realiza el juego del tres en raya contra otro jugador o contra la máquina (con números aleatorios).
Puedes hacerlo usando en cada jugada las coordenadas de X u O desde 0,0 (esquina superior
izquierda) a 2,2 (esquina inferior derecha).  */

/* let jugador1=prompt('Bienvenido al 3 en raya \n proporcione el nombre del Jugador 1');
console.log(jugador1);
let jugador2=prompt(' proporcione el nombre del Jugador 2');
console.log(jugador2);  */

/* let tablero='\n-  |  -  | -\n-  |  -  |  -\n-  |  -  |  -'; */
/* 
let coordenadaX=prompt(`${jugador1} Proporcione la coordenada X  `);
let coordenadaY=prompt(`${jugador1} Proporcione la coordenada Y para pintar su X`); */

let coordenadaX,coordenadaY,coordenada;
let jugada;

let tablero=[
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

 do { 
coordenadaX=prompt(`Proporcione la coordenada X  `);
coordenadaY=prompt(` Proporcione la coordenada Y para pintar su X`);

//creamos una función para pintar el tablero
  const movimientoJugador=(coordenadaX,coordenadaY) =>{

    for (let x = 0; x < tablero.length; x++) {
        for (let y= 0; y < tablero[x].length; y++) {
          tablero[coordenadaX][coordenadaY]="X";
       jugada++
        }
      }
      return tablero[coordenadaX][coordenadaY];
  }

const movimientoMaquina=(coordenadaX,coordenadaY,tablero)=>{
  
  let coorX=parseInt(Math.random()*3)
  let coorY=parseInt(Math.random()*3)
  console.log(coorX,coorY)

  for (let x = 0; x < tablero.length; x++) {
   for (let y= 0; y < tablero[x].length; y++) {
      if(tablero[coordenadaX][coordenadaY]!==tablero[coorX][coorY]){
    tablero[coorX][coorY]="O";
    jugada++;
      }
    }

  }

}

movimientoJugador(coordenadaX,coordenadaY)
movimientoMaquina(coordenadaX,coordenadaY,tablero);
console.log(tablero)
console.log(jugada)






//creamos una función para que el jugador realice el movimiento y compruebe si está vacía

const movimiento=(coordenadaX,coordenadaY,coordenada)=>{
    if(tablero[coordenadaX][coordenadaY]===''){
        tablero[coordenadaX][coordenadaY]=coordenada;
        return true;
    }else{
        return false;
    }

}


const comprobarGanador = tablero => {
       
  // horizontales de X
if (tablero[0][0] == 'X' && tablero[0][1] == 'X' && tablero[0][2] == 'X' ||
  tablero[1][0] == 'X' && tablero[1][1] == 'X' && tablero[1][2] == 'X' ||
  tablero[2][0] == 'X' && tablero[2][1] == 'X' && tablero[2][2] == 'X' ||
  // verticales de X
  tablero[0][0] == 'X' && tablero[1][0] == 'X' && tablero[2][0] == 'X' ||
  tablero[0][1] == 'X' && tablero[1][1] == 'X' && tablero[2][1] == 'X' ||
  tablero[0][2] == 'X' && tablero[1][2] == 'X' && tablero[2][2] == 'X' ||
  // izq abajo - der arriba X
  tablero[0][2] == 'X' && tablero[1][1] == 'X' && tablero[2][0] == 'X' ||
  // izq arriba - der abajo X
  tablero[0][0] == 'X' && tablero[1][1] == 'X' && tablero[2][2] == 'X') {
 
  return 0;
 
          // horizontales de O
} else if (tablero[0][0] == 'O' && tablero[0][1] == 'O' && tablero[0][2] == 'O' ||
      tablero[1][0] == 'O' && tablero[1][1] == 'O' && tablero[1][2] == 'O' ||
      tablero[2][0] == 'O' && tablero[2][1] == 'O' && tablero[2][2] == 'O' ||
      // verticales de O
      tablero[0][0] == 'O' && tablero[1][0] == 'O' && tablero[2][0] == 'O' ||
      tablero[0][1] == 'O' && tablero[1][1] == 'O' && tablero[2][1] == 'O' ||
      tablero[0][2] == 'O' && tablero[1][2] == 'O' && tablero[2][2] == 'O' ||
      // izq abajo - der arriba O
      tablero[0][2] == 'O' && tablero[1][1] == 'O' && tablero[2][0] == 'O' ||
      // izq arriba - der abajo O
      tablero[0][0] == 'O' && tablero[1][1] == 'O' && tablero[2][2] == 'O') {
 
  return 1;
 
} else {
  return 2;
}
}
console.log(comprobarGanador(tablero));
console.log(movimiento(coordenadaX,coordenadaY,coordenada));
} while (jugada!==9); 