/* 42. Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguientes datos: id de la película
en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma
automatizada e imprime la ficha técnica de cada película.
* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime,
Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music,
Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class pelicula{

constructor(id,titulo,director,ano,pais,genero,calificacion){
    this.id = this.validaID(id)
    this.titulo = this.validaTitulo(titulo)
    this.director = this.validaDirector(director) 
    this.ano =this.validaAno(ano)
    this.pais = this.validaPais(pais);
    this.genero = this.validaGenero(genero);
    this.calificacion = this.validaGenero(calificacion); 

}

 validaID=(id)=>{
    let expReg= /^[A-Za-z]{2}[0-9]{7}$/;
   return (expReg.test(id))?id :false;
}

validaTitulo=(titulo)=>{
    let expReg=/^.{1,100}$/;
     return(expReg.test(titulo))?titulo:false;
}

validaDirector=(director)=>{
    let expReg=/^.{1,50}$/
    return(expReg.test(director))?director:false;
}

validaAno=(ano)=>{
    let expReg=/^[0-9]{4}$/
  return (expReg.test(ano))?ano:false
   
}


validaPais=(pais,array=[])=>{
/*    return typeof(pais)==typeof(Array) ? pais : pais.join;
 */ 
array.push(pais)
return array

}



validaGenero=(genero)=>{
  let generos =pelicula.generos();
  return generos.includes(genero) ? genero:false;
}

static generos(){
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
}

/* - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma
automatizada e imprime la ficha técnica de cada película. */

validaCalificacion=(calificacion)=>{
let expReg= /^[0-9](\.[0-9])?$|^10$/
return (expReg.test(calificacion))?calificacion:false;
}

fichaTecnica=()=>{
    return{
        id:this.id,
        titulo:this.titulo,
        director:this.director,
        ano:this.ano,
        pais:this.pais,
        genero:this.genero,
        calificacion:this.calificacion
        
    }
}


}

let pelicula1 = new pelicula ("AB1234567","Camino","Alejandro Amenabar", 2015, ("España","Colombia"),"Comedy",8.4)
let pelicula2 = new pelicula ("EB1234567","Spiderman","Roberto Amenabar", 2020, ("Francia","Colombia"),"Triller",6.4)

console.log(pelicula2.fichaTecnica());