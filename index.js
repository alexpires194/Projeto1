import chalk from "chalk";
import fs from "fs";


function extraiLinks(texto){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  //const linkExtraidos = regex.exec(texto);
  const arrayResultados = [];

  let temp;
  while((temp = regex.exec(texto)) != null ){
      arrayResultados.push({[temp[1]] : [temp[2]]})
  }
  return(arrayResultados.length === 0 ? "Não ha links" : arrayResultados);
}


function trataErro (erro){
    throw new Error(chalk.red(erro.code, "Caminho Errado"));
}

async function pegarArquivo(caminhoDoarquivo){
    const encoding = "utf-8";
    try{
        const texto = await fs.promises.readFile(caminhoDoarquivo, encoding)
        return(extraiLinks(texto));
    }catch(erro){
        trataErro(erro);
    }

}

//pegarArquivo('./arquivos/texto.md');
export default pegarArquivo;