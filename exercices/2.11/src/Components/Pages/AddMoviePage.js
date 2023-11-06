import Navigate from '../Router/Navigate';
import { clearPage, renderPageTitle } from '../../utils/render';
import { addOneMovie } from '../../models/movies'; // Import addOneMovie


const AddMoviePage = () => {
  clearPage();
  renderGoBackHomeButton();
  renderPageTitle('Ajout de Film');
   
  renderFormToAddMovie();
   const form =  document.querySelector('#formToAddMovie');
  const button = document.querySelector("#submit");

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const movieCreated={
     title: form.title.value,
     duration:form.duration.value,
     budget: form.budget.value,
     link: form.link.value
    };

    addOneMovie(movieCreated)
     // eslint-disable-next-line no-console
     console.log(`movie : ${movieCreated}`);
      Navigate('/view');

   });
};

function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  const submit = document.createElement('input');
  submit.value = 'Go back to HomePage';
  submit.className = 'btn btn-secondary mt-3';
  submit.addEventListener('click', () => {
    Navigate('/');
  });

  main.appendChild(submit);
}


function renderFormToAddMovie() {
  const main = document.querySelector('main');
  const form = document.createElement('form');
  form.className = 'p-5';
  form.id='formToAddMovie';

  const divtitle = document.createElement('div');
  divtitle.className = 'mb-3';
  const title = document.createElement('input');
  title.type = 'text';
  title.className = 'form-text';
  title.placeholder = 'Titre';
  title.required="true";
  title.id="title";
  divtitle.appendChild(title);
  form.appendChild(divtitle);

  const divDuration = document.createElement('div');
  divDuration.className = 'mb-3';
  const duration = document.createElement('input');
  duration.type = 'number';
  duration.className = 'form-text';
  duration.required="true";
  duration.placeholder = 'Duration';
  duration.id="duration";
  divDuration.appendChild(duration);
  form.appendChild(divDuration);

  const divBudget = document.createElement('div');
  divBudget.className = 'mb-3';
  const budget = document.createElement('input');
  budget.type = 'number';
  budget.className = 'form-text';
  budget.placeholder = 'Budget';
  budget.required="true";
  budget.id="budget";
  divBudget.appendChild(budget);
  form.appendChild(divBudget);

  const divLink = document.createElement('div');
  divLink.className = 'mb-3';
  const link = document.createElement('input');
  link.type = 'url';
  link.className = 'form-text';
  link.placeholder = 'URL';
  link.required="true";
  link.id="link";
  divLink.appendChild(link);
  form.appendChild(divLink);
  

  const submit = document.createElement('input');
  submit.value = 'enregistrer';
  submit.className = 'btn btn-secondary mt-3';
  submit.id='submit';
  form.appendChild(submit);
  main.appendChild(form);
}

export default AddMoviePage;
// Veuillez valider les champs de votre formulaire à l'aide d'HTML5 (required, type, min, max, minlength...).

