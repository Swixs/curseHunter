
// let numberOfFilms = +prompt("qual'è il tuo film preferito", );

// console.log(numberOfFilms);

let personalMovieDB = {
    // count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};


const a = prompt("qual'è il tuo uno film preferito", ),
      b = prompt("qualo grado il uno film"),
      c = prompt("qual'è il tuo duo film preferito"),
      d = prompt("qualo grado il duo film");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
