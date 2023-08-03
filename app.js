
let numberOfFilms;

function start(){
   numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", 0 ).trim();

   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
     numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", 0 ).trim();
   }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};

function rememberMyFilms(){
   for(let i = 0; i < 2; i++){
           
      const a = prompt("Фильм").trim(),
            b = prompt("Оценка").trim();

               if(a != null && a != "" && b != null && b != "" && a.length < 50){
                   personalMovieDB.movies[a] = b;
                   console.log('ok');
            } else {
               console.log("errore")
               i--;
            }
       }
}

rememberMyFilms();

function detectedPersonalLevel(){
   
   if(personalMovieDB.count < 10){
   console.log("Мало фильмов");
   } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
  console.log("вы обычный зритель");
   } else if(personalMovieDB.count > 30){
  console.log("Вы киноман");
   }
}

detectedPersonalLevel();

function showMyDB(){
   if(personalMovieDB.privat == false){
      console.log(personalMovieDB);
   }
}

showMyDB();


function writeYourGenres(){

   for(let i = 1; i <= 3; i++){
            const  genre = prompt(`What is your favorite genre?`).trim();

            if(genre != null && genre != ""){
            personalMovieDB.genres[i - 1] = genre;
         console.log("nice taste")
      } else {
         console.log("errore")
         i--;
      }
   }
}

writeYourGenres();
