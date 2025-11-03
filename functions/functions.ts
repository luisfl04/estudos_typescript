// Sintaxe de uma função -> function <name_function>(<name_param>: <type_param>): <type_function> {body....} 
function verifyIsActive(client: any): boolean{
    if(client.is_active){
        return true;
    }
    return true;
}

let client_example:any = {
    id: 1,
    is_active: false
}
let result:boolean = verifyIsActive(client_example); 

// Arrow functions -> sintax: const <name_arrow_function> = (args: type_arg): <type_return> => {body..}
const returnIdClient = (client: any): void => {
    let id = client.id; 
    console.log(id);
}

// Função com parâmetro opcional:
const activeClient = (client: any, returnId?: boolean): void|string => {
    if(returnId){
        client.is_active = true;
        return client.id;
    }
    client.is_active = true;
}
let statusClient = activeClient(client_example, true);
