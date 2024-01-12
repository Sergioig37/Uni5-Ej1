
 


 const libro1 = {
        nombre: "El avellano",
        color: "rojo",
        autor: "Pepito",
        numeroPaginas: 200,
        editorial: "Barco De Vapor",
        forrado: false,
        urlCover: "/cover.avif",
         //otra manera de hacer una función
        comprar: function(){
            //para añadir el valor de una variable de forma más limpia
            console.log(`Libro de aventuras del autor ${libro1.autor}  comprado`)
        }
    }
    
    const libro2 = {
        nombre: "El cartón",
        color: "marrón",
        autor: "Pepo",
        numeroPaginas: 100,
        editorial: "Barco De Vapor",
        forrado: false,
        urlCover: "/cover.avif",
        comprar: function(){
            console.log(`Libro de aventuras del autor ${libro2.autor}  comprado`)
        }
    }
    
    
    const libro3 = {
        nombre: "El curión",
        color: "verde",
        autor: "Papitas",
        numeroPaginas: 400,
        editorial: "Vapor",
        forrado: false,
        urlCover: "/cover.avif",
        comprar: function(){
            console.log(`Libro de aventuras del autor${libro3.autor}  comprado`)
        }
    }
    
    const libro4 = {
        nombre: "El Sinsentido",
        color: "morado",
        autor: "Leire Puga De la Uz",
        numeroPaginas: 1000,
        editorial: "Casa",
        forrado: true,
        urlCover: "/cover.avif",
        comprar: function(){
            console.log(`Libro de aventuras de la autora ${libro4.autor}  comprado`)
        }
    }

const libreria = [libro1, libro2, libro3];

// console.log(libro1.comprar());
// console.log(libro2.comprar());
// console.log(libro3.comprar());
// console.log(libro4.comprar());

//otra manera de hacer un array

//




window.addEventListener("DOMContentLoaded",() => {
    crearBiblio();
})
function crearBiblio(){
    let contenedorLibros = document.querySelector(".libros");

   
    libreria.map(function(libro){

        let texto = document.createTextNode(libro.nombre);

        let div = document.createElement("div");

        let p = document.createElement("p");

        let img = document.createElement("img");

        img.src = libro.urlCover;

        p.appendChild(texto);

        div.setAttribute("class", "libro");

        div.appendChild(p);

        div.appendChild(img);

        contenedorLibros.appendChild(div);
       
    })
}
// console.log(checkPages(libro2));

// console.log(chechLibro(libreria, libro4));


// console.log(libro4, ...libreria);



// const libreria150 = libreria.filter(checkPages);

// console.log(libreria150)

// const libroEncontrado = checkAutor("Pepo", libreria);

// console.log(libroEncontrado);

// forraLibro(libreria);
// console.log(libreria);

// const checkPages = ({numeroPaginas}) => numeroPaginas>150 ;   

// const chechLibro = (biblioteca, libro) => biblioteca.includes(libro);


// const checkAutor = (autor, libreria) => libreria.find(libro => libro.autor === autor);

// const forraLibro = (libreria) => libreria.map (function(libro){
//     libro.forrado = true;
// })
// const prestarLibro = (libreria, titulo) => libreria.splice(libreria.findIndex(element => element.nombre === titulo), 1);

// const  devolverLibro = (libreria, libro) => libreria.push(libro);

// console.log(prestarLibro(libreria, "El curión"));
// console.log(libreria);
// devolverLibro(libreria, libro4);
// console.log(libreria);