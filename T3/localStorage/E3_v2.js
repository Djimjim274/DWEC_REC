let btnEnviar=document.querySelector('#guardarBtn');
let arrayPuntuacion=[];

btnEnviar.addEventListener('click',()=>{

let nombre=document.querySelector('#nombre').value;
let puntos=document.querySelector('#puntos').value;

    compruebaLC();
    crearPuntuacion(nombre, puntos)
    location.reload();
});

 window.addEventListener('load',()=>{anadeFila(compruebaLC())}); // 
let compruebaLC=()=>{
    let numeroPuntuacion= localStorage.getItem('Puntuacion');

    if(numeroPuntuacion===null){
        arrayPuntuacion=[];
    }else{
        arrayPuntuacion=JSON.parse(numeroPuntuacion)
    }
    return arrayPuntuacion;
}

let guardarLC=(array)=>{
    arrayPuntuacion=localStorage.setItem('Puntuacion',JSON.stringify(array));
}

let crearPuntuacion=(nombre,puntos)=>{
    let puntuacion={nombre:nombre,puntos:puntos};
    arrayPuntuacion.push(puntuacion);
    guardarLC(arrayPuntuacion);
}


let anadeFila=(array)=>{

    let tabla=document.querySelector('table');
    array.sort((a,b)=>b.puntos-a.puntos);
for (let i = 0; i< 3; i++) {
    let tdNombre=document.createElement('td');
    let tdPuntos=document.createElement('td');
    let tr=document.createElement('tr');
    tr.appendChild(tdNombre)
    tr.appendChild(tdPuntos)
    tdNombre.textContent=array[i].nombre
    tdPuntos.textContent=array[i].puntos

    let tdEliminar=document.createElement('td');
    let btnEliminar=document.createElement('button');
    tr.appendChild(tdEliminar);
    btnEliminar.textContent='X'
    tdEliminar.appendChild(btnEliminar)
    
    btnEliminar.addEventListener('click',()=>{eliminaUsuario(array[i].nombre)})
    tabla.appendChild(tr)
}

}

const eliminaUsuario=(nombre)=>{

    let arrayEliminados=compruebaLC().filter((element)=>element.nombre!=nombre);
    guardarLC(arrayEliminados);
    location.reload();
}