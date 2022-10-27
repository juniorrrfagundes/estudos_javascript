const {edFolha, edGalho} = require('./lista');

function juntarLista(lista1, lista2) {
    let indiceLista1 = 0;
    let indiceLista2 = 0;
    let listaFinal = [];

    while (indiceLista1 < lista1.length && indiceLista2 < lista2.length) {
        if (lista1[indiceLista1].preco < lista2[indiceLista2].preco){
            listaFinal.push(lista1[indiceLista1])
            indiceLista1++;
        } else {
            listaFinal.push(lista2[indiceLista2])
            indiceLista2++;
        }
    }

    while (indiceLista1 < lista1.length){
        listaFinal.push(lista1[indiceLista1]);
        indiceLista1++;
    }

    while (indiceLista2 < lista2.length){
        listaFinal.push(lista2[indiceLista2]);
        indiceLista2++;
    }

    return listaFinal;
}

console.log(juntarLista(edFolha,edGalho));