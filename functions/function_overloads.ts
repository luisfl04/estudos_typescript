/* 
    Implementar várias assinaturas diferentes para uma mesma função.

    Uma única função com corpo deve ser implementada, de modo que essa implementação cubra a lógica
    de todas as assinaturas.
*/

// Assinaturas:
function retornarNome(primeiro_nome: string): String;
function retornarNome(primeiro_nome: string, sobrenome: string): String;
function retornarNome(primeiro_nome: string, sobrenome: string, ultimo_nome: string): String;


// Implementação para todas as assinaturas:
function retornarNome(primeiro_nome:any, sobrenome?: any, ultimo_nome?: any){
    if(sobrenome !== undefined && ultimo_nome !== undefined){
        return primeiro_nome + sobrenome + ultimo_nome;
    }
    else if(sobrenome !== undefined){
        return primeiro_nome + " " +  sobrenome;
    }
    return primeiro_nome;
}
const teste = retornarNome("luis", "felipe", "oliveira");