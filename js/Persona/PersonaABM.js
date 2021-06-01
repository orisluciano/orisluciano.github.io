class PersonaABM{
    constructor(){

    }

    PersonaABM(){
        //alert("PersonaABM");

        var Principal = document.getElementById("Principal");
        Principal.innerHTML = "";

        var container = document.createElement("div");
        container.className = "container";
        Principal.appendChild(container);

        var row1 = Row();
        container.appendChild(row1);

        row1.appendChild(DivColSm());
        var div = DivColSm();
        row1.appendChild(div);

        var groupNombre = DivFormGroup();
        div.appendChild(groupNombre);
        var TxtNombre = document.createElement("input");
        TxtNombre.type = "text";
        TxtNombre.placeholder = "Escriba su nombre..."
        TxtNombre.className = "form-control";
        TxtNombre.id = "TxtNombre";
        groupNombre.appendChild(TxtNombre);

        var groupApellido = DivFormGroup();
        div.appendChild(groupApellido);

        var TxtApellido = document.createElement("input");
        TxtApellido.type = "text";
        TxtApellido.placeholder = "Escriba su apellido..."
        TxtApellido.className = "form-control";
        TxtApellido.id = "TxtApellido";
        groupApellido.appendChild(TxtApellido);

        var groupBoton = DivFormGroup();
        div.appendChild(groupBoton);

        var Boton = document.createElement("button");
        Boton.className = "btn btn-primary";
        Boton.innerHTML = "Aceptar";
        Boton.onclick = function () {
            var persona = new Persona(TxtNombre.value, TxtApellido.value);
            var servicio = new ServicioPersona();
            servicio.Nuevo(persona);
            servicio.Nuevo(persona);
            alert(servicio.Todo());
            console.log(servicio.Todo());
            //CargarHome();
            var algo = new PersonaABM();
            algo.PersonaGrilla();
        };
        groupBoton.appendChild(Boton);
    }

    PersonaGrilla(){
        var persona = new Persona(1,"Luciano", "Oris", "17-08-1990");
        var servicio = new ServicioPersona();
        servicio.Nuevo(persona);
        servicio.Nuevo(persona);
        servicio.Nuevo(persona);
        servicio.Nuevo(persona);
        
        var Principal = document.getElementById("Principal");
        Principal.innerHTML = "";

        var rowtabla = Row();
        Principal.appendChild(rowtabla);

        var tabla = document.createElement("table");
        tabla.className = "table table-bordered bg-light";
        rowtabla.appendChild(tabla);
        var arrayCampos = ["Id", "Nombre", "Apellido", "Fecha Nac"];

        for (let index = 0; index < arrayCampos.length; index++) {
            var th = document.createElement("th");
            th.innerHTML = arrayCampos[index];
            tabla.appendChild(th);
        }

        for (let index = 0; index < servicio.Todo().length; index++) {
            var fila = document.createElement("tr");
            tabla.appendChild(fila);

            var colId = document.createElement("td")
            colId.innerHTML = servicio.Todo()[index].Id;
            var columna1 = document.createElement("td");
            columna1.innerHTML = servicio.Todo()[index].Nombre;
            var columna2 = document.createElement("td");
            columna2.innerHTML = servicio.Todo()[index].Apellido;
            var colFecha = document.createElement("td");
            colFecha. innerHTML = servicio.Todo()[index].Fecha;
            var colMod = document.createElement("td");
            /*var botonMod = document.createElement("button");
            botonMod.innerHTML = "Modificar ";
            botonMod.className = "btn btn-success";
            botonMod.onclick = function () {
                CargarabmPersona();
            }
            var icoMod = document.createElement("i");
            icoMod.className = "fa fa-pencil-square-o";
            botonMod.appendChild(icoMod);*/
            var botonMod = BotonModificar();
            botonMod.onclick = function(){
                CargarabmPersona();
            }
            colMod.appendChild(botonMod);
            var colEli = document.createElement("td");
            var botonEli = document.createElement("button");
            botonEli.innerHTML = "Eliminar ";
            botonEli.className = "btn btn-danger";
            botonEli.onclick = function () {
                CargarabmPersona();
            }
            var icoEli = document.createElement("i");
            icoEli.className = "fa fa-trash";
            botonEli.appendChild(icoEli);
            colEli.appendChild(botonEli);
            fila.appendChild(colId);
            fila.appendChild(columna1);
            fila.appendChild(columna2);
            fila.appendChild(colFecha);
            fila.appendChild(colMod);
            fila.appendChild(colEli);
        }
        var btnVolver = document.createElement("button");
            btnVolver.innerHTML = "Volver";
            btnVolver.className = "btn btn-primary";
            btnVolver.onclick = function(){
                CargarHome();
            }
            Principal.appendChild(btnVolver);
    }
}