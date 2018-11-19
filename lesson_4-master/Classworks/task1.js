window.addEventListener("load", function () {
    var mainForm = document.getElementById('MyValidateForm'),
        login = mainForm.elements.login,
        password = mainForm.elements.pas1,
        repass = mainForm.elements.pas2,
        checkbox = mainForm.elements.checkbox,
        checkpass = false,
        checklogin = false;

    mainForm.addEventListener('submit', function(e){
       e.preventDefault();
        login.classList.remove("OK","error");
        password.classList.remove("OK","error");
        repass.classList.remove("OK","error");
       if(login.value !==""){
           login.classList.add("OK");
           checklogin = true;
       }else if(login.value ===""){
           login.classList.remove("OK");
           login.classList.add("error");
           checklogin = false;
       }
       if(password.value === repass.value || password.value === "" ){
           password.classList.remove("error");
           repass.classList.remove("error");
           password.classList.add("OK");
           repass.classList.add("OK");
           checkpass = true;
       }else {
           password.classList.remove("OK");
           repass.classList.remove("OK");
           password.classList.add("error");
           repass.classList.add("error");
           checkpass = false;
       }
       if(checklogin  && checkpass){
           alert("WELCOME");
       }else{
           alert("ERROR");
       }

    });
    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
            mainForm.elements.subm.removeAttribute("disabled");
        } else {
            mainForm.elements.subm.setAttribute("disabled","disabled");
        }
    });

    });

