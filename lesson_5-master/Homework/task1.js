/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>

*/

window.onload =()=>{
var Avatar ={
    avatar:"http://avatars.ucoz.ru/_ld/0/95.jpg"
}



    function Comment(name,text) {
        this.name = name;
        this.text = text;
        this.avatar = "http://avatars.ucoz.ru/_ld/0/95.jpg";
        this.showName = function () {
            console.log(this.avatar +" человек: " + this.name + " Текст: " + this.text);
        }
    }



var CommentArray = [new Comment("Vasya","Hello"),new Comment("John","My"),new Comment("Ivan","Name is"),new Comment("Donald ","I Love Cheese")];


function ShowComment(array){
array.forEach((item)=>{
    let para = document.createElement("p");
    para.style.fontWeight ="900";
    let img = document.createElement("img");
    img.setAttribute("src",item.avatar);
    img.setAttribute("width","25");
    img.setAttribute("height","25");
    para.appendChild(img);
    para.innerHTML += item.name + " says: '" + item.text+"'";
    document.getElementById("Comment").appendChild(para)})

}

    ShowComment(CommentArray);
}
