window.onscroll = function() {myFunction()};
var header = document.getElementById("myheader");
var sticky = header.offsetTop;

function myFunction(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}

//testimonial slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlides(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("my-slides");
    if (n > slides.length){slideIndex = 1}
    if (n <1 ){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//news slider






