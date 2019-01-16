module.exports = function(repository){
    const findAll = (req, res, next) => {
        repository.findAll()
            .then(categorias => res.json(categorias))
            .catch(err => next(err));
    };

    const findById = (req, res, next) => {
        const oid = req.params.id;
        if(oid) {
            repository.findById(oid)
                .then(categoria => {
                    if(!categoria) {
                        res.status('412').json({message: "Categoria não encontrada"});
                    } else {
                        res.json(categoria);
                    }
                    
                })
                .catch(err => next(err))
        } else {
            res.status('412').json({message: "id não informado"})
        }
        
    }

    const insert = (req, res, next) => {
        const {nome} = req.body;
        repository.insert({nome})
        .then((categoria) => {
            res.status(201).json(categoria)
        })
        .catch(err => next(err));
    }

    const update = (req, res, next) => {
        const {nome} = req.body;
        const oid = req.params.id;
        repository.update({oid, nome})
        .then((categoria) => {
            res.status(204).json(categoria)
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