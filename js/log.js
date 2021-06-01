class FormularioLogin{
    constructor(){
    }

    getLogin(){
        var Principal = document.getElementById("Principal");
        Principal.innerHTML = "";

        var rowt = document.createElement("div");
        rowt.className = "row";
        Principal.appendChild(rowt);

        rowt.appendChild(DivColSm());

        var div2 = DivColSm();
        rowt.appendChild(div2);

        var titulo = document.createElement("h1");
        titulo.innerHTML = "Login";
        titulo.className = "text-primary";
        div2.appendChild(titulo);
        //
        var row = document.createElement("div");
        row.className = "row";
        Principal.appendChild(row);

        row.appendChild(DivColSm());

        var div2 = DivColSm();
        row.appendChild(div2);
        
        var formUs = DivFormGroup();
        div2.appendChild(formUs);

        var Usuario = document.createElement("input");
        Usuario.type = "text";
        Usuario.className = "form-control"
        Usuario.placeholder = "Usuario";
        Usuario.id = "Usuario";
        formUs.appendChild(Usuario);

        var formCl = DivFormGroup();
        div2.appendChild(formCl);

        var Clave = document.createElement("input");
        Clave.type = "password";
        Clave.className = "form-control";
        Clave.placeholder = "Password";
        Clave.id = "Clave";
        formCl.appendChild(Clave);

        var formBtn = DivFormGroup();
        div2.appendChild(formBtn);

        var btn = document.createElement("button");
        btn.innerHTML = "Ingresar"
        btn.className = "btn btn-primary"
        btn.onclick = function() {
            Login();
        }
        formBtn.appendChild(btn);
    }
}