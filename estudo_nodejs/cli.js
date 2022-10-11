import { takeFile } from "./index.js";
import chalk from 'chalk';
import { verifyUrl } from "./verific.js";

const way = process.argv;

async function processText(way){
    const result = await takeFile(way[2]);
    if (way[3] === 'validar'){
        console.log(chalk.cyan('Links validados'), await verifyUrl(result));
    } else {
        console.log(chalk.yellow('Lista de links'), result);
    }
}

processText(way)