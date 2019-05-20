


window.addEventListener("load", function () {

    var sbmBtn = document.getElementById("submit");
    fullfil();
    render();
    sbmBtn.addEventListener("click",()=>{
        event.preventDefault();
        if(validate()){
           SendData(getUsers);
           render();
           ClearForm();
        };

    })
});

var getCountry = "http://localhost:3000/countries",
    getStates = "http://localhost:3000/states",
    getCities = "http://localhost:3000/cities",
    getUsers = "http://localhost:3000/users",
    countrySelect = document.getElementById("Country"),
    statesSelect = document.getElementById("State"),
    citiesSelect = document.getElementById("City");



function Getter(address) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', address, false);

    xhr.send();

    if (xhr.status !== 200) {

       console.log("Error:" ,xhr.status, xhr.statusText);
    } else {
        var myResponse = JSON.parse(xhr.responseText);
    }
return myResponse;
}

function render()
{

    let ul = document.getElementById("list");
    ul.removeAttribute("hidden");
    ul.innerText = "";
    let users = Getter(getUsers);

    let countries = Getter(getCountry);
    let states = Getter(getStates);
    let cities = Getter(getCities);



    users.forEach((user)=>{
        let date =  new Date(user.createdAt);
        let countryU,stateU,cityU;


        countries.forEach((country)=>{
            if(country.id == user.country_id)
            {
                countryU = country;
            }
        })
        states.forEach((state)=>{
            if(state.id == user.state_id)
            {
                stateU = state;
            }
        })
        cities.forEach((city)=>{
            if(city.id == user.city_id)
            {
                cityU = city;
            }
        })


       let li =  document.createElement("li");
        li.innerText = `Name: ${user.name}
        Email:${user.email} 
        Phone number: ${user.phone_number} 
        Country, state, city : ${countryU.name} , ${stateU.name} , ${cityU.name} 
        Date of Creation: ${date}
        `;
        ul.appendChild(li);
    })

}

function SendData(address){

    let xhr = new XMLHttpRequest(),
        phone = document.getElementById('phone'),
        name = document.getElementById("name"),
        email = document.getElementById("email"),
        countrySelect = document.getElementById("Country"),
        statesSelect = document.getElementById("State"),
        citiesSelect = document.getElementById("City");

    xhr.open("POST",address , false);
    xhr.setRequestHeader("Content-Type", "application/json");
    let someUser = {
        id:null,
        name:name.value,
        email:email.value,
        phone_number:phone.value,
        address:null,
        about_me:null,
        country_id:countrySelect.options[countrySelect.selectedIndex].id,
        state_id:statesSelect.options[statesSelect.selectedIndex].id,
        city_id:citiesSelect.options[citiesSelect.selectedIndex].id,
        createdAt:null
    };
 //  console.log(someUser);
    let data = JSON.stringify(someUser);
    xhr.send(data);
}

function fullfil() {

    let countries = Getter(getCountry);
    let states = Getter(getStates);
    let cities = Getter(getCities);



    countries.forEach(function(country){
        let option = new Option(country.name);
        option.id = country.id;
        countrySelect.appendChild(option);
    });
    countrySelect.selectedIndex = -1;
    countrySelect.addEventListener('change', function() {
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

function ClearForm()
{
    let  countrySelect = document.getElementById("Country"),
        statesSelect = document.getElementById("State"),
        citiesSelect = document.getElementById("City"),
        phone = document.getElementById('phone'),
        name = document.getElementById("name"),
        email = document.getElementById("email");

    name.value = "";
    email.value = "";
    phone.value = "";
    countrySelect.selectedIndex = -1;
    statesSelect.selectedIndex = -1;
    citiesSelect.selectedIndex = -1;
}

function validate(){
    let checkemail,
        checkname ,
        checkphone ,
        checkCountry ,
        checkState ,
        checkCity ,
        countrySelect = document.getElementById("Country"),
        statesSelect = document.getElementById("State"),
        citiesSelect = document.getElementById("City"),
        phone = document.getElementById('phone'),
        name = document.getElementById("name"),
        email = document.getElementById("email"),
        phoneRGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        nameRGEX =  /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
        emailRGEX  = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        phoneResult = phoneRGEX.test(phone.value),
        nameResult = nameRGEX.test(name.value),
        emailResult = emailRGEX.test(email.value);
   // console.log("name:",name.value);
    if(nameResult && name.value!==""){
        name.classList.remove("error");
        name.classList.add("OK");
        checkname = true;
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


