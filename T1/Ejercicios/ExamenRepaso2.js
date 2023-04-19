 /* 1. Dado un vector de objetos literales con el siguiente formato: {nombreCompleto:”Ana Pérez
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

let entrada =
    [{ nombre: 'Ana Pérez Soler', DNI: '21147465t', edad: 4 },
    { nombre: 'Álvaro García Castro', DNI: '24545535G', edad: 32 },
    { nombre: 'Paloma González Máxim', DNI: '45678912L', edad: 9 },
    { nombre: 'Alberto Alguacil Alcalde', DNI: '79753330W', edad: 17 }];


const nombre=(entrada)=>{

    let nom=entrada.map(entrada=>entrada.nombre);
    let dni=entrada.map(entrada=>entrada.DNI);

    nom=nom.map(valor=>valor.toLowerCase());

   nom=nom.map(valor=>valor.replaceAll('á','a')) 
   nom=nom.map(valor=>valor.replaceAll('é','e')) 
   nom=nom.map(valor=>valor.replaceAll('í','i')) 
   nom=nom.map(valor=>valor.replaceAll('ó','o')) 
   nom=nom.map(valor=>valor.replaceAll('ú','u')) 

     nom=nom.map(valor=>valor.split(" "));

 let nombre=nom.map(valor=>valor[0].substring(0, 1))
                        //    diferencia entre el substring y slice
                
 let apellido=nom.map(valor=>valor[1].substring(0,3));
 let apellido2=nom.map(valor=>valor[2].substring(0,3));

    
 
 let letrasDni=dni.map(valor=>valor.slice(5,8))

let array=[]
for (let index = 0; index < nom.length; index++) {
  array[index]=nombre[index]+''+apellido[index]+''+apellido2[index]+ ''+letrasDni[index]
    
}
return array
}
console.log(nombre(entrada))

const validarDNI=(dni)=>{

    let arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
    'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

 let letra=dni.substring(8,9);
 let numero=dni.substring(0,8);
 letra=letra.toUpperCase();

return (arrayLetras[numero % 23]=== letra)?true:false
 
}

const dni=(entrada)=>{
  let array=[]
  let dni=entrada.map(entrada=>entrada.DNI);
  array=dni.filter(x=>(validarDNI(x)))
return array;
}
console.log(dni(entrada));

/* c. Crea una función que reciba como parámetro el array original y devuelva un array
con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
(2p) */

const ordena=(entrada)=>  {return entrada.sort((a,b)=> b.edad -a.edad)}
  


console.log(ordena(entrada))


