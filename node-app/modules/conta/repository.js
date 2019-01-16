const db = require('../../db');

const ENTITY_NAME = 'Conta';

const findAll = () => {
    return db[ENTITY_NAME].findAll({include: [
        {
            model: db['Usuario'],
            as: 'usuario',
            //attributes: ['nome'],
            //where: {oid: 1}
        },
        {
            model: db['Categoria'],
            as: 'categoria'
        }
    ]});
}
const findById = (oid) => {
    const where = {
        oid
    };
    // return db[ENTITY_NAME].findOne({where});
    return db[ENTITY_NAME].findAll({where})
     .then((data => data && data.length ? data[0]: null));
}

const insert = (conta) => {
    return db[ENTITY_NAME].create(conta)
     .then((conta => conta));
}

const update = (conta) => {
    const where = {
        where: {
            oid: conta.oid
        }
    };
    return db[ENTITY_NAME].update(conta, where)
     .then((conta => conta));
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