var slideIndex = 0;
showSlides();
//for loop for slides
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var wrappers = document.getElementsByClassName('post-wrapper');
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 1;
        for (let index = 0; index < wrappers.length; index++) {
            wrappers[index].style.left = "0px";

        }
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 2] != null) {
        slides[slideIndex - 2].style.display = "block";
        wrappers[slideIndex - 2].style.left = "-400px";
    }
    slides[slideIndex].style.display = "block";
    wrappers[slideIndex].style.left = "400px";
    if (slides[slideIndex] != null) {
        slides[slideIndex - 1].style.display = "block";
        wrappers[slideIndex - 1].style.left = "0px";

    }



    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}