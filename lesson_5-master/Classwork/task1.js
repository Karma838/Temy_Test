/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

var Train = {
    name:"433",
    speed:120,
    passangers:54,
    setOff:function(){
        console.log("Train ",this.name, " везет " ,this.passangers," со скоростью ",this.speed);
    },
    stop:function(){
        console.log("Train ",this.name, " остановился.Скорость " ,0);
    },
    take:function (newpass) {
        this.passangers += newpass;

    }
}

Train.setOff();
Train.stop();
var neww = +prompt("Введите количество новых пассажиров");
Train.take(neww);
Train.setOff();