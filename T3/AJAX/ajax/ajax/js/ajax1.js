
/***********************Primer ejercicio************************* */
const botonMostrar=document.querySelector("#mostrarBtn");
const contenedor=document.querySelector(".contenedor");

botonMostrar.addEventListener("click",()=>{

  let usuario=document.querySelector("#usuarios").value;

  if(usuario==='mujeres'){
    usuario='female'
  }else if(usuario==='hombres'){
    usuario='male'
  }
          //promesa con hombre o mujer dependiendo lo que escoja en el selector
  fetch(`http://localhost:3000/results?gender=${usuario}`) 
  .then(response=>response.json())
  .then(usuario=>{
      sacarUsuarios(usuario)
  }).catch((error)=>console.error("Error", error));

})

const sacarUsuarios =(usuario)=>{

  for (let i = 0; i <10; i++) {
  let img =document.createElement("img");
    img.setAttribute("src",usuario[i].picture.thumbnail); //añado la url
  contenedor.insertAdjacentElement('beforeend',img);
  }
}



const botonCrear=document.querySelector("#crearBtn");

botonCrear.addEventListener('click',()=>{
let nombre=document.querySelector('#fName').value;
let apellido=document.querySelector('#lName').value;
let email=document.querySelector('#email').value;
let avatar=document.querySelector('#avatar').value;

fetch("http://localhost:3000/data",{
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body:JSON.stringify({
    email:email,
    first_name:nombre,
    last_name:apellido,
    avatar:avatar

  })
})
.then((response)=>{
  console.log(response.status);
  return response.json();
})
.catch((error)=>console.error("Error", error));


})