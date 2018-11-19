/*

    Задание 3:

    1. Создать ф-ю конструктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

function Dog(name, surname) {
    this.name = name;
    this.surname = surname;
    this.status = 'running!';
    this.showName = function () {
        console.log("кличка собаки: " + this.name + " " + this.surname+" и она "+this.status);
    },
        this.statusChange = function () {
            if (this.status === "running!") {
                this.status = "eating!";
            } else if (this.status === "eating!") {
                this.status = "running!";
            }
        },
        this.showAllProps = function () {
            for (this.key in this) {
                console.log(this.key, this[this.key]);
            }

        }
}
var Dog1 = new Dog("Chekushka","HZ");
Dog1.showName();
Dog1.statusChange();
//Dog1.showName();
Dog1.showAllProps();
