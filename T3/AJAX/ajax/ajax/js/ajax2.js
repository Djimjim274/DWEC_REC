
/***********************Primer ejercicio************************* */
const botonMostrar=document.querySelector("#mostrarBtn");
const contenedor=document.querySelector(".contenedor");

botonMostrar.addEventListener("click",()=>{

  let usuarios=document.querySelector("#usuarios").value;
  if(usuarios==='hombres'){
    usuarios='male';
  }else if(usuarios==='mujeres'){
    usuarios='female';
  }
  fetch(`http://localhost:3000/results?gender=${usuarios}`)
  .then(response=>response.json())
  .then(usuario=>{
    sacarUsuarios(usuario)
  })
  .catch(error=>{console.log("Error",error)})
});


const  sacarUsuarios=(usuario)=>{
  for (let i = 0; i < 10; i++) {
  let img=document.createElement("img");
  img.setAttribute('src',usuario[i].picture.thumbnail); 
  contenedor.insertAdjacentElement('beforeend',img)
  }
}

