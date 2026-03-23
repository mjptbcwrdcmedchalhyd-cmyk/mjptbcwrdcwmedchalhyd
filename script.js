document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".carousel-item");
    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    setInterval(() => {
        current++;
        if (current >= slides.length) {
            current = 0;
        }
        showSlide(current);
    }, 3000); // changes every 3 seconds

});