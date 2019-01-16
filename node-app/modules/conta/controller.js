module.exports = function(repository){
    const findAll = (req, res, next) => {
        repository.findAll()
            .then(contas => res.json(contas))
            .catch(err => next(err));
    };

    const findById = (req, res, next) => {
        const oid = req.params.id;
        if(oid) {
            repository.findById(oid)
                .then(conta => {
                    if(!conta) {
                        res.status('412').json({message: "Conta não encontrada"});
                    } else {
                        res.json(conta);
                    }
                    
                })
                .catch(err => next(err))
        } else {
            res.status('412').json({message: "id não informado"})
        }
        
    }

    const insert = (req, res, next) => {
        const {descricao, valor, oidUsuario, oidCategoria } = req.body;
        repository.insert({descricao, valor, oidUsuario, oidCategoria})
        .then((conta) => {
            res.status(201).json(conta)
        })
        .catch(err => next(err));
    }

    const update = (req, res, next) => {
        const {descricao, valor} = req.body;
        const oid = req.params.id;
        repository.update({oid, descricao, valor })
        .then((conta) => {
            res.status(204).json(conta)
        })
        .catch(err => next(err));
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