const cote = require('cote');

const requester = new cote.Requester({ name: 'user-service', key: 'usuario'});

module.exports = function(repository){
    const findAll = (req, res, next) => {
        const request = { type: 'findAll'};
        requester.send(request, (response) => {
            if(response.err) {
                next(response.err);
            } else {
                res.json(response.users);
            }
        });
        /*repository.findAll()
            .then(users => res.json(users))
            .catch(err => next(err));*/
    };

    const findById = (req, res, next) => {
        const oid = req.params.id;
        if(oid) {
            const request = { type: 'findById', data: {oid}};
            requester.send(request, (response) => {
                if(response.err) {
                    next(response.err);
                } else {
                    res.json(response.user);
                }
            });
        } else {
            res.status('412').json({message: "id não informado"})
        }
        
    }

    const insert = (req, res, next) => {
        const {email, nome, senha} = req.body;
        const request = { type: 'insert', data: {email, nome, senha}};
        requester.send(request, (response) => {
            if(response.err) {
                next(response.err);
            } else {
                res.status(201).json(response.user)
            }
        });
        /*
        repository.insert({email, nome, senha, status:'ativo'})
        .then((usuario) => {
            res.status(201).json(usuario)
        })
        .catch(err => next(err));
        */
    }

    const update = (req, res, next) => {
        const {email, nome, senha, status} = req.body;
        const oid = req.params.id;
        const request = { type: 'update', data: {email, nome, senha, status, oid}};
        requester.send(request, (response) => {
            if(response.err) {
                next(response.err);
            } else {
                res.status(201).json(response);
            }
        });
    }

    const remove = (req, res, next) => {
        const oid = req.params.id;
        const request = { type: 'remove', data: {oid}};
        requester.send(request, (response) => {
            if(response.err) {
                next(response.err);
            } else {
                res.status(204).json(response);
            }
        });
    }

    const authenticate = (req, res, next) => {
        const { email, senha } = req.body;
        const request = { type: 'autenticar', credentials: {email, senha}};
        requester.send(request, (response) => {
            if(response.token && response.usuario) {
                res.json(response);
            } else {
                res.status(406).json({message: 'Email ou senha inválidos'});
            }
        })
    }

    return {
        FIND_ALL: [findAll],
        FIND_BY_ID: [findById],
        INSERT: [insert],
        UPDATE: [update],
        REMOVE: [remove],
        AUTHENTICATE: [authenticate]
    }
}