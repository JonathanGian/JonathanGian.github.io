window.addEventListener('scroll', function() {
    const header = document.querySelector("nav");
    
    header.classList.toggle('scrolled', window.scrollY > 50);
});

