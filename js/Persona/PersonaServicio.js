class ServicioPersona{
    constructor(){
        this.Lista = new Array();
    }

    Nuevo(Persona){
        this.Lista.push(Persona);
    }

    Modificar(index, Persona){
        this.Lista[index] = Persona;
    }

    Borrar(index){
        delete this.Lista[index];
    }

    Todo(){
        return this.Lista;
    }
}