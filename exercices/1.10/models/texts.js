// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');

const path = require('node:path');

// eslint-disable-next-line no-unused-vars
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/texts.json');

function readAll(level) {
  const texts = parse(jsonDbPath);
  // eslint-disable-next-line no-console
  console.log(`okk${level}`);
  if (level === undefined) return texts;
  if (level !== 'hard' && level !== 'easy' && level !== 'medium') return undefined; //  if (!['hard', 'easy', 'medium'].includes(level))
  const textreachingFilter = texts.filter((texte) => texte.level === level);
  return textreachingFilter;
}

function readOne(id) {
  const idNumber = Number(id);
  const texts = parse(jsonDbPath);
  const indexOfTextFound = texts.findIndex((texte) => texte.id === idNumber.toString());
  if (indexOfTextFound < 0) return undefined;
  return texts[indexOfTextFound];
}

function createOne(content, level) {
  const texts = parse(jsonDbPath);
  // si le film existe deja
  //  const existingFilm = texts.find((film) => film.title.toLowerCase() === title.toLowerCase());
  //  if (existingFilm) return undefined;

  const createdText = {
    id: uuidv4(),
    content,
    level,
  };

  texts.push(createdText);
  serialize(jsonDbPath, texts);
  return createdText;
}


function deleteOne(id) {
  const idNumber = Number(id); 
  const texts = parse(jsonDbPath);
  const foundIndex = texts.findIndex((text) => text.id === idNumber.toString()); 
    // eslint-disable-next-line no-console
    console.log(foundIndex);
  if (foundIndex < 0) return undefined;
  const itemsRemovedFromTexts = texts.splice(foundIndex, 1); // la méthode splice() supprime un (1) seul élément du tableau  à partir de l'index foundIndex,  La méthode splice() renvoie un tableau contenant les éléments supprimés, dans ce cas, un tableau contenant un seul élément. car on supp 1 seul
  const itemRemoved = itemsRemovedFromTexts[0]; // on extrait l'élément supprimé du tableau (qui ne contient qu'un élément ==> donc à l'indice 0 )
  serialize(jsonDbPath, texts);
  return itemRemoved;
}


function updateOneOrCreateOne(id, propertiesToUpdate) {
  const idNumber = Number(id, 10);
  const texts = parse(jsonDbPath);
  const foundIndex = texts.findIndex((text) => text.id === idNumber.toString()); // FILM.findIndex() recherche l'index de l'élément du tableau FILM dont la propriété id correspond à la valeur de req.params.id.
  // eslint-disable-next-line no-console
  console.log(foundIndex);
  /* if (foundIndex < 0) {
    const newtext = { id: idNumber, ...propertiesToUpdate };
    texts.push(newtext);
    serialize(jsonDbPath, texts);
    return newtext;
  }
*/
if (foundIndex < 0) return undefined;
// eslint-disable-next-line no-console

  const textPriorToChange = texts[foundIndex];
  const updatedText = {
    ...textPriorToChange,
    ...propertiesToUpdate,
  };
  texts[foundIndex] = updatedText;
  serialize(jsonDbPath, texts);
  return updatedText;
}

module.exports = {
  readAll,
  readOne,
  createOne,
  deleteOne,
  updateOneOrCreateOne
};
