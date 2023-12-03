const miBoton = document.getElementById("miBoton");
const miBoton2 = document.getElementById("miBoton2");
const miBoton3 = document.getElementById("miBoton3");
const miBoton4 = document.getElementById("miBoton4");
const miBoton5 = document.getElementById("miBoton5");
const miBoton6 = document.getElementById("miBoton6");
const currentImage = document.getElementById("current-image");

// Array con las rutas de las imágenes
const imagePaths = [
  "../../src/assets/pantallas-carousel/captarmedia-tipos1.png",
  "../../src/assets/pantallas-carousel/captarmedia-tipos2.png",
  "../../src/assets/pantallas-carousel/captarmedia-tipos3.png",
  "../../src/assets/pantallas-carousel/captarmedia-tipos4.png",
  "../../src/assets/pantallas-carousel/captarmedia-tipos5.png",
  "../../src/assets/pantallas-carousel/captarmedia-tipos6.png",
];

let currentIndex = 0; // Índice de la imagen actual

// Función para cambiar la imagen
function changeImage() {
  currentImage.style.opacity = "0"; // Oculta la imagen actual
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % imagePaths.length; // Avanza al siguiente índice
    currentImage.src = imagePaths[currentIndex]; // Cambia la imagen
    currentImage.style.opacity = "1"; // Muestra la nueva imagen
  }, 350); // Tiempo de transición en milisegundos
}

function changeImageButton(index) {
  currentImage.style.opacity = "0"; // Oculta la imagen actual
  setTimeout(() => {
    currentIndex = index;
    console.log(currentIndex);
    currentImage.src = imagePaths[currentIndex]; // Cambia la imagen
    currentImage.style.opacity = "1"; // Muestra la nueva imagen
  }, 350); // Tiempo de transición en milisegundos
}

// Agregar un event listener a los botones
miBoton.addEventListener("click", () => changeImageButton(0));
miBoton2.addEventListener("click", () => changeImageButton(1));
miBoton3.addEventListener("click", () => changeImageButton(2));
miBoton4.addEventListener("click", () => changeImageButton(3));
miBoton5.addEventListener("click", () => changeImageButton(4));
miBoton6.addEventListener("click", () => changeImageButton(5));

// Cambiar la imagen automáticamente cada 5 segundos
setInterval(changeImage, 5000);
