/*  38. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma
descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

let array = [2,3,7,1,2,3];

const arraysOrdenados=(array)=>{

  //  ponemos esto[...array].sort para no modificar el array original
    let arrayAsc=[...array].sort((x,y)=>x-y);
//si queremos modificar el array original ponemos arrayAsc=array.sort((x,y)=>x-y);
    let arrayDes=[...array].sort((x,y)=>y-x);

    return {Asc:arrayAsc,Des:arrayDes}
}
console.log(arraysOrdenados(array));

