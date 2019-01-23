const cote = require('cote');
const repository = require('../modules/usuario/repository');
const tokenService = require('../modules/usuario/token-service');

const responder = new cote.Responder({
    name: 'user-service',
    key: 'usuario'
});

responder.on('findAll', (req, cb) => {
    repository.findAll()
    .then(users => cb({users}))
    .catch(err => cb({err}));
});

responder.on('findById', (req, cb) => {
    repository.findById(req.data.oid)
    .then(user => {
        if(!user) {
            cb({message: "Usuário não encontrado"});
        } else {
           cb({user});
        }
        
    })
    .catch(err => cb({err}))
});

responder.on('insert', (req, cb) => {
    const data = req.data;
    data.status = 'ativo';
    repository.insert(data)
        .then((user) => cb({user}))
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

responder.on('autenticar', (req, cb) => {
    const { credentials } = req;
    repository.findByEmail(credentials.email)
    .then((usuario) =>  {
        return new Promise((resolve, reject) => {
            if(usuario){
                if(usuario.senha == credentials.senha){
                    resolve(usuario);
                }
            } else {
              reject({message: "Usuário ou senha inválido"});
            } 
        });
    })
    .then(tokenService.gerarToken)
    .then(tokenInfo  => cb(tokenInfo))
    .catch(err => cb({err}));
});
