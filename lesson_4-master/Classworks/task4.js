window.addEventListener("load", function () {
    var countries = ['Ukraine', 'Poland', 'USA'];
    var ukraineCity = ['Kyiv', 'Lviv', 'Odessa', 'Charkiv'];
    var polandCity = ['Warszawa', 'Poznan', 'Krakow', 'Katowice'];
    var usaCity = ['New York', 'Los Angeles', 'Las Vegas', 'Chicago'];
    var countrySelect = document.getElementById("countries");
    var citiesSelect = document.getElementById("cities");

    countries.forEach(function(country){
        let option = new Option(country);
        option.id = country;
        countrySelect.appendChild(option);
    });
    console.log(countrySelect);
    countrySelect.addEventListener('change', function() {
        console.log(this.value);



        function ClearOptions()
        {
            citiesSelect.options.length = 0;
        }

        if(this.value == "Ukraine"){
            ClearOptions();
            ukraineCity.forEach(function(country){
                let option = new Option(country);
                option.id = country;
                citiesSelect.appendChild(option);
            });
        }else if(this.value == "Poland"){
            ClearOptions();
            polandCity.forEach(function(country){
                let option = new Option(country);
                option.id = country;
                citiesSelect.appendChild(option);
            });
        }else if(this.value == "USA") {
            ClearOptions();
            usaCity.forEach(function(country){
                let option = new Option(country);
                option.id = country;
                citiesSelect.appendChild(option);
            });
        }

    }, false);















});