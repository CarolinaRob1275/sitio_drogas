// Agregar clase de activo al enlace de navegación actual
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('nav ul li a').forEach(item => item.classList.remove('activo'));
        this.classList.add('activo');
    });
});

// Cambiar el color de fondo del header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#222'; // Cambia el color de fondo del header al hacer scroll
    } else {
        header.style.backgroundColor = '#333';
    }
});

// Animación para hacer que las imágenes se desvanezcan al hacer clic
document.querySelectorAll('.imagen_izquierda, .imagen_final').forEach(image => {
    image.addEventListener('click', () => {
        image.style.opacity = 0.5; // Cambia la opacidad de la imagen al 50% al hacer clic
    });
});

// Transición suave al desplazarse por la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});