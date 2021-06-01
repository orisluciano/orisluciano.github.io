function DivColSm() {
    var div = document.createElement("div");
    div.className = "col-sm-4";
    return div;
}

function DivFormGroup() {
    var formUs = document.createElement("div");
        formUs.className = "form-group";
        return formUs;
}

function Row() {
    var row = document.createElement("div");
        row.className = "row";
        return row;
}

function BotonModificar() {
    var botonMod = document.createElement("button");
            botonMod.innerHTML = "Modificar ";
            botonMod.className = "btn btn-success";
            /*botonMod.onclick = function () {
                CargarabmPersona();
            }*/
            var icoMod = document.createElement("i");
            icoMod.className = "fa fa-pencil-square-o";
            botonMod.appendChild(icoMod);
            return botonMod;
}

function BotonHome() {
    var botonHome = document.createElement("button");
    botonHome.innerHTML = "Home";
    botonHome.className = "btn btn-success";
    botonHome.onclick = function () {
        CargarHome();
    }
    var ico = document.createElement("i");
    ico.className = "fas fa-back";
    botonHome.appendChild(ico);
    return botonHome;
}