
/***********************Primer ejercicio************************* */
const botonMostrar=document.querySelector("#mostrarBtn");
const contenedor=document.querySelector(".contenedor");
botonMostrar.addEventListener("click",()=>{

    let usuarios=document.querySelector("#usuarios").value;

    if (usuarios=="mujeres") {
        usuarios="female";
    }else if (usuarios=="hombres") {
        usuarios="male";
    }
    fetch(`http://localhost:3000/results?gender=${usuarios}`)
  .then((response) => response.json())
  .then((usuario) => {
    sacarUsuarios(usuario);
}).catch((error)=>console.log("Error",error));

})
function sacarUsuarios(usuario) {

    for (let index = 0; index < 10; index++) {
       
        const img=document.createElement("img");
        img.setAttribute("src",usuario[index].picture.thumbnail);
        contenedor.insertAdjacentElement("beforeend",img);    
    }
}

/***********************Segundo ejercicio************************* */

const botonCrear=document.querySelector("#crearBtn");

botonCrear.addEventListener("click",()=>{

    const nombre=document.querySelector("#fName").value;
    const apellido=document.querySelector("#lName").value;
    const email=document.querySelector("#email").value;
    const avatar=document.querySelector("#avatar").value;

    fetch("http://localhost:3000/data", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        email:email,
        first_name:nombre,
        last_name:apellido,
        avatar:avatar
      }) 
      })
      .then((response) =>{
        console.log(response.status);
        return response.json();
      } )
      .catch((error)=>console.log("Error",error));
})

/***********************Tercer ejercicio************************* */

const formulario=document.querySelector(".miFormulario");

formulario.addEventListener("submit",()=>{

    const emailFormulario=document.querySelector("input[name=nombre]").value;
    
    fetch(`https://formsubmit.co/ajax/${emailFormulario}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }) 
      .catch((error) =>  console.error('Error:', error));

})
