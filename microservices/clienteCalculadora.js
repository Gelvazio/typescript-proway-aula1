const cote = require('cote');

const request = { type: 'soma', values: [1,2,3,4,5] };

const requester = new cote.Requester({ name: 'calc' });

requester.send(request, (res) => {
    console.log(`Resultado da soma é ${res.result}`)
});