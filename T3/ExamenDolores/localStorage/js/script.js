const botonEnviar=document.querySelector("#guardarBtn");
let arrayPuntuacion=[];
botonEnviar.addEventListener("click",()=>{

    const nombre=document.querySelector("#nombre").value;
    const puntuacion=document.querySelector("#puntos").value;

    comprobarLocalStorage();
    crearPuntuacion(nombre,puntuacion);
    location.reload();
})
window.addEventListener("load",()=>sacarPuntuaciones(comprobarLocalStorage()));

function comprobarLocalStorage() {
    
    let numeroPuntuacion=localStorage.getItem("dolores");

    if (numeroPuntuacion===null) {
        arrayPuntuacion=[];
    }else{
        arrayPuntuacion=JSON.parse(numeroPuntuacion);
    }
    return arrayPuntuacion;
}

function guardarLocalStorage(array) {
    localStorage.setItem("dolores",JSON.stringify(array));
}

function crearPuntuacion(nombre,puntuacion) {
    
    let puntuacionUsuario={
        nombreUsuario:nombre,
        puntuacionU:puntuacion
    }

    arrayPuntuacion.push(puntuacionUsuario);
    guardarLocalStorage(arrayPuntuacion);
}

function sacarPuntuaciones(array) {

   const tabla=document.querySelector("table");
   array.sort((a,b)=>b.puntuacionU-a.puntuacionU);

   for (let index = 0; index < 3; index++) {
      
       const tdNombre=document.createElement("td");
       const tdPuntuacion=document.createElement("td");
       const tr=document.createElement("tr");
   
       tdNombre.textContent=array[index].nombreUsuario;
       tdPuntuacion.textContent=array[index].puntuacionU;
      tr.appendChild(tdNombre);
      tr.appendChild(tdPuntuacion);
      const botonEliminar=document.createElement("button");
      botonEliminar.setAttribute("class","eliminar");
      botonEliminar.textContent="X";
      tr.appendChild(botonEliminar);
     
      tabla.appendChild(tr);
   
      botonEliminar.addEventListener("click",()=>eliminarUsuario(array[index].nombreUsuario));      
   } 
}

function eliminarUsuario(nombre) {
    
    let arrayEliminados=comprobarLocalStorage().filter((elemento)=>elemento.nombreUsuario!=nombre);
    guardarLocalStorage(arrayEliminados);
    location.reload();
}
