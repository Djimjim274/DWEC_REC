/* Dado un vector de objetos literales con el siguiente formato: {nombreCompleto:”Ana Pérez
Soler”, DNI: “21147465T”, edad: 21}:

a. Crea una función que reciba como parámetro el array original y devuelva un array
con los identificadores de los usuarios. Para ello debes coger la primera letra
(minúsculas y sin tildes) del nombre, las tres primeras letras del primer apellido
(minúsculas y sin tildes), las tres primeras del segundo apellido (minúsculas y sin
tildes) y los tres últimos dígitos del DNI. Usa la función map.(3p)
NOTA: Se entiende que los nombres y los apellidos no son compuestos y todos
tienen tres o más caracteres.


b. Crea una función que reciba como parámetro el array original y devuelva un array
con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
minúscula pero no tienen un separador entre número y letra. Usa la función filter y
map. (3p)
c. Crea una función que reciba como parámetro el array original y devuelva un array
con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
(2p)
d. Crea una función que reciba como parámetro el array original y devuelva un array
con las edades que sean números casi primos (es un número que solo es divisible
por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo).
Usa la función filter y map. (2p) */

let vector= [{ nombre: 'Ana Pérez Soler', DNI: '20102274K', edad: 2 },
   { nombre: 'Álvaro García Castro', DNI: '24545535G', edad: 32 },
   { nombre: 'Paloma González Máxim', DNI: '45678912L', edad: 9 },
   { nombre: 'Alberto Alguacil Alcalde', DNI: '79753330W', edad: 17 }];


const indentificadores=(vector)=>{

 let  nombre=vector.map(vector=>vector.nombre); //nombre
 let dni=vector.map(vector=>vector.DNI); //dni

 //paso los nombres a minúsculas
 nombre=nombre.map(element=>element.toLowerCase());


//sustituimos las palabras con tildes a sin tildes
                // si incluye una á en mayus    la reenplaza por una a   si no deja el valor solo
nombre=nombre.map((valor)=>valor.replaceAll('á', 'a'))
nombre=nombre.map((valor)=>valor.replaceAll('é', 'e'))
nombre=nombre.map((valor)=>valor.replaceAll('í', 'i'))
nombre=nombre.map((valor)=>valor.replaceAll('ó', 'o'))
nombre=nombre.map((valor)=>valor.replaceAll('ú', 'u'))

//dividimos el nombre y appelidos en un array
 nombre = nombre.map((valor) => valor.split(' ')); //['Ana' 'Pérez' 'Soler']
 //ahora cogemos las posiciones necesarias
        //    diferencia entre el substring y slice
 let nom=nombre.map((valor)=>valor[0].substring(0,1));
 let apellido1=nombre.map((valor)=>valor[1].substring(0,3));
 let apellido2=nombre.map((valor)=>valor[2].substring(0,3));

 let numerosDni=dni.map((valor)=>valor.substring(5,8));

let array=[];

//hacemos un bucle para meter todo junto en un array
for (let i = 0; i < nombre.length; i++) {
   array[i]=`${nom[i]}${apellido1[i]}${apellido2[i]}${numerosDni[i]}`
} // template strings
return array

}

console.log(indentificadores(vector));

/* b. Crea una función que reciba como parámetro el array original y devuelva un array
con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
minúscula pero no tienen un separador entre número y letra. Usa la función filter y
map. (3p) */


const validaDNI=(dni)=>{


let numero,letra,letras;

letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

numero=dni.substring(0,8);
letra=dni.substring(8,9);
letra=letra.toUpperCase();

return  (letras[numero%23]===letra)?true:false;


}

const dni=vector=>{
let array=[];
let dni=vector.map(vector=>vector.DNI);
 array=dni.filter(valor=>validaDNI(valor));
 
 return array
}




 console.log(dni(vector))


/* c. Crea una función que reciba como parámetro el array original y devuelva un array
con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
(2p) */

 const edad=(vector)=>{

   vector= vector.sort(function (a,b){return b.edad - a.edad})//preguntar
   return {vector}
}

console.log(edad(vector)); 



/* d. Crea una función que reciba como parámetro el array original y devuelva un array
con las edades que sean números casi primos (es un número que solo es divisible
por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo).
Usa la función filter y map. (2p)  */

const casiPrimo=vector=>{
   let index = 0;
   for (let i = vector - 1; i >= 2; i--){
       if ( vector % i === 0 ){
         index++;
       }
   }
   return (index===1)?true:false;
 
}

/*  const posicionPrimos=(vector)=>vector.filter((x,num)=>esprimo(num))
console.log(posicionPrimos(vector)); */

const compruebaCasiPrimo = vector=>{
   let edad = vector.map((valor)=>valor.edad);
   return edad.filter((valor)=>casiPrimo(valor));
   }
//preguntar

console.log(compruebaCasiPrimo(vector));

