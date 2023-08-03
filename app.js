
let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", 0 );

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

    for(let i = 0; i < 2; i++){
           
       const a = prompt("Фильм"),
             b = prompt("Оценка");

                if(a != null && a != "" && b != null && b != "" && a.length < 50){
                    personalMovieDB.movies[a] = b;
                    console.log('ok');
             } else {
                console.log("errore")
                i--;
             }
        }

 if(personalMovieDB.count < 10){
     console.log("Мало фильмов");
 } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log("вы обычный зритель");
 } else if(personalMovieDB.count > 30){
    console.log("Вы киноман");
 }

console.log(personalMovieDB);
    