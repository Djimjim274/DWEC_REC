/* 28. En un vector de cadenas, indicar:
a. La cadena más corta.
b. La cadena más larga.
c. La cadena con más letras ‘a’.
d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son. */

let cadenas=['hola','perro','movil','televisor','pepe','barco'];

//a. La cadena más corta.
let cadenaCorta=cadenas.reduce((a,b)=>a.length<b.length?a:b);
console.log(`La cadena más corta es `+cadenaCorta);


//b. La cadena más larga.
let cadenaLarga=cadenas.reduce((a,b)=>a.length>b.length?a:b);
console.log(`La cadena más larga es `+cadenaLarga);

//c. La cadena con más letras ‘a’.


console.log(`La cadena con más "a" es : ${cadenas.reduce( (strA, strB) => (strA.split('')
    .filter(c => c==='a')).length > (strB.split('').filter(c => c==='a')).length ? strA : strB)}`)
    
//d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son. 

let expReg= /b+/g;
//busca las ocurrencias
let ocurrencias=(x,expReg)=>x.match(expReg);

//cuenta cuantas ocurrencias hay
let resultado=cadenas.filter(x=>ocurrencias(x,expReg))


console.log(`las cadenas con más "b" son: ${resultado.join()}, las ocurrencias son   ${resultado.length}    }     `)

//preguntar por qué la palabra barco me dice que es la más corta










