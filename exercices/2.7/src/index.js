import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import imgMath from './img/geometry-1023846_1280.jpg';

import imgHisto from './img/books-2606859_1280.jpg';

import imgSport from './img/tennis-5782695_1280.jpg';

import imgInfo from './img/programmer-1653351_1280.png';

import imgAutre from './img/question-mark-49958_1280.jpg';

import imgSciences from './img/biology-220005_1280.jpg';

import imgCinema from './img/popcorn-5663525_1280.jpg';

import imgJeuxVideo from './img/fortnite-4129124_1280.jpg';

import imgEconomie from './img/entrepreneur-1340649_1280.jpg';

import imgCultureG from './img/cyber-brain-7633488_1280.jpg';

import imgGeo from './img/knowledge-1052013_1280.jpg';

import imgLangue from './img/flags-1722052_1280.png';

const cards = document.querySelectorAll('.category');
const btnAbout = document.querySelector('#btnAbout');
const btnStyle = document.querySelectorAll('.btn-style');
const sectionMain = document.querySelector('#SectionMain');
const links = document.querySelectorAll('.linkStyle');

const cardMath = document.querySelector('#custom-imgMath');
renderImage(imgMath, cardMath);

const cardHistory = document.querySelector('#custom-imgHistory');
renderImage(imgHisto, cardHistory);

const cardSport = document.querySelector('#custom-imgSport');
renderImage(imgSport, cardSport);

const cartInfo = document.querySelector('#custom-imgInfo');
renderImage(imgInfo, cartInfo);

const cartAutre = document.querySelector('#custom-imgAutre');
renderImage(imgAutre, cartAutre);

const cartScience = document.querySelector('#custom-imgSciences');
renderImage(imgSciences, cartScience);

const cartCinema = document.querySelector('#custom-imgCinema');
renderImage(imgCinema, cartCinema);

const cartJeuxVideo = document.querySelector('#custom-imgJeuxVideo');
renderImage(imgJeuxVideo, cartJeuxVideo);

const cartEconomie = document.querySelector('#custom-imgEconomie');
renderImage(imgEconomie, cartEconomie);

const cartCultureG = document.querySelector('#custom-imgCultureG');
renderImage(imgCultureG, cartCultureG);

const cartGeo = document.querySelector('#custom-imgGeo');
renderImage(imgGeo, cartGeo);

const cartLangue = document.querySelector('#custom-imgLangue');
renderImage(imgLangue, cartLangue);

cards.forEach((card) => {
  const cardElement = card.querySelector('.card');

  card.addEventListener('mouseover', () => {
    cardElement.classList.add('border-primary');
  });

  card.addEventListener('mouseout', () => {
    cardElement.classList.remove('border-primary');
  });
});

btnAbout.addEventListener('click', () => {
  sectionMain.style.display = 'none';
  btnAbout.style.display = 'none';
});

let originalBackgroundColor; // Variable pour stocker la couleur de fond d'origine

btnStyle.forEach((button) => {
  button.addEventListener('mouseover', () => {
    originalBackgroundColor = button.style.backgroundColor; // Enregistrez la couleur de fond d'origine
    // eslint-disable-next-line no-param-reassign
    button.style.color = '#fff';
    // eslint-disable-next-line no-param-reassign
    button.style.backgroundColor = 'var(--bs-teal)';
  });

  button.addEventListener('mouseout', () => {
    // eslint-disable-next-line no-param-reassign
    button.style.color = 'black';
    // eslint-disable-next-line no-param-reassign
    button.style.backgroundColor = originalBackgroundColor; // Rétablissez la couleur de fond d'origine
  });
});

let originalBorderBottomLink;

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    originalBorderBottomLink = link.style.borderBottom;
    // eslint-disable-next-line no-param-reassign
    link.style.borderBottom = '1px solid black';
  });

  link.addEventListener('mouseout', () => {
    // eslint-disable-next-line no-param-reassign
    link.style.borderBottom = originalBorderBottomLink;
  });
});

cards.forEach((card) => {
  const cardElement = card.querySelector('.card');
  card.addEventListener('mouseover', () => {
    cardElement.classList.add('border-primary');
  });
  card.addEventListener('mouseout', () => {
    cardElement.classList.remove('border-primary');
  });
});

function renderImage(imageURL, card) {
  // eslint-disable-next-line no-param-reassign
  card.innerHTML = `<img src="${imageURL}" class="card-img-top img-fluid h-100 custom-img" alt="..." ›</img>`;
}
