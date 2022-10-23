const livro = require('./listaLivros');

function insertSort(livros){
    
    for (let atual = 0; atual < livros.length; atual++){

        let analise = atual;

        while (analise > 0 && livro[analise].valor < livro[analise-1].valor){
            let livroAtual = livro[analise];
            let livroAnterior = livro[analise-1];
            
            livro[analise] = livroAnterior;
            livro[analise-1] = livroAtual;
            analise--
        }
    }
    console.log(livro);
}

insertSort(livro);