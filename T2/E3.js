/*3. Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”,
con su correspondiente funcionalidad. */



const generarCheckbox = () =>{

    const body = document.querySelector("body");
    const botSeleccionar=document.querySelector("#selectAll"); //botón seleccionar
    const botDeseleccionar=document.querySelector("#deselectAll");//botón deseleccionar
    const div=document.querySelector("#check"); //check

  
   for (let i = 0; i <=100; i++) {
    //creamos los botones
    let check = document.createElement('input');
    let label = document.createElement('label');
    label.innerHTML=parseInt(Math.random()*100); //añadimos a la etiqueta un número ramdom
    check.setAttribute("type", "checkbox"); //añadimos el atributo 
    //después del div, insertamos la etiqueta
    div.insertAdjacentElement("beforeend",label);
    div.insertAdjacentElement("beforeend",check);

   }

    botSeleccionar.addEventListener('click',(event)=>{
        for (const checkbox of div.children) {
            if(checkbox.type == "checkbox"){
                checkbox.checked = true;
            }
        }
    })
    botDeseleccionar.addEventListener('click',(event)=>{
        for (const checkbox of div.children) {
            if(checkbox.type == "checkbox"){
                checkbox.checked = false;
            }
        }
    })

}

generarCheckbox(); 
