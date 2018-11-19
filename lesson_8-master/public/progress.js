document.addEventListener('DOMContentLoaded', () => {

  const myUploadForm = document.forms.upload;
        myUploadForm.onsubmit = function(e){
          e.preventDefault();
          let input = myUploadForm.elements.myfile;
          let file = input.files[0];
          if (file) {
            upload(file);
          }
          return false;
        }

});


const upload = (file) => {
  let xhr = new XMLHttpRequest();
  // обработчик для закачки
  xhr.upload.onprogress = (e) => {
    console.log(e, e.loaded + ' / ' + e.total);
    let bar = document.getElementById('bar');
    let total = e.total;
    let current = e.loaded;
    let percent = (e.loaded * 100) / total;
    console.log( percent );
    bar.value = percent;
  }
  xhr.upload.onloadstart = (e) => console.log('onloadstart', e)
  xhr.upload.onload = (e) => console.log('load', e)
  xhr.upload.onloadend = (e) => console.log('onloadend', e)
  xhr.onload = xhr.onerror = function() {
    if (this.status == 200) {
      console.log("success");
    } else {
      console.log("error " + this.status);
    }
  };
  xhr.open("POST", "upload", true);
  xhr.send(file);
}
