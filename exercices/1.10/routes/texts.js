const express = require('express');

const { readAll, readOne, createOne, deleteOne, updateOneOrCreateOne } = require('../models/texts');

const router = express.Router();

router.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('GET /texts');
  // eslint-disable-next-line no-console
  console.log(req?.query?.level);
  const textsPotentiallyFiltered = readAll(req?.query?.level);
  // eslint-disable-next-line no-console
  console.log(`textsPotentiallyFiltered ${textsPotentiallyFiltered}`);
  if (textsPotentiallyFiltered === undefined) return res.sendStatus(404);
  return res.json(textsPotentiallyFiltered);
});

// eslint-disable-next-line consistent-return
router.get('/:id', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(`GET /films/${req.params.id}`); // on recupère le paramètre de chemin req.params.id car /:id
  const foundText = readOne(req?.params?.id);
  if (!foundText) return res.sendStatus(404);
  res.json(foundText);
});


router.post('/', (req, res) => {
  // on verifie que les chaines de caractère ne soient pas vide ==> lenght
  const content = req?.body?.content?.trim()?.length !== 0 ? req.body.content : undefined; // on verfife que chaque niveau de l'accès à la propriété est défini, c'est-à-dire que req, req.body, req.body.title sont tous définit. Si un est pas definit : undifined

  const level = req?.body?.level?.trim().length !== 0 ? req.body.level : undefined;

  if (!content || !level) return req.sendStatus(400);
  if (level !== 'hard' && level !== 'easy' && level !== 'medium') return res.sendStatus(200);

  // eslint-disable-next-line no-console
  console.log('POST /texts');

  const createdText = createOne(content, level);

  return res.json(createdText);
});

// eslint-disable-next-line consistent-return
router.delete('/:id', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(`DELETE /texts/${req.params.id}`);

  const deletedText = deleteOne(req?.params?.id);
  if (!deletedText) return res.sendStatus(404); // si === undifined

  res.json(deletedText);
});

// eslint-disable-next-line consistent-return
router.put('/:id', (req, res) => {
  const content = req?.body?.content;
  const level = req?.body?.level;

  // eslint-disable-next-line no-console
  console.log(req?.params?.id);

  if (!req.body || !content || !content.trim() || !level || !level.trim())
    return res.sendStatus(400);

  if (level !== 'hard' && level !== 'easy' && level !== 'medium') return res.sendStatus(200);

  const updateText = updateOneOrCreateOne(req?.params?.id, req?.body);

  res.json(updateText);
});

module.exports = router;
