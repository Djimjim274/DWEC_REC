/* 1. Usando la API de https://reqres.in/ e implementado control de errores, realiza:
a. Obtén todos los usuarios (first_name e imagen)
b. Obtén el email, first_name, last_name y avatar (la imagen, no la URL) para un id de
usuario seleccionado por el usuario.
c. Crea un usuario con los datos proporcionados por un usuario y muestra la respuesta
(código y objeto {})
d. Actualiza un usuario con los datos proporcionados por un usuario y muestra la
respuesta (código y objeto {})
e. Elimina un usuario con los datos proporcionados por un usuario y muestra la respuesta
(código y objeto {})
NOTA: La entrada y salida se hace por HTML (el CSS no importa) */

//función que comprueba si se ha accedido a la api
let select=document.querySelector('select');
let option=document.querySelector('option');
const btn = document.querySelector('button') 
const comprueba = response=> { //funcion que comprueba si se puede acceder al JSON
    if (!response.ok) {
      throw new Error(`No se ha podido acceder`);
    }
    return response.json();//retorna el JSON
  }


//a. Obtén todos los usuarios (first_name e imagen)
 fetch('https://reqres.in/api/users')
 .then(comprueba)
  .then(data => {
    const users = data.data;
    users.forEach(user => {
     console.log(`Usuario: ${user.first_name},  Imagen: ${user.avatar} `);
    });


  })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  }) 

/*   b. Obtén el email, first_name, last_name y avatar (la imagen, no la URL) para un id de
  usuario seleccionado por el usuario.   */

const usuario=id=>{
    const url = `https://reqres.in/api/users/${id}`;
    fetch(url)
    .then (comprueba)
    .then(data=> {
     
      console.log(data.data)
      
        })
    .catch (e=>console.log (e))

    
  }
usuario(2);




/* 
  select.addEventListener("change",idSeleccionado);

  function idSeleccionado(){
    let seleccionado = this.options[this.selectedIndex];
   return seleccionado.value; 
  } */









  

/* const usuario2 = async (id)=>{
  const url = `https://reqres.in/api/users/${id}`;
  const res = await fetch(url);
  const json = await res.json();
  const data = await json.data;
  return data;
}

usuario2(1).then(data=>console.log(data));


 */
  


 

/* 
let select=document.querySelector('select');
let option=document.querySelector('option');

function comprueba(response) {
    if (!response.ok) {
      throw new Error(`No se ha podido acceder`);
    }
    return response.json();//retorna el JSON
  }
  

fetch('https://reqres.in/api/users')

  .then(comprueba)
  .then(data => {
    const users = data.data;//por qué se pòne esto
    users.forEach(user => {
      console.log(`Usuario: ${user.first_name},  Imagen: ${user.avatar} `);
    });
  })
   .then(data=>{
 
    select.addEventListener('click',()=>{ 
        const users=data.data;
        users.forEach(user => {
         if(user.id===select){
            console.log(`Usuario: ${user.first_name},  Imagen: ${user.avatar} `);
        }
    })
        
        
    })
   
   })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  }) */
 
/*   console.log(`Usuario: ${user.first_name}, LastName: ${user.last_name}, Imagen: ${user.avatar} , Email: ${user.email}`);
 */
/* let user=1
let users=0
let email=0
let responseOK = false
let responseOK_ = false
let urlReqres='https://reqres.in/api/users/';
fetch(urlReqres)
.then(response => {
    responseOK = response.ok

    return response.json()
})

.then(data => {
    users = data['total']
    if(responseOK){
        while(user<=users){
            let urlUser = urlReqres + user;
            llamar(urlUser)
            user++
        }
    }
    return data
})
.catch((error) => console.log("Error" + error));  */