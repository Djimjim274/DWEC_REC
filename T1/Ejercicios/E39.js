/*  39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]*/

let array=["x",10,"x",2,10,10,true,true]
const eliminaElemento=(array)=>{

    let arrray=array.filter((x,index)=>array.indexOf(x)===index)

/*     let arrayduplicado=[...array].filter((x)=>x==x?x:false); */
    return arrray;
}
console.log(eliminaElemento(array))

//Utilizar set mirarlo en casa
