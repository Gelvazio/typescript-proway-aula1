module.exports = function(repository){
    const findAll = (req, res, next) => {
        repository.findAll()
            .then(users => res.json(users))
            .catch(err => next(err));
    };

    const findById = (req, res, next) => {
        const oid = req.params.id;
        if(oid) {
            repository.findById(oid)
                .then(user => {
                    if(!user) {
                        res.status('412').json({message: "Usuário não encontrado"});
                    } else {
                        res.json(user);
                    }
                    
                })
                .catch(err => next(err))
        } else {
            res.status('412').json({message: "id não informado"})
        }
        
    }

    const insert = (req, res, next) => {
        const {email, nome, senha} = req.body;
        repository.insert({email, nome, senha, status:'ativo'})
        .then((usuario) => {
            res.status(201).json(usuario)
        })
        .catch(err => next(err));
    }

    const update = (req, res, next) => {
        const {email, nome, senha, status} = req.body;
        const oid = req.params.id;
        repository.update({oid, email, nome, senha, status})
        .then((usuario) => {
            res.status(204).json(usuario)
        })
        .catch(err => next(err));
    }

    const remove = (req, res, next) => {
        const oid = req.params.id;
        repository.remove(oid)
        .then(() => {
            res.sendStatus(204)
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