let numberOfFilms = prompt('how many films have you watched?', '');
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let question1 = prompt('last movie you watched?','');
let question2 = prompt('rate this movie','');
let question3 = prompt('last movie you watched?','');
let question4 = prompt('rate this movie','');

personalMovieDB.movies[question1] = question2;
personalMovieDB.movies[question3] = question4;

console.log(personalMovieDB);

