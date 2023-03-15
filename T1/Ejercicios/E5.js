

/* Mostrar todos los números que hay entre dos números introducidos por el usuario. */

/* let num1=parseInt(Math.random()*10);
let num2=parseInt(Math.random()*10); */

let num1 = parseInt(prompt('Introduce un número'));
let num2 = parseInt(prompt('Introduce el segundo número'));

console.log(num1+","+num2);


for(let i=num1+1;i< num2;i++){
    console.log(i);
}

 

    