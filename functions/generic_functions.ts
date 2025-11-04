/* 
    Usado na implementação de funções que podem implementar sua lógica em qualquer tipos de dados, de forma dinâmica.

    sintaxe -> function name_function<T>(param1: T): T | undefined{}
*/

function retornarElementoGenerico<T>(param: T): T | undefined {
    return param;
}
const elem = retornarElementoGenerico("Qualquer tipo de elemento aqui");