window.addEventListener("load", function () {

    var sbmBtn = document.getElementById("submit");
    fullfil();
    sbmBtn.addEventListener("click",()=>{
        event.preventDefault();
        validate();

    })




});

var getCountry = "http://localhost:3000/countries";
var getStates = "http://localhost:3000/states";
var getCities = "http://localhost:3000/cities";
var countrySelect = document.getElementById("Country");
var statesSelect = document.getElementById("State");
var citiesSelect = document.getElementById("City");


function Getter(address) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', address, false);

    xhr.send();

    if (xhr.status !== 200) {

       console.log("Error:" ,xhr.status, xhr.statusText);
    } else {
        var myResponse = JSON.parse(xhr.responseText);
        if(address === getCountry){

        //    console.log(xhr, myResponse);
       //     myResponse.map(item => console.log(item))
        }else if(address === getStates){

        //    console.log(xhr, myResponse);
      //      myResponse.map(item => console.log(item))
        }
        else if(address === getCities){

         //   console.log(xhr, myResponse);
      //      myResponse.map(item => console.log(item))
        }

    }
return myResponse;

}


function fullfil() {

    let countries = Getter(getCountry);
    let states = Getter(getStates);
    let cities = Getter(getCities);



    countries.forEach(function(country){
        let option = new Option(country.name);
        option.id = country.name;
        countrySelect.appendChild(option);
    });
    countrySelect.selectedIndex = -1;
    countrySelect.addEventListener('change', function() {
      //  console.log(this.value);
        if(this.value === "Ukraine"){
            ClearStates();
            states.forEach(function(state){
                let option = new Option(state.name);
                option.id = state.id;
                statesSelect.appendChild(option);
            });
            statesSelect.removeAttribute("hidden");
            statesSelect.selectedIndex = -1;
            document.getElementById("StateHead").removeAttribute("hidden");
        }


    }, false);



    statesSelect.addEventListener('change', function() {
        let sel = statesSelect.selectedIndex;
        ClearCities();
        cities.forEach(function(city){
                if(city.state_id - 1 == sel){
                   // console.log("state_id:",city.state_id);
                   // console.log("selected:",sel);
                    let option = new Option(city.name);
                    option.id = city.id;
                    citiesSelect.appendChild(option);

                }

            });
        citiesSelect.selectedIndex = -1;
        citiesSelect.removeAttribute("hidden");
        document.getElementById("CityHead").removeAttribute("hidden");


    }, false);


    function ClearStates()
    {
        statesSelect.options.length = 0;
    }

    function ClearCities()
    {
        citiesSelect.options.length = 0;
    }

}







function validate(){
    let checkemail ,
     checkname ,
     checkphone ,
     checkCountry ,
     checkState ,
     checkCity ,
     phone = document.getElementById('phone'),
     name = document.getElementById("name"),
     email = document.getElementById("email"),
     phoneRGEX = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/,
     nameRGEX =  /^[A-Za-z]+$/,
     emailRGEX  = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
     phoneResult = phoneRGEX.test(phone.value),
     nameResult = nameRGEX.test(name.value),
     emailResult = emailRGEX.test(email.value);
  /*  phone.classList.add("OK");
    name.classList.add("OK");
    email.classList.add("OK");
    countrySelect.classList.add("OK");
    statesSelect.classList.add("OK");
    citiesSelect.classList.add("OK");
*/
    if(nameResult && name.value!==""){
        name.classList.remove("error");
        name.classList.add("OK");
        checkname = true;
       // console.log("True name");
    }else if(name.value ==="" || !nameResult) {
        name.classList.remove("OK");
        name.classList.add("error");
        checkname = false;
        console.log("check name");

    }
    if(emailResult && email.value!==""){
        email.classList.remove("error");
        email.classList.add("OK");
        checkemail = true;
      //  console.log("True email");
    }else if(email.value ==="" || !emailResult) {
        email.classList.remove("OK");
        email.classList.add("error");
        checkemail = false;
        console.log("check email");
    }
    if(phoneResult && phone!==""){
        phone.classList.remove("error");
        phone.classList.add("OK");
        checkphone = true;
       // console.log("True phone");
    }else if(phone.value ==="" || !phoneResult) {
        phone.classList.remove("OK");
        phone.classList.add("error");
        checkphone = false;
        console.log("check phone");
    }
    if(countrySelect.selectedIndex !== -1 && countrySelect.value !== ""){
        countrySelect.classList.remove("error");
        countrySelect.classList.add("OK");
        checkCountry = true;
       // console.log("True country");
    }else if(countrySelect === -1) {
        countrySelect.classList.remove("OK");
        countrySelect.classList.add("error");
        checkCountry = false;
        console.log("check country");
    }
    if(statesSelect.selectedIndex !== -1 && statesSelect.value !== ""){
        statesSelect.classList.remove("error");
        statesSelect.classList.add("OK");
        checkState = true;
       // console.log("True state");
    }else if(statesSelect.selectedIndex  === -1) {
        statesSelect.classList.remove("OK");
        statesSelect.classList.add("error");
        checkState = false;
        console.log("check state");

    }
    if(citiesSelect.selectedIndex !== -1 && citiesSelect.value !== "" ){
        citiesSelect.classList.remove("error");
        citiesSelect.classList.add("OK");
        checkCity = true;
      //  console.log("True city");
    }else if(citiesSelect.selectedIndex === -1) {
        citiesSelect.classList.remove("OK");
        citiesSelect.classList.add("error");
        checkCity = false;
        console.log("check city");

    }

    if(checkname && checkemail && checkphone && checkCountry && checkState && checkCity ){
        console.log("Yes Validate");
        return true;

    }else if(!checkname || !checkemail || !checkphone || !checkCountry || !checkState || !checkCity){
        console.log("Nope Validate");
        return false;
    }
}


