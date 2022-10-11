import fetch from "node-fetch";

async function status(arrayLink){
    //promisse async await
    const arrayStatus = await Promise.all(arrayLink.map(async url => {
        const res = await fetch(url);
        return res.status;
    }))
    return arrayStatus;

}

function joinUrlArray(arrayLink){
    //join tira todos os arrays de dentro e coloca em um só.
    return arrayLink.map(objeto => (Object.values(objeto).join()));
}

async function verifyUrl(arrayLink){
    const links = joinUrlArray(arrayLink);
    const statusLinks = await status(links);
    return statusLinks;
}

export {verifyUrl}