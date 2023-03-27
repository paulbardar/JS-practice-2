
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами

Practice 3
/* Задание на урок:

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/




;(function(){
    'use strict';

    let numberOfFilms;

    function start(){
        numberOfFilms = +prompt("How many films have you watched?", "");

        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("How many films have you watched?", "");
        }
    }

    start();

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

    

    function rememberMyFilms() {
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
    }

    // rememberMyFilms();

    

    function detectPersonalLevel() {
        if ( personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    }

    // detectPersonalLevel();

    function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }

    showMyDB(personalMovieDB.privat);

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }

    writeYourGenres();

    console.log("Hello Practice 3");
    console.log(numberOfFilms);
   
    // console.log(personalMovieDB.movies.firstFilm);

})();