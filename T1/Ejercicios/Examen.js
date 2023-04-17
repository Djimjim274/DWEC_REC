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





/* const indentificadores=(vector)=>{

 let  nombre=vector.map(vector=>vector.nombre);
 let dni=vector.map(vector=>vector.dni);
 cadena=cadena.toLowerCase();
   cadena=cadena.replaceAll("Á","A") 
   cadena=cadena.replaceAll("É","E")
   cadena=cadena.replaceAll("Í","I")
   cadena=cadena.replaceAll("Ó","O")
   cadena=cadena.replaceAll("Ú","U") 
   
let apellido=vector["nombreCompleto"].split(" ");
   
    apellido=apellido[1].substring(0,3);
    apellido=apellido.toLowerCase();
    apellido=apellido.replaceAll("á","a") 
    apellido=apellido.replaceAll("é","e")
    apellido=apellido.replaceAll("í","i")
    apellido=apellido.replaceAll("ó","o")
    apellido=apellido.replaceAll("ú","u") 

 let  apellido2=vector["nombreCompleto"].split(" ");
   apellido2=apellido2[2].substring(0,3)
   apellido2=apellido2.toLowerCase();

let DNI=vector["DNI"].slice(0,3);
/* let DNI=vector["DNI"].substring(0,3); */


let vector= [{ nombre: 'Ana Pérez Soler', DNI: '20102274k', edad: 2 },
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
nombre=nombre.map((valor)=>valor.includes('á')?valor.replaceAll('á', 'a'):valor)
nombre=nombre.map((valor)=>valor.includes('é')?valor.replaceAll('é', 'e'):valor)
nombre=nombre.map((valor)=>valor.includes('í')?valor.replaceAll('í', 'i'):valor)
nombre=nombre.map((valor)=>valor.includes('ó')?valor.replaceAll('ó', 'o'):valor)
nombre=nombre.map((valor)=>valor.includes('ú')?valor.replaceAll('ú', 'u'):valor)

//dividimos el nombre y appelidos en un array
 nombre = nombre.map((valor) => valor.split(' ')); //['Ana' ,'Pérez' ,'Soler']
 //ahora cogemos las posiciones necesarias
        //    diferencia entre el substring y slice
 let nom=nombre.map((valor)=>valor[0].substring(0,1));
 let apellido1=nombre.map((valor)=>valor[1].substring(0,3));
 let apellido2=nombre.map((valor)=>valor[2].substring(0,3));

 let numerosDni=dni.map((valor)=>valor.substring(5,8));

let array=[];

//hacemos un bucle para meter todo junto en un array
for (let i = 0; i < nombre.length; i++) {
   array[i] = nom[i] + '' + apellido1[i] + '' + apellido2[i] + '' + numerosDni[i];
} //como ponerlo de otra manera
return {array}

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
 
 return {array}
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
   let index;
if(vector.DNI==0 || vector.DNI==1)return false;

for ( index = 2; index < vector.DNI; index++) {   
 if(vector.DNI%index===0)return false; //COMO HAGO PARA RETORNAR EL VECTOR
}
   return {vector};
}

/*  const posicionPrimos=(vector)=>vector.filter((x,num)=>esprimo(num))
console.log(posicionPrimos(vector)); */

const compruebaCasiPrimo = vector=>{
   let edad = vector.map((valor)=>valor.edad);
   return edad.filter((valor)=>casiPrimo(valor));
   }
//preguntar

console.log(compruebaCasiPrimo(vector));

