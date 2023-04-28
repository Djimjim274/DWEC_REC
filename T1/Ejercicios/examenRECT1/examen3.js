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

let entrada= [{nombre:'Ana Pérez Soler', DNI: '21147465T', edad: 4},
    {nombre:'Álvaro García Castro', DNI: '24545535G', edad: 31},
    {nombre:'Paloma González Máxim', DNI: '45678912L', edad: 9},
    {nombre:'Alberto Alguacil Alcalde', DNI: '79753330W', edad: 17}
    ];

const identificadores=entrada=>{
    let nombre=entrada.map(entrada=>entrada.nombre);
    nombre=nombre.map(valor=>valor.toLowerCase());
    nombre=nombre.map(valor=>valor.replaceAll('á','a'))
    nombre=nombre.map(valor=>valor.replaceAll('é','e'))
    nombre=nombre.map(valor=>valor.replaceAll('í','i'))
    nombre=nombre.map(valor=>valor.replaceAll('ó','o'))
    nombre=nombre.map(valor=>valor.replaceAll('ú','u'))

     nombre=nombre.map(entrada=>entrada.split(' '));
    let nom=nombre.map(valor=>valor[0].substring(0,1))
     let ape1=nombre.map(valor=>valor[1].substring(0,3)) 
     let ape2=nombre.map(valor=>valor[2].substring(0,3)) 
     

     let dni=entrada.map(entrada=>entrada.DNI);
     dni=dni.map(valor=>valor.substring(5,8)) 

     
  let array=[];

  for (let index = 0; index < nombre.length; index++) {
   array[index] =`${nom[index]}${ape1[index]}${ape2[index]}${dni[index]}`
    
  }
  return array;

}
 console.log(identificadores(entrada))

 /* b. Crea una función que reciba como parámetro el array original y devuelva un array
con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
minúscula pero no tienen un separador entre número y letra. Usa la función filter y
map. (3p) */

const validadni=dni=>{
   

    let numero,letra,letras;

letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

 numero=dni.substring(0,8); 
letra=dni.substring(8,9); 

return (letras[numero%23]===letra)?true:false;

}
const dni=entrada=>{
    let array=[];
    let dni=entrada.map(entrada=>entrada.DNI);
     array=dni.filter(valor=>validadni(valor));
     
     return array
    }

console.log(dni(entrada))



 /* c. Crea una función que reciba como parámetro el array original y devuelva un array
con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
(2p) */
const edades=entrada=>entrada.sort((a,b)=>b.edad-a.edad);
console.log(edades(entrada))


/* d. Crea una función que reciba como parámetro el array original y devuelva un array
con las edades que sean números casi primos (es un número que solo es divisible
por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo).
Usa la función filter y map. (2p) */

const casiPrimos=entrada=>{
let index=0;

for (let i = entrada-1 ; i>=2 ; i--) {
    if(entrada%i===0){
        index++;
    }
    
}
return(index===1)?true:false;

}

const compruebaCasiPrimo = entrada=>{
    let edad=entrada.map(valor=>valor.edad);
  return edad=edad.filter(valor=>casiPrimos(valor));
}
console.log(compruebaCasiPrimo(entrada))