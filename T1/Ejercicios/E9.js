/* 9. Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado. */


//pido el primer número

/* console.log(num1); */
let num1 = parseInt(prompt('Introduce el primer número'));

//compruebo si es un número
do {
    if (isNaN(num1)) {
        num1 = parseInt(prompt('Introduce de nuevo el primer número'));
        /*     console.log(num1); */
    }

} while (isNaN(num1));

//pido el segundo número
let num2 = parseInt(prompt('Introduce el segundo número'));
/* console.log(num2); */

//compruebo si es un número
do {
    if (isNaN(num2)) {
        num2 = parseInt(prompt('Introduce de nuevo el segundo número'));
        /*   console.log(num2); */
    }

} while (isNaN(num2));


let op = parseInt(prompt('Que desea hacer \n 1.Sumar \n 2.Restar \n 3.Producto'));

switch (op) {
    case 1:
        let sum = num1 + num2;
        console.log(`La suma de ${num1} y ${num2} es ${sum}`);
        break;
    case 2:
        let res = num1 - num2;
        console.log(`La resta de ${num1} y ${num2} es ${res}`);
        break;
    case 3:
        let pro = num1 * num2;
        console.log(`El producto de ${num1} y ${num2} es ${pro}`);
        break;


    default:

}











/* 




let num1 = parseInt(prompt('Introduce el primer número'));
console.log(num1);
do {
    if(!num1.isNaN){
    num1 = parseInt(prompt('Introduce de nuevo el primer número')); 
    console.log(num1);
}

} while (num1.isNaN);


let num2 = parseInt(prompt('Introduce el segundo número'));

do {
    if(!num2.isNaN){
    num2 = parseInt(prompt('Introduce de nuevo el segundo número')); 
    console.log(num2);
}

} while (num2.isNaN);


let op = prompt('Que desea hacer \n 1.Sumar \n 2.Restar');


//operaciones
switch (op) {
    case 1:
    let sum = num1+num2;
        console.log(sum);
    case 2:
     let res=num1-num2;
        console.log(res);
    default:
       
} */
