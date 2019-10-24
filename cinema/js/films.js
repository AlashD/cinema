const ganar_1= 'фантастика'
const ganar_2= 'боевик'
const ganar_3= 'приключения'
const ganar_4= 'фэнтези'
const ganar_5= 'драма'
const ganar_6= 'комедия'

let start_film_1 = '10:00'
let start_film_2 = '12:00'
let start_film_3 = '14:00'

let name_film_1 = 'Человек-паук'
let name_film_2 = 'Собачья жизнь 2'
let name_film_3 = 'История игрушек 4'
let name_film_4 = 'Люди в черном: Интернэшнл'

let ganar_film_1 = ganar_1 + ', ' ganar_2 + ', ' ganar_3
let ganar_film_2 = ganar_3 + ', ' ganar_4 + ', ' ganar_6
let ganar_film_4 = ganar_1 + ', ' ganar_2 + ', ' ganar_3
let ganar_film_3 = ganar_1 + ', ' ganar_2 + ', ' ganar_3

Console.log(document.getElementById('name_film_1'))
let Element_start_film1 = document.getElementById('start_film_1')
let Element_ganar_film1 = document.getElementById('ganer_film_1')
let Element_name_film1 = document.getElementById('name_film_1')

Element_start_film1.innerHTML = start_film_1
Element_name_film1.innerHTML = name_film_1
Element_ganar_film1.innerHTML = ganar_film_1