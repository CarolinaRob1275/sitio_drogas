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








function adiccion() {
    // Los datos son ficticios...
    const centros = [
        {
            nombre: "Centro de Atención para Adicciones 'Guerrero'",
            telefono: "55 76 09 87 34"
        },
        {
            nombre: "Clínica de Rehabilitación 'Colima'",
            telefono: "55 87 65 43 21 45"
        },
        {
            nombre: "Instituto de Atención Integral para Adicciones 'Veracruz'",
            telefono: "55 24 68 13 57 78"
        },
        {
            nombre: "Alcóholicos Anónimos 'México'",
            telefono: "55 23 45 89 65 67"
        },
        {
            nombre: "Centro de rehabilitación 'San Luis Potosi'",
            telefono: "59 24 68 69 40 98"
        },
        {
            nombre: "Instituto Integral de Adicciones 'Quintana Roo'",
            telefono: "87 47 20 88 50 00"
        },
        {
            nombre: "Alcóholicos Anónimos'Oaxaca'",
            telefono: "83 60 99 11 74 65"
        },
        {
            nombre: "Centro de rehabilitación 'Durango'",
            telefono: "87 40 66 83 77 34"
        },
        {
            nombre: "Centro de tratamiento de adicciones 'Sonora'",
            telefono: "32 76 50 76 34 76"
        },
        {
            nombre: "Alcóholicos Anónimos 'Sinaloa'",
            telefono: "89 67 39 00 99 34"
        },
        {
            nombre: "Centro de Atención 'Aguascalientes'",
            telefono: "76 76 09 87 34 88"
        },
        {
            nombre: "Clínica de Rehabilitación 'Baja California'",
            telefono: "59 87 65 43 21 65"
        },
        {
            nombre: "Instituto de Atención Integral para Adicciones 'Baja California Sur'",
            telefono: "15 24 68 13 57 39"
        },
        {
            nombre: "Alcóholicos Anónimos 'Campeche'",
            telefono: "22 23 45 89 65 09"
        },
        {
            nombre: "Centro de rehabilitación 'Ciudad de México'",
            telefono: "50 24 68 69 40 02"
        },
        {
            nombre: "Instituto Integral de Adicciones 'Coahuila'",
            telefono: "27 47 20 88 50 67"
        },
        {
            nombre: "Alcóholicos Anónimos'Guanajuato'",
            telefono: "83 60 99 11 74 85"
        },
        {
            nombre: "Centro de rehabilitación 'Hidalgo'",
            telefono: "80 98 66 83 77 34"
        },
        {
            nombre: "Centro de tratamiento de adicciones 'Jalisco'",
            telefono: "57 76 50 76 34 23"
        },
        {
            nombre: "Alcóholicos Anónimos 'Michoacán'",
            telefono: "13 67 39 00 99 86"
        },
        {
            nombre: "Alcóholicos Anónimos 'Morelos'",
            telefono: "16 45 07 23 22 34"
        },
        {
            nombre: "Clínica de Rehabilitación 'Nayarit'",
            telefono: "09 87 67 66 55 09"
        },
        {
            nombre: "Instituto de Atención Integral para Adicciones 'Nuevo León'",
            telefono: "98 76 66 09 00 35"
        },
        {
            nombre: "Alcóholicos Anónimos 'Puebla'",
            telefono: "98 78 11 44 34 20"
        },
        {
            nombre: "Centro de rehabilitación 'Querétaro'",
            telefono: "23 44 32 78 65 96"
        },
        {
            nombre: "Instituto Integral de Adicciones 'Tabasco'",
            telefono: "98 47 90 88 50 84"
        },
        {
            nombre: "Alcóholicos Anónimos'Tamaulipas'",
            telefono: "83 80 09 11 77 49"
        },
        {
            nombre: "Centro de rehabilitación 'Tlaxcala'",
            telefono: "56 00 86 83 70 05"
        },
        {
            nombre: "Centro de tratamiento de adicciones 'Yucatán'",
            telefono: "38 76 10 76 34 86"
        },
        {
            nombre: "Alcóholicos Anónimos 'Zacatecas'",
            telefono: "89 11 12 33 44 85"
        },
        {
            nombre: "Clínica de Rehabilitación 'Mexico'",
            telefono: "55 87 65 43 21 29"
        },
    ];

    
    const form = document.getElementById('formulario-centros');

    // Este es un evento de escucha para el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Estado ingresado por el usuario
        const estado = document.getElementById('direccion').value.trim().toLowerCase();

        // Se busca un centro de atención en el estado ingresado
        let centroEncontrado = null;
        for (const centro of centros) {
            if (centro.nombre.toLowerCase().includes(estado)) {
                centroEncontrado = centro;
                break;
            }
        }

        // Se muestra una alerta con el nombre y teléfono del centro encontrado
        if (centroEncontrado) {
            alert(`Centro de atención encontrado:\nNombre: ${centroEncontrado.nombre}\nTeléfono: ${centroEncontrado.telefono}`);
        } else {
            alert("Lo sentimos, no se encontró ningún centro de atención en el estado ingresado.");
        }
    });
}
