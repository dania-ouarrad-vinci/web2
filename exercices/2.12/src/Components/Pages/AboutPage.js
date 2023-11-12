// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
// import aboutUsImage from'../../img/ABoutUs.png';
// import ourProject from '../../img/OurProject.png';

const AboutUsPage = () => {
  clearPage();
  renderAboutUs();
  const rectanglesAboutUs = document.querySelectorAll('.rectangleAboutUs');

  rectanglesAboutUs.forEach((rectangleAboutUs) => {
    const contentAboutUs = rectangleAboutUs.querySelector('.contentAboutUs');
    const h3 = rectangleAboutUs.querySelector('h3');

    rectangleAboutUs.addEventListener('mouseover', () => {
      // eslint-disable-next-line no-param-reassign
      rectangleAboutUs.style.backgroundColor = 'rgba(255, 182, 193, 0.6)';
      contentAboutUs.style.display = 'block';
      h3.textContent = ' ';
    });

    rectangleAboutUs.addEventListener('mouseout', () => {
      // eslint-disable-next-line no-param-reassign
      rectangleAboutUs.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
      contentAboutUs.style.display = 'none';
      if (h3.className === 'titleOurProject') {
        h3.textContent = 'Notre projet';
      } else if (h3.className === 'titleAboutUs') {
        h3.textContent = 'A propos de nous';
      } else if (h3.className === 'titleMeetUs') {
        h3.textContent = 'Nous contacter';
      }
    });
  });
};

function renderAboutUs() {
  const main = document.querySelector('main');
  main.innerHTML = `<section class="mt-5">  //margin fonctionne pas 
  <div class="container-xxl ">
  <div class="row d-flex justify-content-center ">
    <div class="rectangleAboutUs">
      <h3  class="titleOurProject" text-center>Notre projet</h3>
      <div class="contentAboutUs">
        <p class="text-white font-weight-bold text-center text-justify h4 ml-4">Dans le cadre de nos études, nous avons conçu et développé un jeu de quiz éducatif. Dans cette expérience interactive, vous pouvez choisir des quiz parmi des catégories prédéfinies ou même créer vos propres quiz. Notre plateforme offre un éventail d'options de quiz passionnantes. À la fin de chaque quiz, vous recevrez un score et vous avez également la possibilité de gagner une collection de badges. </p>
      </div>
    </div>
    <div class="rectangleAboutUs">
      <h3  class= "titleAboutUs" text-center>A propos de nous</h3>
      <div class="contentAboutUs">
        <p class="text-white font-weight-bold text-center text-justify h4 ml-4"> Nous sommes des étudiants en deuxième année d'informatique, spécialisés dans le développement d'applications à la Haute Ecole Léonard de Vinci. </p>
      </div>
    </div>
    <div class="rectangleAboutUs">
      <h3  class="titleMeetUs"text-center>Nous contacter</h3>
      <div class="contentAboutUs">
        <p class="text-white font-weight-bold text-center text-justify h4 ml-4" >
          <a href="mailto: asmae.hammouten@student.vinci.be"> Asmae Hammouten </a>
        <br>  <a href="mailto: asmae.hammouten@student.vinci.be"> Dania Ouarrad</a>
        <br>  <a href="mailto: ibrahim.bekkari@student.vinci.be"> Ibrahim Bekkari</a>
        <br>  <a href="mailto:  eda.copur@student.vinci.be"> Eda Copur</a>
        <br>  <a href="mailto:  lars.hanquet@student.vinci.be"> Lars Hanquet</a>
        </p>
      </div>
    </div>
  </div>
</div>
</section>`;
}

export default AboutUsPage;
