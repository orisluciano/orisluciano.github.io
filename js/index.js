var GET = "GET";
var POST = "POST";
var UsuarioLogueado = "Login";
//var servicio  = new ServicioPersona();

//CargarHome();
function LogCargado() {
    var Login = new FormularioLogin();
    Login.getLogin();
}

function Ajax(metodo, direccion, datosMandar, elemento) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById(elemento).innerHTML = this.responseText;
        //var algo = JSON.parse(this.responseText);
        }
    };
    if (metodo == GET) {
        xhttp.open(metodo, direccion + datosMandar, true);
        xhttp.send();   
    }
    if (metodo == POST) {
        xhttp.open(metodo, direccion, true);
        xhttp.send(datosMandar);
    }
}

function CargarLogin() {
    var dir = "html/login.html";
    var datosMandar = "";
    var respuesta;
    var Elemento = "Principal";
    respuesta = Ajax(GET, dir, datosMandar, Elemento);
    //respuesta = Respuesta;
    //alert(respuesta);
}

function CargarHome() {
    var dir = "html/home.html";
    var datosMandar = "";
    var respuesta;
    var Elemento = "Principal";
    respuesta = Ajax(GET, dir, datosMandar, Elemento);
    //servicio = new ServicioPersona();
}

function CargarabmPersona() {
    var Persona = new PersonaABM();
    Persona.PersonaABM();
}

async function CargarFetch() {
    //alert("cargarfetch");
    //var respuesta = await fetch("html/login.html");
    var respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
    //alert(respuesta.responseText);
    result = await respuesta.json();
    console.log(result.result);
    if(result.result == "faltan datos"){alert(result.result);}
    //var Principal = document.getElementById("Principal");
    //Principal.innerHTML = await respuesta.text();
}

async function CargarPokemon() {
    var Poke = new PokemonFormularios();
    Poke.Grilla();
}