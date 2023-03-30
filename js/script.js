const colores = document.querySelectorAll(".colores .color");
const imagenes = ["img/Red Shoe.png","img/Yellow Shoe.png","img/morado.png"];
const imagen = document.getElementById("Producto");

colores[0].classList.add("activo");
document.querySelector(".section .Product").classList.add("animado");

colores.forEach((cadacolor,i )=> {
    colores[i].addEventListener('click',()=>{
        document.querySelector(".section .Product").classList.remove('animado');
        colores.forEach((element,i)=>{
            colores[i].classList.remove("activo");
        })
        colores[i].classList.add("activo");
        imagen.setAttribute('src',imagenes[i]);
        // document.querySelector(".section .Product").classList.remove("animado");
        document.querySelector(".section .Product").classList.add('animado');
    });
});

setInterval(function() {
    document.querySelector(".section .Product").classList.remove('animado');
  }, 4000);