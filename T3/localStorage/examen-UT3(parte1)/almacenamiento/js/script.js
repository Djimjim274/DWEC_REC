let boton = document.getElementById("guardarBtn");
let listaPersonas =[];

const recuperarDatos = () =>{
    document.addEventListener("DOMContentLoaded", ()=>{
        let nombres = JSON.parse(localStorage.getItem("Ismael")) || [];
        listaPersonas=nombres;
        console.log(listaPersonas)
        pintarHTML();
    })
}

const añadirPuntuacion = () =>{
    let nombre = document.getElementById("nombre").value;
    let puntos = document.getElementById("puntos").value;
    
    let lista={ nombre, puntos };
    
    listaPersonas = [...listaPersonas, lista];
    
    localStorage.setItem("Ismael", JSON.stringify(listaPersonas));

    pintarHTML();
}

const pintarHTML = () =>{
    let listado = [];
    let thead = document.querySelector('thead');
    limpiar(thead);
    let tr = document.createElement('tr');
    let td1 = document.createElement("th");
    td1.textContent = 'PERSONAS';
    let td2 = document.createElement("th");
    td2.textContent= 'PUNTOS'
    tr.appendChild(td1); tr.appendChild(td2);
    thead.insertAdjacentElement("afterbegin",tr);
    ordenar();
    listaPersonas.forEach(element => {
        listado.push(element.nombre);
    }
    );

    for ( let i = 0 ; i < 3 ; i++ ){
        let tr = document.createElement('tr');
        let td1 = document.createElement("td");
        td1.textContent = listaPersonas[i].nombre;
        let td2 = document.createElement("td");
        td2.textContent= (listaPersonas[i].puntos);
        tr.appendChild(td1);
        tr.appendChild(td2);
        thead.insertAdjacentElement("beforeend",tr);
    }
}

const limpiar = (thead) =>{
    thead.innerHTML='';
}

const ordenar = () =>{
    listaPersonas.sort(function(a,b){ return b.puntos - a.puntos })
}

recuperarDatos(listaPersonas);
boton.addEventListener('click', ()=>{
    añadirPuntuacion();
});
