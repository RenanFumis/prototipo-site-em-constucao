const images = [
  'image/blurred-imagem-drive-wingpg22.jpg',
  'image/blurred-image-simtronic-pg62.png',
  'image/blurred-image-wing-pg31.png'
];

let currentImageIndex = 0;

function changeBackground() {
  const backgroundImages = document.querySelectorAll('.background img');
  backgroundImages.forEach(img => img.classList.remove('active'));

  currentImageIndex = (currentImageIndex + 1) % images.length;
  backgroundImages[currentImageIndex].classList.add('active');
}

// Inicializa o carrossel
function initCarousel() {
  const backgroundDiv = document.querySelector('.background');

  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    if (index === 0) img.classList.add('active');  // Inicia com a primeira imagem visível
    backgroundDiv.appendChild(img);
  });

  setInterval(changeBackground, 6000);  // Troca a imagem a cada 6 segundos
}

document.addEventListener('DOMContentLoaded', initCarousel);
document.addEventListener('touchstart', function(event) {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
  }
});