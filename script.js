// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade In Animation on Scroll
window.addEventListener('scroll', function () {
    let elements = document.querySelectorAll('.fadeIn');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        if (position < screenPosition) {
            element.classList.add('active');
        }
    });
});
