import chalk from 'chalk';
import fs from 'fs';

function erro(er){
    throw new Error(chalk.red(er.code, 'Deu ruim'))
}
function printFile(file){
    console.log(chalk.blue(file))
}

// async/await
async function takeFile(filepath){
    const enconding = 'utf-8';
    try{
        const result = await fs.promises.readFile(filepath, enconding);
        // console.log(extractUrl(result));
        return extractUrl(result);
    } catch(er){
        erro(er);
    }
}

function extractUrl(string){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResult = [];
    let temp;
    while((temp = regex.exec(string)) !== null){
        arrayResult.push({ [temp[1]]: temp[2] })
    }
    return arrayResult;
}

// Function async
// function takeFile(filepath){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(filepath, encoding)
//     .then((file) => printFile(file))
//     .catch((er) => erro(er))
// }

// Function sync
// function takeFile(filepath){
//     const enconding = 'utf-8';
//     fs.readFile(filepath, enconding, (er, file) => {er ? erro(er) : printFile(file)})
// }

// takeFile('./files/texto1.md');

// Exportando para usar em cli.js
export {takeFile};