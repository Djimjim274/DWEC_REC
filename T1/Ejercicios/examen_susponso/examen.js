
let entrada=[{nombre:"Ana Pérez Soler", frase: "A ti no, bonita", edad: 4},
    {nombre:"Álvaro García Castro", frase: "Lobo oso bobo", edad: 6},
    {nombre:"Paloma Ferrer Ordu", frase: "Ateo poco poeta", edad: 9},
    {nombre:"Juan Roca Sol", frase: "Ojos rojos", edad: 22},
    {nombre:"Isa Sierra Lor", frase: "Mate con tomate", edad: 9},
    {nombre:"Jose Lar Cerrillo", frase: "Loco de la colina", edad: 22}
    ]

/* a. Crea una función que reciba como parámetro el array original y devuelva un array
con los nombres (nombre y apellido) que tengan un carácter repetido (puede ser
que tenga más de uno, pero con uno ya cumple la condición), al menos, tres veces
(independientemente de si es mayúsculas o minúsculas o si tiene tilde o no). Debes
usar filter. [3p]. */

  function nombresConCaracterRepetido(array) {

    const tieneCaracterRepetido = (nombre) => {
      const nombreLimpio = nombre.nombre.toLowerCase().replace(/[\sáéíóú]/g, "");
      for (let i = 0; i < nombreLimpio.length; i++) {
        const char = nombreLimpio[i];
        if (nombreLimpio.split(char).length - 1 >= 3) {
          return true;
        }
      }
      return false;
    };
  
    const nombresFiltrados = array.filter(tieneCaracterRepetido).map(nombre => nombre.nombre);
    return nombresFiltrados;
  }
  

  
  const nombresFiltrados = nombresConCaracterRepetido(entrada);
  console.log(nombresFiltrados);

/*   b. Crea una función que reciba como parámetro el array original y devuelva un array
con las edades que sean números vecinos (no poner repetidos). Debes usar filter. */