/*Realiza el juego del tres en raya contra otro jugador o contra la máquina (con números aleatorios).
Puedes hacerlo usando en cada jugada las coordenadas de X u O desde 0,0 (esquina superior
izquierda) a 2,2 (esquina inferior derecha).  */

let jugador1=prompt('Bienvenido al 3 en raya \n proporcione el nombre del Jugador 1');
console.log(jugador1);
let jugador2=prompt(' proporcione el nombre del Jugador 2');
console.log(jugador2); 

/* let tablero='\n-  |  -  | -\n-  |  -  |  -\n-  |  -  |  -'; */

let coordenadaX=prompt(`${jugador1} Proporcione la coordenada X  `);
let coordenadaY=prompt(`${jugador1} Proporcione la coordenada Y para pintar su X`);

//creamos el array
let tablero=[
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
let coordenada=["X","O"]

//creamos una función para pintar el tablero
  const pintaTablero=() =>{

    for (let x = 0; x < tablero.length; x++) {
        for (let y= 0; y < tablero[x].length; y++) {
          tablero[i][j];
        }
      }

  }


//creamos una función para que el jugador realice el movimiento y compruebe si está vacía
const movimiento=(coordenadaX,coordenadaY,coordenada)=>{
    if(tablero[coordenadaX][coordenadaY]===''){
        tablero[coordenadaX][coordenadaY]=coordenada;
        return true;
    }else{
        return false;
    }

}

