/* 27. En un vector de números, indicar:
a. El número de elementos del vector.
b. Cuántos son pares y cuántos impares y cuáles son.
c. La suma de todos los números negativos.
d. El producto de todos los números positivos.
e. Cuántos son primos y cuáles son.
f. Los números que ocupan las posiciones pares del vector.
g. El número mayor.
h. El número menor.
i. La media de todos los números, los números que están por encima y los que están por
debajo.
j. El vector ordenado de mayor a menos y viceversa.
k. Buscar un valor introducido por el usuario e indicar si existe o no. */

const miVector=[1,2,-2,-4,5,6,7,22];

/* a. El número de elementos del vector. */
const numeroElementos=(miVector)=>miVector.length;

console.log(numeroElementos(miVector));

/*b. Cuántos son pares y cuántos impares y cuáles son.  */
/* const compruebaPar=(miVector)=>{

    let contP=0;
    let contI=0;
   
    for (let i = 0; i < miVector.length; i++) {
    
        if(miVector[i]%2===0){
          ++contP;
         
        }else{
            ++contI;
          
        }
    }

   return `Hay ${contP} pares y ${contI} números impares`;

}
console.log(compruebaPar(miVector)); */

let par = miVector.filter(number => number % 2 === 0);
let impar= miVector.filter(number => number% 2 !== 0);
console.log(`Hay ${par.length} números pares del vector, y son: \n ${par}`);
console.log(`Hay ${impar.length} números impares del vector, y son: \n ${impar}`);
/* ----------------------------------------------------------------------------------- */
/* c. La suma de todos los números negativos. */
//primero filtro para encontrar los números negativos 
let numNegativos=miVector.filter(x=>x<0) //hago la operación con el reduce
                                        .reduce((x,y)=>x+y);
console.log(`La suma de negativos es`+numNegativos);


/* ----------------------------------------------------------------------------------- */
/* d. El producto de todos los números positivos. */
let productoPositivoss=miVector.filter(x=>x>0)
                                        .reduce((x,y)=>x*y);
console.log(`El producto de los números positivos es `+productoPositivoss);                                        


/* const productoPositivos=(miVector)=>{
    
    let producto=1;
    for (let i = 0; i < miVector.length; i++) {
        if(miVector[i]>0){
            producto*=miVector[i];
        }
        
    }

return `El producto de los números positivos es ${producto}`;
}
console.log(productoPositivos(miVector)); */

/* ----------------------------------------------------------------------------------- */
/* e. Cuántos son primos y cuáles son.*/


const compruebaPrimos=(miVector)=>{

    let contPrimos=0;
    let contNoPrimos=0;
  
for (let i = 2; i < miVector.length; i++) {
   
     if(miVector[i]%i===0){
       
     contNoPrimos++;
     }else{
         contPrimos++;
     }
     
}
   return `Hay ${contPrimos} primos y ${contNoPrimos} no primos`;

}
console.log(compruebaPrimos(miVector));//preguntar
/* ----------------------------------------------------------------------------------- */
/* f. Los números que ocupan las posiciones pares del vector.*/




const posicionPares=(miVector)=>{


    for (let i = 0; i < miVector.length; i++) {
        
    if(miVector[i]%2===0){
       
    console.log( miVector.indexOf(miVector[i])); //como hacer esto
       
    }

    }
  
}
console.log(posicionPares(miVector));

//Preguntar si lo que pide es la posición en el Array

//este es de la solución
/* const pares = miVector.filter(n => n%2===0)
console.log(`Los números que ocupan las posiciones pares en el Array son: \n
        ${pares}`);
 */

/* ----------------------------------------------------------------------------------- */
/* g. El número mayor. */
const numMayor=(miVector)=>Math.max(...miVector); 
console.log(`El número mayor es `+ numMayor(miVector));

/* ----------------------------------------------------------------------------------- */
/* h. El número menor. */
//forma con la función Math
let numMenor=(miVector)=>Math.min(...miVector);
console.log(`El número menor es `+ numMenor(miVector));

//forma con la función reduce
let numMenorr=miVector.reduce((x,y)=>x<y? x : y);
console.log(`El número menor es ${numMenorr}`);

/* ----------------------------------------------------------------------------------- */
/* i. La media de todos los números, los números que están por encima y los que están por 
debajo.*/
let mediaArriba=miVector.filter(x=>x>0).reduce((x,y)=>x+y/miVector.length);
console.log(`La media de los números por encima es ${mediaArriba}`);
let mediaAbajo=miVector.filter(x=>x<0).reduce((x,y)=>x+y/miVector.length);
console.log(`La media de los números por debajo es ${mediaAbajo}`);

/* ----------------------------------------------------------------------------------- */
/* j. El vector ordenado de mayor a menos y viceversa. */
let vectorCreciente=miVector.filter((x,y)=>x<y);
console.log(vectorCreciente)
let vectorDereciente=miVector.filter((x,y)=>x>y);
console.log(vectorDereciente)


/* ----------------------------------------------------------------------------------- */
/* k. Buscar un valor introducido por el usuario e indicar si existe o no.  */
let num=parseInt(prompt('Introduce un número para añadirlo al array'));

//meto el valor en el array
let numIntroducido=miVector.push(num);
//compruebo si está dentro del array
let compruebaNumero=miVector.includes(num)?console.log(`el número ${num} está dentro del array`):console.log(`el número ${num} no está dentro del array`);
console.log(miVector);
