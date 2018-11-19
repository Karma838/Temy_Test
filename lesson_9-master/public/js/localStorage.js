/*
  localStorage
  window.localStorage
*/
  // console.log( window.localStorage );
// Запись в ЛС
// localStorage.setItem('myCat', 'Tom');
// localStorage.setItem('back', 'blue');
// // Чтение с ЛС
var cat = localStorage.getItem("myCat");
// // Удаление с ЛС
localStorage.removeItem("myCat");
console.log( cat );
// Если не найдено, вернет Null
var background = localStorage.getItem("back");
// console.log( window.localStorage );

let obj = {
  name: 'Vasya',
  learning: true
}
localStorage.setItem('user', JSON.stringify(obj) );
console.log( JSON.parse( localStorage.getItem("user") ) );
// console.log( JSON.parse( localStorage.getItem("JSON") ) );
//
if( background !== null){
  document.body.style.backgroundColor = background;
}

/*

  Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

  Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678
*/
