const cote = require('cote');

const requester = new cote.Requester({ name: 'conta-service', key: 'conta'});

module.exports = function(repository){
    const findAll = (req, res, next) => {
        const request = { type: 'findAll'};
        requester.send(request, (response) => {
            if(response.err) {
                next(response.err);
            } else {
                res.json(response.contas);
            }
        });
    };

    const findById = (req, res, next) => {
        const oid = req.params.id;
        if(oid) {
            const request = { type: 'findById', data: {oid}};
            requester.send(request, (response) => {
                if(response.err) {
                    next(response.err);
                } else {
                    res.json(response.conta);
                }
            });
        } else {
            res.status('412').json({message: "id não informado"})
        }
        
    }

    const insert = (req, res, next) => {
        const {descricao, valor, oidUsuario, oidCategoria } = req.body;
        const request = { type: 'insert', data: {descricao, valor, oidUsuario, oidCategoria}};
        requester.send(request, (response) => {
            if(response.err) {
                next(response.err);
            } else {
                res.status(201).json(response.conta)
            }
        });
    }

    const update = (req, res, next) => {
        const {descricao, valor} = req.body;
        const oid = req.params.id;
        const request = { type: 'update', data: {descricao, valor, oid}};
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
        repository.remove(oid)
        .then(() => {
            res.status(204).send()
        })
        .catch(err => next(err));
    }

    return {
        FIND_ALL: [findAll],
        FIND_BY_ID: [findById],
        INSERT: [insert],
        UPDATE: [update],
        REMOVE: [remove]
    }
}