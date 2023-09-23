var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var filmsRouter = require("./routes/films");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const stats = {}; // initialisation d'un objet vide

// sats va contenir plus tard par exmple:
/* stats = {
  "GET /films": 5,  // Cette opération GET /films a été effectuée 5 fois.
  "POST /films": 2, // Cette opération POST /films a été effectuée 2 fois.
  "GET /users": 3,  // Cette opération GET /users a été effectuée 3 fois.
  "PUT /users": 1   // Cette opération PUT /users a été effectuée 1 fois.
};
*/
app.use((req, res, next) => {
  // middleware executé pour chaqque requête entrante.
  // middleware qui compte le nombre de fois que chaque opération HTTP est effectuée (par exemple, "GET /films") et affiche ces statistiques dans la console à chaque requête.
  const currentOperation = `${req.method} ${req.path}`;
  // req.method contient la méthode : GET ou POST
  // req.path contient le chemin : exemple /films
  //  Entourez une expression avec ${} à l'intérieur d'une chaîne de caractères délimitée par des backticks (``), JavaScript évalue cette expression et insère sa valeur dans la chaîne.
  const currentOperationCounter = stats[currentOperation];
  // on utilise la clé currentOperation pour accéder à sa valeur
  // ex: la clé est GET /films et la valeur est 2 (car on a été 2 fois sur cette page --> le compteur)
  //les objets JavaScript utilisent des clés pour accéder à leurs valeurs.
  // currentOperationCounter peut par exemple contenir la valeur 2
  // donc stats["GET /films"] = 2
  if (currentOperationCounter == undefined) stats[currentOperation] = 0;
  // si on a pas encore effectuer la requête alors currentOperationCounter n'existe pas
  // l'operation n'a donc pas encore été comptée
  // à ce moment la on "ajoute" l'opération à stats et on définit sa clé à 0
  stats[currentOperation] += 1;
  // on incrémente ensuite la clé (le compteur)
  const statsMessage = `Request counter : \n${Object.keys(stats)
    .map((operation) => `- ${operation} : ${stats[operation]}`)
    .join("\n")}`;
  // Object.keys obtient un tableau contenant toutes les clés de l'objet stats.
  // La méthode .map() parcourt le tableau des clés (les opérations HTTP) et générer une nouvelle chaîne de caractères pour chaque opération. Elle utilise la syntaxe de la fonction fléchée pour itérer sur chaque élément du tableau.
  // La méthode .map() parcourt chaque élément du tableau retourné par Object.keys(stats). À chaque itération, elle prend un élément (dans ce cas, une opération HTTP stockée sous la variable operation), exécute le code entre les accolades {...} et stocke le résultat dans un tableau.
  // operation est une variable qui change à chaque itération de la boucle .map()
  // Par exemple, si operation est "GET /films" et stats[operation] est égal à 5, cela générera une chaîne de caractères sous la forme - GET /films : 5.
  // La méthode .join() fusionne toutes les chaînes de caractères générées précédemment en une seule chaîne. Elle utilise "\n" comme séparateur, ce qui signifie qu'elle insérera un saut de ligne entre chaque chaîne.
  console.log(statsMessage);
  next(); // passe le contrôle au middleware suivant
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/films", filmsRouter);

module.exports = app;
