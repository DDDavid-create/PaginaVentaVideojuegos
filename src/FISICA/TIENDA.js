/*
*MAGIAAA
*/

const header = document.querySelector("#encabezado");
const contenedor = document.querySelector("#contenedor")
const bodey = document.querySelector("#body")

window.addEventListener("scroll", function(){
    if (contenedor.getBoundingClientRect().top < 10){
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll")
    }
})
