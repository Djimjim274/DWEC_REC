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


const lleno = base => {
    let compl = true;
   
    for (let i=0;i<base.length;i++) {  
        for (let j=0;j<base[i].length;j++) {    
            if (base[i][j] == ' ') {
                compl = false;
                return compl;
            }
        }
    }
   
    return compl;
   
}


const maquina = base => {
    let pos1;
    let pos2;
   
    pos1 = parseInt(Math.random()*base.length);
    pos2 = parseInt(Math.random()*base.length);
   
    while (base[pos1][pos2] == 'X' || base[pos1][pos2] == 'O') {
        pos1 = parseInt(Math.random()*base.length);
        pos2 = parseInt(Math.random()*base.length);
    }
   
    base[pos1][pos2] = 'O';
   
}


jugador = base => {
    let pos1;
    let pos2;
   
    do {
        pos1 = parseInt(prompt("Fila: "));
        pos2 = parseInt(prompt("Columna: "));
       
        if (pos1<0 || pos1>2 || pos2<0 || pos2>2) {
            alert('\n << ¡Lugar inexistente! >> ');
        } else if (base[pos1][pos2] == 'X' || base[pos1][pos2] == 'O' ) {
            alert('\n << ¡Lugar ocupado! >> ');
        }


    } while (pos1<0 || pos1>2 || pos2<0 || pos2>2 || base[pos1][pos2] == 'X' || base[pos1][pos2] == 'O' );
   
    base[pos1][pos2] = 'X';
}




// PRINCIPAL
let evaluar;
let base = [...Array(3)].map(() => Array(3).fill(' '));
/* console.table(base); */


        let ganadorJug = false;
        let ganadorMaq = false;
        let completo = false;


        do {
            maquina (base);
            console.table(base);
           
            evaluar = comprobarGanador(base);
            if (evaluar==0) {
                 ganadorJug = true;
                 completo = false;
            } else if (evaluar==1) {
                ganadorMaq = true;
                completo = false;
            } else {
                completo = lleno (base);
            }
           
            if (ganadorMaq == false && completo == false) {
                jugador (base);
                console.table(base);
            }
           
            evaluar = comprobarGanador(base);
            if (evaluar==0) {
                 ganadorJug = true;
                 completo = false;
            } else if (evaluar==1) {
                ganadorMaq = true;
                completo = false;
            } else {
                completo = lleno (base);
            }
           
        } while (ganadorJug==false && ganadorMaq==false && completo==false);
       
        if (ganadorJug==true) {
            alert('\n  << ¡Winner! >>');
            console.log("\n  << ¡Winner! >>");
        }
       
        if (ganadorMaq==true) {
            alert('\n  << ¡Game Over >>');
            console.log("\n  << ¡Game Over! >>");
        }
       
        if (completo==true) {
            alert('\n  << ¡Empate! >>');
            console.log("\n  << ¡Empate! >>");
        }
