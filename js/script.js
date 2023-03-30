const colores = document.querySelectorAll(".colores .color");
const imagenes = ["img/Red Shoe.png","img/Yellow Shoe.png","img/morado.png"];
const imagen = document.getElementById("Producto");

colores[0].classList.add("activo");

colores.forEach((cadacolor,i )=> {
    colores[i].addEventListener('click',()=>{
        colores.forEach((element,i)=>{
            colores[i].classList.remove("activo");
        })
        colores[i].classList.add("activo");
        imagen.setAttribute('src',imagenes[i]);
        imagen.classList.add("animado");
    });
});