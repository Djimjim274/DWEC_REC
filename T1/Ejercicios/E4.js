
/* Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
hasta introducir un número negativo y entonces mostrar el resultado. */
/* let num1=parseInt(Math.random()*10);
let num2=parseInt(Math.random()*10); */


/* do {
    
let num1=prompt("introduzca un número");
let num2=prompt("introduzca otro número");

let sum=num1+num2;
let res=num1-num2;
let pro=num1*num2;
let med=(num1+num2)/2;

} while (num1<0);



console.log(`número 1:${num1} número 2:${num2}`)

console.log(`La suma de los dos números es ${sum}`);
console.log(`La resta de los dos números es ${res}`);
console.log(`La pro de los dos números es ${pro}`);
console.log(`La media de los dos números es ${med}`);
 */



// Pedir al usuario que introduzca un número
let numero = parseInt(prompt("Introduce un número positivo:"));

// Inicializar variables para la suma, el producto y el número de elementos
let suma = 0;
let producto = 1;
let res=0
let numElementos = 0;

// Utilizar un bucle while para sumar, multiplicar y contar los números introducidos
while (numero >= 0) {
  // Actualizar la suma, el producto y el número de elementos
  suma += numero;
  producto *= numero;
  res -= numero
  numElementos++;

  // Pedir al usuario que introduzca otro número
  numero = parseInt(prompt("Introduce otro número positivo (o un número negativo para finalizar):"));
}

// Mostrar la suma, el producto y la media de los números introducidos
if (numElementos > 0) {
  let media = suma / numElementos;
  console.log("La suma es: " + suma);
  console.log("La resta es: " + res);
  console.log("El producto es: " + producto);
  console.log("La media es: " + media);
} else {
  console.log("No se introdujeron números positivos.");
}