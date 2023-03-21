/* 12. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F */

let num = parseInt(prompt('Introduzca el número que desea convertir'));
let tipo = prompt('Introduzca el tipo que desea convertir \n C.Fahrenheit a Celsius \n F.Celsius a Fahrenheit');

const convertirFaC = (num, tipo) => {
    let op = 0;
    tipo=tipo.toLowerCase();
    switch (tipo) {
        case 'c':
            op = (num - 32) * 5 / 9;
            break;

        case 'f':
            op = (num * 9 / 5) + 32;
            break;
        default:
            op=null;
            break;
    }

    return op;

}

/* Pregunta si yo tenmgo que poner más console log, y no puedo meterlos en la función como lo hago */
console.log(convertirFaC(num, tipo)+tipo);

