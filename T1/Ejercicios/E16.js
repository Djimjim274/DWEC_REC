/* 16. Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
del patrón.
Ejemplo 1. Datos de entrada: 'A' y 5
AAAAA
AAAA
AAA
AA
A */

let letra = prompt('Dibuje la letra que desea mostrar');
let num = prompt('Dibuje cuántas veces quiere mostrarlo');

const dibujaSierra = (letra, num) => {

    let dibuja = "";
    for (let index = num; index >= 0; index--) {
        let num2 = index
        for (let i = 1; i <= num2; i++) {
            dibuja += letra;
        }

        dibuja = dibuja + '\n'
    }

    return dibuja

}
console.log(dibujaSierra(letra, num));

