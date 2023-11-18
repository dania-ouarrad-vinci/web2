import { clearPage } from '../../utils/render';
import aboutUsImage from '../../img/aboutUs.jpg';
import ourProjectImage from '../../img/OurProject.jpg';
import contactUsImage from '../../img/contactUS.jpg';

const AboutUsPage = () => {
  clearPage();
  renderAboutUs();
};

function renderAboutUs() {
  const main = document.querySelector('main');
  main.innerHTML = `

  <section class="banner pt-5 d-flex justify-content-center align-items-center ">
  <div class="container my-5 py-5">
    <div class="row">
    <div class="col-md-6 text-center">
        <h1  >
        A propos de Nous
        </h1>
        <p> Nous sommes des étudiants en deuxième année d'informatique, spécialisés dans le développement d'applications à la Haute Ecole Léonard de Vinci....... </p>  

        </div>
        <div class="col-md-6 text-center">
        <img class="imgaboutUsPage" src="${aboutUsImage}" alt="Image a propos de Nous">
        </div>
        </div>

  </div>

  </section>

  <section class="banner pt-5 d-flex justify-content-center align-items-center ">
  <div class="container my-5 py-5">
    <div class="row">
    <div class="col-md-6 text-center">
    <img class="imgaboutUsPage" src="${ourProjectImage}" alt="Image a propos de Nous">
    </div>
    <div class="col-md-6 text-center">
        <h1  >
     Notre projet
        </h1>
        <p > Dans le cadre de nos études, nous avons conçu et développé un jeu de quiz éducatif. Dans cette expérience interactive, vous pouvez choisir des quiz parmi des catégories prédéfinies ou même créer vos propres quiz. Notre plateforme offre un éventail d'options de quiz passionnantes. À la fin de chaque quiz, vous recevrez un score et vous avez également la possibilité de gagner une collection de badges.......... </p>
        </div>

        </div>

 
  </div>
</section>


<section class="banner pt-5 d-flex justify-content-center align-items-center ">
<div class="container my-5 py-5">
  <div class="row">
  <div class="col-md-6 text-center">
      <h1  >
  Nous contacter
      </h1>
      <h4>  <a href="mailto: asmae.hammouten@student.vinci.be"> Asmae Hammouten </a>   </h4>
      <h4> <a href="mailto: asmae.hammouten@student.vinci.be"> Dania Ouarrad</a> </h4>
      <h4>  <a href="mailto: ibrahim.bekkari@student.vinci.be"> Ibrahim Bekkari</a> </h4>
      <h4> <a href="mailto:  eda.copur@student.vinci.be"> Eda Copur</a> </h4>
      <h4> <a href="mailto:  lars.hanquet@student.vinci.be"> Lars Hanquet</a> </h4>'
      </div>
      <div class="col-md-6 text-center">
      <img class="imgaboutUsPage" src="${contactUsImage}" alt="Image a propos de Nous">
      </div>

      </div>
</div>
</section>
`;
}

export default AboutUsPage;
