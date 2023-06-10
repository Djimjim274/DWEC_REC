const botonEnviar=document.querySelector("#guardarBtn");
let arrayPuntuacion=[];

botonEnviar.addEventListener("click",()=>{
let nombre=document.querySelector("#nombre").value;
let puntuacion=document.querySelector("#puntos").value;

    creaPuntuacion(nombre,puntuacion);
    compruebaLC()
    location.reload(); //important
});

window.addEventListener("load",()=>anadeFila(compruebaLC()));//important


//funcion para comprobar si hay algo en el localstorage 
const compruebaLC=()=>{
    //recojemos el localstorage
    let numeroPuntuacion=localStorage.getItem("puntuacion");
    //si el lc es null lo mete en el array
    if(numeroPuntuacion===null){
        arrayPuntuacion=[];
    }else { //si no, lo trae
        arrayPuntuacion=JSON.parse(numeroPuntuacion);
    }
    return arrayPuntuacion;
}

//función para guardar los datos en localStorage
const guardarLC=(array)=>{
    localStorage.setItem("puntuacion",JSON.stringify(array));
}

//función para introducir los datos y guardarlos

const creaPuntuacion=(nombre,puntos)=>{
    let puntuacionUsuario={nombre:nombre,puntos:puntos}; //creo un objketo literal
    arrayPuntuacion.push(puntuacionUsuario);  //introduzco los datos en el array de objetos
    guardarLC(arrayPuntuacion);//guardo los datos en el localStorage
}

const anadeFila=(array)=>{
    let tabla=document.querySelector('table');
    array.sort((a,b)=>{b.puntos-a.puntos});

for (let i = 0; i < 3; i++) {

 let tdNombre=document.createElement('td');
    let tdPuntos=document.createElement('td');
    let tr=document.createElement('tr');

    tdNombre.textContent=array[i].nombre
    tdPuntos.textContent=array[i].puntos
    tr.appendChild(tdNombre);
    tr.appendChild(tdPuntos);

    let btnEliminar=document.createElement('button');
    btnEliminar.textContent='X';
    let tdElimina=document.createElement('td');
    tr.appendChild(tdElimina);
    tdElimina.appendChild(btnEliminar)
    btnEliminar.addEventListener('click',()=>{eliminaUsuario(array[i].nombre)});
    tabla.appendChild(tr);
    
}
   
}

const eliminaUsuario=(nombre)=>{
    //creamos la variable en la que va a comprobar el localstorage si es el mismo nombre
    //el del botón que el que quiero eliminar
    let arrayEliminados=compruebaLC().filter((element)=>element.nombre!=nombre);
    //guardo de nuevo el localstorage
    guardarLC(arrayEliminados);
    location.reload();
}