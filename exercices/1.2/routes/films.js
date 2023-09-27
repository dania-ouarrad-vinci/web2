var express = require("express");
var router = express.Router();

const FILM = [
  {
    id: 1,
    title: "Harry Potter",
    duration: 152,
    budget: "125000000",
    link: "https://www.rottentomatoes.com/m/harry_potter_and_the_sorcerers_stone",
  },
  {
    id: 1,
    title: "Harry Potter",
    duration: 152,
    budget: "125000000",
    link: "https://www.rottentomatoes.com/m/harry_potter_and_the_sorcerers_stone",
  },
  {
    id: 1,
    title: "Harry Potter",
    duration: 152,
    budget: "125000000",
    link: "https://www.rottentomatoes.com/m/harry_potter_and_the_sorcerers_stone",
  },
];

// Read all the films from the films
router.get("/", function (req, res) {
  console.log("GET /films");
  res.json(FILM);
});

module.exports = router;
