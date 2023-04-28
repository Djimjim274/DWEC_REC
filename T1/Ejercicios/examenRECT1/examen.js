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

b. Crea una función llamada ordenar que reciba como parámetro el array original y
devuelva un array con los objetos ordenados por edad de menor a mayor o de
mayor a menor dependiendo de un valor aleatorio. NOTA: Usar la función sort.
(1,5p)
c. Crea una función llamada primos que reciba como parámetro el array original y
devuelva un array con las edades que sean números primos (es un número que
solo es divisible por sí mismo y la unidad). Usa la función filter y map. (2,5p) */

let entrada=[{ nombre: 'Ana Pérez Soler', DNI: '21147465T', edad: 4 },
{ nombre: 'Álvaro García Castro', DNI: '24545535G', edad: 32 },
{ nombre: 'Palom González Máxim', DNI: '45678912L', edad: 9 },
{ nombre: 'Alberto Alguacil Alcalde', DNI: '79753330W', edad: 17 }];
                        // 0,1,2,3,4,5,6
const identificadores=(entrada)=>{

    let nombre=entrada.map(entrada=>entrada.nombre); 
    let dni=entrada.map(entrada=>entrada.DNI); 

    nombre=nombre.map(valor=>valor.replaceAll('á','a'));
    nombre=nombre.map(valor=>valor.replaceAll('é','e'));
    nombre=nombre.map(valor=>valor.replaceAll('í','i'));
    nombre=nombre.map(valor=>valor.replaceAll('ó','o'));
    nombre=nombre.map(valor=>valor.replaceAll('ú','u'));
  
//ultma letra del nombre
     //separamos el array en nombre ape1 y ape2
     nombre=nombre.map(valor=>valor.split(" "));     
     let nom=nombre.map(valor=>valor[0].substring(valor[0].length-1));  
//3 últimas letras del apellido 1
     let ape1=nombre.map(valor=>valor[1].substring(valor[1].length-3));  
//3 primeras letras del apellido 2
     let ape2=nombre.map(valor=>valor[2].substring(0,3));        
//pasamos el apellido a minúsculas
     ape2=ape2.map(valor=>valor.toLowerCase());  
// y los dígitos que ocupan las posiciones 3,4 y 5 (teniendo en cuenta que el primer dígito 
//teniendo en cuenta como la posición 0) del dni    
    let digitos=dni.map(valor=>valor.substring(3,6)); 

let array=[];

for (let index = 0; index < nombre.length; index++) {
    array[index]=` ${nom[index]}${ape1[index]}${ape2[index]}${digitos[index]}`
    
}
return array;

}
console.log(identificadores(entrada))


/* b. Crea una función llamada ordenar que reciba como parámetro el array original y
devuelva un array con los objetos ordenados por edad de menor a mayor o de
mayor a menor dependiendo de un valor aleatorio. NOTA: Usar la función sort.
(1,5p) */

const ordenar=(entrada)=>{
    return entrada.sort((a,b)=> b.edad -a.edad)
}
console.log(ordenar(entrada))

/* c. Crea una función llamada primos que reciba como parámetro el array original y
devuelva un array con las edades que sean números primos (es un número que
solo es divisible por sí mismo y la unidad). Usa la función filter y map. (2,5p) */

const primos=entrada=>{
    let index=0
    for(let i=entrada-1;i >= 2; i--){
        if(entrada%i==0){
            index++;
        }
    }
    return (index===1)?true:false;
}

const comrpruebaPrimo=entrada=>{
let edad=entrada.map(entrada=>entrada.edad); 
    return edad.filter((valor=>primos(valor)))
}

console.log(comrpruebaPrimo(entrada))


/* 2. Programa una función llamada edad que reciba una cadena del tipo “dd/mm/aaaa” y
devuelva la edad teniendo en cuenta la fecha actual. NOTA1: usar Date. NOTA2: Hay que
tener en cuenta los meses y los días, si no, el ejercicio no es válido. NOTA3: Ten cuidado
al usar Date y asegúrate de que estás construyendo correctamente la fecha, es posible
que tengas que modificar la cadena de entrada. [1,5p] */

const edad= "24/04/2002";

const edadactual = edad =>{

    edad= edad.split("/");


    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    const mesActual =fecha.getMonth()+1;
    const diaActual = fecha.getDate();

    let año=0;

    año = añoActual-edad[2];

    if(mesActual<edad[1]){
        año=año-1;
    }

    if(mesActual==edad[1]){
        if(diaActual<edad[0])
        año=año-1;
    }


    return año ;



}


console.log(edadactual(edad));


let array=[1,2,2,2,3,4,5]
let array2=[3,2]
/* 3. Programa una función llamada iguales que reciba dos vectores de números y devuelva un
vector sólo con los números repetidos en ambos vectores de entrada. Debe funcionar para
vectores de cualquier tamaño y tener en cuenta que puede haber valores duplicados (pero
se cuentan como uno). [1,5p] */
const iguales=(array,array2)=>{

let arraynuevo=[];
array.forEach(x => {
    if(array2.includes(x)){
        arraynuevo.push(x);
    }
});
return new Set(arraynuevo)
}
console.log(iguales(array,array2))