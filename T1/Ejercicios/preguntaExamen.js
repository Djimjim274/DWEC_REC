
const vector=[3,5,8,7,10,11];


const esprimo=(num)=>{
    let index;
if(num==0 || num==1)return false;

for ( index = 2; index < num; index++) {   
  if(num%index===0)return false;
}
    return true;
}

const posicionPrimos=(vector)=>vector.filter((x,num)=>esprimo(num))
console.log(posicionPrimos(vector));






