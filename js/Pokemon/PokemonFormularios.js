class PokemonFormularios{
    Grilla() {
        var Principal = document.getElementById("Principal");
        Principal.innerHTML = "";
        Principal.appendChild(BotonHome());

        var row = Row();
        Principal.appendChild(row);

        var table = document.createElement("table");
        table.className = "table table-bordered bg-light";
        row.appendChild(table);

        var cabeceras = ["Nombre", "Url"]

        for (let index = 0; index < cabeceras.length; index++) {
            var th = document.createElement("th");
            th.innerHTML = cabeceras[index];
            table.appendChild(th);
        }

        var PeticionApi = new ServicioPokemon();
        var  lista = PeticionApi.GetAll();
        console.log(lista);

        for (let index = 0; index < lista.length; index++) {
            alert(lista[index]);
        }

        const traer = async function () {
            console.log(await PeticionApi.GetAll());
            lista =  await PeticionApi.GetAll();
            for (let index = 0; index < lista.length; index++) {
                alert(lista[index].name);
            }
        }
        traer();
        console.log(lista);
    }
}