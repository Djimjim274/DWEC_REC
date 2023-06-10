const botonEnviar=document.querySelector("#guardarBtn");
let arrayPuntuacion=[];

botonEnviar.addEventListener("click",()=>{

    let nombre=document.querySelector("#nombre").value;
    let puntos=document.querySelector("#puntos").value;


    crearPuntuacion(nombre, puntos)
    compruebaLC()
    location.reload();
});

window.addEventListener("load",()=>anadeFila(compruebaLC()));
//funcion para comproibar el lc
const compruebaLC=()=>{
    let numeroPuntuacion=localStorage.getItem("puntuacion");

    if(numeroPuntuacion===null){
        arrayPuntuacion=[];
    }else{
        arrayPuntuacion=JSON.parse(numeroPuntuacion);
    }
    return arrayPuntuacion;
}

//funcion para guardar el lc

const guardarLC=(array)=>{
    localStorage.setItem("puntuacion",JSON.stringify(array));
}

//funcion para crear la puntuacion
const crearPuntuacion=(nombre,puntos)=>{
    let puntuacion={nombre:nombre,puntos:puntos}//creo objeto literal
    arrayPuntuacion.push(puntuacion); //meto en el array los datos
    guardarLC(arrayPuntuacion);//guardo los datos 
}

const anadeFila=(array)=>{

    let tabla=document.querySelector("table");
    array.sort((a,b)=>{b.puntos-a.puntos});
    for (let i = 0; i < 3; i++) {
       
    let tdNombre=document.createElement("td");
    let tdPuntos=document.createElement("td");
    let tr=document.createElement('tr')
     tdNombre.textContent=array[i].nombre;
     tdPuntos.textContent=array[i].puntos;

        tr.appendChild(tdNombre);
        tr.appendChild(tdPuntos);

    let btnEliminar=document.createElement("button"); 
    let tdEliminar=document.createElement("td");
    btnEliminar.textContent='X';
    tr.appendChild(tdEliminar);
    tdEliminar.appendChild(btnEliminar);
 btnEliminar.addEventListener("click",()=>{eliminaUsuario(array[i].nombre)})
   
        tabla.appendChild(tr);   
    }
   


}

const eliminaUsuario=(nombre)=>{
    let arrayEliminados=compruebaLC().filter((element)=>element.nombre!=nombre);
    
    guardarLC(arrayEliminados);
    location.reload();
}