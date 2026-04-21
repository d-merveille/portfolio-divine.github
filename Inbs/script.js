let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Code du bouton hamburger
let btn = document.getElementById('burger');
btn.addEventListener('click', function(){
    this.classList.toggle('active');
    
    if(this.classList.contains('active')){
        let menu = document.querySelector('.nav-list');
        menu.style.left="0";

   }
    else{
       let menu = document.querySelector('.nav-list');
       menu.style.left="-100%";
   }
})