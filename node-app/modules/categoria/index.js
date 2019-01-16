const repository = require('./repository');
const controller = require('./controller')(repository);
const route = require('./route')(controller);


module.exports = {
    repository,
    controller,
    route
}