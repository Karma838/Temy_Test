function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



window.addEventListener("load", function () {
    var myWidth = document.getElementById('myWidth'),
        result = document.getElementById("result"),
        myColor = document.getElementById("myColor"),
        myHeight = document.getElementById("myHeight"),
        myRadius = document.getElementById("myRadius"),
        myMargin = document.getElementById("myMargin"),
        myColorSet = document.getElementById('colors');


    myWidth.addEventListener('input', function(event){
        console.log("Width: ",event.target.value );
        result.style.width = event.target.value + 'px';
    });
    myHeight.addEventListener('input', function(event){
        console.log("Height: ", event.target.value );
        result.style.height = event.target.value + 'px';
    });
    myRadius.addEventListener('input', function(event){
        console.log("Radius: ", event.target.value );
        result.style.borderRadius = event.target.value + 'px';
    });
    myMargin.addEventListener('input', function(event){
        console.log("Margin: ", event.target.value );
        result.style.margin = event.target.value + 'px';
    });

    myColor.addEventListener('click', function(event){
        event.preventDefault();
        for(i = 0;i < 20;i++){
            var colorpoint = document.createElement('div');
            colorpoint.classList.add('circle');
            colorpoint.style.background = "rgb(" + getRandomIntInclusive(0, 255) + "," + getRandomIntInclusive(0, 255) + "," + getRandomIntInclusive(0, 255) + ")";
            colorpoint.addEventListener("click",function () {
                result.style.background = this.style.background;
            })
            myColorSet.appendChild(colorpoint);
        }
    });
});