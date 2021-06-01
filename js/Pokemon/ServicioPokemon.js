class ServicioPokemon{
    async GetAll(){
        var respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
        var j = await respuesta.json();
        
        var pokeRes = new RespuestaPokemon(j.count, j.next, j.previous, j.results);
        //console.log(pokeRes);
        //console.log(j.results);
        /*for (let index = 0; index < pokeRes.result.length; index++) {
            console.log(pokeRes.result[index]);
        }*/
        return await pokeRes.result;
    }
}