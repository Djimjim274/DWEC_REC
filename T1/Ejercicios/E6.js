/* 6. Mostrar todos los números impares que hay entre dos números introducidos por el usuario. */

let num1 = parseInt(prompt('Introduce un número'));
let num2 = parseInt(prompt('Introduce el segundo número'));

console.log(num1+","+num2);


for(let i=num1+1;i< num2;i++){
    if(i%2==1){
    console.log(i);
    }
  
}
