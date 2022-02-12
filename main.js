var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 1; i < slides.length; i++) {
        if (i = 1) {
            slides[i].style.display = "show";
            slides[i + 1].style.display = "none";
        }
        if (i = 2) {
            slides[0].style.display = "none";
            slides[1].style.display = "none";
            slides[i].style.display = "show";

        }


    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    });
})();


(function(){
    
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');

    }

})();

function hizoClick(){
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("mail").value;
    var msg = document.getElementById("msg").value;
    if(Comprobar(nombre,correo,msg)==true){ 
        console.log(nombre,correo, msg)
        alert("Enviado");
    }

}

function Comprobar(name,mail,msg) {
    if (name=="") {
      alert("Debes rellenar el nombre"); 
      return false;}
    if (name.length<3) {
      alert("El nombre debe tener al menos 3 caracteres"); 
      return false;
    }
    if (mail=="") {
      alert("Debes poner un email"); 
      return false;
    }
    if (msg=="") {
        alert("Debes rellenar el mensaje"); 
        return false;} 
            return true;
  }

  function lee_json() {
    $.getJSON("datos.json", function(datos) {
        alert(datos["Serie"]);
        console.add(datos["Serie"]);
    });
}