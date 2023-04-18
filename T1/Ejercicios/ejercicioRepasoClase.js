//Elimina los elementos repetidos del array

const v=[3,5,'hola',3]
const s =new Set(v);
console.log(s);

//coje los repetidos y mételos en un array
let array=[1,2,3,3,2,'hola',4]
let array2=[1,2,3,3,2,'hola',6]
const elimina=(array,array2)=>{ //array.filter((x,index)=>array.indexOf(x)===index)
let v=[]
array.forEach(x=>{ //hago un foreach de array1
if(array2.includes(x)){// si en el array2 está el elemento lo meto en el array vacio
       v.push(x);   
}
})
return  new Set(v)
}
/* array2.filter(x=>array.includes(x)) */

    

console.log(elimina(array,array2))

