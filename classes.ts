

class Usuario {
    // Valores 'readonly' somente podem ser definidos no construtor da classe
    readonly id: number;
    private name: string;
    private username: string;
    private readonly password: string; 

    constructor(id: number, name:string, username:string, password: string){
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
    }

    public getName(): string {
        return this.name;
    }
    
    public setUsername(new_username: string){
        this.username = new_username;
    }

}

