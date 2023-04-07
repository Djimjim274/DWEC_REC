/* 28. En un vector de cadenas, indicar:
a. La cadena más corta.
b. La cadena más larga.
c. La cadena con más letras ‘a’.
d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son. */

let cadenas=['hola','perro','movil','televisor','pepe','barco'];

//a. La cadena más corta.
let cadenaCorta=cadenas.map((x)=>x).reduce((x,y)=>x<y? x:y)
console.log(`La cadena más corta es `+cadenaCorta);


//b. La cadena más larga.
let cadenaLarga=cadenas.map((x)=>x).reduce((x,y)=>x>y? x:y)
console.log(`La cadena más larga es `+cadenaLarga);

//c. La cadena con más letras ‘a’.

/* const cadenaA=(cadenas)=>{
 let expReg=/a+/g;
    let cadena=cadenas.reduce( (strA,strB) =>(strA.split('').filter(e=>e==='a'))
    .lenght> (strB.split('').filter(e=>e==='a')).lenght ? strA :strB)

return cadena 

}
console.log(cadenaA(cadenas)) */
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










