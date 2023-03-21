/* 15. Indica si un NIF es válido o no. */
/* 
let dni = prompt('Introduzca el dni');

const verificaDNI=(dni)=>{

let expR=/^[0-9]{8}[a-z]$/; //pregunta por qué se pone $

if(expR.test(dni)){
    console.log('El dni es correcto')
}else{
    console.log('El dni es incorrecto')
}
}

verificaDNI(dni);
*/

let dni = prompt('Introduzca el dni');
const verificaDNI=(dni)=>{

    let letras,letra,numero;

    let expR=/^[0-9]{8}[a-zA-Z]$/; //pregunta por qué se pone $

if(expR.test(dni)===true){
  numero= dni.substr(0,dni.length-1);//extraemos el número del dni menos 1 que es la letra //20102274
  letra= dni.substr(dni.length-1,1) //extraemos la letra empezando por el último dígito 20102274(k)
  numero=numero%23//hacemos la operaciíon para almacenar el resultado
  letras='TRWAGMYFPDXBNJZSQVHLCKET';
  letras=letras.substring(numero,numero+1);// preguntar diferencia entre el substriing y substrg
/* substr->inicio y longitud
substring-> inicio y final */

  //comprobamos el dni
  if(letras!=letra.toUpperCase()){
     console.log('El dni es incorrecto ')
  }else{
     console.log('El dni es correcto')
}

}
}

verificaDNI(dni);