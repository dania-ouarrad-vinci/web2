var express = require("express");
var router = express.Router();

const FILM = [
  // ou films à voir ?
  {
    id: 1,
    title: "Harry Potter",
    duration: 152,
    budget: "125000000",
    link: "https://www.rottentomatoes.com/m/harry_potter_and_the_sorcerers_stone",
  },
  {
    id: 2,
    title: "Harry Potter",
    duration: 134,
    budget: "125000000",
    link: "https://www.rottentomatoes.com/m/harry_potter_and_the_sorcerers_stone",
  },
  {
    id: 3,
    title: "Harry Potter",
    duration: 178,
    budget: "125000000",
    link: "https://www.rottentomatoes.com/m/harry_potter_and_the_sorcerers_stone",
  },
];

// Read all the films from the films
// on garde que ceux qui ont une durée minimal de ……
router.get("/", (req, res, next) => {
  console.log("GET /films");
  console.log(req.query["minimum-duration"]);

  const minimumFilmDuration = req?.query // ?. permet de s'assurer que req et req.suery sont définis
    ? Number(req.query["minimum-duration"]) // si oui alors on transforme le parmètre de requête en nombre
    : undefined; // Si non ou si la convertion de req.query... en nombre à echoué car la chaine de caractère n'est pas convertible alors minimumFilmDuration=undifined

  console.log("mimnimium " + minimumFilmDuration);

  console.log(typeof minimumFilmDuration);

  if (typeof minimumFilmDuration !== "number" || minimumFilmDuration <= 0)
    return res.json("Wrong minimum duration");

  if (!minimumFilmDuration) return res.json(FILM); // si minimumFilmDuration est falsy (undifined, null,vide, false) . Cette verif est importante car la veriuf du dessus peut passer avec minimium=NaN avcec un typeOf de Number

  const filmsreachingMinimumDuration = FILM.filter(
    (film) => film.duration >= minimumFilmDuration // fonction fléché qui sera exectuer pour chaque element du tableau
  ); // => determine si l'element doit être inclus dans le nouveau tableau

  res.json(filmsreachingMinimumDuration);

  /* Ma façon (ancienne) 
  let filterByDuration;
  if (!isNaN(req.query["minimum-duration"])) {
    filterByDuration = req.query["minimum-duration"];
  } else return res.sendStatus(404);
  console.log(filterByDuration);
  let filterFilm = [];
  console.log(`filtre by ${filterByDuration ?? "not requested"}`);
  if (filterByDuration) {
    for (const film in FILM) {
      if (FILM[film].duration >= filterByDuration) filterFilm.push(FILM[film]);
    }
  }
  res.json(filterFilm ?? FILM);
  */
});

// READ ONE : Lire la ressource identifiée
// si on veut récupérer un film en particulier ==> /:id
router.get("/:id", (req, res) => {
  console.log(`GET /films/${req.params.id}`); // on recupère le paramètre de chemin req.params.id car /:id
  const indexOfFilmFound = FILM.findIndex((film) => film.id == req.params.id);
  if (indexOfFilmFound < 0) return res.sendStatus(404); // indexFound renvois -1 si elle ne trouve pas de film
  res.json(FILM[indexOfFilmFound]);
});
// http://localhost:3000/films/2

// vérifiez par exemple que budget et duration sont des nombres positifs.
// CREATE ONE : Créer une ressource basée sur les données de la requête
router.post("/", (req, res) => {
  // on verifie que les chaines de caractère ne soient pas vide ==> lenght
  // et que les nombres soient des nombre ==> typeOf et qu'ils ne soient pas négatif
  const title =
    req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined; //on verfife que chaque niveau de l'accès à la propriété est défini, c'est-à-dire que req, req.body, req.body.title sont tous définit. Si un est pas definit : undifined
  const duration = // trim() supprime les espaces en début et en fin de chaîne. Si la chaine contient que des espace sa taille sera =0 quand même
    typeof req?.body?.duration !== "number" || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== "number" || req.body.body < 0
      ? undefined
      : req.body.budget;
  const link = req?.body?.link?.trim().length !== 0 ? req.body.link : undefined;

  console.log("POST /films");

  if (!title || !duration || !budget || !link) return req.json("Bad request");
  //res.sendStatus(400); // error code '400 Bad request'

  const lastItemIndex = FILM?.length !== 0 ? FILM.length - 1 : undefined; // vérifie si FILM est défini (sinon undefined), si s'il a une longueur différente de zéro (pas vide)
  const lastId = lastItemIndex !== undefined ? FILM[lastItemIndex]?.id : 0; // vérifie que lastItemIndex est défini
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link,
  };

  FILM.push(newFilm);
  res.json(newFilm);
});

module.exports = router;
