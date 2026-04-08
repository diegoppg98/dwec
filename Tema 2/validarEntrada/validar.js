function comprobarValidez() {
    let passwordInput = document.getElementById("password");

    let expresionPass = "^[A-Za-z0-9$*+]{8,15}$";
    let expresionUrl="";

    let varRegex = new RegExp(expresionPass);
    
    if(varRegex.test(passwordInput.value)){
        //alert("Contraseña válida");
        passwordInput.style.borderColor = "green";
    }
    else{
        passwordInput.style.borderColor = "red";
        //alert("Contraseña no válida");
        //Mostrar mensaje de error
        //passwordInput.setCustomValidity("La contraseña debe tener al menos 8 caracteres alfanuméricos.");
        //passwordInput.reportValidity();
    }
}
