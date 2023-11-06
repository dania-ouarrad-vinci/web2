var express = require("express");
const { serialize, parse } = require("../utils/json.js"); // on importe les 2 fonctions utilitaire
var router = express.Router();

const jsonDbPath = __dirname + "/../data/films.json"; // où se trouve le fichier json

const FILM = [
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

  if (typeof minimumFilmDuration !== "number" || minimumFilmDuration <= 0)
    return res.sendStatus(400);

    const films = parse(jsonDbPath, FILM); //// on lit les données qui se trouve dans le fichier json
  if (!minimumFilmDuration) return res.json(films); // si minimumFilmDuration est falsy (undifined, null,vide, false) . Cette verif est importante car la veriuf du dessus peut passer avec minimium=NaN avcec un typeOf de Number

 
  const filmsreachingMinimumDuration = films.filter(
    (film) => film.duration >= minimumFilmDuration // fonction fléché qui sera exectuer pour chaque element du tableau
  ); // => determine si l'element doit être inclus dans le nouveau tableau

  return res.json(filmsreachingMinimumDuration ?? films);
});

// READ ONE : Lire la ressource identifiée
// si on veut récupérer un film en particulier ==> /:id
router.get("/:id", (req, res) => {
  console.log(`GET /films/${req.params.id}`); // on recupère le paramètre de chemin req.params.id car /:id
  const films = parse(jsonDbPath, FILM);
  const indexOfFilmFound = films.findIndex((film) => film.id == req.params.id);
  if (indexOfFilmFound < 0) return res.sendStatus(404);
  res.json(films[indexOfFilmFound]);
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

  if (!title || !duration || !budget || !link) return req.sendStatus(400);

  // si le film existe deja
  const existingFilm = FILM.find(
    (film) => film.title.toLowerCase() === title.toLowerCase()
  );
  if (existingFilm) return res.sendStatus(409);

  // toutes les ajouts/modifications se font direct dans films !!
  const films = parse(jsonDbPath, FILM); // on lit les données qui se trouve dans le fichier json et on injecte ça dans une variable
  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link,
  };

  films.push(newFilm);
  // a chaque fois qu'on ajoute/modifi une données, on réecrit le fichier grâce à serealize 
  serialize(jsonDbPath, films); // fait persister les données dans le fichier json, on réecrit entièremeent le fichier json
  res.json(newFilm);
});

// Delete a film from the FILM based on its id
router.delete("/:id", function (req, res) {
  console.log(`DELETE /films/${req.params.id}`);

  const films = parse(jsonDbPath, FILM);

  const foundIndex = films.findIndex((film) => film.id == req.params.id); // la méthode findIndex() recherche l'index de l'élément du tableau dont la propriété id = req.params.id, . permet de trouver l'index de l'élément à supprimer.

  if (foundIndex < 0) return res.sendStatus(404);

  const itemsRemovedFromFILM = films.splice(foundIndex, 1); // la méthode splice() supprime un (1) seul élément du tableau  à partir de l'index foundIndex,  La méthode splice() renvoie un tableau contenant les éléments supprimés, dans ce cas, un tableau contenant un seul élément. car on supp 1 seul
  const itemRemoved = itemsRemovedFromFILM[0]; // on extrait l'élément supprimé du tableau (qui ne contient qu'un élément ==> donc à l'indice 0 )

  serialize(jsonDbPath, films);
  res.json(itemRemoved);
});

