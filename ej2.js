const libro1 = {
    nombre: "El avellano",
    color: "rojo",
    autor: "Pepito",
    numeroPaginas: 200,
    editorial: "Barco De Vapor",
    forrado: true,
    urlCover: "https://www.google.com",
    comprar: function(){
        console.log(`Libro de aventuras del autor ${libro1.autor}  comprado`)
    }
}

const libro2 = {
    nombre: "El cartón",
    color: "marrón",
    autor: "Pepo",
    numeroPaginas: 100,
    editorial: "Barco De Vapor",
    forrado: true,
    urlCover: "https://www.google.com",
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
    urlCover: "https://www.google.com",
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
    urlCover: "https://www.google.com",
    comprar: function(){
        console.log(`Libro de aventuras de la autora ${libro4.autor}  comprado`)
    }
}

console.log(libro1.comprar());
console.log(libro2.comprar());
console.log(libro3.comprar());
console.log(libro4.comprar());


const libreria = [libro1, libro2, libro3];

const checkPages = ({numeroPaginas}) => numeroPaginas>150 ;   

const chechLibro = (biblioteca, libro) => biblioteca.includes(libro);


console.log(checkPages(libro1));

console.log(chechLibro(libreria, libro4));