class Cliente{
    constructor(nome, sobrenome, saldo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -= valor;
    }
    verSaldo(){
        return this.saldo;
    }
}

// Herdar a classe Cliente
class ClienteBLack extends Cliente{
    constructor(nome, sobrenome, saldo, limite){
        super(nome, sobrenome, saldo);
        this.limite = limite;
    }
    verLimite(){
        return this.limite
    }
}

function showClient(obj){
    const keyObj = Object.keys(obj);
    const premium = keyObj.find(element => element === 'limite')
    if (premium != null){
        console.log(`Cliente ${obj.nome} é Cliente Premium Black`)
    } else{
        console.log(`Cliente ${obj.nome} não é um Cliente Premium Black`)
    }
}

const clienteA = new Cliente('junior', 'fagundes', 5800);
const clienteB = new ClienteBLack('bruna', 'cardereli', 10000, 100000);
