const express =  require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();

const tokenService = require('./modules/usuario/token-service');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

nunjucks.configure('views', {
    autoescape: true,
    express: app
})
// registrar todas as rotas
/*
app.all('/api/v1/*', (req, res, next) => {
    let bearerHeader = req.headers["authorization"];
    const path = req.path.replace(/^\/api\/v1/, '');
    if (path === '/usuarios/autenticar' || path === 'usuarios/logout') {
        next();
    } else {
        const tokenInfo = tokenService.validarToken(bearerHeader);
        if(tokenInfo.status === 'expirado') {
            res.sendStatus(408);
        } else if (tokenInfo.status === 'valido') {
            req.usuario = tokenInfo.usuario;
            next();
        } else {
            res.status(406).json({message: 'Não autorizado'})
        }
    }
});
*/
const router = express.Router();
require('./routes')(router);

app.use('/api/v1', router);

const viewsRouter = express.Router();
viewsRouter.get('/', (req, res, next) => {
    const data = {
        titulo: 'Olá mundo'
    }
    res.render('index.html', data);
});
app.use('', viewsRouter);
module.exports = app;