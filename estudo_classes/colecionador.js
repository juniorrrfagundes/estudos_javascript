const colecionador = {
    nome: 'Junior',
    idade: '15',
    tipocolecao: ['quadrinho'],
    contato: 'éisso',
    additem: function(campo, item){
        this[campo].push(item)
    }
}

for (i=0; i < 4; i++){
    colecionador.additem('tipocolecao', 'hq'+i);
}


console.log(colecionador)