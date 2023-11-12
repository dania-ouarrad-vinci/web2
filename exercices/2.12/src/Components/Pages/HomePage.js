import scienceImage from '../../img/biology-220005_1280.jpg';

import histoImage from '../../img/books-2606859_1280.jpg';

import cultureGImage from '../../img/cyber-brain-7633488_1280.jpg';

import ecoImage from '../../img/entrepreneur-1340649_1280.jpg';

import langueImage from '../../img/flags-1722052_1280.png';

import JeuxVideoImage from '../../img/fortnite-4129124_1280.jpg';

import mathImage from '../../img/geometry-1023846_1280.jpg';

import cinemaImage from '../../img/popcorn-5663525_1280.jpg';

import informatiqueImage from '../../img/programmer-1653351_1280.png';

import geoImage from '../../img/knowledge-1052013_1280.jpg';

import sportImage from '../../img/tennis-5782695_1280.jpg';
import autreImage from '../../img/question-mark-49958_1280.jpg';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <section id="SectionMain">
    <section class="banner pt-5 d-flex justify-content-center align-items-center ">

      <div class="container my-5 py-5">
        <div class="row">
          <div class="col-md-6">
            <h1>
              Prêt à explorer l'univers des quiz ? 
              Découvrez une multitude de catégories et mettez vos connaissances à l'épreuve !
            </h1>
           
          </div>
          <div class="col-md-6"></div>
        </div>

        <div class="row">
        <div class="col-md-6">
     
        <a href="#categories" class="btn btn-style">Commencer</a>
     
        </div>
        <div class="col-md-6">
     
        <a href="#categories" class="btn btn-style">Créer</a>
     
        </div>
        </div>

      </div>
    </section>

    <div class="container-xxl  text-center mt-4" id="categories"> 
   
      

        <div class="row mt-3">

          <a href="#"  data-uri="/" class="col text-center text-decoration-none category ">
            <div class="col-4 col-lg-2 card highlight-card " style="width: 18rem;">
            <img class=custom-img  src="${mathImage}" alt="Image categorie Math">
              <div class="card-body">
                <p class="card-text">Mathématiques</p>
              </div>
            </div>
          </a>
         

          <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
            <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
            <img class=custom-img src="${histoImage}" alt="Image categorie histoire">
              <div class="card-body">
                <p class="card-text">Histoire</p>
              </div>
            </div>
          </a>

          <ahref="#"  data-uri="/" class="col text-center text-decoration-none category">
            <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
            <img class=custom-img src="${informatiqueImage}" alt="Image categorie informatique">
              <div class="card-body">
                <p class="card-text">Informatique</p>
              </div>
            </div>
          </a>

         </div>

        <div class="row mt-3">
        <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
            <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
            <img class=custom-img src="${langueImage}" alt="Image categorie langue">
              <div class="card-body">
                <p class="card-text">Langues</p>
              </div>
            </div>
          </a>
     
          <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
            <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
            <img class=custom-img src="${sportImage}" alt="Image categorie sport">
              <div class="card-body">
                <p class="card-text">Sport</p>
              </div>
            </div>
          </a>

          <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
            <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
            <img class=custom-img src="${scienceImage}" alt="Image categorie science">
              <div class="card-body">
                <p class="card-text">Sciences</p>
              </div>
            </div>
          </a>

        </div>

        <div class="row mt-3">
        <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
        <div class="col-4 col-lg-2 card highlight-card " style="width: 18rem;">
        <img class=custom-img src="${geoImage}" alt="Image categorie geographie">
          <div class="card-body">
            <p class="card-text">Géographie</p>
          </div>
        </div>
      </a>

      <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
        <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
        <img class=custom-img src="${cultureGImage}" alt="Image categorie culture générale">
          <div class="card-body">
            <p class="card-text">Culture Générale</p>
          </div>
        </div>
      </a>
     <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
            <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
            <img class=custom-img src="${JeuxVideoImage}" alt="Image categorie jeux video">
              <div class="card-body">
                <p class="card-text">Jeux Vidéos</p>
              </div>
            </div>
          </a>
        </div>

        <div class="row mt-3">
          <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
            <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
            <img class=custom-img src="${ecoImage}" alt="Image categorie economie">
              <div class="card-body">
                <p class="card-text">Economie</p>
              </div>
            </div>
          </a>

          <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
            <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
            <img class=custom-img src="${cinemaImage}" alt="Image categorie cinéma">
              <div class="card-body">
                <p class="card-text">Cinéma</p>
              </div>
            </div>
          </a>

          <a href="#"  data-uri="/" class="col text-center text-decoration-none category">
            <div class="col-4 col-lg-2 card highlight-card" style="width: 18rem;">
            <img class=custom-img src="${autreImage}" alt="Image categorie autre">
              <div class="card-body">
                <p class="card-text">Autres</p>
              </div>
            </div>
          </a>
      </div>
  
    </div>
    </section>`;

  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
     // eslint-disable-next-line no-param-reassign
     card.style.borderWidth = '2px'; 
      card.classList.add('border-primary');
    
   //  ou alors :card.style.borderBottom = '2px solid blue'; 
    });

    card.addEventListener('mouseout', () => {
      // eslint-disable-next-line no-param-reassign
      card.style.borderWidth = '1px'; 
      card.classList.remove('border-primary');

  // ou alors  card.style.borderBottom = ''; 
    });
  });
};

export default HomePage;


// changer les uri des data-uri="/" dans les catégories

/*

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
*/