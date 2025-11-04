/* Basicamente é relacionado a definição de um objeto que pode ser chamado como uma função.
 
    Sintaxe -> objeto{(param1: tipo): tipo_retorno; Outros campos....}

    Pode ser definido dentro de um type ou interface.
*/

// Interface com o objeto:
interface Calculadora{
    (a: number, b: number):number;
    numero_operacoes: number;
}

// Função básica que será relacionada ao objeto:
const somar_uma_unidade_ao_parametro = (num1: number, num2: number): number => {
    num1+=1;
    num2+=1;
    return num1 + num2;
}

// Anexando a função à uma propiedade da interface:
(somar_uma_unidade_ao_parametro as Calculadora).numero_operacoes = 2;

// Relacionando uma variável com a função:
const objeto_chamavel: Calculadora = somar_uma_unidade_ao_parametro;

// Usando o objeto em sua implementação padrão e como função:
let a:number = 1, b:number = 1;
let r:number = objeto_chamavel(a, b);
let numero_operacoes = objeto_chamavel.numero_operacoes;