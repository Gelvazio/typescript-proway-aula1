const db = require('../../db');

const ENTITY_NAME = 'Categoria';

const findAll = () => {
    return db[ENTITY_NAME].findAll();
}
const findById = (oid) => {
    const where = {
        oid
    };
    // return db[ENTITY_NAME].findOne({where});
    return db[ENTITY_NAME].findAll({where})
     .then((data => data && data.length ? data[0]: null));
}

const insert = (categoria) => {
    return db[ENTITY_NAME].create(categoria)
     .then((categoria => categoria));
}

const update = (categoria) => {
    const where = {
        where: {
            oid: categoria.oid
        }
    };
    return db[ENTITY_NAME].update(categoria, where)
     .then((categoria => categoria));
}

const remove = (oid) => {
    const where = {
        where: {
            oid
        }
    };
    return db[ENTITY_NAME].destroy(where);
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove
}