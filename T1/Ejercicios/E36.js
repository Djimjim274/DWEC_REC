/*36. Programa una función que dado un array devuelva el número más alto y el más bajo de dicho
array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]  */

  let array = [1,2,3,4,-30,6,7];
const maxMinArray=(array)=>{

  let numMax=array.reduce((x,y)=> x>y ? x:y );
  let numMin=array.reduce((x,y)=> x<y ? x:y );
  
return {max:numMax,min:numMin};

}
console.log(maxMinArray(array))