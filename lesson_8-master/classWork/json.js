
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary



*/


window.onload = () =>{

    function JsonParser(json) {
        console.log("JSONParser: ",JSON.parse(json));
    }
    let Fn = document.getElementById("Fname");
    let Ln = document.getElementById("Lname");
    let Age = document.getElementById("Age");
    let jsStr = document.getElementById("jStr");
    let btn = document.getElementById("Confirm");
    btn.addEventListener("click",(event)=>{
        event.preventDefault();
        var Obj = {
            firstName:Fn.value,
            lastName:Ln.value,
            age:Age.value
        };
        console.log("Obj: ",Obj);
        var y = JSON.stringify(Obj);
        console.log("JSON: ",y);
        JsonParser(jsStr.value);

    })





};