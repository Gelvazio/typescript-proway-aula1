const db = require('../../db');

const ENTITY_NAME = 'Usuario';

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

const insert = (usuario) => {
    return db[ENTITY_NAME].create(usuario)
     .then((usuario => usuario));
}

const update = (usuario) => {
    const where = {
        where: {
            oid: usuario.oid
        }
    };
    return db[ENTITY_NAME].update(usuario, where)
     .then((usuario => usuario));
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