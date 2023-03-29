/* 28. En un vector de cadenas, indicar:
a. La cadena más corta.
b. La cadena más larga.
c. La cadena con más letras ‘a’.
d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son. */

let cadenas=['hola','perro','movil','televisor','pepe'];

//a. La cadena más corta.
let cadenaCorta=cadenas.map((x)=>x).reduce((x,y)=>x<y? x:y)
console.log(`La cadena más corta es `+cadenaCorta);

//b. La cadena más larga.
let cadenaLarga=cadenas.map((x)=>x).reduce((x,y)=>x>y? x:y)
console.log(`La cadena más larga es `+cadenaLarga);

//c. La cadena con más letras ‘a’.
const cadenaA=(cadenas)=>{

    let expReg=/a/g;
    let cont=0

    if(expReg.test(cadenas)){
        cont++;
    }
    return cont;
}
console.log(cadenaA(cadenas))