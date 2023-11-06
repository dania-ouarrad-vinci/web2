const express = require('express');
const {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOnePizza,
  updateOneFilm,
  updateOneOrCreateOneFilm,
} = require('../models/films');

const router = express.Router();

// Read all the films from the films
// on garde que ceux qui ont une durée minimal de ……
router.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('GET /films');
  // eslint-disable-next-line no-console
  console.log(req?.query?.['minimum-duration']);
  const filmsPotentiallyFiltered = readAllFilms(req?.query?.['minimum-duration']);
  // eslint-disable-next-line no-console
  console.log(filmsPotentiallyFiltered);
  if (filmsPotentiallyFiltered === undefined) return res.sendStatus(404);
  return res.json(filmsPotentiallyFiltered);
});

// READ ONE : Lire la ressource identifiée
// si on veut récupérer un film en particulier ==> /:id
// eslint-disable-next-line consistent-return
router.get('/:id', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(`GET /films/${req.params.id}`); // on recupère le paramètre de chemin req.params.id car /:id
  const foundFilm = readOneFilm(req?.params?.id);
  if (!foundFilm) return res.sendStatus(404);
  res.json(foundFilm);
});
// http://localhost:3000/films/2

// vérifiez par exemple que budget et duration sont des nombres positifs.
// CREATE ONE : Créer une ressource basée sur les données de la requête
// eslint-disable-next-line consistent-return
router.post('/', (req, res) => {
  // on verifie que les chaines de caractère ne soient pas vide ==> lenght
  // et que les nombres soient des nombre ==> typeOf et qu'ils ne soient pas négatif
  const title = req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined; // on verfife que chaque niveau de l'accès à la propriété est défini, c'est-à-dire que req, req.body, req.body.title sont tous définit. Si un est pas definit : undifined
  const duration = // trim() supprime les espaces en début et en fin de chaîne. Si la chaine contient que des espace sa taille sera =0 quand même
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.body < 0 ? undefined : req.body.budget;
  const link = req?.body?.link?.trim().length !== 0 ? req.body.link : undefined;

  // eslint-disable-next-line no-console
  console.log('POST /films');

  if (!title || !duration || !budget || !link) return req.sendStatus(400);

  const createdFilm = createOneFilm(title, duration, budget, link);
  if(createdFilm===undefined) return res.sendStatus(404);
  

  return res.json(createdFilm);
});

// Delete a film from the FILM based on its id
// eslint-disable-next-line consistent-return
router.delete('/:id', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(`DELETE /films/${req.params.id}`);

  const deletedFilm = deleteOnePizza(req?.params?.id);
  if (!deletedFilm) return res.sendStatus(404);

  res.json(deletedFilm);
});

// UPDATE ONE : Mettre à jour les propriétés de la ressource
// par les valeurs données dans la requête, pour une ou plusieurs propriétés
// eslint-disable-next-line consistent-return
router.patch('/:id', (req, res) => {
  // console.log(`PATCH /films/${req.params.id}`);

  const title = req?.body?.title; // ?. est utilisé pour éviter les erreurs si ces propriétés ne sont pas définies dans la requête
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;

  // console.log('POST /films');

  if (
    !req.body || // vérifie si req.body est défini,
    (title !== undefined && !title.trim()) || // vérifie si title et link ne sont pas des chaînes de caractères vides (c'est-à-dire qu'elles ne sont pas undefined et qu'elles contiennent au moins un caractère non blanc).
    (link !== undefined && !link.trim()) ||
    (duration !== undefined && (typeof req?.body?.duration !== 'number' || duration < 0)) || // vérifie si duration est un nombre positif (si elle est définie).
    (budget !== undefined && (typeof req?.body?.budget !== 'number' || budget < 0)) // vérifie si budget est un nombre positif (si elle est définie).
  )
    return res.sendStatus(400);

  const updatedFilm = updateOneFilm(req?.params?.id, req?.body); // updateOneFilm(req?.params?.id, { title, link, duration, budget });
  if (!updatedFilm) return res.sendStatus(404);
  res.json(updatedFilm);
});

// UPDATE ONE or CREATE ONE : Remplacer la ressource par une ressource
// reprenant les valeurs données dans la requête, seulement si toutes
// les propriétés de la ressource sont données ! Si la ressource n'existe pas,
// créer cette ressource seulement si l'id donné n'est pas déjà existant.
// Update a film only if all properties are given or create it if it does not exist and the id is not existant
// eslint-disable-next-line consistent-return
router.put('/:id', (req, res) => {
  const title = req?.body?.title; // L'opérateur de sécurité facultatif (?.) est utilisé pour éviter les erreurs si ces propriétés ne sont pas définies dans la requête
  const link = req?.body?.link;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;

  if (
    !req.body || // vérifie si req.body est défini, ce qui signifie qu'il y a des données à traiter.
    !title || // vérifie si title et link sont définis et s'ils ne sont pas des chaînes de caractères vides.
    !title.trim() ||
    !link ||
    !link.trim() ||
    duration === undefined || // vérifie si duration est défini,
    typeof req?.body?.duration !== 'number' || // vérifie si duration est de type nombre (nombre entier ou décimal)
    duration < 0 || // verifie que duration est supérieur à zéro.
    budget === undefined || // idem que duration
    typeof req?.body?.budget !== 'number' ||
    budget < 0
  )
    return res.sendStatus(400);

  const updatedFilm = updateOneOrCreateOneFilm(req?.params?.id, req?.body);

  res.json(updatedFilm);
});

module.exports = router;
