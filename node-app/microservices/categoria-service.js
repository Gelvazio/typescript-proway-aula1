const cote = require('cote');
const repository = require('../modules/categoria/repository');
const responder = new cote.Responder({
    name: 'categoria-service',
    key: 'categoria'
});

responder.on('findAll', (req, cb) => {
    repository.findAll()
    .then(categorias => cb({categorias}))
    .catch(err => cb({err}));
});

responder.on('findById', (req, cb) => {
    repository.findById(req.data.oid)
    .then(categoria => {
        if(!categoria) {
            cb({message: "Categoria não encontrada"});
        } else {
           cb({categoria});
        }
        
    })
    .catch(err => cb({err}))
});

responder.on('insert', (req, cb) => {
    const data = req.data;
    repository.insert(data)
        .then((categoria) => cb({categoria}))
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