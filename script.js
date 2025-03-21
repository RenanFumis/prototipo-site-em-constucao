const images = [
  'image/blurred-imagem-drive-croma-collection-png65.png',
  'image/blurred-image-simtronic-pg62.png',
  'image/blurred-imgem-drive-advanced-catalogue.png',
  'image/blurred-A_05_2_2_F.png',
  'image/blurred-A_09_Det_1_F.png',
  'image/blurred-Ambiente_11_1_b.png',
  'image/blurred-Ambiente_1_1_.png',
  'image/blurred-Ambiente_1_2_.png',
  'image/blurred-collection-pgn20.png',
  'image/blurred-leo-light-pgn4.png',
];

let currentImageIndex = 0;

function changeBackground() {
  const backgroundImages = document.querySelectorAll('.background img');
  backgroundImages.forEach(img => img.classList.remove('active'));

  currentImageIndex = (currentImageIndex + 1) % images.length;
  backgroundImages[currentImageIndex].classList.add('active');
}

//Inicializa o carrossel
function initCarousel() {
  const backgroundDiv = document.querySelector('.background');

  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('non-interactive');  //Adiciona a classe para desabilitar a interação
    if (index === 0) img.classList.add('active');  //Inicia com a primeira imagem visível
    backgroundDiv.appendChild(img);
  });

  setInterval(changeBackground, 8000);  //Troca a imagem a cada 8 segundos
}

document.addEventListener('DOMContentLoaded', initCarousel);
document.addEventListener('touchstart', function(event) {
  if (event.target.tagName === 'png') {
    event.preventDefault();
  }
});
