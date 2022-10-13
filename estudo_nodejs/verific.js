import fetch from "node-fetch";

function handle(erro){
    throw new Error(erro.message);
}

async function status(arrayLink){
    try{
        //promisse async await
        const arrayStatus = await Promise
            .all(arrayLink 
                .map(async url => {
                    const res = await fetch(url);
                    return res.status;
        }))
        return arrayStatus;
    } catch(erro){
        handle(erro);
    }


}

function joinUrlArray(arrayLink){
    //join tira todos os arrays de dentro e coloca em um só.
    return arrayLink
        .map(objeto => (Object
            .values(objeto).join()));
}

async function verifyUrl(arrayLink){
    const links = joinUrlArray(arrayLink);
    const statusLinks = await status(links);
    //spread operator
    const resultados = arrayLink
        .map((objeto, index) => ({
            ...objeto, 
            status:statusLinks[index]
        }))
    return resultados;
}

export {verifyUrl}