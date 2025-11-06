function LogProperty(target: any, propertyKey: string) {
  console.log(`[LogProperty] Propriedade '${propertyKey}' definida em ${target.constructor.name}.`);
}

class Usuario {
  @LogProperty
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const user = new Usuario("Bruno");