const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const playBtn = document.querySelector('.play');
const carouselInfo = document.querySelector('.carousel-info p');

let slideIndex = 0;
let slideInterval;

// Kuvatekstit kullekin kuvan indeksille
const captions = [
  "Kuva 1: Karvinen",
  "Kuva 2: Monni",
  "Kuva 3: Megatron"
];

// Alusta kuvateksti ensimmäiselle kuvalle
carouselInfo.textContent = captions[slideIndex];

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.children.length;
  updateSlide();
});

playBtn.addEventListener('click', () => {
  if (playBtn.textContent === 'Play') {
    playBtn.textContent = 'Pause';
    slideInterval = setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.children.length;
      updateSlide();
    }, 2000); // Muuta tämä arvo tarvittaessa, se määrittää automaattisen vaihdon aikavälin
  } else {
    playBtn.textContent = 'Play';
    clearInterval(slideInterval);
  }
});

function updateSlide() {
  for (let i = 0; i < slides.children.length; i++) {
    slides.children[i].style.display = 'none';
  }
  slides.children[slideIndex].style.display = 'block';
  
  // Päivitä kuvateksti uuden kuvan mukaan
  carouselInfo.textContent = captions[slideIndex];
}
