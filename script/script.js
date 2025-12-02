fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    //pintamos menu 
    document.getElementById('menu-container').innerHTML = data;
  });


//para las imagenes, hace clic y se abre la imagen en pantalla completa 
const images = document.querySelectorAll('.card-img-top');
const modalImage = document.getElementById('modalImage');
const modalDescripcion = document.getElementById('modalDescripcion');
const descripcion_texto = document.getElementById('descripcion_texto');
const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

images.forEach(img => {
  img.addEventListener('click', () => {
    // imagen
    modalImage.src = img.src;

    // busca el contenedor descripcion dentro de la misma card
    const card = img.closest('.card');
    const contenedor = card.querySelector('.contenedor_descripcion');

    if (contenedor) {
      // toma el texto de <p>
      const textoDescripcion = contenedor.querySelector('p').textContent;

      // si hay texto
      if (textoDescripcion.trim() !== '') {
        descripcion_texto.textContent = textoDescripcion;
        modalDescripcion.style.display = 'block';
      } else {
        modalDescripcion.style.display = 'none';
      }
    } else {
      // si no hay contenedor descripcion
      modalDescripcion.style.display = 'none';
    }

    // mostrar modal
    imageModal.show();
  });
});


//anima los card de las ilustraciones 
document.addEventListener("DOMContentLoaded", function () {
    const contenedores = document.querySelectorAll("[class^='contenedor_']");

    contenedores.forEach(contenedor => {
        const cards = contenedor.querySelectorAll(".card");
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove("d-none"); // hace visible la tarjeta
                card.classList.add("animar");    // activa la animación
            }, index * 300); // retraso secuencial (300ms)
        });
    });
});
