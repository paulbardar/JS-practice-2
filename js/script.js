
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
;(function(){
    'use strict';

    const numberOfFilms = +prompt("How many films have you watched?", "");

    const personalMovieDB = {
        count : numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    // personalMovieDB.count = numberOfFilms;

    // personalMovieDB.movies.firstFilm = prompt("Один из последних просмотренных фильмов?", "");
    // personalMovieDB.movies.firstEstimate = +prompt("На сколько оцените его?", "");
    // personalMovieDB.movies.secondFilm = prompt("Один из последних просмотренных фильмов?", "");
    // personalMovieDB.movies.secondEstimate = +prompt("На сколько оцените его?", "");

    // const a = prompt('Один из последних просмотренных фильмов?', ''),
    //     b = prompt('На сколько оцените его?', ''),
    //     c = prompt('Один из последних просмотренных фильмов?', ''),
    //     d = prompt('На сколько оцените его?', '');

    // personalMovieDB.movies[a] = b;
    // personalMovieDB.movies[c] = d;

    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }
            
    }

    // Loop 2
    // let loopCount = 0;
    // while (loopCount < 2){
    //     const a = prompt('Один из последних просмотренных фильмов?', ''),
    //           b = prompt('На сколько оцените его?', '');
    //     if (a != null && b != null && a != '' && b != '' && a.length < 50){
    //         personalMovieDB.movies[a] = b;
    //         console.log('Done');
    //     } else {
    //         console.log('error');
    //         loopCount--;
    //     }
    //     loopCount++;
    // }

    // Loop 3
    // let loopCount = 0;
    // do {
    //     const a = prompt('Один из последних просмотренных фильмов?', ''),
    //           b = prompt('На сколько оцените его?', '');
    //     if (a != null && b != null && a != '' && b != '' && a.length < 50){
    //         personalMovieDB.movies[a] = b;
    //         console.log('Done');
    //     } else {
    //         console.log('error');
    //         loopCount--;
    //     }
    //     loopCount++;
    // }
    // while (loopCount < 2);

    if ( personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }


    console.log("Hello Practice 1");
    console.log(numberOfFilms);
    console.log(personalMovieDB);
    // console.log(personalMovieDB.movies.firstFilm);

})();