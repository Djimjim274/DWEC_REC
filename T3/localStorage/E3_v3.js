const botonEnviar=document.querySelector("#guardarBtn");
let arrayPuntuacion=[];


botonEnviar.addEventListener("click",()=>{
    let nombre=document.querySelector('#nombre').value;
    let puntos=document.querySelector('#puntos').value;

    crearPuntuacion(nombre, puntos);
    compruebaLC();
    location.reload();

});

window.addEventListener("load",()=>anadeFila(compruebaLC()))

const compruebaLC=()=>{
    let numeroPuntuacion=localStorage.getItem("puntuacion");
    if(numeroPuntuacion===null){
        arrayPuntuacion=[];
    }else{
        arrayPuntuacion=JSON.parse(numeroPuntuacion);
    }
    return arrayPuntuacion;


}

const guardarLC=(array)=>{
  localStorage.setItem("puntuacion",JSON.stringify(array));
}


const crearPuntuacion=(nombre,puntos)=>{
    let puntuacion={nombre:nombre, puntos:puntos}
    arrayPuntuacion.push(puntuacion);
    guardarLC(arrayPuntuacion);
}


const anadeFila=(array)=>{

    let tabla=document.querySelector('table');
    array.sort((a,b)=>{b.puntos-a.puntos});
    for (let i = 0; i <3; i++) {
    let tdNombre=document.createElement('td');
    let tdPuntos=document.createElement('td');
    let tr=document.createElement('tr');
     tr.appendChild(tdNombre)   
     tr.appendChild(tdPuntos)   
    tdNombre.textContent=array[i].nombre;
    tdPuntos.textContent=array[i].puntos;
    let tdEliminar=document.createElement('td');
    tr.appendChild(tdEliminar);
    let btnEliminar=document.createElement('button');
    btnEliminar.textContent='X';
    tdEliminar.appendChild(btnEliminar);
    btnEliminar.addEventListener('click',()=>{eliminaUsuario(array[i].nombre)})

    tabla.appendChild(tr)
    }
    


}

const eliminaUsuario=(nombre)=>{
    let arrayEliminados=compruebaLC().filter((element)=>element.nombre!=nombre);
    guardarLC(arrayEliminados);
    location.reload();
}