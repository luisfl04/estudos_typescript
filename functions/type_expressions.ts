// Implementação de uma função 'type expression', que define uma forma base de uma função que pode ser usada 
// em outras diferentes funções

type base_funcao_calculo = (first_num: number, second_num: number) => number;
const somar_numeros: base_funcao_calculo = (num1, num2) => {
    return num1 + num2;
}
const subtrair_numeros: base_funcao_calculo = (num1, num2) => {
    return num1 - num2;
}