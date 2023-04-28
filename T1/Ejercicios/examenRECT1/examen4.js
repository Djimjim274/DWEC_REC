/* 1. Dado un vector de objetos literales con el siguiente formato: {nombre:”Ana Pérez Soler”,
DNI: “21147465T”, edad: 21}:
a. Crea una función llamada identificadores que reciba como parámetro el array
original y devuelva un array con los identificadores de los usuarios. Para ello debes
coger la última letra (sin tilde) del nombre, las tres últimas letras del primer apellido
(sin tildes), las tres primeras del segundo apellido (minúsculas y sin tildes) y los
dígitos que ocupan las posiciones 3,4 y 5 (teniendo en cuenta que el primer dígito
se cuenta como la posición 0) del DNI. Usa la función map.(3p)
NOTA: Se entiende que los nombres y los apellidos no son compuestos y todos
tienen tres o más caracteres.

*/


let entrada=[{ nombre: 'Ana Pérez Soler', DNI: '21147465T', edad: 4 },
{ nombre: 'Álvaro García Castro', DNI: '24545535G', edad: 32 },
{ nombre: 'Palom González Máxim', DNI: '45678912L', edad: 9 },
{ nombre: 'Alberto Alguacil Alcalde', DNI: '79753330W', edad: 17 }];

const identificadores=entrada=>{

    //coger la última letra (sin tilde) del nombre
    let nombre=entrada.map(entrada=>entrada.nombre);
  
    nombre=nombre.map(valor=>valor.replaceAll('á','a'))
    nombre=nombre.map(valor=>valor.replaceAll('é','e'))
    nombre=nombre.map(valor=>valor.replaceAll('í','i'))
    nombre=nombre.map(valor=>valor.replaceAll('ó','o'))
    nombre=nombre.map(valor=>valor.replaceAll('ú','u'))
    nombre=nombre.map(entrada=>entrada.toLowerCase());

     nombre=nombre.map(entrada=>entrada.split(' ')); 

     let nom=nombre.map(valor=>valor[0].substring(valor[0].length-1));
   
     
     //las tres últimas letras del primer apellido
     let ape1=nombre.map(valor=>valor[1].substring(valor[1].length-3));

     //las tres primeras del segundo apellido (minúsculas y sin tildes) 

     let ape2=nombre.map(valor=>valor[2].substring(0,3));
   
     let dni=entrada.map(entrada=>entrada.DNI);
     dni=dni.map(valor=>valor.substring(3,6))

let array=[];

for (let index = 0; index < nombre.length; index++) {
   array[index]=`${nom[index]}${ape1[index]}${ape2[index]}${dni[index]}`
}
     return array;
}
console.log(identificadores(entrada))


/* b. Crea una función llamada ordenar que reciba como parámetro el array original y
devuelva un array con los objetos ordenados por edad de menor a mayor o de
mayor a menor dependiendo de un valor aleatorio. NOTA: Usar la función sort.
(1,5p)
*/

const ordenar=entrada=>entrada.sort((a,b)=>b.edad-a.edad);
console.log(ordenar(entrada))


/* 
c. Crea una función llamada primos que reciba como parámetro el array original y
devuelva un array con las edades que sean números primos (es un número que
solo es divisible por sí mismo y la unidad). Usa la función filter y map. (2,5p)  */


const primos=entrada=>{

    let index=0;

for (let i = entrada-1;i >=2; i--) {
    if(entrada%i===0){
        index++
    }
    
}
return (index===1)?true:false;

}
const compruebaPrimos=entrada=>{
let edad=entrada.map(valor=>valor.edad);
return edad.filter(entrada=>(primos(entrada)))
}
console.log(compruebaPrimos(entrada))



/* 2. Programa una función llamada edad que reciba una cadena del tipo “dd/mm/aaaa” y
devuelva la edad teniendo en cuenta la fecha actual. NOTA1: usar Date. NOTA2: Hay que
tener en cuenta los meses y los días, si no, el ejercicio no es válido. NOTA3: Ten cuidado
al usar Date y asegúrate de que estás construyendo correctamente la fecha, es posible
que tengas que modificar la cadena de entrada. [1,5p] */
let ed='21/04/2002'
const edad=(ed)=>{

    let fechaActual=new Date();
    let dia=fechaActual.getDay();
    let mes=fechaActual.getMonth()+1;
    let ano=fechaActual.getFullYear();

    let fecha=ed.split('/') 
    console.log(fecha)
    if(dia-fecha[0]>30){
        return dia
    }
}
console.log(edad(ed))


/*3. Programa una función llamada iguales que reciba dos vectores de números y devuelva un
vector sólo con los números repetidos en ambos vectores de entrada. Debe funcionar para
vectores de cualquier tamaño y tener en cuenta que puede haber valores duplicados (pero
se cuentan como uno). [1,5p]  */

let array1=[1,2,3,3,5,6]
let array2=[1,3,3,5,6]

const iguales=(array1,array2)=>{
let v=[];

array1.forEach(x => {
    if(array2.includes(x)){
        v.push(x)
    }

});
return new Set(v);
}
console.log(iguales(array1,array2))