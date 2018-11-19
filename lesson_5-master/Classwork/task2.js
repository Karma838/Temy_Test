/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  let colors = {
    background: 'purple',
    color: 'white'
  }
var bindblock = document.getElementById("bind_block");

  function myCall(back){
    document.body.style.background = back;
    document.body.style.color = this.color;
    let head1 = document.createElement('h1');
    head1.innerText = 'I know how binding works in JS';
    bindblock.appendChild(head1);
    console.log(this.background," ",this.color);

  }

function myBind(){
    document.body.style.background = this.background;
    document.body.style.color = this.color;
    console.log(this.background," ",this.color);
    let head1 = document.createElement('h1');
    head1.innerText = 'I know how binding works in JS';
    bindblock.appendChild(head1);
    console.log(this.background," ",this.color);

}

function myApply(string,color){
    document.body.style.background = this.background;
    document.body.style.color = color;
    let head1 = document.createElement('h1');
    head1.innerText = string;
    bindblock.appendChild(head1);
    console.log(this.background," ",this.color);

}
 // window.addEventListener("load", myCall.call(colors, 'red' ));
 //  window.addEventListener("load",myBind.bind(colors));
//   window.addEventListener("load",myApply.apply(colors,["I know how binding works in JS",'black']));


