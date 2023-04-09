/*33. Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
¡ o ¿  */

const validaTexto=(nombre)=>{

    let expReg=/^[a-zA-Z\s]+$/
    return (expReg.test(nombre))?true:false;
}
console.log(validaTexto("dani"));