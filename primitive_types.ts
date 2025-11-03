// Arquivo com implementação de tipos primitivos ts


// Sintaxe -> let/const <variable_name>: type = <value>
let name:string = "Lula";
let age:number = 11;
let is_active:boolean = false;

// Inferência de tipo:
let first_name = "Simão"
let last_name = "Pedro";
let full_name = first_name + last_name;
let width = 1.1;
let isFalse = true;

// Definindo arrays:
let numbers:number[] = [3,4,5,6];
let also_numbers:Array<number> = [3,4,5,6];

// Type 'any'(Permite que uma variável receba o valor de qualquer tipo primitivo, removendo a checagem de tipo):
let a: any = 1;
a = "a";



