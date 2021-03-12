const opn = require("opn");
var fs = require('fs');

const stdin = process.openStdin();
const list = require("./listAcademic.json");

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding("utf8");

var interval = 5000;
var finish = [];

list.forEach((item, index) => {
    setTimeout(function () {
        opn(
            `https://wa.me/55${item.telefone}?text=Olá ${item.nome}, tudo bem? nós somos da UNITPAC, gostariamos de dizer que você passou para o curso de ${item.curso}`
        );
        console.log(`Open link from ${item.nome}`);
        finish.push({nome: item.nome, telefone: item.telefone, curso: item.curso})
        if(index+1 == list.length){
            var dictstring = JSON.stringify(finish);
            fs.writeFileSync('listFinish.json', dictstring)
        }
    }, index * interval);
});

