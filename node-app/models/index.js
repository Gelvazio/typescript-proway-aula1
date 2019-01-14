'use_strict';

const Sequelize = require('sequelize');
const models = require('./models');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};
try {
    if(config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable], config);
    } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
} catch (e) {
    console.log(e);
}
models.forEach( model => {
    const current = model(sequelize, Sequelize);
    db[current.name] = current;
});

Object.keys(db).forEach(modelName => {
    if(db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
