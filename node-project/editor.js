const fs = require('fs');
const path = require('path');

const mensagem = `A data atual é ${new Date().toLocaleDateString()}`;
const fileName = path.join(__dirname, 'log.txt');
fs.writeFile(fileName, mensagem, (err) => {
    if(err) {
        console.log('Não foi possível gravar o log');
    } else {
        console.log('Log gravado com sucesso');
    }
});