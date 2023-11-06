import Navigate from '../Router/Navigate';
import { clearPage, renderPageTitle } from '../../utils/render';
import { readAllMovie } from '../../models/movies';

const VieuwMoviePage = () => {
  clearPage();
  renderGoBackHomeButton();
  renderPageTitle('ViewMoviePage');
  const movieData = readAllMovie();
  renderTab(movieData);
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


function renderTab(tab) {
  const main = document.querySelector('main');
  const table = document.createElement('table');
  table.className = 'table table-hover';
  const body = document.createElement('tbody');

  const thead = document.createElement('thead');
  const tr1 = document.createElement('tr');

  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  const th3 = document.createElement('th');
  th1.textContent = 'Titre';
  th2.textContent = 'Duration (min)';
  th3.textContent = 'Budget (million)';

  tr1.appendChild(th1);
  tr1.appendChild(th2);
  tr1.appendChild(th3);
  thead.appendChild(tr1);
  table.appendChild(thead);

  tab.forEach((ligne) => {
    const tr = document.createElement('tr');

    const td = document.createElement('td');
    const link = document.createElement('a');
    link.href = ligne.link;
    link.target = '_blank';
    link.textContent = ligne.title; 
    td.appendChild(link);
    tr.appendChild(td);

    const td2 = document.createElement('td');
    td2.textContent = ligne.duration;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.textContent = ligne.budget;
    tr.appendChild(td3);

    body.appendChild(tr);
  });

  table.appendChild(body);
  main.appendChild(table);
}

export default VieuwMoviePage;
