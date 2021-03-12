var fs = require('fs');
const list = require("./listAcademic.json");

list.Planilha1.forEach((item) => {
    const message = `-----------------  ${item.CELULAR}  ------------------\nOlá ${item.CANDIDATO}\nBoa Tarde, Tudo Bem?\nVocê foi aprovado(a) no Vestibular Online referente ao curso de ${item['CURSO DE OPÇÃO']} do UNITPAC\nEu sou o Gildeão do UNITPAC, estou aqui para lhe auxiliar no processo de matricula online, vamos prosseguir?😀\n\n-------------------------------------------\n\n`
    console.log(`ESCRITO:: ${item.CANDIDATO}`);
    console.log(`-------------------------------`);
    fs.appendFileSync('listFinish.txt', message)
});

