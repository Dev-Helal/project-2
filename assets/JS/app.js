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


// disable inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

document.onkeydown = function(e) {
    if(event.keyCode == 123){
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
    }

    if(e.ctrlKey && e.keyCode  == "U".charCodeAt(0)){
        return false;
    }
};




