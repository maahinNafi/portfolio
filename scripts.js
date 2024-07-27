document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.auto-type', {
        strings: ['Programmer', 'Python Developer', 'FullStack Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });
    
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > lastScrollY) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        if (window.scrollY > 0) {
            header.classList.add('scrolling');
        } else {
            header.classList.remove('scrolling');
        }

        lastScrollY = window.scrollY;
    });

    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetSelector = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    document.querySelector('.logo').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('menu-icon').addEventListener('click', function() {
        var navbar = document.getElementById('navbar');
        navbar.classList.toggle('active');
    });
});
