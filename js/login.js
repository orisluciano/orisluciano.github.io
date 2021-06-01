function Login() {
    var Usuario = document.getElementById("Usuario");
    var Clave = document.getElementById("Clave");

    alert("Usuario: " + Usuario.value + " Clave: " + Clave.value);
    console.log("Usuario: " + Usuario.value + " Clave: " + Clave.value);

    if (Usuario.value == "" || Clave.value == "") {
        alert("Rellene todos los campos");
    }
    else{
        if (Usuario.value = "admin" && Clave.value == "admin") {
            UsuarioLogueado = Usuario.value;
            alert(UsuarioLogueado);
            console.log(UsuarioLogueado);
            CargarHome();
        }
        else{
            alert("Usuario y/o Clave incorrectas");
        }
    }
}