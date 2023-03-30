/* 26. Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
“a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares. */

const compruebaCadena=(cadena)=>{

    let expReg= /^[md].*[ao]$/;

  /*   ^ => indica el inicio de la cadena.
    [md] =>indica que la primera letra puede ser "m" o "d".
    .* =>indica que cualquier carácter puede aparecer cero o más veces después de la primera letra.
    [ao] =>indica que la última letra puede ser "a" o "o".
    $ =>indica el final de la cadena. */

return (expReg.test(cadena))?  true: false;


}
console.log(compruebaCadena('modo'));