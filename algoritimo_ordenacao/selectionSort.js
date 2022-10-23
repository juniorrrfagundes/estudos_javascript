const livro = require('./listaLivros');
const menorValor = require('./menorValor');

// for (let atual = 0; atual < livro.length-1; atual++){
//     let menor = menorValor(livro, atual);

//     let livroAtual = livro[atual];
//     let livroMenorPreco = livro[menor];

//     livro[atual] = livroMenorPreco;
//     livro[menor] = livroAtual;
// }

// Utilizando for each
livro.forEach((_,indice) => {
    let menor = menorValor(livro, indice);
    
    let livroAtual = livro[indice];
    let livroMenorValor = livro[menor];

    livro[indice] = livroMenorValor;
    livro[menor] = livroAtual;
})

console.log(livro);