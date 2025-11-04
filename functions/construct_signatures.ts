/* 
   Usado em implementações de construtores de classes.

*/

interface HomeInstance{
    getNameHome(): string;
}

interface HomeConstructor {
    new (name_home: string): HomeInstance;
}

class MyHome implements HomeInstance {
    
    name_home: string;
    
    constructor(name_home: string){
        name_home = name_home.concat("13");
        this.name_home = name_home;
    }

    getNameHome(): string {
        return this.name_home;
    }
}

function createHome(constructor: HomeConstructor, name_home: string){
    return new constructor(name_home);
}

const myInstanceHome = createHome(MyHome, "WhiteHouse");
console.log(myInstanceHome.getNameHome())
    