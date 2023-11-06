
const films = [];


const readAllMovie = () => films;
  

function addOneMovie(movie){
    films.push(movie);
  }


export { addOneMovie, readAllMovie };