// UPDATE ONE : Mettre à jour les propriétés de la ressource
//par les valeurs données dans la requête, pour une ou plusieurs propriétés
router.patch("/:id", function (req, res) {
  console.log(`PATCH /films/${req.params.id}`);

  const title = req?.body?.title; // ?. est utilisé pour éviter les erreurs si ces propriétés ne sont pas définies dans la requête
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;

  console.log("POST /films");

  if (
    !req.body || // vérifie si req.body est défini,
    (title !== undefined && !title.trim()) || // vérifie si title et link ne sont pas des chaînes de caractères vides (c'est-à-dire qu'elles ne sont pas undefined et qu'elles contiennent au moins un caractère non blanc).
    (link !== undefined && !link.trim()) ||
    (duration !== undefined &&
      (typeof req?.body?.duration !== "number" || duration < 0)) || // vérifie si duration est un nombre positif (si elle est définie).
    (budget !== undefined &&
      (typeof req?.body?.budget !== "number" || budget < 0)) //vérifie si budget est un nombre positif (si elle est définie).
  )
    return res.sendStatus(400);

  const films = parse(jsonDbPath, FILM);

  const foundIndex = films.findIndex((film) => film.id == req.params.id); // FILM.findIndex() recherche l'index de l'élément du tableau FILM dont la propriété id correspond à la valeur de req.params.id.

  if (foundIndex < 0) return res.sendStatus(404); // la fonction findIndex renvoie -1 si elle ne trouve pas de fim

  const filmPriorToChange = films[foundIndex]; // on recup le film a mettre à jour
  const objectContainingPropertiesToBeUpdated = req.body; // es propriétés à mettre à jour sont stockées dans objectContainingPropertiesToBeUpdated à partir de req.body.

  const updateFilm = {
    // updateFilm est créé en fusionnant les propriétés de filmPriorToChange et objectContainingPropertiesToBeUpdated à l'aide de l'opérateur de décomposition (...). Cela crée un nouvel objet qui contient toutes les propriétés mises à jour.
    ...filmPriorToChange,
    ...objectContainingPropertiesToBeUpdated,
  };
  
  films[foundIndex] = updateFilm; // L'élément du tableau FILM à l'index foundIndex est mis à jour avec updateFilm.
  serialize(jsonDbPath, films);
  res.json(updateFilm);
});

//UPDATE ONE or CREATE ONE : Remplacer la ressource par une ressource
//reprenant les valeurs données dans la requête, seulement si toutes
//les propriétés de la ressource sont données ! Si la ressource n'existe pas,
//créer cette ressource seulement si l'id donné n'est pas déjà existant.
// Update a film only if all properties are given or create it if it does not exist and the id is not existant
router.put("/:id", function (req, res) {
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
    duration === undefined || //vérifie si duration est défini,
    typeof req?.body?.duration !== "number" || // vérifie si duration est de type nombre (nombre entier ou décimal)
    duration < 0 || // verifie que duration est supérieur à zéro.
    budget === undefined || // idem que duration
    typeof req?.body?.budget !== "number" ||
    budget < 0
  )
    return res.sendStatus(400);

  const id = req.params.id; // on extrait l'id à partir de req.params.id. Cet id est utilisé pour identifier l'élément du tableau FILM à mettre à jour ou à créer.
  const indexOfFilmFound = FILM.findIndex((film) => film.id == id); // Cela permet de trouver l'index de l'élément à mettre à jour.

  if (indexOfFilmFound < 0) {
    //si l'élément n'est pas trouvé (c'est-à-dire si indexOfFilmFound est un index invalide, c'est-à-dire < 0), cela signifie qu'aucun film avec cet identifiant n'existe dans le tableau FILM.
    const newFilm = { id, title, link, duration, budget }; //un nouveau film est créé avec les données de la requête, et il est ajouté au tableau FILM.
    FILM.push(newFilm);
    return res.json(newFilm);
  }

  // Si non, l'élément est trouvé (c'est-à-dire si indexOfFilmFound est un index valide),
  const filmPriorToChange = FILM[indexOfFilmFound]; // le code extrait l'élément à mettre à jour (filmPriorToChange) à partir du tableau FILM à cet index.
  const objectContainingPropertiesToBeUpdated = req.body; //es propriétés à mettre à jour sont stockées dans objectContainingPropertiesToBeUpdated à partir de req.body.
  const updatedFilm = {
    //n nouvel objet updatedFilm est créé en fusionnant les propriétés de filmPriorToChange et objectContainingPropertiesToBeUpdated à l'aide de l'opérateur de décomposition (...). Cela crée un nouvel objet qui contient toutes les propriétés mises à jour.
    ...filmPriorToChange,
    ...objectContainingPropertiesToBeUpdated,
  };

  FILM[indexOfFilmFound] = updatedFilm; // L'élément du tableau FILM à l'index indexOfFilmFound est mis à jour avec updatedFilm

  return res.json(updatedFilm);
});

module.exports = router;
