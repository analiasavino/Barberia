const boton = document.querySelector(".nav-responsive-button");

document.addEventListener('DOMContentLoaded', function () {
    boton.onclick=()=>{
    document.querySelector(".nav-responsive-ul").removeAttribute('hidden');
}
})

