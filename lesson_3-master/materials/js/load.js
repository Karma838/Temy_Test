// DOMContentLoaded – браузер полностью загрузил HTML и построил DOM-дерево.
// load – браузер загрузил все ресурсы.

  // Аналог jQuery $(document).ready()
  // document.addEventListener("DOMContentLoaded", function(event) {
  //     console.log("DOM fully loaded and parsed");
  // });
  // window.addEventListener('load', func );

  // var appendImage = document.getElementById('appendImage');

  // appendImage.addEventListener('click', function(){
  //   var ImageCat = new Image(100, 100);
  //       ImageCat.onload = function(){
  //         ImageCat.classList.add('loadedImage');
  //       };

  //       ImageCat.onerror = function(err){
  //         new Error('Some Error on load', err);
  //       };

  //       ImageCat.src = 'images/cat4.jpg';
  //       appendBlock.appendChild(ImageCat);
  // });

window.addEventListener('load', function () {
  var loader = document.getElementById("loader");
  loader.classList.add("hidden");
})

