const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');

function readAllFilms(minimumDuration) {
  const films = parse(jsonDbPath);
  if (minimumDuration === undefined) return films;

  const minimumDurationAsNumber = Number(minimumDuration);
  if (Number.isNaN(minimumDurationAsNumber) || minimumDurationAsNumber < 0) return undefined;

  const filmsreachingMinimumDuration = films.filter(
    (film) => film.duration >= minimumDuration, // fonction fléché qui sera exectuer pour chaque element du tableau
  ); // => determine si l'element doit être inclus dans le nouveau tableau
  return filmsreachingMinimumDuration;
}

function readOneFilm(id) {
  const idNumber = Number(id);
  const films = parse(jsonDbPath);
  const indexOfFilmFound = films.findIndex((film) => film.id === idNumber);
  if (indexOfFilmFound < 0) return undefined;
  return films[indexOfFilmFound];
}

function createOneFilm(title, duration, budget, link) {
  const films = parse(jsonDbPath);
    // si le film existe deja
    const existingFilm = films.find((film) => film.title.toLowerCase() === title.toLowerCase());
    if (existingFilm) return undefined;

  const createdFIlm = {
    id: getNextId(),
    title,
    duration,
    budget,
    link,
  };
  films.push(createdFIlm);
  serialize(jsonDbPath, films);
  return createdFIlm;
}

function getNextId() {
  const films = parse(jsonDbPath);
  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = films[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function deleteOnePizza(id) {
  const idNumber = Number(id); // parseInt(id,10) différence
  const films = parse(jsonDbPath);
  const foundIndex = films.findIndex((film) => film.id === idNumber); // la méthode findIndex() recherche l'index de l'élément du tableau dont la propriété id = req.params.id, . permet de trouver l'index de l'élément à supprimer.
  if (foundIndex < 0) return undefined;
  const itemsRemovedFromFILM = films.splice(foundIndex, 1); // la méthode splice() supprime un (1) seul élément du tableau  à partir de l'index foundIndex,  La méthode splice() renvoie un tableau contenant les éléments supprimés, dans ce cas, un tableau contenant un seul élément. car on supp 1 seul
  const itemRemoved = itemsRemovedFromFILM[0]; // on extrait l'élément supprimé du tableau (qui ne contient qu'un élément ==> donc à l'indice 0 )

  serialize(jsonDbPath, films);
  return itemRemoved;
}

function updateOneFilm(id, propertiesToUpdate) {
  const idNumber = Number(id);
  const films = parse(jsonDbPath);
  const foundIndex = films.findIndex((film) => film.id === idNumber); // FILM.findIndex() recherche l'index de l'élément du tableau FILM dont la propriété id correspond à la valeur de req.params.id.
  if (foundIndex < 0) return undefined; // la fonction findIndex renvoie -1 si elle ne trouve pas de fim
  const updatedFilm = { ...films[foundIndex], ...propertiesToUpdate };

  films[foundIndex] = updatedFilm; // L'élément du tableau FILM à l'index foundIndex est mis à jour avec updateFilm.

  serialize(jsonDbPath, films);
  return updatedFilm;
}

function updateOneOrCreateOneFilm(id, propertiesToUpdate) {
  const idNumber = Number(id, 10);
  const films = parse(jsonDbPath);
  const foundIndex = films.findIndex((film) => film.id === idNumber); // FILM.findIndex() recherche l'index de l'élément du tableau FILM dont la propriété id correspond à la valeur de req.params.id.

  if (foundIndex < 0) {
    const newFilm = { id: idNumber, ...propertiesToUpdate };
    films.push(newFilm);
    serialize(jsonDbPath, films);
    return newFilm;
  }

  const filmPriorToChange = films[foundIndex];
  const updatedFilm = {
    ...filmPriorToChange,
    ...propertiesToUpdate,
  };
  films[foundIndex] = updatedFilm;
  serialize(jsonDbPath, films);
  return updatedFilm;
}
module.exports = {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOnePizza,
  updateOneFilm,
  updateOneOrCreateOneFilm,
};
