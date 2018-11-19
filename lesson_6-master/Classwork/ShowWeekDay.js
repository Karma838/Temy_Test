window.onload = function () {
    var ShowButton = document.getElementById("ShowDayButton");


    ShowButton.addEventListener("click",function () {


        var dateInput = document.getElementById("MyDateSelector"),
            dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

            let date =  new Date(dateInput.value);
            console.log(date);
            console.log(date.getDay());
        const result = (item, key) => {if(key === date.getDay())document.getElementById("result").innerText = item};
        dayArray.forEach( result );
    })








}