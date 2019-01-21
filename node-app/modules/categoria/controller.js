const cote = require('cote');

const requester = new cote.Requester({ name: 'categoria-service', key: 'categoria'});

module.exports = function(repository){
    const findAll = (req, res, next) => {
        const request = { type: 'findAll'};
        requester.send(request, (response) => {
            if(response.err) {
                next(response.err);
            } else {
                res.json(response.categorias);
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
                    res.json(response.categoria);
                }
            });
        } else {
            res.status('412').json({message: "id não informado"})
        }
        
    }

    const insert = (req, res, next) => {
        const {nome} = req.body;
        const request = { type: 'insert', data: {nome}};
        requester.send(request, (response) => {
            if(response.err) {
                next(response.err);
            } else {
                res.status(201).json(response.categoria)
            }
        });
    }

    const update = (req, res, next) => {
        const {nome} = req.body;
        const oid = req.params.id;
        const request = { type: 'update', data: {nome, oid}};
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

    return {
        FIND_ALL: [findAll],
        FIND_BY_ID: [findById],
        INSERT: [insert],
        UPDATE: [update],
        REMOVE: [remove]
    }
}