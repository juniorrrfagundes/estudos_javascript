const pessoa = {
    nome: 'turci',
    idade: '11',
    contato: '1234455',
    saldo: 1000,
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    },
    versaldo: function(){
        return this.saldo;
    }
}

pessoa.depositar(1000);
pessoa.sacar(500);

let relatorio = '';

for (let info in pessoa){
    if (typeof pessoa[info] === 'function' || typeof pessoa[info] === 'object'){
        continue
    }else{
        relatorio += `
        ${info} -> ${pessoa[info]}
        `
    }
}

console.log(relatorio)