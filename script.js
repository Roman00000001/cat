function run() {
    let petAge = document.querySelector(".petAge"); // помещаем в переменную верхнее поле ввода
    let humanAge = document.querySelector('.humanAge'); // помещаем в переменную нижнее поле ввода
    let age = petAge.value; // помещаем в переменную содержимое верхнего поля ввода

    age = Math.log(age) * 16 + 31; // округляем
    humanAge.value = Math.floor(age); // выводим результат в нижнее поле

}
let button = document.querySelector('.btn');
button.addEventListener('click', run);

/*function catrun() {
    let catAge = document.querySelector(".catAge"); // помещаем в переменную верхнее поле ввода
    let humanCatAge = document.querySelector('.humanCatAge'); // помещаем в переменную нижнее поле ввода
    let age2 = catAge.value; // помещаем в переменную содержимое верхнего поля ввода

    age2 = 24 + (age2 - 2) * 4; // округляем
    humanCatAge.value = Math.floor(age2); // выводим результат в нижнее поле
}
button = document.querySelector('.catbtn');
button.addEventListener('click', catrun);*/

function catrun() {
    let catAge = document.querySelector('.catAge'); // помещаем в переменную верхнее поле ввода
    let humanCatAge = document.querySelector('.humanCatAge'); // помещаем в переменную нижнее поле ввода
    let age2 = catAge.value; // помещаем в переменную содержимое верхнего поля ввода

    age2 = 24 + (age2 - 2) * 4; // округляем
    humanCatAge.value = Math.floor(age2); // выводим результат в нижнее поле
}

button = document.querySelector('.btn');
const Button = document.querySelector('.btn'); // Объявляем переменную



button.addEventListener('click', catrun);
