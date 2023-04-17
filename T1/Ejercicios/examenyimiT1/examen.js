
//Esto nos servira como entrada para todos los ejercicios del examen
let entrada =
    [{ nombre: 'Ana Pérez Soler', DNI: '21147465t', edad: 4 },
    { nombre: 'Álvaro García Castro', DNI: '24545535G', edad: 32 },
    { nombre: 'Paloma González Máxim', DNI: '45678912L', edad: 9 },
    { nombre: 'Alberto Alguacil Alcalde', DNI: '79753330W', edad: 17 }];


//-----------------------------------------------------------------------------------------------------------------------


/*A.Crea una función que reciba como parámetro el array original y devuelva un array
con los identificadores de los usuarios. Para ello debes coger la primera letra
(minúsculas y sin tildes) del nombre, las tres primeras letras del primer apellido
(minúsculas y sin tildes), las tres primeras del segundo apellido (minúsculas y sin
tildes) y los tres últimos dígitos del DNI. Usa la función map.(3p)
NOTA: Se entiende que los nombres y los apellidos no son compuestos y todos
tienen tres o más caracteres.*/

const crearNombre = entrada => {

    let nombre = entrada.map(entrada => entrada.nombre);
    let dni = entrada.map(entrada => entrada.DNI);

    //pasamos todo a minusculas
    nombre = nombre.map((valor) => valor.toLowerCase());

    //sustituimos las palabras con tildes a sin tildes
    nombre = nombre.map((valor) => valor.includes('á') ? valor.replaceAll('á', 'a') : valor);
    nombre = nombre.map((valor) => valor.includes('é') ? valor.replaceAll('é', 'e') : valor);
    nombre = nombre.map((valor) => valor.includes('í') ? valor.replaceAll('í', 'i') : valor);
    nombre = nombre.map((valor) => valor.includes('ó') ? valor.replaceAll('ó', 'o') : valor);
    nombre = nombre.map((valor) => valor.includes('ú') ? valor.replaceAll('ú', 'u') : valor);

    //dividimos el nombre y appelidos en un array
    nombre = nombre.map((valor) => valor.split(' '));

    //separamos las cadenas con las partes que nos pide el ejercicio
    let nom = nombre.map((valor) => valor[0].substring(0, 1));
    let apellido = nombre.map((valor) => valor[1].substring(0, 3));
    let apellido2 = nombre.map((valor) => valor[2].substring(0, 3));
    let numDni = dni.map((valor) => valor.substring(5, 8));

    //almacenamos los resultados en un array
    let salida = [];
    for (let i = 0; i < nombre.length; i++) {
        salida[i] = nom[i] + '' + apellido[i] + '' + apellido2[i] + '' + numDni[i];
    }

    return salida;
}

console.log('EJERCICIO A');
console.log(crearNombre(entrada));


//------------------------------------------------------------------------------------------------------------------


/* B. Crea una función que reciba como parámetro el array original y devuelva un array
con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
minúscula pero no tienen un separador entre número y letra. Usa la función filter y
map. (3p)*/

const validarDni = (dni) => {
    //array con el numero de posiciones que coincide con la letra correspondiente
    let arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    //dividimos el dni para más adelante hacer la comprobacion
    let numeroDni = dni.substring(0, 8);
    let letraDni = dni.substring(8, 9);
    letraDni = letraDni.toUpperCase();

    //comprueba si el dni es valido o no
    if (arrayLetras[numeroDni % 23] === letraDni) {
        return true;
    }
    else return false

}

const arregloDni = entrada => {
    let salida = [];
    //almacenamos en una variable los dni
    let dni = entrada.map(entrada => entrada.DNI);
    //filtramos en la variable salida los dni validos
    return salida = dni.filter((valor) => validarDni(valor));
}

console.log('EJERCICIO B');
console.log(arregloDni(entrada));


//------------------------------------------------------------------------------------------------------------------



/* C- Crea una función que reciba como parámetro el array original y devuelva un array
con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
(2p)*/

const ordenEdad = entrada => {
    //ordena de mayor a menor por edad 
    return entrada.sort(function (a, b) { return b.edad - a.edad });
}

console.log('EJERCICIO C');
console.log(ordenEdad(entrada));


//-------------------------------------------------------------------------------------------------------------------

/* D- Crea una función que reciba como parámetro el array original y devuelva un array 
con las edades que sean números casi primos (es un número que solo es divisible 
por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo). 
Usa la función filter y map. (2p)*/

/*let entrada =
[{nombre:'Ana Pérez Soler', DNI: '21147465t', edad: 4},
{nombre:'Álvaro García Castro', DNI: '24545535G', edad: 32},
{nombre:'Paloma González Máxim', DNI: '45678912L', edad: 9},
{nombre:'Alberto Alguacil Alcalde', DNI: '79753330W', edad: 17}];*/

const casiPrimo = entrada => {

    let contDiv = 0;
    //bucle que comprueba cuanto divisores hay comprendido entre 2 y el (numero pasado-1)
    for (let i = entrada - 1; i >= 2; i--){
        if ( entrada % i === 0 ){
            contDiv++;
        }
    }//si solo es divisible por 1 en el bucle anterior es casi primo
    if(contDiv===1){
        return true;
    }//en caso de que no, no se trata de un casi primo
    else return false;  

}
const compruebaCasiPrimo = entrada=>{
    let edad = entrada.map((valor)=>valor.edad);
    return edad.filter((valor)=>casiPrimo(valor));
    }

console.log('EJERCICIO D');
console.log(compruebaCasiPrimo(entrada));


