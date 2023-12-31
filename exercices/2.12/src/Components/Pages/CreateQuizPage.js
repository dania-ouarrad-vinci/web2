import { clearPage } from '../../utils/render';

let questionCount = 0;
let numberOfQuestions = 0;
const numberBadAnswer = 3;
let title;
let category;
let quiz;
const main = document.querySelector('main');


function showAlert(message) {
  // eslint-disable-next-line no-alert
  alert(message);
}


const CreateQuizPage = () => {
  renderFormNumberOfQuestion();
  title = document.querySelector('#titleQuiz');
  const btnSubmitNumber = document.querySelector('#btnSubmitNumber');
  const btnInfo = document.querySelector('#btnInfo');
   category = document.querySelector('#category');

  /** ?? */
  main.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // eslint-disable-next-line prefer-destructuring
      const activeElement = document.activeElement;
      const inputFields = main.querySelectorAll('input');
      const currentIndex = Array.from(inputFields).indexOf(activeElement);
      const nextIndex = currentIndex + 1;
      if (nextIndex < inputFields.length) {
        inputFields[nextIndex].focus();
      }
    }
  });

  btnInfo.addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    showAlert('Le nombre maximum de question autorisé est de 50');
  });

  btnSubmitNumber.addEventListener('click', (e) => {
    e.preventDefault();
    numberOfQuestions = parseInt(document.querySelector('#numberQuestion').value, 10);
    // eslint-disable-next-line no-console
    console.log(numberOfQuestions);
    questionCount = 1;
    // eslint-disable-next-line no-console
    console.log(quiz);
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(numberOfQuestions) && numberOfQuestions > 0) renderQuizQuestion();
    // else error
  });
};

function renderQuizQuestion() {
  clearPage();
  let quizHTML = `
  <section id="MainQuiz">
    <div class="container-xxl justify-content-center pt-5">
      <div class="card shadow-lg">
        <div class="card-body p-5">
        <h2 class="fs-4 card-title text-center mb-4">Question ${questionCount}</h2>
       <!-- <h2 class="fs-4 fw-bold mb-4 text-end">${title.value}</h2> -->
         

          <form>
            <div class="row mb-3">
              <div class="col">
                <label class="mb-2 text-muted" for="question">Question</label>
                <input type="text" class="form-control" id="question" name="question" required autofocus>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col">
                <label class="mb-2 text-muted" for="goodAnswer">Bonne Réponse</label>
                <input type="text" class="form-control" id="goodAnswer" name="goodAnswer" required autofocus>
              </div>
            </div>
`;

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < numberBadAnswer; index++) {
    quizHTML += `
    <div class="row mb-3">
      <div class="col">
        <label class="mb-2 text-muted" for="badAnswer">Mauvaise Réponse</label>
        <input type="text" class="form-control" id="badAnswer" name="badAnswer" required autofocus>
      </div>
    </div>
  `;
  }

  quizHTML += `
            <div class="mb-3">
            <button type="submit" class="btn btn-primary mn-3" id="previousQuestion">Précédent</button>
              <button type="submit" class="btn btn-primary mn-3" id="nextQuestion">Suivant</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
`;

  main.innerHTML = quizHTML;

 const previousQuestion = document.querySelector('#previousQuestion');
 const nextQuestion = document.querySelector('#nextQuestion');

  previousQuestion.addEventListener('click', (e) => {
    e.preventDefault();
    if (questionCount > 1) {
        // eslint-disable-next-line no-plusplus
        questionCount--;
        renderQuizQuestion();
    }
   });

  // rajouter le form préremplie avec les bonne infos
  nextQuestion.addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-plusplus
    questionCount++;
    if (questionCount <= numberOfQuestions) {
      // eslint-disable-next-line no-console
      console.log(`Je suis dans nextQuestion.add ${questionCount}`);
      renderQuizQuestion();
    } else {
      quiz = {
        title: title.value,
        category: category.value,
        numberQuestion: numberOfQuestions,
      }
      clearPage();
      // eslint-disable-next-line no-console
      console.log(`Ici, on va direct être rediriger vers la page du jeu du quiz`); // A MODIF
    }
  });
}

function renderFormNumberOfQuestion() {
  clearPage();
  main.innerHTML = ` <section >
  <div class="container-xxl justify-content-center pt-5"> <!-- d-flex-->
      <div>
          <div class="card shadow-lg">
              <div class="card-body p-5">

              <div class="alert "> 
              <h2 class="fs-4 mt-1 card-title fw-bold text-center">Créer Ton Quiz</h2>
             </div>
                 
                  <form>

                  <div class="row mb-3">
                          <div class="col">
                              <label class="mb-2 text-muted" for="titleQuiz">Titre</label>
                              <input type="text" class="form-control" id="titleQuiz" name="titleQuiz" required
                                  autofocus>
                          </div>
                          </div>

                      <div class="row mb-3">
                          <div class="col">
                              <label class="mb-2 text-muted" for="category">Catégorie</label>
                              <input type="text" class="form-control" id="category" name="category" required
                                  autofocus>
                          </div>
                          </div>

                          <div class="row mb-3">
                          <label class="mb-2 text-muted" for="numberQuestion">Nombre de questions</label>
                          <div class="col-5 d-flex align-items-center">
                             
                              <input type="number" class="form-control" id="numberQuestion" name="numberQuestion" required autofocus>
                              <button id="btnInfo" class="ms-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                  </svg>
                              </button>
                          </div>
                      </div>
                          
                      <div class="mb-3">
                          <button type="submit" class="btn btn-primary mn-3" id="btnSubmitNumber">Continuer</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</section>
    </section> `;
  // eslint-disable-next-line no-plusplus
  questionCount++;
}

export default CreateQuizPage;

// afficher les erreur, des forms 