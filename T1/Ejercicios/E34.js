/* 34. Programa una función que valide que un texto sea un email válido, p.e. miFuncion
(“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
guión alto y bajo+@+caracteres, números+.+al menos dos caracteres. */


const validaCorreo=(gmail)=>{

    let expReg=/[A-Za-z0-9+].@/
    return(expReg.test(gmail))?true:false;
}
console.log(validaCorreo("daniel@gmail.com"));