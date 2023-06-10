
//funcion para mostrar imagenes de hombres u mujeres
const mostrarImagenes = (jsonObj, sexo, meter) => {
    let j = 0,
        continuar = false;

    if (sexo == 'male') {
        for (let i = 0; i < 10; i++) {
            do {
                if (jsonObj[j].gender == 'male') {
                    let img = document.createElement('img');
                    img.src = jsonObj[j].picture.thumbnail;
                    meter.insertAdjacentElement("afterend", img);
                    continuar = false;
                } else continuar = true;
                j++;
            } while (continuar == true)
        }
    }
    else {
        for (let i = 0; i < 10; i++) {
            do {
                if (jsonObj[j].gender == 'female') {
                    let img = document.createElement('img');
                    img.src = jsonObj[j].picture.thumbnail;
                    meter.insertAdjacentElement("afterend", img);
                    continuar = false;
                } else continuar = true;
                j++;
            } while (continuar == true)
        }
    }
}

const convertirSexo = (sexo) => {
    switch (sexo) {
        case 'hombres': return 'male';
        case 'mujeres': return 'female';
    }
}


fetch("http://localhost:3333/results")
    .then(res => res.json())
    .then(jsonObj => {
        //console.log(jsonObj);
        let mostrarBtn = document.getElementById('mostrarBtn');
        //recogemos el boton
        mostrarBtn.addEventListener('click', () => {
            let sexo = document.getElementById('usuarios').value;
            sexo = convertirSexo(sexo);
            mostrarImagenes(jsonObj, sexo, mostrarBtn);
        });
    })
    .catch(error => console.error(error))


const addUser = (id) => {

    let nombre = document.getElementById('fName').value;
    let apellido = document.getElementById('fName').value;
    let email = document.getElementById('fName').value;
    let avatar = document.getElementById('fName').value;

    let newUser = {
        'id': id,
        'email': email,
        'first_name': nombre,
        'last_name': apellido,
        'avatar': avatar
    }

    //enviamos el usuario
    fetch("http://localhost:3331/data", {
        method: 'POST',
        body: JSON.stringify({ newUser })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error: " + error));

}

fetch("http://localhost:3331/data")
    .then(res => res.json())
    .then(jsonObj => {
        let crearBtn = document.getElementById('crearBtn');
        crearBtn.addEventListener('click', ()=>{
            let id = (Object.keys(jsonObj).length) +1;
            addUser(id);
        })
    })
    .catch(error => console.log("ERROR: " + error))


