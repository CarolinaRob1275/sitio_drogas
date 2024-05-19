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



//formulario

    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tabacoForm');

    // Envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Contador de respuestas "Sí"
        let contadorSi = 0;

        
        for (let i = 1; i <= 10; i++) {
            const respuesta = document.querySelector(`input[name="pregunta${i}"]:checked`);

            // Si se selecciona "Sí", incrementamos el contador
            if (respuesta && respuesta.value === 'si') {
                contadorSi++;
            }
        }

        // rango del contador
        let mensaje = '';
        if (contadorSi >= 0 && contadorSi <= 3) {
            mensaje = '¡FELICIDADES! \n Te consideras una persona sana y con un riesgo muy pequeño de estar afectado(a) por el consumo de tabaco.';
        } else if (contadorSi >= 4 && contadorSi <= 7) {
            mensaje = '¡CUIDADO! \n Estás propenso(a) a volverte adicto(a) al tabaco. \n Cuídate y considera dejar de fumar.';
        } else {
            mensaje = '¡PELIGRO! \n Eres una persona adicta al tabaco. \n Considera buscar apoyo para dejar de fumar y evitar daños futuros.';
        }

        alert(mensaje);
    });
});




