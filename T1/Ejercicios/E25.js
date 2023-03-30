/* 25. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const compruebaCapicua = (num) => {

    if (!isNaN(num)) {
        return false;

    } else {

        num=num.toString("");
        // Ahora separo numero por numero

        let separaNum = num.split("");
        console.log(separaNum);

        //Ahora invierto el orden
        let invierteNum = separaNum.reverse();

        let unirNum = invierteNum.join("");

        if (unirNum === num) {
            return true
        }
        return false;
        /*    (unirNum===num)?true: false; */
    }

}
console.log(compruebaCapicua(2002));