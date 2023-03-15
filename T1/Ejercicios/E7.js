/* 7. Mostrar todos los números divisores de un número introducido por el usuario. */

let num1 = parseInt(prompt('Introduce un número'));


console.log(num1);


for(let i=0;i< num1;i++){
    if(num1%i===0){
    console.log(i);
    }
  
}

