function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const implementacao_original = descriptor.value;

    // Redefinindo a implementação da função:
    descriptor.value = function(...args: any[]){
        console.log(`Chamando o método ${propertyKey} com os valores de parâmetros: ${JSON.stringify(args)}`);
        const numero_cpus = implementacao_original.apply(this, args);
        console.log(`[LogMethod] '${propertyKey}' retornou: ${JSON.stringify(numero_cpus)}`);
        return numero_cpus;
    }

    return descriptor;
}



class Computador{
    numero_cpus: number = 2;

    @LogMethod
    getNumeroCpus(a: number): number{
        return this.numero_cpus + a;
    }
}