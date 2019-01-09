const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'log.txt');
fs.readFile(fileName, (err, data)=> {
    if(err) {
        console.log('Não foi possível ler o log');
    } else {
        console.log(data.toString('utf-8'));
    }
})