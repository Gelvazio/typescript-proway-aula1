const express =  require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// registrar todas as rotas
const router = express.Router();
require('./routes')(router);

app.use('/api/v1', router);

module.exports = app;