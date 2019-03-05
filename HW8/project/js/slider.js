let slideIndex = 3;
showSlides(slideIndex);
function plusSlide(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let slides = document.querySelectorAll(".slide-img");
    let mains = document.querySelectorAll(".main");
    let main_items = document.querySelectorAll(".main-item");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < mains.length; i++) {
        mains[i].className = mains[i].className.replace("active", "");
    }
    for (i = 0; i < main_items.length; i++) {
        main_items[i].className = main_items[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    mains[slideIndex-1].className += " active";
    main_items[slideIndex-1].className += " active";
}