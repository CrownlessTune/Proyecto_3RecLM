document.addEventListener('DOMContentLoaded', function() {
    // Obtener las galerías
    const heroesGallery = document.getElementById('heroes-gallery');
    const villainsGallery = document.getElementById('villains-gallery');
    const droidsGallery = document.getElementById('droids-gallery');

    // Botones de añadir
    const addHeroButton = document.getElementById('add-hero-btn');
    const addVillainButton = document.getElementById('add-villain-btn');
    const addDroidButton = document.getElementById('add-droid-btn');

    // Botones de eliminar
    const removeHeroButton = document.getElementById('remove-hero-btn');
    const removeVillainButton = document.getElementById('remove-villain-btn');
    const removeDroidButton = document.getElementById('remove-droid-btn');

    // Función para añadir una imagen a la galería
    function addImageToGallery(gallery, imageUrl, altText) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = altText;
        img.classList.add('character-image');
        gallery.appendChild(img);
    }

    // Función para eliminar la última imagen de la galería
    function removeLastImageFromGallery(gallery) {
        const lastImage = gallery.lastElementChild;
        if (lastImage) {
            gallery.removeChild(lastImage);
        }
    }

    // Función para añadir un personaje (héroe, villano, droide)
    function addCharacter(gallery) {
        const name = prompt('Ingresa el nombre del personaje:');
        if (!name) {
            alert('Debes ingresar un nombre para el personaje.');
            return;
        }

        const imageUrl = prompt('Ingresa la URL de la imagen del personaje:');
        if (!imageUrl) {
            alert('Debes ingresar una URL para la imagen.');
            return;
        }

        addImageToGallery(gallery, imageUrl, name);
    }

    // Event listener para añadir un héroe
    addHeroButton.addEventListener('click', function() {
        addCharacter(heroesGallery);
    });

    // Event listener para añadir un villano
    addVillainButton.addEventListener('click', function() {
        addCharacter(villainsGallery);
    });

    // Event listener para añadir un droid
    addDroidButton.addEventListener('click', function() {
        addCharacter(droidsGallery);
    });

    // Event listener para eliminar un héroe
    removeHeroButton.addEventListener('click', function() {
        removeLastImageFromGallery(heroesGallery);
    });

    // Event listener para eliminar un villano
    removeVillainButton.addEventListener('click', function() {
        removeLastImageFromGallery(villainsGallery);
    });

    // Event listener para eliminar un droid
    removeDroidButton.addEventListener('click', function() {
        removeLastImageFromGallery(droidsGallery);
    });

    // Cambio de tema (modo oscuro/claro)
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {

    // Obtener el botón por su ID
    const sithButton = document.getElementById('sith-button');

    // Agregar un evento al hacer clic en el botón
    sithButton.addEventListener('click', function() {
        // Agregar animación de desvanecimiento al botón original
        sithButton.classList.add('fade-out');

        // Esperar que la animación termine antes de eliminar el botón y crear el nuevo
        setTimeout(function() {
            sithButton.remove();

            // Crear el nuevo botón "Quiero volverme al lado oscuro"
            const newButton = document.createElement('button');
            newButton.id = 'dark-side-button';
            newButton.classList.add('links__button', 'fade-in'); // Añadir la clase links__button y fade-in
            newButton.textContent = 'Quiero volverme al lado oscuro';

            // Agregar el nuevo botón al DOM (debajo de los enlaces)
            const linksSection = document.querySelector('.links');
            linksSection.appendChild(newButton);

            // Agregar un evento al nuevo botón
            newButton.addEventListener('click', function() {
                // Acción al hacer clic en el nuevo botón
                alert("¡Has vuelto al lado oscuro!");
            });
        }, 500); // Espera el tiempo de la animación de desaparición (500ms)
    });

    // Funcionalidad para cambiar el tema (Modo Claro/Oscuro)
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', function() {
        // Si el checkbox está activado, cambiar el tema a oscuro
        if (themeToggle.checked) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contacto__form');
    const nameInput = document.querySelector('[name="nombre"]');
    const emailInput = document.querySelector('[name="email"]');
    const subjectInput = document.querySelector('[name="asunto"]');
    const messageInput = document.querySelector('[name="mensaje"]');
    const confirmationCheckbox = document.querySelector('[name="confirmacion"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío para validar

        let isValid = true;

        // Validar cada campo
        if (nameInput.value.trim() === '') {
            alert('El nombre es obligatorio');
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
            alert('Por favor ingresa un correo electrónico válido');
            isValid = false;
        }

        if (subjectInput.value.trim() === '') {
            alert('El asunto es obligatorio');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            alert('El mensaje es obligatorio');
            isValid = false;
        }

        if (!confirmationCheckbox.checked) {
            alert('Debes aceptar el código de la Orden Jedi o la Regla de Dos Sith');
            isValid = false;
        }

        // Si todo es válido, mostrar mensaje de éxito
        if (isValid) {
            alert('¡Mensaje enviado exitosamente!');
            form.reset(); // Restablecer el formulario
        }
    });
});
