const cote = require('cote');
const repository = require('../modules/conta/repository');
const responder = new cote.Responder({
    name: 'conta-service',
    key: 'conta'
});

responder.on('findAll', (req, cb) => {
    repository.findAll()
    .then(contas => cb({contas}))
    .catch(err => cb({err}));
});

responder.on('findById', (req, cb) => {
    repository.findById(req.data.oid)
    .then(conta => {
        if(!conta) {
            cb({message: "Conta não encontrada"});
        } else {
           cb({conta});
        }
        
    })
    .catch(err => cb({err}))
});

responder.on('insert', (req, cb) => {
    const data = req.data;
    repository.insert(data)
        .then((conta) => cb({conta}))
        .catch(err => cb({err}));
});

responder.on('update', (req, cb) => {
    const data = req.data;
    repository.update(data)
    .then(() => {
        cb(true);
    })
    .catch(err => cb({err}));
});

responder.on('remove', (req, cb) => {
    const data = req.data;
    repository.remove(data.oid)
    .then(() => {
        cb(true);
    })
    .catch(err => cb({err}));
});