function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
    this.depositarPoup = function(valor){
        this.saldoPoup += valor;
    }
}

const ela = new Cliente('lari', 12134, 'aaaa', 100)
const eu = new ClientePoupanca('junior', 1234, 'aaaa', 100, 200);
eu.depositarPoup(100)

console.log(eu);
console.log('---------')
console.log(ela)