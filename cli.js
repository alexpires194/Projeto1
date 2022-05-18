import chalk from "chalk";

import pegarArquivo from "./index.js";

import validarURL from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoarquivo){
    const resultado = await pegarArquivo (caminhoDoarquivo[2]);
    
    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('Links Validados'), await validarURL(resultado));

    }else{
        console.log(chalk.yellow('Lista de Links'), resultado);
    }
    //console.log(chalk.yellow("Lista de Link"), resultado);
}
processaTexto(caminho);
//console.log(pegarArquivo(caminho[2]));