function Inject(target: any, propertyKey: string | symbol | undefined, parameterIndex: number) {
  console.log(`[Inject] Injetando no parâmetro ${parameterIndex} do método '${String(propertyKey)}'`);
}

class ServicoDeBanco { /* ... */ }

class ServicoDeUsuarios {
  constructor(@Inject private db: ServicoDeBanco) {
  }
  
  buscarUsuario(
    @Inject id: string 
  ) {
  }
}