function logClass(constructor: Function){
    console.log(`[Log Class] -> Classe ${constructor.name} definida!`);
    (constructor as any).tipo_constructor = "Classe carregada";
}

@logClass
class User{
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

