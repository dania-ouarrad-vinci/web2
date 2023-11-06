import titanicImage from '../../img/titanic.png';

import tenetImage from '../../img/tenet.png';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="movie">
  <h3>Titanic</h3>
  <img class="image" src="${titanicImage}" alt="Image du film 1 : titanic">
  <p>Le naufrage du Titanic a été une importante source d'inspiration pour le cinéma et la télévision. L'histoire de ce paquebot transatlantique ayant heurté un iceberg lors de sa traversée inaugurale et ayant fait naufrage dans l'Atlantique Nord a en effet entraîné la réalisation de plus de dix films, non seulement aux États-Unis et au Royaume-Uni, mais également en Allemagne et en Italie.</p>

 </div>
 <div class="movie">
  <h3>Tenet</h3>
  <img class="image" src="${tenetImage}" alt="Image du film 2 : tenet">
  <p>Tenet est un thriller de science-fiction américano-britannique écrit et réalisé par Christopher Nolan, sorti en 2020.</p>
 </div>
`;
};

export default HomePage;
